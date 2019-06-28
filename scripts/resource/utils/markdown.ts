import * as path from 'path';
import * as fs from 'fs';
import * as MarkdownIt from 'markdown-it';
const yamlFront = require('yaml-front-matter');

import { Directive, DirectiveProperty, InputAttrType } from '../../../src/magic/interfaces';
import { FIX } from '../_fix';
import { COG } from '../config';
import { AST, AST_KEYS } from './ast';

const md = new MarkdownIt();
let processRes: Directive[] = [];
let ast: AST;
let Lang: string;

export function makeObject(lang: string, filePaths: string[]): Directive[] {
  processRes.length = 0;
  Lang = lang;
  const zone = lang.split('-').shift();
  filePaths
    // 优先处理包含公共属性的组件文件
    .map(p => ({ p, s: COG.COMMON_PROPERTIE_PATH_PART.find(k => p.includes(k)) ? 9999 : 10 }))
    .sort((a, b) => b.s - a.s)
    .map(i => i.p)
    .forEach(p => {
      const content = fs.readFileSync(p).toString();
      const meta = yamlFront.loadFront(content);
      meta.md = md.parse(meta.__content, {});
      delete meta.__content;
      processRes.push(...metaToItem(zone, p, meta));
    });

  // Merge extra comoponents
  const extraComponents = FIX.extraComponents.map(ei => {
    const orgComponent = processRes.find(w => w.selector === ei.from);
    return { ...orgComponent, type: 'component', selector: ei.to, types: {}, properties: [], ...ei.data } as any;
  });

  processRes = processRes.concat(...extraComponents);

  verify(filePaths);

  return processRes;
}

function verify(filePaths: string[]) {
  // 获取所有组件KEY，以目录名为准，非完整组件名，但可以区分
  const notExistsList = filePaths
    .map(p => {
      if (~p.indexOf('ng-zorro-antd')) {
        const key = p
          .split('ng-zorro-antd')[1]
          .split(path.sep)
          .filter(w => !!w)[1];
        if (processRes.some(w => w.selector.indexOf(key) !== -1)) {
          return null;
        }
        return key;
      } else {
      }
      return null;
    })
    .filter(w => w != null)
    .join(',');
  console.error(`${Lang}-不存在以下组件：`, notExistsList);
}

function getLibary(filePath: string) {
  const parts = path.dirname(filePath).split(path.sep);
  if (parts.includes('ng-zorro-antd')) {
    return 'ng-zorro-antd';
  } else if (parts.includes('abc')) {
    return '@delon/abc';
  } else if (parts.includes('chart')) {
    return '@delon/chart';
  } else if (parts.includes('form')) {
    return '@delon/form';
  }
  return '';
}

function getDocUrl(zone: string, filePath: string) {
  const parts = path.dirname(filePath).split(path.sep);
  let last = parts.pop();
  if (last === 'doc') last = parts.pop();
  if (parts.includes('ng-zorro-antd')) {
    return `/components/${last}/${zone}`;
  } else if (parts.includes('abc')) {
    return `/components/${last}/${zone}`;
  } else if (parts.includes('chart')) {
    return `/chart/${last}/${zone}`;
  } else if (parts.includes('form')) {
    return `/form/getting-started/${zone}`;
  }
  return '';
}

function getGithubUrl(zone: string, filePath: string) {
  const parts = path.dirname(filePath).split(path.sep);
  let last = parts.pop();
  if (last === 'doc') last = parts.pop();
  if (parts.includes('ng-zorro-antd')) {
    return `https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/${last}`;
  } else if (parts.includes('abc')) {
    return `https://github.com/ng-alain/delon/tree/master/packages/abc/${last}`;
  } else if (parts.includes('chart')) {
    return `https://github.com/ng-alain/delon/tree/master/packages/chart/${last}`;
  } else if (parts.includes('form')) {
    return `https://github.com/ng-alain/delon/tree/master/packages/form/src`;
  }
  return '';
}

function getTitle(meta: any): string {
  const title = meta.subtitle || meta.title;
  if (typeof title === 'object') {
    return title[Object.keys(title)[0]];
  }
  return title || '';
}

function getDirective(): Directive[] {
  const start = ast.offsetAt('API');
  if (start === -1) return [];
  const end = ast.offsetTagAndTypeAt(AST_KEYS.HeadingClose, 'h2', start + 3);

  const list: Directive[] = ast
    .findTags('h3', start + 1, end)
    .map(idx => {
      const selectorList = (ast.getText(idx) || '').split('|').map(s => s.trim());
      let selector = selectorList[0];
      if (selectorList.length === 1 && !/^\[?[a-z][-a-zA-Z0-9]+\]?$/g.test(selector) && !COG.VALID_COMPONENT_NAMES.includes(selector)) {
        return null;
      }

      const item: Directive = {
        _idx: idx,
        type: 'component',
        selector,
        types: {},
      };
      item.properties = getProperties(item, ast.getTable(idx, COG.SPLIT_PROPERTIES.includes(selector)));
      const checkType = (i: Directive) => {
        if (i.selector.startsWith('[')) {
          i.type = 'directive';
          i.selector = trimTag(i.selector, '[');
        }
      };
      // fix muliter selector
      if (selectorList.length > 1) {
        const directives: Directive[] = [];
        selectorList.forEach(sel => {
          const copyItem = copy(item) as Directive;
          copyItem.selector = sel;
          checkType(copyItem);
          directives.push(copyItem);
        });
        return directives;
      } else {
        checkType(item);
      }
      // merge properties
      const mergeCog = COG.COMMON_PROPERTIES[item.selector];
      if (mergeCog) {
        let commonProperties: DirectiveProperty[];
        // component
        if (mergeCog.component) {
          commonProperties = processRes.find(w => w.selector === mergeCog.component).properties;
        } else {
          const commonHeading = mergeCog[ast.zone];
          const commonIdx = ast.offsetAt(commonHeading);
          commonProperties = getProperties(item, ast.getTable(commonIdx, false)).map(i => {
            i._common = true;
            return i;
          });
        }
        item.properties = commonProperties.concat(...item.properties);
      }
      // fix description
      const descriptionStart = ast.offsetTagAndTypeAt(AST_KEYS.ParagraphOpen, 'p', idx + 1);
      // 若未找到 table，则尝试获取第一个段落
      if (descriptionStart !== -1 && descriptionStart < ast.offsetTagAt('table', idx + 1)) {
        item.description = ast.getText(descriptionStart);
      } else if (ast.length > idx + 3 && ast.isParagraph(idx + 3)) {
        item.description = ast.getText(idx + 3);
      }
      return item;
    })
    .reduce((p: any, c: any) => (p = p.concat(...(Array.isArray(c) ? c : [c]))), []);

  return list.filter(i => !!i && !COG.INGORE_COMPONENTS.includes(i.selector));
}

function getProperties(directive: Directive, data: string[][]): DirectiveProperty[] {
  return data
    .filter(tds => tds.length === 4)
    .map(tds => genPropertyItem(directive, tds.map(v => v || '')))
    .filter(w => !!w);
}

function genPropertyItem(directive: Directive, data: string[]): DirectiveProperty {
  if (COG.INGORE_PROPERTIES.includes(data[0])) return null;
  const nameMatch = data[0].trim().match(/((?:\[|\(|\[\()[\-a-zA-Z]+(?:\)\]|\]|\)))/g);
  if (nameMatch == null || nameMatch.length === 0) return null;
  // ingore includes `Deprecated` in description
  if (data[1].trim().includes('Deprecated')) return null;

  const item: DirectiveProperty = {
    name: nameMatch[0],
    inputType: InputAttrType.Input,
    description: data[1].trim(),
    type: 'string',
    typeRaw: data[2].trim(),
    default: data[3].trim(),
  };

  // name
  if (item.name.startsWith('[(')) {
    item.name = trimTag(item.name, '[(');
    item.inputType = InputAttrType.InputOutput;
  } else if (item.name.startsWith('[')) {
    item.name = trimTag(item.name, '[');
  } else if (item.name.startsWith('(')) {
    item.name = trimTag(item.name, '(');
    item.inputType = InputAttrType.Output;
  } else if (item.name.startsWith('#')) {
    item.name = item.name.substr(1);
    item.inputType = InputAttrType.Template;
  }

  // type
  parseType(directive, item);

  // default
  if (['`-`', '-', '`无`', '无'].includes(item.default)) {
    item.default = '';
  }
  if (item.default) {
    item.pureDefault = trimSemicolon(trimTag(item.default));
  }

  // ngModel
  if (
    item.name === 'ngModel' ||
    item.description.includes('双向绑定') ||
    item.description.includes('double binding') ||
    item.description.includes('Two-way')
  ) {
    item.inputType = InputAttrType.InputOutput;
  }

  if (!/^[-a-zA-Z0-9]+$/.test(item.name)) return null;

  return item;
}

function getValidSeparator(text: string): string {
  return ['\\|', '｜', '丨', '|'].find(s => text.indexOf(s) !== -1) || ',';
}

function parseType(directive: Directive, item: DirectiveProperty) {
  let typeRaw: string = item.typeRaw.replace(/`/g, '');
  // if (typeRaw.indexOf('HTMLElement') !== -1) {
  //   console.log(typeRaw, typeRaw.split(getValidSeparator(typeRaw)));
  //   debugger;
  // }
  // split mulit type
  const types = typeRaw
    .split(getValidSeparator(typeRaw))
    .filter(v => !!v)
    .map(v => v.trim())
    .map(v => trimSemicolon(v));

  // get first type
  const firstType = types.length > 0 ? types[0].split(' ').shift() : '';

  if (firstType.startsWith('TemplateRef')) {
    item.type = 'TemplateRef';
  } else if (firstType.startsWith('(') || firstType.startsWith('function')) {
    item.type = 'function';
  } else if (firstType.startsWith('{') || firstType.startsWith('any') || firstType.startsWith('object')) {
    item.type = 'object';
  } else if (firstType.startsWith('EventEmitter')) {
    item.type = 'EventEmitter';
  } else if (firstType.startsWith('Array') || firstType.endsWith('[]')) {
    item.type = 'Array';
  } else if (/^[A-Z]+/.test(firstType)) {
    item.type = 'object';
  } else {
    switch (firstType) {
      case 'string':
      case 'String':
        item.type = 'string';
        break;
      case 'boolean':
      case 'Boolean':
        item.type = 'boolean';
        break;
      case 'number':
      case 'number[]':
      case 'Number':
        item.type = 'number';
        break;
      case 'date':
      case 'Date':
        item.type = 'Date';
        break;
      case 'any':
      case 'object':
        item.type = 'object';
        break;
      case 'HTMLElement':
        item.type = 'HTMLElement';
        break;
    }
  }

  // type definition
  if (
    item.type === 'Enum' ||
    (item.type === 'string' && typeRaw.includes(`'`)) ||
    (item.type === 'string' && typeRaw.includes(`"`))
    // (
    //   item.type === 'string' && typeRaw.includes(`'`)
    //   && types.length > 0
    //   && !types.includes('any')
    //   && !types.includes('string')
    //   && !types.includes('Object')
    //   && !types.includes('EventEmitter')
    //   && !types.includes('Element')
    //   && !types.includes('HTMLInputElement')
    //   && !typeRaw.includes('=>')
    // )
  ) {
    item.type = 'Enum';
    item.typeDefinition = types.filter(value => !!value);
    // .filter(value => value !== 'null')
  }

  // 默认复杂类型，从类型列表中查看到第一个带有定义的复杂类型
  for (let t of types) {
    if (!/^[A-Z][a-zA-Z]+$/g.test(t)) continue;
    if (directive.types[t]) {
      item.complexType = t;
      break;
    }
    const complexTypeProperties = getComplexTypeProperties(directive, t);
    if (!complexTypeProperties || complexTypeProperties.length === 0) continue;
    directive.types[t] = complexTypeProperties;
    item.complexType = t;
    break;
  }
}

function getComplexTypeProperties(directive: Directive, text: string): DirectiveProperty[] {
  const idx = ast.offsetAt(text);
  const nextIdx = idx + 3;
  if (idx === -1 || nextIdx > ast.length || !ast.isType('table_open', nextIdx)) return null;
  return getProperties(directive, ast.getTable(nextIdx, false));
}

/**
 * 清除标签，默认：'`'
 */
function trimTag(text: string, tag = '`'): string {
  if (text.startsWith(tag)) {
    text = text.substr(tag.length, text.length - tag.length * 2);
  }
  return text.trim();
}

/**
 * 清除单或双引号
 */
function trimSemicolon(text: string): string {
  if (text.startsWith(`'`) || text.startsWith(`"`)) {
    text = text.substr(1);
  }
  if (text.endsWith(`'`) || text.endsWith(`"`)) {
    text = text.substr(0, text.length - 1);
  }
  return text.trim();
}

function copy(obj: any): any {
  return JSON.parse(JSON.stringify(obj));
}

function metaToItem(zone: string, filePath: string, meta: any): Directive[] {
  ast = new AST(meta.md, filePath, zone);
  const docUrl = getDocUrl(zone, filePath);
  const githubUrl = getGithubUrl(zone, filePath);
  const lib = getLibary(filePath);
  const title = getTitle(meta);
  const description = ast.getText(0);
  const whenToUse = ast.getParagraph(zone === 'en' ? 'When To Use' : '何时使用');
  let list: Directive[] = [];
  getDirective()
    .filter(w => !!w)
    .forEach(i => {
      list.push(copy(i));
      if (i.type === 'component' && COG.COMPONET_AND_DIRECTIVE.includes(i.selector)) {
        const directive = copy(i) as Directive;
        directive.type = 'directive';
        list.push(directive);
      }
    });
  return list.map(i => {
    i.lib = lib;
    i.title = title;
    if (typeof i.description === 'undefined') {
      i.description = description;
    }
    i.whenToUse = whenToUse;
    i.doc = docUrl;
    i.github = githubUrl;
    // override snippet
    const snippet = FIX.snippet[i.selector];
    if (snippet) {
      if (typeof snippet === 'object') {
        i.snippet = snippet[zone];
      } else {
        i.snippet = snippet;
      }
    }
    // add extra properties
    if (FIX.extraProperty[i.selector]) {
      i.properties.push(...FIX.extraProperty[i.selector]);
    }
    i.properties.forEach(p => {
      // override type definition
      if (FIX.typeDefinition[i.selector]) {
        p.typeDefinition = FIX.typeDefinition[i.selector][p.name] || p.typeDefinition;
      }
      if (p.typeDefinition && p.typeDefinition.length > 0) {
        p.type = 'Enum';
      }
      // override force input type
      if (FIX.forceInputType.twoBinding.includes(p.name)) {
        p.forceInputType = InputAttrType.InputOutput;
      }
      if (FIX.forceInputType.input.includes(p.name)) {
        p.forceInputType = InputAttrType.Input;
      }
      if (FIX.forceInputType.output.includes(p.name)) {
        p.forceInputType = InputAttrType.Output;
      }
    });

    return i;
  });
}
