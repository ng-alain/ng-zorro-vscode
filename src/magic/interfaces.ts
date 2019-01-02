export const NAME = `ng-zorro-vscode`;

export type DirectiveType = 'component' | 'directive';

export const TRIGGER_DIRECTIVE_WORD = '<';

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
   * Document for component, e.g: `https://ng.ant.design/components/button/zh`
   */
  doc?: string;
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
}

export interface DirectiveProperty {
  _common?: boolean;
  /**
   * Property name, e.g: `nzType`
   */
  name?: string;
  inputType?: InputAttrType;
  /** @inner */
  pureName?: string;
  /**
   * Description for property, e.g: `设置按钮类型`
   */
  description?: string;

  type?: 'string' | 'TemplateRef' | 'boolean' | 'number' | 'Array' | 'Enum' | 'object' | 'Date' | 'function' | 'HTMLElement' | 'EventEmitter';

  typeRaw?: string;
  /**
   * Definition list for type, e.g: `[ { value: 'primary', label: '主按钮' }, { value: 'danger', label: '危险按钮' } ]`
   */
  typeDefinition?: DirectiveTypeDefinition[];
  /** @inner */
  typeDefinitionSnippetStr?: string;
  isInputBoolean?: boolean;
  default?: string;
}

export interface DirectiveTypeDefinition {
  value?: string;
  label?: string;
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
