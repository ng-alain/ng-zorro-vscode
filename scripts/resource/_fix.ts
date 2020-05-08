import { manifest } from './_icon';

const BASE_GUTTER = ['0', '8', '16', '24', '32', '40', '48', '56', '64'];
const DATA_ENTRY = [
  'nz-cascader',
  'nz-checkbox',
  'nz-date-picker',
  'nz-month-picker',
  'nz-range-picker',
  'nz-week-picker',
  'nz-time-picker',
  'nz-input',
  'nz-input-number',
  'nz-radio',
  'nz-rate',
  'nz-select',
  'nz-slider',
  'nz-switch',
  'nz-tree-select',
];
const CP = {
  click: {
    name: 'click',
    inputType: 1,
    type: 'EventEmitter',
    typeRaw: '`EventEmitter`',
  },
  disabled: {
    name: 'disabled',
    inputType: 0,
    type: 'boolean',
    typeRaw: '`boolean`',
  },
  ngModel: {
    name: 'ngModel',
    inputType: 2,
    type: 'any',
    typeRaw: '`any`',
  },
  ngModelChange: {
    name: 'ngModelChange',
    inputType: 1,
    type: 'EventEmitter',
    typeRaw: '`EventEmitter<any>`',
  },
  ngSubmit: {
    name: 'ngSubmit',
    inputType: 1,
    type: 'EventEmitter',
    typeRaw: '`EventEmitter<any>`',
  },
  formGroup: {
    name: 'formGroup',
    inputType: 0,
    type: 'object',
    typeRaw: '`object`',
  },
  formControlName: {
    name: 'formControlName',
    inputType: 0,
    type: 'string',
    typeRaw: '`string`',
  },
};

export const FIX = {
  forceInputType: {
    twoBinding: [],
    input: ['disabled', 'nzDisabled', 'nzLoading', 'nzSpinning', 'nzOverlayStyle', 'nzIndeterminate', 'nzFullscreen'],
    output: [],
  },
  /** 额外属性 */
  extraProperty: {
    'nz-form': [CP.formGroup, CP.ngSubmit],
    'nz-button': [CP.click, CP.disabled],
    'nz-input': [
      CP.ngModel,
      CP.ngModelChange,
      CP.disabled,
      {
        name: 'nzAutocomplete',
        inputType: 0,
        type: 'TemplateRef',
        typeRaw: '`TemplateRef`',
        default: 'auto',
      },
    ],
  },
  /** 额外组件 */
  extraComponents: [
    {
      from: 'nz-breadcrumb',
      to: 'nz-breadcrumb-item',
      data: {},
    },
  ],
  typeDefinition: {
    'nz-row': {
      nzGutter: BASE_GUTTER,
    },
    'nz-col': {
      nzOffset: BASE_GUTTER,
      nzOrder: BASE_GUTTER,
      nzPull: BASE_GUTTER,
      nzPush: BASE_GUTTER,
      nzSpan: BASE_GUTTER,
      nzXs: BASE_GUTTER,
      nzSm: BASE_GUTTER,
      nzMd: BASE_GUTTER,
      nzLg: BASE_GUTTER,
      nzXl: BASE_GUTTER,
      nzXXl: BASE_GUTTER,
    },
    'nz-icon': {
      nzType: {
        type: 'complex',
        conditionField: 'theme',
        list: [
          { conditionValue: 'outline', values: manifest.outline.map((item) => ({ value: item, label: item })) },
          { conditionValue: 'fill', values: manifest.fill.map((item) => ({ value: item, label: item })) },
          { conditionValue: 'twotone', values: manifest.twotone.map((item) => ({ value: item, label: item })) },
        ],
      },
    },
    'nz-tag': {
      nzColor: [
        'success',
        'processing',
        'error',
        'default',
        'warning',
        'magenta',
        'red',
        'volcano',
        'orange',
        'gold',
        'lime',
        'green',
        'cyan',
        'blue',
        'geekblue',
        'purple',
      ],
    },
    'se-container': {
      gutter: BASE_GUTTER,
    },
    'sg-container': {
      gutter: BASE_GUTTER,
    },
  },
  snippet: {
    'nz-form': '<form __$1>$0</form>',
    'nz-input': '<input __$1>',
    'nz-tooltip': '<span __$1>$2</span>',
    'nz-icon': '<i __$1></i>',
    'nz-button': {
      zh: '<button __$1>${2|保存,提交,取消,新建,删除,搜索|}</button>',
      en: '<button __$1>${2|Save,Submit,Cancel,Create,Delete,Search|}</button>',
    },
    'nz-checkbox': '<label __$1>$2</label>',
    'nz-radio': '<label __$1>$2</label>',
  },
};

// 为所有数据输入增加 `formControlName` 属性
DATA_ENTRY.forEach((selector) => {
  if (!FIX.extraProperty[selector]) {
    FIX.extraProperty[selector] = [];
  }
  FIX.extraProperty[selector].push(CP.formControlName);
});
