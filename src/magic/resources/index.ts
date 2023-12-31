import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { env, MarkdownString, workspace } from 'vscode';
import * as nls from 'vscode-nls';
import { Directive, DirectiveProperty, DirectiveType, DirectiveTypeDefinition, InputAttrType, NAME, Tag } from '../interfaces';
import { Notifier } from '../notifier';
import { DATA, LANG } from './default';
const localize = nls.config({ messageFormat: nls.MessageFormat.both })();
const I18N = {
  document: localize('document', 'OnLine Document'),
  github: localize('github', 'Source'),
  whenToUse: localize('whenToUse', 'When To Use:'),
  type: localize('type', 'Type:'),
  optionalValue: localize('optionalValue', 'Optional Value:'),
  defaultValue: localize('defaultValue', 'Default Value:'),
  library: localize('library', 'Library:'),
  standalone: localize('standalone', '(Standalone)'),
};

export const CONFIG = {
  language: 'en',
  hover: true,
  inlineTemplate: true,
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
  const isEn = CONFIG.language === 'en';
  const doc = isEn ? item.doc : item.doc.replace('/en', '/zh');
  if (item.lib === 'ng-zorro-antd') {
    // TODO: Muse be release version
    return (isEn ? 'https://ng.ant.design' : 'https://ng-zorro.gitee.io') + doc;
    // return `https://ng-zorro-master.netlify.com` + item.doc;
  }
  return (isEn ? 'https://ng-alain-doc.surge.sh' : 'https://ng-alain.com') + doc;
}

function genComponentMarkdown(item: Directive): string {
  if (item == null) return '';

  const rows: string[] = [
    CONFIG.isAlain ? `**${I18N.library}** ${item.lib}` : null,
    `**${item.title}**` + (item.standalone ? ' `' + I18N.standalone + '`' : ''),
    item.description,
  ];

  if (item.whenToUse && item.whenToUse.trim().length > 0) {
    rows.push(`**${I18N.whenToUse}**`);
    rows.push(item.whenToUse);
  }

  if (item.doc) {
    rows.push(`[${I18N.document}](${getFullDoc(item)})${item.github ? ` － [${I18N.github}](${item.github})` : ''}`);
  }

  return rows.filter((w) => !!w).join('\n\n');
}

function genPropertyMarkdown(property: DirectiveProperty): string {
  if (property == null) return '';

  const rows: string[] = [];

  if (property.typeDefinition && Array.isArray(property.typeDefinition) && property.typeDefinition.length > 0) {
    rows.push(`**${I18N.optionalValue}** ${property.typeDefinition.map((i: DirectiveTypeDefinition) => '`' + i.label + '`').join(', ')}`);
  } else if (property.typeRaw.length > 0) {
    rows.push(`**${I18N.type}** ${property.typeRaw}`);
  }

  if (property.default.length > 0) {
    rows.push(`**${I18N.defaultValue}** ${property.default}`);
  }

  rows.push(property.description);

  return rows.join('\n\n');
}

function fixProperty(p: DirectiveProperty) {
  p.pureName = getPure(p.name);

  p.default = notNull(p.default, '-');
  if (p.default === '-') p.default = '';

  p.description = LANG[p.description];
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
  CONFIG.language = env.language.toLowerCase();
  CONFIG.hover = cog.hover;
  CONFIG.inlineTemplate = cog.inlineTemplate;
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

  const data = DATA as Directive[];
  if (CONFIG.isAntd) {
    RESOURCES.push(...data.filter((i) => i.lib === 'ng-zorro-antd'));
  }

  if (CONFIG.isAlain) {
    RESOURCES.push(...data.filter((i) => i.lib !== 'ng-zorro-antd'));
  }

  RESOURCES.forEach((i) => {
    i.description = LANG[i.description];
    i.whenToUse = LANG[i.whenToUse];
    i.doc = notNull(i.doc);
    i.title = LANG[i.title];
    i.type = notNull(i.type, 'component');
    i.snippet = notNull(i.snippet, '');
    if (i.snippet.length === 0) {
      i.snippet = i.type === 'component' ? (i.selfClosingTag ? `<__$0 />` : `<__$1>$0</__>`) : `<div __$1>$0</div>`;
    }
    i.snippet = i.snippet.replace(/__/g, i.selector);

    i.properties = notNull(i.properties, []);
    i.properties.forEach((p) => fixProperty(p));
    if (i.types) {
      Object.keys(i.types).forEach((key) => {
        i.types[key].forEach((p) => fixProperty(p));
      });
    }
    if (~i.properties.findIndex((w) => w.name === i.selector)) {
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
  const dict: { [key: string]: Directive } = {};
  if (isComponent(tag.name)) {
    dict[tag.name] = first(tag.name);
  }

  Object.keys(tag.attributes)
    .filter((key) => DIRECTIVE_NAMES.indexOf(tag.attributes[key].name) !== -1)
    .forEach((key) => {
      const keyValue = tag.attributes[key].name;
      if (dict[keyValue]) return;
      dict[keyValue] = first(keyValue);
    });

  return Object.values(dict).filter((w) => !!w);
}

export function query(type: DirectiveType) {
  return [...RESOURCES].filter((i) => i.type === type);
}

export function first(selector: string) {
  return RESOURCES.find((w) => w.selector === selector);
}
