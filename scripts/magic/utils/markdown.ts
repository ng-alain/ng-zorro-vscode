import * as path from 'path';
import * as fs from 'fs';
import * as MarkdownIt from 'markdown-it';
const yamlFront = require('yaml-front-matter');

import { Directive, DirectiveProperty, InputAttrType } from '../../../src/magic/interfaces';
import { AST } from './ast';

const md = new MarkdownIt();
let ast: AST;

export function makeObject(lang: string, filePaths: string[]): Directive[] {
  const zone = lang.split('-').shift();
  const res = [];
  filePaths.forEach(p => {
    const content = fs.readFileSync(p).toString();
    const meta = yamlFront.loadFront(content);
    meta.md = md.parse(meta.__content, {});
    delete meta.__content;
    res.push(...metaToItem(zone, p, meta));
  });
  return res;
}

function getUrl(zone: string, filePath: string) {
  const parts = path.dirname(filePath).split(path.sep);
  let last = parts.pop();
  if (last === 'doc') last = parts.pop();
  if (parts.includes('ng-zorro-antd')) {
    return `https://ng.ant.design/components/${last}/${zone}`;
  } else if (parts.includes('abc')) {
    return `https://ng-alain.com/components/${last}/${zone}`;
  } else if (parts.includes('chart')) {
    return `https://ng-alain.com/chart/${last}/${zone}`;
  } else if (parts.includes('form')) {
    return `https://ng-alain.com/form/getting-started/${zone}`;
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
  return ast
    .findTags('h3', start + 1)
    .map(idx => {
      const item: Directive = {
        type: 'component',
        selector: ast.getText(idx) || '',
        properties: getProperties(ast.getTable(idx)),
      };
      if (item.selector.startsWith('[')) {
        item.type = 'directive';
        item.selector = cleanTag(item.selector, '[');
      }
      return item;
    });
}

function getProperties(data: string[][]): DirectiveProperty[] {
  return data
    .filter(tds => tds.length === 4)
    .map(tds => genPropertyItem(tds.map(v => cleanTag(v || ''))));
}

function genPropertyItem(data: string[]): DirectiveProperty {
  const item: DirectiveProperty = {
    name: data[0],
    inputType: InputAttrType.Input,
    description: data[1],
    type: 'string',
    typeRaw: data[2],
    default: cleanSemicolon(data[3].split('`').shift()),
  };
  // name
  if (item.name.startsWith('[')) {
    item.name = cleanTag(item.name, '[');
  } else if (item.name.startsWith('(')) {
    item.name = cleanTag(item.name, '(');
    item.inputType = InputAttrType.Output;
  } else if (item.name.startsWith('[(')) {
    item.name = cleanTag(item.name, '[(');
    item.inputType = InputAttrType.InputOutput;
  } else if (item.name.startsWith('#')) {
    item.name = item.name.substr(1);
    item.inputType = InputAttrType.Template;
  }
  // type
  const types = item.typeRaw.trim()
    .split(~item.typeRaw.indexOf(',') ? ',' : '丨')
    .map(v => cleanTag(v))
    .map(v => cleanSemicolon(v));
  const firstType = types.length > 0 ? types[0] : '';

  if (firstType.startsWith('TemplateRef')) {
    item.type = 'TemplateRef';
  } else if (firstType.startsWith('(')) {
    item.type = 'function';
  } else if (firstType.startsWith('{')) {
    item.type = 'object';
  } else if (firstType.startsWith('EventEmitter')) {
    item.type = 'EventEmitter';
  } else {
    switch (firstType) {
      case 'boolean':
        item.type = 'boolean';
        break;
      case 'number':
        item.type = 'number';
        break;
      case 'Date':
        item.type = 'Date';
        break;
      case 'HTMLElement':
        item.type = 'HTMLElement';
        break;
    }
  }

  // type definition
  if (item.type === 'string'
    && types.length > 1
    && !types.includes('any')
    && !types.includes('string')
    && !types.includes('EventEmitter')
    && !types.includes('HTMLElement')
  ) {
    item.typeDefinition = types
      .filter(value => !!value)
      .map(value => ({ value, label: value }));
  }

  // default
  if (item.default === '-' || item.default === '无') {
    item.default = '';
  } else {
    item.default = item.default.split(~item.default.indexOf(',') ? ',' : '，').shift();
  }

  return item;
}

function cleanTag(text: string, tag = '`'): string {
  if (text.startsWith(tag)) {
    text = text.substr(tag.length, text.length - (tag.length * 2));
  }
  return text.trim();
}

function cleanSemicolon(text: string): string {
  if (text.startsWith(`'`) || text.startsWith(`"`)) {
    text = text.substr(1);
  }
  if (text.endsWith(`'`) || text.endsWith(`"`)) {
    text = text.substr(0, text.length - 1);
  }
  return text.trim();
}

function metaToItem(zone: string, filePath: string, meta: any): Directive[] {
  ast = new AST(meta.md);
  const url = getUrl(zone, filePath);
  const title = getTitle(meta);
  const description = ast.getText(0);
  const whenToUse = ast.getParagraph(zone === 'en' ? 'When To Use' : '何时使用');

  return getDirective().map((i) => {
    i.title = title;
    i.description = description;
    i.whenToUse = whenToUse;
    i.doc = url;
    return i;
  });
}
