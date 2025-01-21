import { DirectiveProperty } from "../../src/magic/interfaces";
import { manifest } from "./_icon";
import type { FixType } from "./interface";

const BASE_GUTTER: string[] = [
  "16",
  "0",
  "8",
  "24",
  "32",
  "40",
  "48",
  "56",
  "64",
];
const DATA_ENTRY: string[] = [
  "nz-cascader",
  "nz-checkbox",
  "nz-date-picker",
  "nz-month-picker",
  "nz-range-picker",
  "nz-week-picker",
  "nz-time-picker",
  "nz-input",
  "nz-input-number",
  "nz-radio",
  "nz-rate",
  "nz-rate",
  "nz-select",
  "nz-slider",
  "nz-switch",
  "nz-tree-select",
];
const CP: { [key: string]: DirectiveProperty } = {
  click: {
    name: "click",
    inputType: 1,
    type: "EventEmitter",
    typeRaw: "`EventEmitter`",
  },
  disabled: {
    name: "disabled",
    inputType: 0,
    type: "boolean",
    typeRaw: "`boolean`",
  },
  name: {
    name: "name",
    inputType: 0,
    type: "string",
    typeRaw: "`string`",
  },
  ngModel: {
    name: "ngModel",
    inputType: 2,
    type: "any",
    typeRaw: "`any`",
  },
  ngModelChange: {
    name: "ngModelChange",
    inputType: 1,
    type: "EventEmitter",
    typeRaw: "`EventEmitter<any>`",
  },
  ngSubmit: {
    name: "ngSubmit",
    inputType: 1,
    type: "EventEmitter",
    typeRaw: "`EventEmitter<any>`",
  },
  formGroup: {
    name: "formGroup",
    inputType: 0,
    type: "object",
    typeRaw: "`object`",
  },
  formControlName: {
    name: "formControlName",
    inputType: 0,
    type: "string",
    typeRaw: "`string`",
  },
};

export const FIX: FixType = {
  forceInputType: {
    twoBinding: [],
    input: [
      "disabled",
      "nzDisabled",
      "nzLoading",
      "nzSpinning",
      "nzOverlayStyle",
      "nzIndeterminate",
      "nzFullscreen",
    ],
    output: [],
  },
  /** 额外属性 */
  extraProperty: {
    "nz-form": [CP.formGroup, CP.ngSubmit],
    "nz-button": [CP.click, CP.disabled],
    "nz-input": [
      CP.ngModel,
      CP.ngModelChange,
      CP.disabled,
      {
        name: "nzAutocomplete",
        inputType: 0,
        type: "TemplateRef",
        typeRaw: "`TemplateRef`",
        default: "auto",
      },
    ],
  },
  /** 额外组件 */
  extraComponents: [
    {
      from: "nz-breadcrumb",
      to: "nz-breadcrumb-item",
      data: {},
    },
  ],
  typeDefinition: {
    "nz-row": {
      nzGutter: BASE_GUTTER,
    },
    "nz-col": {
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
    "nz-icon": {
      nzType: {
        type: "complex",
        conditionField: "theme",
        list: [
          {
            conditionValue: "outline",
            values: manifest.outline.map((item) => ({
              value: item,
              label: item,
            })),
          },
          {
            conditionValue: "fill",
            values: manifest.fill.map((item) => ({ value: item, label: item })),
          },
          {
            conditionValue: "twotone",
            values: manifest.twotone.map((item) => ({
              value: item,
              label: item,
            })),
          },
        ],
      },
    },
    "nz-tag": {
      nzColor: [
        "success",
        "processing",
        "error",
        "default",
        "warning",
        "magenta",
        "red",
        "volcano",
        "orange",
        "gold",
        "lime",
        "green",
        "cyan",
        "blue",
        "geekblue",
        "purple",
      ],
    },
    "se-container": {
      gutter: BASE_GUTTER,
    },
    "sg-container": {
      gutter: BASE_GUTTER,
    },
  },
  snippet: {
    "nz-form": "<form __$1>$0</form>",
    "nz-input": "<input __$1>",
    "nz-tooltip": "<span __$1>$2</span>",
    "nz-button": {
      zh: "<button __$1>${2|保存,提交,取消,新建,删除,搜索|}</button>",
      en: "<button __$1>${2|Save,Submit,Cancel,Create,Delete,Search|}</button>",
    },
    "nz-checkbox": "<label __$1>$2</label>",
    "nz-radio": "<label __$1>$2</label>",
    nzModalFooter: "<div *nzModalFooter>$0</div>",
    nzMentionSuggestion:
      '<ng-container *nzMentionSuggestion="let ${1|item|}">$0</ng-container>',
  },
  selfClosingTag: [
    "nz-switch",
    "nz-divider",
    "nz-pagination",
    "nz-autocomplete",
    "nz-cascader",
    "nz-date-picker",
    "nz-range-picker",
    "nz-input-number",
    "nz-rate",
    "nz-option",
    "nz-slider",
    "nz-time-picker",
    "nz-transfer",
    "nz-tree-select",
    "nz-avatar",
    "nz-calendar",
    "nz-qrcode",
    "nz-segmented",
    "nz-statistic",
    "nz-tree",
    "nz-alert",
    "nz-icon",
  ],
};

// 为所有数据输入增加 `formControlName` 属性
DATA_ENTRY.forEach((selector) => {
  if (!FIX.extraProperty[selector]) {
    FIX.extraProperty[selector] = [];
  }
  const list: DirectiveProperty[] = FIX.extraProperty[selector];
  [CP.ngModel, CP.ngModelChange, CP.formControlName, CP.name].forEach(
    (item) => {
      if (list.findIndex((w) => w.name === item.name) === -1) {
        list.push(item);
      }
    }
  );
});
