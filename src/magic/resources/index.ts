import { Directive, DirectiveType, Tag, NAME, DirectiveTypeDefinition, DirectiveProperty, InputAttrType } from '../interfaces';
import { i18n } from './local';
import zh_CN from './zh-CN.json';
import en_US from './en-US.json';
import { workspace, MarkdownString } from 'vscode';
import { Notifier } from '../notifier';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export const CONFIG = {
  language: 'zh-CN',
  hover: true,
  isAntd: true,
  isAlain: true,
};

export const RESOURCES: Directive[] = [];

export const DIRECTIVE_NAMES = [];

function notNull(value: any, defaultValue: any = '') {
  if (value == null) return defaultValue;

  return value;
}

function getPure(value: string): string {
  return value.replace(/nz([A-Z])/g, (_raw: string, val: string) => val.toLowerCase());
}

function getFullDoc(item: Directive): string {
  if (item.doc.startsWith('http')) return item.doc;
  if (item.lib === 'ng-zorro-antd') {
    // TODO: Muse be release version
    // return (CONFIG.language === 'zh-CN' ? 'https://ng-zorro.gitee.io' : 'https://ng.ant.design') + item.doc;
    return `https://ng-zorro-master.netlify.com` + item.doc;
  }
  return (CONFIG.language === 'zh-CN' ? 'https://ng-alain.com' : 'https://netlify.ng-alain.com') + item.doc;
}

function genComponentMarkdown(item: Directive): string {
  if (item == null) return '';

  const rows: string[] = [CONFIG.isAlain ? `**${i18n('library')}** ${item.lib}` : null, `**${item.title}**`, item.description];

  if (item.whenToUse) {
    rows.push(`**${i18n('whenToUse')}**`);
    rows.push(item.whenToUse);
  }

  if (item.doc) {
    rows.push(`[${i18n('document')}](${getFullDoc(item)})${item.github ? ` － [${i18n('github')}](${item.github})` : ''}`);
  }

  return rows.filter(w => !!w).join('\n\n');
}

function genPropertyMarkdown(property: DirectiveProperty): string {
  if (property == null) return '';

  const rows: string[] = [];

  if (property.typeDefinition && Array.isArray(property.typeDefinition) && property.typeDefinition.length > 0) {
    rows.push(
      `**${i18n('optionalValue')}** ${property.typeDefinition.map((i: DirectiveTypeDefinition) => '`' + i.label + '`').join(', ')}`,
    );
  } else if (property.typeRaw.length > 0) {
    rows.push(`**${i18n('type')}** ${property.typeRaw}`);
  }

  if (property.default.length > 0) {
    rows.push(`**${i18n('defaultValue')}** ${property.default}`);
  }

  rows.push(property.description);

  return rows.join('\n\n');
}

function fixProperty(p: DirectiveProperty) {
  p.pureName = getPure(p.name);

  p.default = notNull(p.default, '-');
  if (p.default === '-') p.default = '';

  p.description = notNull(p.description);
  p.isInputBoolean = notNull(p.isInputBoolean, true);
  p.type = notNull(p.type, 'string');
  p.typeRaw = notNull(p.typeRaw, '').replace(/｜/g, '|');
  p.typeDefinition = notNull(p.typeDefinition, []);
  if (Array.isArray(p.typeDefinition)) {
    p.typeDefinition = p.typeDefinition.map((item: any) => (typeof item === 'string' ? { value: item, label: item } : item));
    p.typeDefinitionSnippetStr = p.typeDefinition.map((i: DirectiveTypeDefinition) => i.value).join(',');
  } else {
    if (typeof p.typeDefinition === 'object') {
      p.inputType = InputAttrType.Complex;
    }
    p.typeDefinitionSnippetStr = '';
  }
  p._doc = new MarkdownString(genPropertyMarkdown(p));
}

export async function INIT(notifier: Notifier) {
  const cog = workspace.getConfiguration(NAME);
  CONFIG.language = cog.language;
  CONFIG.hover = cog.hover;
  if (workspace.workspaceFolders != null && workspace.workspaceFolders.length > 0) {
    CONFIG.isAntd = false;
    CONFIG.isAlain = false;
    const packageJsonPath = join(workspace.workspaceFolders[0].uri.fsPath, 'package.json');
    if (!existsSync(packageJsonPath)) {
      notifier.notify(`Not found package.json`);
      return null;
    }
    const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
    const VERSIONS = [...Object.keys(packageJson.dependencies), ...Object.keys(packageJson.devDependencies)];
    if (~VERSIONS.indexOf(`ng-zorro-antd`)) {
      CONFIG.isAntd = true;
    }
    if (~VERSIONS.indexOf(`@delon/theme`)) {
      CONFIG.isAntd = true;
      CONFIG.isAlain = true;
    }
  }

  const data = (CONFIG.language === 'en-US' ? en_US : zh_CN) as Directive[];
  if (CONFIG.isAntd) {
    RESOURCES.push(...data.filter(i => i.lib === 'ng-zorro-antd'));
  }

  if (CONFIG.isAlain) {
    RESOURCES.push(...data.filter(i => i.lib !== 'ng-zorro-antd'));
  }

  RESOURCES.forEach(i => {
    i.description = notNull(i.description);
    i.whenToUse = notNull(i.whenToUse);
    i.doc = notNull(i.doc);
    i.title = notNull(i.title);
    i.type = notNull(i.type, 'component');
    i.snippet = notNull(i.snippet, '');
    if (i.snippet.length === 0) {
      i.snippet = i.type === 'component' ? `<__$1>$0</__>` : `<div __$1>$0</div>`;
    }
    i.snippet = i.snippet.replace(/__/g, i.selector);

    i.properties = notNull(i.properties, []);
    i.properties.forEach(p => fixProperty(p));
    if (i.types) {
      Object.keys(i.types).forEach(key => {
        i.types[key].forEach(p => fixProperty(p));
      });
    }
    if (~i.properties.findIndex(w => w.name === i.selector)) {
      i.directiveNameIsOutput = true;
    }

    i._doc = new MarkdownString(genComponentMarkdown(i));

    DIRECTIVE_NAMES.push(i.selector);
  });
}

export function isComponent(text: string): boolean {
  return text.startsWith('nz-') || DIRECTIVE_NAMES.indexOf(text) !== -1;
}

export function getDirective(tag: Tag): Directive[] {
  const list: Directive[] = [];
  if (isComponent(tag.name)) {
    list.push(first(tag.name));
  }

  Object.keys(tag.attributes)
    .filter(key => DIRECTIVE_NAMES.indexOf(tag.attributes[key].name) !== -1)
    .forEach(key => {
      list.push(first(tag.attributes[key].name));
    });

  return list;
}

export function query(type: DirectiveType) {
  return [...RESOURCES].filter(i => i.type === type);
}

export function first(selector: string) {
  return RESOURCES.find(w => w.selector === selector);
}
