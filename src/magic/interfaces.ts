import * as ts from 'typescript';

export interface Directive {
  type: 'component' | 'directive';
  /**
   * Component selector, e.g: `nz-button`
   */
  selector: string;
  /**
   * Title for component, e.g: `按钮`
   */
  title: string;
  /**
   * Description for component, e.g: `按钮用于开始一个即时操作。`
   */
  description: string;
  /**
   * Properties for component, e.g: `[ 'nzType', 'nzSize' ]`
   */
  properties?: DirectiveProperty[];
  /**
   * Document for component, e.g: `https://ng.ant.design/components/button/zh`
   */
  doc?: string;
}

export interface DirectiveProperty {
  /**
   * Property name, e.g: `nzType`
   */
  name: string;
  /** @inner */
  pureName: string;
  /**
   * Description for property, e.g: `设置按钮类型`
   */
  description: string;
  type: 'string' | 'TemplateRef' | 'boolean' | 'number' | 'object' | 'function' | 'HTMLElement' | 'EventEmitter';
  /**
   * Generic type, when the `type` is generic, e.g:
   * Should be set `boolean` when the type is `EventEmitter<boolean>`
   */
  genericType?: string;
  /**
   * Definition list for type, e.g: `[ 'primary', 'dashed', 'danger' ]`
   */
  typeDefinition?: string[];
  /** @inner */
  typeDefinitionSnippetStr: string;
  isInputBoolean?: boolean;
  default: any;
}

export interface Tag {
  /** Tag名称 */
  name: string;
  /** Tag所有属性清单 */
  attributes: TagAttr[];
  /** 原始字符串 */
  raw: string;
}

export enum TagAttrType {
  Input,
  Output,
  InputOutput,
  Template,
}

export enum TagAttrValueType {
  String,
  Number,
  Boolean,
  PropertyBinding,
}

export interface TagAttr {
  type?: TagAttrType;
  name?: string;
  value?: string;
  valueType?: TagAttrValueType;
}
