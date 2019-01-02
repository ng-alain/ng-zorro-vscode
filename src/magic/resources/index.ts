import { Directive, DirectiveType, Tag, NAME, TRIGGER_DIRECTIVE_WORD } from '../interfaces';
import { i18n } from './local';
import zh_CN from './zh-CN.json';
import en_US from './en-US.json';
import { workspace } from 'vscode';
import Notifier from '../notifier';
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
  return value.replace(/nz([A-Z])/g, (raw: string, val: string) => {
    return val.toLowerCase();
  });
}

export async function INIT(notifier: Notifier) {
  const cog = workspace.getConfiguration(NAME);
  CONFIG.language = cog.language;
  CONFIG.hover = cog.hover;
  if (workspace.workspaceFolders != null && workspace.workspaceFolders.length > 0) {
    const packageJsonPath = join(workspace.workspaceFolders[0].uri.fsPath, 'package.json');
    if (!existsSync(packageJsonPath)) {
      notifier.notify('alert', `${NAME}: 未找到 package.json 文件`);
      return null;
    }
    const packageJson = JSON.parse(readFileSync(packageJsonPath).toString());
    const VERSIONS = [
      ...Object.keys(packageJson.dependencies),
      ...Object.keys(packageJson.devDependencies),
    ];
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
    // 移除触发词
    if (i.snippet.startsWith(TRIGGER_DIRECTIVE_WORD)) {
      i.snippet = i.snippet.substr(1);
    }
    i.properties = notNull(i.properties, []);
    i.properties.forEach(p => {
      p.pureName = getPure(p.name);

      p.default = notNull(p.default, '-');
      if (p.default === '-') p.default = '';

      p.description = notNull(p.description);
      p.isInputBoolean = notNull(p.isInputBoolean, true);
      p.type = notNull(p.type, 'string');
      p.typeRaw = notNull(p.typeRaw);
      p.typeDefinition = notNull(p.typeDefinition, []).map((item: any) => typeof item === 'string' ? { value: item } : item);
      p.typeDefinitionSnippetStr = p.typeDefinition.map(i => i.value).join(',');
    });

    DIRECTIVE_NAMES.push(i.selector);
  });
}

export function isComponent(text: string): boolean {
  return text.startsWith('nz-') || DIRECTIVE_NAMES.indexOf(text) !== -1;
}

export function getDirective(tag: Tag): Directive {
  if (isComponent(tag.name)) {
    return first(tag.name);
  }
  const key = Object.keys(tag.attributes).find(key => DIRECTIVE_NAMES.indexOf(tag.attributes[key].name) !== -1);
  if (key) {
    return first(tag.attributes[key].name);
  }
  return null;
}

export function query(type: DirectiveType) {
  return [...RESOURCES].filter(i => i.type === type);
}

export function first(selector: string) {
  return RESOURCES.find(w => w.selector === selector);
}

export function genComponentMarkdown(item: Directive): string;
export function genComponentMarkdown(item: string): string;
export function genComponentMarkdown(item: Directive | string): string {
  item = typeof item === 'string' ? first(item) : item;
  if (item == null) return '';

  const rows: string[] = [
    `**${i18n('library')}** ${item.lib}`,
    `**${item.title}**`,
    item.description
  ];

  if (item.whenToUse) {
    rows.push(`**${i18n('whenToUse')}**`);
    rows.push(item.whenToUse);
  }

  if (item.doc) {
    rows.push(`[${i18n('document')}](${item.doc})`);
  }

  return rows.join('\n\n');
}

export function genPropertyMarkdown(item: Directive, name: string): string;
export function genPropertyMarkdown(item: string, name: string): string;
export function genPropertyMarkdown(item: Directive | string, name: string): string {
  item = typeof item === 'string' ? first(item) : item;
  if (item == null) return '';
  const property = item.properties.find(w => w.name === name);
  if (property == null) return '';

  const rows: string[] = [];

  if (property.typeRaw.length > 0) {
    rows.push(`**${i18n('type')}** ${property.typeRaw}`);
  }

  rows.push(`**${i18n('defaultValue')}** ${property.default}`);

  rows.push(property.description);

  return rows.join('\n\n');
}
