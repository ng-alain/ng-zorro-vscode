export const NAME = `ng-zorro-vscode`;

export type DirectiveType = 'component' | 'directive';

export interface Directive {
  type: DirectiveType;
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
   * When to user for component, e.g: `标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。`
   */
  whenToUse: string;
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

  typeRaw: string;

  /**
   * Generic type, when the `type` is generic, e.g:
   * Should be set `boolean` when the type is `EventEmitter<boolean>`
   */
  genericType?: string;
  /**
   * Definition list for type, e.g: `[ { value: 'primary', label: '主按钮' }, { value: 'danger', label: '危险按钮' } ]`
   */
  typeDefinition?: DirectiveTypeDefinition[];
  /** @inner */
  typeDefinitionSnippetStr: string;
  isInputBoolean?: boolean;
  default: string;
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
