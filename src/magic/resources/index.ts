import { Directive } from '../interfaces';
import { default as Delon } from './zh-CN/delon';
import { default as Zorro } from './zh-CN/ng-zorro-antd';

export const VERSION = {
  zorro: '',
  delon: '',
};

export const RESOURCES = [...Zorro, ...Delon] as Directive[];

function notNull(value: any, defaultValue: any = '') {
  if (value == null) return defaultValue;

  return value;
}

function getPure(value: string): string {
  return value.replace(/nz([A-Z])/g, (raw: string, val: string) => {
    return val.toLowerCase();
  });
}

export function INIT() {
  RESOURCES.forEach(i => {
    i.description = notNull(i.description);
    i.doc = notNull(i.doc);
    i.title = notNull(i.title);
    i.type = notNull(i.type, 'component');
    i.properties = notNull(i.properties, []);
    i.properties.forEach(p => {
      p.pureName = getPure(p.name);
      p.default = notNull(p.default);
      p.description = notNull(p.description);
      p.genericType = notNull(p.genericType);
      p.isInputBoolean = notNull(p.isInputBoolean, true);
      p.type = notNull(p.type, 'string');
      p.typeDefinition = notNull(p.typeDefinition, []);
      p.typeDefinitionSnippetStr = p.typeDefinition.join(',');
    });
  });
}