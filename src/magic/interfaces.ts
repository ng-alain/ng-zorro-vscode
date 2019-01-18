import { MarkdownString } from 'vscode';

export const NAME = `ng-zorro-vscode`;

export type DirectiveType = 'component' | 'directive';

export interface Directive {
  _idx?: number;
  /**
   * e.g: `ng-zorro-antd`, `@delon/abc`
   */
  lib?: string;
  type: DirectiveType;
  /**
   * Component selector, e.g: `nz-button`
   */
  selector: string;
  /**
   * Title for component, e.g: `按钮`
   */
  title?: string;
  /**
   * Description for component, e.g: `按钮用于开始一个即时操作。`
   */
  description?: string;
  /**
   * When to user for component, e.g: `标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。`
   */
  whenToUse?: string;
  /**
   * Properties for component, e.g: `[ 'nzType', 'nzSize' ]`
   */
  properties?: DirectiveProperty[];
  /**
   * 类型定义
   */
  types?: { [key: string]: DirectiveProperty[] };
  /**
   * Document for component, e.g: `https://ng.ant.design/components/button/zh`
   */
  doc?: string;
  github?: string;
  /**
   * 重新定义片断，变量值：
   * - `__`：表示名称占位符
   * - 类型 component 默认转化 `<__$1>$0</__>`
   * - 类型 directive 默认转化 `<div __$1>$0</div>`
   * @example
   * nz-input: `<input __$0>` 转化 `<input nz-input>`
   * nz-row: `<div __$1>$0</div>` 转化 `<div nz-row$1>$0</div>`
   */
  snippet?: string;
  /** 解析后的文档数据 */
  _doc?: MarkdownString;
}

export interface DirectiveProperty {
  _common?: boolean;
  /**
   * Property name, e.g: `nzType`
   */
  name?: string;
  inputType?: InputAttrType;
  forceInputType?: InputAttrType;
  /**
   * Description for property, e.g: `设置按钮类型`
   */
  description?: string;

  type?:
    | 'any'
    | 'string'
    | 'TemplateRef'
    | 'boolean'
    | 'number'
    | 'Array'
    | 'Enum'
    | 'Date'
    | 'object'
    | 'function'
    | 'HTMLElement'
    | 'EventEmitter';
  complexType?: string;
  typeRaw?: string;
  /**
   * Definition list for type, e.g: `[ { value: 'primary', label: '主按钮' }, { value: 'danger', label: '危险按钮' } ]`
   */
  typeDefinition?: Array<string | DirectiveTypeDefinition>;
  isInputBoolean?: boolean;
  default?: string;
  pureDefault?: string;
  /** @inner */
  pureName?: string;
  /** @inner */
  typeDefinitionSnippetStr?: string;
  /** 额外定制 */
  snippet?: string;
  /** 解析后的文档数据 */
  _doc?: MarkdownString;
}

export interface DirectiveTypeDefinition {
  /** 值 */
  value?: string;
  /** 标签 */
  label?: string;
}

export interface DirectiveTypeDefinitionComplex {
  type?: 'complex';
  conditionField?: string;
  list?: DirectiveTypeDefinitionComplexList[];
}

export interface DirectiveTypeDefinitionComplexList {
  conditionValue?: any;
  values?: DirectiveTypeDefinition[];
}

export interface Tag {
  /** Tag名称 */
  name?: string;
  /** Tag所有属性清单 */
  attributes?: { [key: string]: TagAttr };
  /** 光标位置是否在Tag名称上 */
  isOnTagName?: boolean;
  /** 光标位置是否在属性名中 */
  isOnAttrName?: boolean;
  /** 光标位置是否在属性值中 */
  isOnAttrValue?: boolean;
  /** 属性名称，当 `isOnAttrName: true` 时有效 */
  attrName?: string;
  /** 光标所在位置的单词 */
  word?: string;
}

export enum InputAttrType {
  Input,
  Output,
  InputOutput,
  Template,
  Complex,
}

export enum TagAttrValueType {
  String,
  Number,
  Boolean,
  PropertyBinding,
}

export interface TagAttr {
  type?: InputAttrType;
  name?: string;
  value?: string;
  valueType?: TagAttrValueType;
}
