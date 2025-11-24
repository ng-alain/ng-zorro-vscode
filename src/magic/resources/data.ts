import type { Directive } from "../interfaces";

export const DATA: Directive[] = [
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-row",
    "title": "nz-row.title",
    "description": "nz-row.description",
    "whenToUse": "nz-row.whenToUse",
    "properties": [
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "nz-row.nzAlign.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'middle' | 'bottom'`",
        "default": "",
        "typeDefinition": [
          "top",
          "middle",
          "bottom"
        ]
      },
      {
        "name": "nzGutter",
        "inputType": 0,
        "description": "nz-row.nzGutter.description",
        "type": "Enum",
        "typeRaw": "`string | number | object | [number, number] | [object, object]`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzJustify",
        "inputType": 0,
        "description": "nz-row.nzJustify.description",
        "type": "Enum",
        "typeRaw": "`'start' | 'end' | 'center' | 'space-around' | 'space-between'`",
        "default": "",
        "typeDefinition": [
          "start",
          "end",
          "center",
          "space-around",
          "space-between"
        ]
      }
    ],
    "types": {},
    "doc": "/components/grid/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/grid",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-col",
    "title": "nz-col.title",
    "description": "nz-col.description",
    "whenToUse": "nz-col.whenToUse",
    "properties": [
      {
        "name": "nzFlex",
        "inputType": 0,
        "description": "nz-col.nzFlex.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzOffset",
        "inputType": 0,
        "description": "nz-col.nzOffset.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzOrder",
        "inputType": 0,
        "description": "nz-col.nzOrder.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPull",
        "inputType": 0,
        "description": "nz-col.nzPull.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPush",
        "inputType": 0,
        "description": "nz-col.nzPush.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSpan",
        "inputType": 0,
        "description": "nz-col.nzSpan.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXs",
        "inputType": 0,
        "description": "nz-col.nzXs.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSm",
        "inputType": 0,
        "description": "nz-col.nzSm.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzMd",
        "inputType": 0,
        "description": "nz-col.nzMd.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzLg",
        "inputType": 0,
        "description": "nz-col.nzLg.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXl",
        "inputType": 0,
        "description": "nz-col.nzXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXXl",
        "inputType": 0,
        "description": "nz-col.nzXXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      }
    ],
    "types": {},
    "doc": "/components/grid/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/grid",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-tooltip",
    "title": "nz-tooltip.title",
    "description": "nz-tooltip.description",
    "whenToUse": "nz-tooltip.whenToUse",
    "properties": [
      {
        "name": "nzTooltipArrowPointAtCenter",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipArrowPointAtCenter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipTitle",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTooltipTitleContext",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipTitleContext.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzTooltipTrigger",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'focus' | 'hover' | null`",
        "default": "`'hover'`",
        "typeDefinition": [
          "click",
          "focus",
          "hover",
          "null"
        ],
        "pureDefault": "hover"
      },
      {
        "name": "nzTooltipPlacement",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | Array<string>`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom",
          "Array<string>"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzTooltipColor",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOrigin",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipOrigin.description",
        "type": "object",
        "typeRaw": "`ElementRef`",
        "default": ""
      },
      {
        "name": "nzTooltipVisible",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipVisibleChange",
        "inputType": 1,
        "description": "nz-tooltip.nzTooltipVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzTooltipMouseEnterDelay",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipMouseEnterDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.15`",
        "pureDefault": "0.15"
      },
      {
        "name": "nzTooltipMouseLeaveDelay",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipMouseLeaveDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzTooltipOverlayClassName",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOverlayStyle",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/tooltip/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tooltip",
    "standalone": false,
    "snippet": "<span __$1>$2</span>"
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-affix",
    "title": "nz-affix.title",
    "description": "nz-affix.description",
    "whenToUse": "nz-affix.whenToUse",
    "properties": [
      {
        "name": "nzOffsetBottom",
        "inputType": 0,
        "description": "nz-affix.nzOffsetBottom.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzOffsetTop",
        "inputType": 0,
        "description": "nz-affix.nzOffsetTop.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzTarget",
        "inputType": 0,
        "description": "nz-affix.nzTarget.description",
        "type": "string",
        "typeRaw": "`string | HTMLElement`",
        "default": "`window`",
        "pureDefault": "window"
      },
      {
        "name": "nzChange",
        "inputType": 1,
        "description": "nz-affix.nzChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/affix/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/affix",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-alert",
    "title": "nz-alert.title",
    "description": "nz-alert.description",
    "whenToUse": "nz-alert.whenToUse",
    "properties": [
      {
        "name": "nzBanner",
        "inputType": 0,
        "description": "nz-alert.nzBanner.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAction",
        "inputType": 0,
        "description": "nz-alert.nzAction.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzCloseable",
        "inputType": 0,
        "description": "nz-alert.nzCloseable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzCloseText",
        "inputType": 0,
        "description": "nz-alert.nzCloseText.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDescription",
        "inputType": 0,
        "description": "nz-alert.nzDescription.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzMessage",
        "inputType": 0,
        "description": "nz-alert.nzMessage.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzShowIcon",
        "inputType": 0,
        "description": "nz-alert.nzShowIcon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzIconType",
        "inputType": 0,
        "description": "nz-alert.nzIconType.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-alert.nzType.description",
        "type": "Enum",
        "typeRaw": "`'success' | 'info' | 'warning' | 'error'`",
        "default": "`'info'`",
        "typeDefinition": [
          "success",
          "info",
          "warning",
          "error"
        ],
        "pureDefault": "info"
      },
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-alert.nzIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzOnClose",
        "inputType": 1,
        "description": "nz-alert.nzOnClose.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/alert/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/alert",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-anchor",
    "title": "nz-anchor.title",
    "description": "nz-anchor.description",
    "whenToUse": "nz-anchor.whenToUse",
    "properties": [
      {
        "name": "nzAffix",
        "inputType": 0,
        "description": "nz-anchor.nzAffix.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzBounds",
        "inputType": 0,
        "description": "nz-anchor.nzBounds.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`5`",
        "pureDefault": "5"
      },
      {
        "name": "nzOffsetTop",
        "inputType": 0,
        "description": "nz-anchor.nzOffsetTop.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzShowInkInFixed",
        "inputType": 0,
        "description": "nz-anchor.nzShowInkInFixed.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTargetOffset",
        "inputType": 0,
        "description": "nz-anchor.nzTargetOffset.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzContainer",
        "inputType": 0,
        "description": "nz-anchor.nzContainer.description",
        "type": "string",
        "typeRaw": "`string | HTMLElement`",
        "default": "`window`",
        "pureDefault": "window"
      },
      {
        "name": "nzCurrentAnchor",
        "inputType": 0,
        "description": "nz-anchor.nzCurrentAnchor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-anchor.nzDirection.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal'`",
        "default": "`'vertical'`",
        "typeDefinition": [
          "vertical",
          "horizontal"
        ],
        "pureDefault": "vertical"
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-anchor.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "nzChange",
        "inputType": 1,
        "description": "nz-anchor.nzChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "nzScroll",
        "inputType": 1,
        "description": "nz-anchor.nzScroll.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzAnchorLinkComponent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/anchor/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/anchor",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-link",
    "title": "nz-link.title",
    "description": "nz-link.description",
    "whenToUse": "nz-link.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/anchor/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/anchor",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzAutocomplete",
    "title": "nzAutocomplete.title",
    "description": "nzAutocomplete.description",
    "whenToUse": "nzAutocomplete.whenToUse",
    "properties": [
      {
        "name": "nzAutocomplete",
        "inputType": 0,
        "description": "nzAutocomplete.nzAutocomplete.description",
        "type": "object",
        "typeRaw": "`NzAutocompleteComponent`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/auto-complete/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/auto-complete",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-autocomplete",
    "title": "nz-autocomplete.title",
    "description": "nz-autocomplete.description",
    "whenToUse": "nz-autocomplete.whenToUse",
    "properties": [
      {
        "name": "nzBackfill",
        "inputType": 0,
        "description": "nz-autocomplete.nzBackfill.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDataSource",
        "inputType": 0,
        "description": "nz-autocomplete.nzDataSource.description",
        "type": "object",
        "typeRaw": "`AutocompleteDataSource`",
        "default": ""
      },
      {
        "name": "nzDefaultActiveFirstOption",
        "inputType": 0,
        "description": "nz-autocomplete.nzDefaultActiveFirstOption.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-autocomplete.nzWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "trigger element width",
        "pureDefault": "trigger element width"
      },
      {
        "name": "nzOverlayClassName",
        "inputType": 0,
        "description": "nz-autocomplete.nzOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzOverlayStyle",
        "inputType": 0,
        "description": "nz-autocomplete.nzOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "compareWith",
        "inputType": 0,
        "description": "nz-autocomplete.compareWith.description",
        "type": "function",
        "typeRaw": "`(o1: any, o2: any) => boolean`",
        "default": "`(o1: any, o2: any) => o1===o2`",
        "pureDefault": "(o1: any, o2: any) => o1===o2"
      }
    ],
    "types": {},
    "doc": "/components/auto-complete/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/auto-complete",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-auto-option",
    "title": "nz-auto-option.title",
    "description": "nz-auto-option.description",
    "whenToUse": "nz-auto-option.whenToUse",
    "properties": [
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-auto-option.nzValue.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "nzLabel",
        "inputType": 0,
        "description": "nz-auto-option.nzLabel.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-auto-option.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      }
    ],
    "types": {},
    "doc": "/components/auto-complete/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/auto-complete",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-avatar",
    "title": "nz-avatar.title",
    "description": "nz-avatar.description",
    "whenToUse": "nz-avatar.whenToUse",
    "properties": [
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-avatar.nzIcon.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzShape",
        "inputType": 0,
        "description": "nz-avatar.nzShape.description",
        "type": "Enum",
        "typeRaw": "`'circle' | 'square'`",
        "default": "`'circle'`",
        "typeDefinition": [
          "circle",
          "square"
        ],
        "pureDefault": "circle"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-avatar.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default' | number`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default",
          "number"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzGap",
        "inputType": 0,
        "description": "nz-avatar.nzGap.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`4`",
        "pureDefault": "4"
      },
      {
        "name": "nzSrc",
        "inputType": 0,
        "description": "nz-avatar.nzSrc.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzSrcSet",
        "inputType": 0,
        "description": "nz-avatar.nzSrcSet.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAlt",
        "inputType": 0,
        "description": "nz-avatar.nzAlt.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzText",
        "inputType": 0,
        "description": "nz-avatar.nzText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-avatar.nzLoading.description",
        "type": "Enum",
        "typeRaw": "`'eager' | 'lazy'`",
        "default": "`'eager'`",
        "typeDefinition": [
          "eager",
          "lazy"
        ],
        "pureDefault": "eager",
        "forceInputType": 0
      },
      {
        "name": "nzFetchPriority",
        "inputType": 0,
        "description": "nz-avatar.nzFetchPriority.description",
        "type": "Enum",
        "typeRaw": "`'high' | 'low' | 'auto'`",
        "default": "`'auto'`",
        "typeDefinition": [
          "high",
          "low",
          "auto"
        ],
        "pureDefault": "auto"
      },
      {
        "name": "nzError",
        "inputType": 1,
        "description": "nz-avatar.nzError.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Event>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/avatar/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/avatar",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-avatar-group",
    "title": "nz-avatar-group.title",
    "description": "nz-avatar-group.description",
    "whenToUse": "nz-avatar-group.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/avatar/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/avatar",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-badge",
    "title": "nz-badge.title",
    "description": "nz-badge.description",
    "whenToUse": "nz-badge.whenToUse",
    "properties": [
      {
        "name": "nzStandalone",
        "inputType": 0,
        "description": "nz-badge.nzStandalone.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzColor",
        "inputType": 0,
        "description": "nz-badge.nzColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzCount",
        "inputType": 0,
        "description": "nz-badge.nzCount.description",
        "type": "number",
        "typeRaw": "`number | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDot",
        "inputType": 0,
        "description": "nz-badge.nzDot.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowDot",
        "inputType": 0,
        "description": "nz-badge.nzShowDot.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzOverflowCount",
        "inputType": 0,
        "description": "nz-badge.nzOverflowCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`99`",
        "pureDefault": "99"
      },
      {
        "name": "nzShowZero",
        "inputType": 0,
        "description": "nz-badge.nzShowZero.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-badge.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'small'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "small"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-badge.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'success' | 'processing' | 'default' | 'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "success",
          "processing",
          "default",
          "error",
          "warning"
        ]
      },
      {
        "name": "nzText",
        "inputType": 0,
        "description": "nz-badge.nzText.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-badge.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | null`",
        "default": "`nzCount`",
        "pureDefault": "nzCount"
      },
      {
        "name": "nzOffset",
        "inputType": 0,
        "description": "nz-badge.nzOffset.description",
        "type": "string",
        "typeRaw": "`[number, number]`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/badge/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/badge",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-ribbon",
    "title": "nz-ribbon.title",
    "description": "nz-ribbon.description",
    "whenToUse": "nz-ribbon.whenToUse",
    "properties": [
      {
        "name": "nzColor",
        "inputType": 0,
        "description": "nz-ribbon.nzColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-ribbon.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'start' | 'end'`",
        "default": "`'end'`",
        "typeDefinition": [
          "start",
          "end"
        ],
        "pureDefault": "end"
      },
      {
        "name": "nzText",
        "inputType": 0,
        "description": "nz-ribbon.nzText.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/badge/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/badge",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-breadcrumb",
    "title": "nz-breadcrumb.title",
    "description": "nz-breadcrumb.description",
    "whenToUse": "nz-breadcrumb.whenToUse",
    "properties": [
      {
        "name": "nzSeparator",
        "inputType": 0,
        "description": "nz-breadcrumb.nzSeparator.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void> | null`",
        "default": "`'/'`",
        "pureDefault": "/"
      },
      {
        "name": "nzAutoGenerate",
        "inputType": 0,
        "description": "nz-breadcrumb.nzAutoGenerate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzRouteLabel",
        "inputType": 0,
        "description": "nz-breadcrumb.nzRouteLabel.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'breadcrumb'`",
        "pureDefault": "breadcrumb"
      },
      {
        "name": "nzRouteLabelFn",
        "inputType": 0,
        "description": "nz-breadcrumb.nzRouteLabelFn.description",
        "type": "function",
        "typeRaw": "`(label:string) => string`",
        "default": "`label => label`",
        "pureDefault": "label => label"
      },
      {
        "name": "nzRouteFn",
        "inputType": 0,
        "description": "nz-breadcrumb.nzRouteFn.description",
        "type": "function",
        "typeRaw": "`(route:string) => route`",
        "default": "`route => route`",
        "pureDefault": "route => route"
      }
    ],
    "types": {},
    "doc": "/components/breadcrumb/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/breadcrumb",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-button",
    "title": "nz-button.title",
    "description": "nz-button.description",
    "whenToUse": "nz-button.whenToUse",
    "properties": [
      {
        "name": "disabled",
        "inputType": 0,
        "description": "nz-button.disabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzGhost",
        "inputType": 0,
        "description": "nz-button.nzGhost.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-button.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzShape",
        "inputType": 0,
        "description": "nz-button.nzShape.description",
        "type": "Enum",
        "typeRaw": "`'circle'|'round'`",
        "default": "",
        "typeDefinition": [
          "circle",
          "round"
        ]
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-button.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large'|'small'|'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-button.nzType.description",
        "type": "Enum",
        "typeRaw": "`'primary'|'dashed'|'link'|'text'`",
        "default": "",
        "typeDefinition": [
          "primary",
          "dashed",
          "link",
          "text"
        ]
      },
      {
        "name": "nzBlock",
        "inputType": 0,
        "description": "nz-button.nzBlock.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDanger",
        "inputType": 0,
        "description": "nz-button.nzDanger.description",
        "type": "boolean",
        "typeRaw": "boolean",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "click",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter`",
        "description": "nz-button.click.description"
      }
    ],
    "types": {},
    "doc": "/components/button/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/button",
    "standalone": false,
    "snippet": "<button __$1>${2|Save,Submit,Cancel,Create,Delete,Search|}</button>"
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-calendar",
    "title": "nz-calendar.title",
    "description": "nz-calendar.description",
    "whenToUse": "nz-calendar.whenToUse",
    "properties": [
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-calendar.ngModel.description",
        "type": "object",
        "typeRaw": "`Date`",
        "default": "current date",
        "pureDefault": "current date"
      },
      {
        "name": "nzMode",
        "inputType": 2,
        "description": "nz-calendar.nzMode.description",
        "type": "Enum",
        "typeRaw": "`'month' | 'year'`",
        "default": "`'month'`",
        "typeDefinition": [
          "month",
          "year"
        ],
        "pureDefault": "month"
      },
      {
        "name": "nzFullscreen",
        "inputType": 0,
        "description": "nz-calendar.nzFullscreen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "forceInputType": 0
      },
      {
        "name": "nzDateCell",
        "inputType": 0,
        "description": "nz-calendar.nzDateCell.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<Date>`",
        "default": ""
      },
      {
        "name": "nzDateFullCell",
        "inputType": 0,
        "description": "nz-calendar.nzDateFullCell.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<Date>`",
        "default": ""
      },
      {
        "name": "nzMonthCell",
        "inputType": 0,
        "description": "nz-calendar.nzMonthCell.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<Date>`",
        "default": ""
      },
      {
        "name": "nzMonthFullCell",
        "inputType": 0,
        "description": "nz-calendar.nzMonthFullCell.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<Date>`",
        "default": ""
      },
      {
        "name": "nzCustomHeader",
        "inputType": 0,
        "description": "nz-calendar.nzCustomHeader.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDisabledDate",
        "inputType": 0,
        "description": "nz-calendar.nzDisabledDate.description",
        "type": "function",
        "typeRaw": "`(current: Date) => boolean`",
        "default": ""
      },
      {
        "name": "nzPanelChange",
        "inputType": 1,
        "description": "nz-calendar.nzPanelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{ date: Date, mode: 'month' | 'year' }>`",
        "default": ""
      },
      {
        "name": "nzSelectChange",
        "inputType": 1,
        "description": "nz-calendar.nzSelectChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Date>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/calendar/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/calendar",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-card",
    "title": "nz-card.title",
    "description": "nz-card.description",
    "whenToUse": "nz-card.whenToUse",
    "properties": [
      {
        "name": "nzActions",
        "inputType": 0,
        "description": "nz-card.nzActions.description",
        "type": "Array",
        "typeRaw": "`Array<TemplateRef<void>>`",
        "default": ""
      },
      {
        "name": "nzBodyStyle",
        "inputType": 0,
        "description": "nz-card.nzBodyStyle.description",
        "type": "object",
        "typeRaw": "`{ [key: string]: string }`",
        "default": ""
      },
      {
        "name": "nzBordered",
        "inputType": 0,
        "description": "nz-card.nzBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzCover",
        "inputType": 0,
        "description": "nz-card.nzCover.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-card.nzExtra.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzHoverable",
        "inputType": 0,
        "description": "nz-card.nzHoverable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-card.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-card.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-card.nzType.description",
        "type": "Enum",
        "typeRaw": "`'inner'`",
        "default": "",
        "typeDefinition": [
          "inner"
        ]
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-card.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'small'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "small"
        ],
        "pureDefault": "default"
      }
    ],
    "types": {},
    "doc": "/components/card/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/card",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-card-meta",
    "title": "nz-card-meta.title",
    "description": "nz-card-meta.description",
    "whenToUse": "nz-card-meta.whenToUse",
    "properties": [
      {
        "name": "nzAvatar",
        "inputType": 0,
        "description": "nz-card-meta.nzAvatar.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDescription",
        "inputType": 0,
        "description": "nz-card-meta.nzDescription.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-card-meta.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/card/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/card",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-card-grid",
    "title": "nz-card-grid.title",
    "description": "nz-card-grid.description",
    "whenToUse": "nz-card-grid.whenToUse",
    "properties": [
      {
        "name": "nzHoverable",
        "inputType": 0,
        "description": "nz-card-grid.nzHoverable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      }
    ],
    "types": {},
    "doc": "/components/card/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/card",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-card-tab",
    "title": "nz-card-tab.title",
    "description": "nz-card-tab.description",
    "whenToUse": "nz-card-tab.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/card/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/card",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-carousel",
    "title": "nz-carousel.title",
    "description": "nz-carousel.description",
    "whenToUse": "nz-carousel.whenToUse",
    "properties": [
      {
        "name": "nzAutoPlay",
        "inputType": 0,
        "description": "nz-carousel.nzAutoPlay.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAutoPlaySpeed",
        "inputType": 0,
        "description": "nz-carousel.nzAutoPlaySpeed.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`3000`",
        "pureDefault": "3000"
      },
      {
        "name": "nzDotRender",
        "inputType": 0,
        "description": "nz-carousel.nzDotRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: number }>`",
        "default": ""
      },
      {
        "name": "nzDotPosition",
        "inputType": 0,
        "description": "nz-carousel.nzDotPosition.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'right' | 'bottom' | 'left'`",
        "default": "`'bottom'`",
        "typeDefinition": [
          "top",
          "right",
          "bottom",
          "left"
        ],
        "pureDefault": "bottom"
      },
      {
        "name": "nzDots",
        "inputType": 0,
        "description": "nz-carousel.nzDots.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzEffect",
        "inputType": 0,
        "description": "nz-carousel.nzEffect.description",
        "type": "Enum",
        "typeRaw": "`'scrollx' | 'fade'`",
        "default": "`'scrollx'`",
        "typeDefinition": [
          "scrollx",
          "fade"
        ],
        "pureDefault": "scrollx"
      },
      {
        "name": "nzEnableSwipe",
        "inputType": 0,
        "description": "nz-carousel.nzEnableSwipe.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzLoop",
        "inputType": 0,
        "description": "nz-carousel.nzLoop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzArrows",
        "inputType": 0,
        "description": "nz-carousel.nzArrows.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAfterChange",
        "inputType": 1,
        "description": "nz-carousel.nzAfterChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzBeforeChange",
        "inputType": 1,
        "description": "nz-carousel.nzBeforeChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter{ from: number; to: number }>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/carousel/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/carousel",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-cascader",
    "title": "nz-cascader.title",
    "description": "nz-cascader.description",
    "whenToUse": "nz-cascader.whenToUse",
    "properties": [
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-cascader.ngModel.description",
        "type": "object",
        "typeRaw": "`any[]`",
        "default": ""
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-cascader.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-cascader.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-cascader.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzChangeOn",
        "inputType": 0,
        "description": "nz-cascader.nzChangeOn.description",
        "type": "function",
        "typeRaw": "`(option: any, index: number) => boolean`",
        "default": ""
      },
      {
        "name": "nzChangeOnSelect",
        "inputType": 0,
        "description": "nz-cascader.nzChangeOnSelect.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzColumnClassName",
        "inputType": 0,
        "description": "nz-cascader.nzColumnClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-cascader.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzExpandIcon",
        "inputType": 0,
        "description": "nz-cascader.nzExpandIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzExpandTrigger",
        "inputType": 0,
        "description": "nz-cascader.nzExpandTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'hover'`",
        "default": "`'click'`",
        "typeDefinition": [
          "click",
          "hover"
        ],
        "pureDefault": "click"
      },
      {
        "name": "nzLabelProperty",
        "inputType": 0,
        "description": "nz-cascader.nzLabelProperty.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'label'`",
        "pureDefault": "label"
      },
      {
        "name": "nzLabelRender",
        "inputType": 0,
        "description": "nz-cascader.nzLabelRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any>`",
        "default": ""
      },
      {
        "name": "nzLoadData",
        "inputType": 0,
        "description": "nz-cascader.nzLoadData.description",
        "type": "function",
        "typeRaw": "`(option: any, index?: index) => PromiseLike<any> | Observable<any>`",
        "default": ""
      },
      {
        "name": "nzMenuClassName",
        "inputType": 0,
        "description": "nz-cascader.nzMenuClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzMouseEnterDelay",
        "inputType": 0,
        "description": "nz-cascader.nzMouseEnterDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`150`",
        "pureDefault": "150"
      },
      {
        "name": "nzMouseLeaveDelay",
        "inputType": 0,
        "description": "nz-cascader.nzMouseLeaveDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`150`",
        "pureDefault": "150"
      },
      {
        "name": "nzMenuStyle",
        "inputType": 0,
        "description": "nz-cascader.nzMenuStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzMultiple",
        "inputType": 0,
        "description": "nz-cascader.nzMultiple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-cascader.nzNotFoundContent.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzOptionRender",
        "inputType": 0,
        "description": "nz-cascader.nzOptionRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzCascaderOption, index: number }>`",
        "default": ""
      },
      {
        "name": "nzOptions",
        "inputType": 0,
        "description": "nz-cascader.nzOptions.description",
        "type": "object",
        "typeRaw": "`object[]`",
        "default": ""
      },
      {
        "name": "nzOpen",
        "inputType": 0,
        "description": "nz-cascader.nzOpen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-cascader.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Please select'`",
        "pureDefault": "Please select"
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-cascader.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'`",
        "default": "`'bottomLeft'`",
        "typeDefinition": [
          "bottomLeft",
          "bottomRight",
          "topLeft",
          "topRight"
        ],
        "pureDefault": "bottomLeft"
      },
      {
        "name": "nzShowArrow",
        "inputType": 0,
        "description": "nz-cascader.nzShowArrow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzShowInput",
        "inputType": 0,
        "description": "nz-cascader.nzShowInput.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzShowSearch",
        "inputType": 0,
        "description": "nz-cascader.nzShowSearch.description",
        "type": "boolean",
        "typeRaw": "`boolean | NzShowSearchOptions`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-cascader.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-cascader.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-cascader.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-cascader.nzSuffixIcon.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzValueProperty",
        "inputType": 0,
        "description": "nz-cascader.nzValueProperty.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'value'`",
        "pureDefault": "value"
      },
      {
        "name": "nzVariant",
        "inputType": 0,
        "description": "nz-cascader.nzVariant.description",
        "type": "Enum",
        "typeRaw": "`'outlined' | 'borderless' | 'filled' | 'underlined'`",
        "default": "`'outlined'`",
        "typeDefinition": [
          "outlined",
          "borderless",
          "filled",
          "underlined"
        ],
        "pureDefault": "outlined"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-cascader.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any[]>`",
        "default": ""
      },
      {
        "name": "nzClear",
        "inputType": 1,
        "description": "nz-cascader.nzClear.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "nzVisibleChange",
        "inputType": 1,
        "description": "nz-cascader.nzVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzRemoved",
        "inputType": 1,
        "description": "nz-cascader.nzRemoved.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzCascaderOption>`",
        "default": ""
      },
      {
        "name": "nzSelectionChange",
        "inputType": 1,
        "description": "nz-cascader.nzSelectionChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzCascaderOption[]>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-cascader.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-cascader.name.description"
      }
    ],
    "types": {},
    "doc": "/components/cascader/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/cascader",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-check-list",
    "title": "nz-check-list.title",
    "description": "nz-check-list.description",
    "whenToUse": "nz-check-list.whenToUse",
    "properties": [
      {
        "name": "nzItems",
        "inputType": 0,
        "description": "nz-check-list.nzItems.description",
        "type": "object",
        "typeRaw": "`NzItemProps`",
        "default": "`[]`",
        "complexType": "NzItemProps",
        "pureDefault": "[]"
      },
      {
        "name": "nzVisible",
        "inputType": 0,
        "description": "nz-check-list.nzVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzIndex",
        "inputType": 0,
        "description": "nz-check-list.nzIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzProgress",
        "inputType": 0,
        "description": "nz-check-list.nzProgress.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzTriggerRender",
        "inputType": 0,
        "description": "nz-check-list.nzTriggerRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void> | string`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-check-list.nzTitle.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void> | string`",
        "default": ""
      },
      {
        "name": "nzFooter",
        "inputType": 0,
        "description": "nz-check-list.nzFooter.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void> | string`",
        "default": ""
      },
      {
        "name": "nzHide",
        "inputType": 1,
        "description": "nz-check-list.nzHide.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {
      "NzItemProps": [
        {
          "name": "key",
          "inputType": 0,
          "description": "nz-check-list.key.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "description",
          "inputType": 0,
          "description": "nz-check-list.description.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "checked",
          "inputType": 0,
          "description": "nz-check-list.checked.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": ""
        },
        {
          "name": "onClick",
          "inputType": 0,
          "description": "nz-check-list.onClick.description",
          "type": "function",
          "typeRaw": "`(item: NzItemProps) => void`",
          "default": ""
        }
      ]
    },
    "doc": "/components/check-list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/check-list",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-checkbox",
    "title": "nz-checkbox.title",
    "description": "nz-checkbox.description",
    "whenToUse": "nz-checkbox.whenToUse",
    "properties": [
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-checkbox.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzName",
        "inputType": 0,
        "description": "nz-checkbox.nzName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-checkbox.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-checkbox.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-checkbox.ngModel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzIndeterminate",
        "inputType": 0,
        "description": "nz-checkbox.nzIndeterminate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-checkbox.nzValue.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-checkbox.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-checkbox.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-checkbox.name.description"
      }
    ],
    "types": {},
    "doc": "/components/checkbox/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/checkbox",
    "standalone": false,
    "snippet": "<label __$1>$2</label>"
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-checkbox-group",
    "title": "nz-checkbox-group.title",
    "description": "nz-checkbox-group.description",
    "whenToUse": "nz-checkbox-group.whenToUse",
    "properties": [
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-checkbox-group.ngModel.description",
        "type": "Array",
        "typeRaw": "`string[] | number[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzName",
        "inputType": 0,
        "description": "nz-checkbox-group.nzName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzOptions",
        "inputType": 0,
        "description": "nz-checkbox-group.nzOptions.description",
        "type": "Array",
        "typeRaw": "`string[] | number[] | NzCheckboxOption[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-checkbox-group.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-checkbox-group.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string[] | number[]>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/checkbox/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/checkbox",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-code-editor",
    "title": "nz-code-editor.title",
    "description": "nz-code-editor.description",
    "whenToUse": "nz-code-editor.whenToUse",
    "properties": [
      {
        "name": "nzEditorMode",
        "inputType": 0,
        "description": "nz-code-editor.nzEditorMode.description",
        "type": "string",
        "typeRaw": "`normal`|`diff`",
        "default": "`normal`",
        "pureDefault": "normal"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-code-editor.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzOriginalText",
        "inputType": 0,
        "description": "nz-code-editor.nzOriginalText.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFullControl",
        "inputType": 0,
        "description": "nz-code-editor.nzFullControl.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzEditorOption",
        "inputType": 0,
        "description": "nz-code-editor.nzEditorOption.description",
        "type": "object",
        "typeRaw": "`IEditorConstructionOptions`",
        "default": "`{}`",
        "pureDefault": "{}"
      },
      {
        "name": "nzToolkit",
        "inputType": 0,
        "description": "nz-code-editor.nzToolkit.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzEditorInitialized",
        "inputType": 1,
        "description": "nz-code-editor.nzEditorInitialized.description",
        "type": "object",
        "typeRaw": "`IStandaloneCodeEditor` | `IStandaloneDiffEditor`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/code-editor/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/code-editor",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-collapse",
    "title": "nz-collapse.title",
    "description": "nz-collapse.description",
    "whenToUse": "nz-collapse.whenToUse",
    "properties": [
      {
        "name": "nzAccordion",
        "inputType": 0,
        "description": "nz-collapse.nzAccordion.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBordered",
        "inputType": 0,
        "description": "nz-collapse.nzBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzGhost",
        "inputType": 0,
        "description": "nz-collapse.nzGhost.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExpandIconPosition",
        "inputType": 0,
        "description": "nz-collapse.nzExpandIconPosition.description",
        "type": "Enum",
        "typeRaw": "`'start' | 'end'`",
        "default": "`'start'`",
        "typeDefinition": [
          "start",
          "end"
        ],
        "pureDefault": "start"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-collapse.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'small' | 'large'`",
        "default": "`'middle'`",
        "typeDefinition": [
          "small",
          "large"
        ],
        "pureDefault": "middle"
      }
    ],
    "types": {},
    "doc": "/components/collapse/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/collapse",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-collapse-panel",
    "title": "nz-collapse-panel.title",
    "description": "nz-collapse-panel.description",
    "whenToUse": "nz-collapse-panel.whenToUse",
    "properties": [
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-collapse-panel.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzHeader",
        "inputType": 0,
        "description": "nz-collapse-panel.nzHeader.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzExpandedIcon",
        "inputType": 0,
        "description": "nz-collapse-panel.nzExpandedIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-collapse-panel.nzExtra.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzShowArrow",
        "inputType": 0,
        "description": "nz-collapse-panel.nzShowArrow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzActive",
        "inputType": 2,
        "description": "nz-collapse-panel.nzActive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzCollapsible",
        "inputType": 0,
        "description": "nz-collapse-panel.nzCollapsible.description",
        "type": "Enum",
        "typeRaw": "`'header' | 'icon' | 'disabled'`",
        "default": "",
        "typeDefinition": [
          "header",
          "icon",
          "disabled"
        ]
      },
      {
        "name": "nzActiveChange",
        "inputType": 1,
        "description": "nz-collapse-panel.nzActiveChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/collapse/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/collapse",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-color-picker",
    "title": "nz-color-picker.title",
    "description": "nz-color-picker.description",
    "whenToUse": "nz-color-picker.whenToUse",
    "properties": [
      {
        "name": "nzFormat",
        "inputType": 0,
        "description": "nz-color-picker.nzFormat.description",
        "type": "Enum",
        "typeRaw": "`'rgb' | 'hex' | 'hsb'`",
        "default": "`'hex'`",
        "typeDefinition": [
          "rgb",
          "hex",
          "hsb"
        ],
        "pureDefault": "hex"
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-color-picker.nzValue.description",
        "type": "string",
        "typeRaw": "`string | NzColor`",
        "default": "",
        "complexType": "NzColor"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-color-picker.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzDefaultValue",
        "inputType": 0,
        "description": "nz-color-picker.nzDefaultValue.description",
        "type": "string",
        "typeRaw": "`string | NzColor`",
        "default": "`false`",
        "complexType": "NzColor",
        "pureDefault": "false"
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-color-picker.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTrigger",
        "inputType": 0,
        "description": "nz-color-picker.nzTrigger.description",
        "type": "Enum",
        "typeRaw": "`'hover' | 'click'`",
        "default": "`'click'`",
        "typeDefinition": [
          "hover",
          "click"
        ],
        "pureDefault": "click"
      },
      {
        "name": "nzShowText",
        "inputType": 0,
        "description": "nz-color-picker.nzShowText.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOpen",
        "inputType": 0,
        "description": "nz-color-picker.nzOpen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-color-picker.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzDisabledAlpha",
        "inputType": 0,
        "description": "nz-color-picker.nzDisabledAlpha.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-color-picker.nzTitle.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void> | string`",
        "default": ""
      },
      {
        "name": "nzOnChange",
        "inputType": 1,
        "description": "nz-color-picker.nzOnChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{ color: NzColor; format: string }>`",
        "default": ""
      },
      {
        "name": "nzOnClear",
        "inputType": 1,
        "description": "nz-color-picker.nzOnClear.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzOnFormatChange",
        "inputType": 1,
        "description": "nz-color-picker.nzOnFormatChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<'rgb'｜'hex'｜'hsb'>`",
        "default": ""
      },
      {
        "name": "nzOnOpenChange",
        "inputType": 1,
        "description": "nz-color-picker.nzOnOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {
      "NzColor": [
        {
          "name": "toHex",
          "inputType": 0,
          "description": "nz-color-picker.toHex.description",
          "type": "function",
          "typeRaw": "`() => string`",
          "default": ""
        },
        {
          "name": "toHexString",
          "inputType": 0,
          "description": "nz-color-picker.toHexString.description",
          "type": "function",
          "typeRaw": "`() => string`",
          "default": ""
        },
        {
          "name": "toHsb",
          "inputType": 0,
          "description": "nz-color-picker.toHsb.description",
          "type": "function",
          "typeRaw": "`() => ({ h: number, s: number, b: number, a number })`",
          "default": ""
        },
        {
          "name": "toHsbString",
          "inputType": 0,
          "description": "nz-color-picker.toHsbString.description",
          "type": "function",
          "typeRaw": "`() => string`",
          "default": ""
        },
        {
          "name": "toRgb",
          "inputType": 0,
          "description": "nz-color-picker.toRgb.description",
          "type": "function",
          "typeRaw": "`() => ({ r: number, g: number, b: number, a number })`",
          "default": ""
        },
        {
          "name": "toRgbString",
          "inputType": 0,
          "description": "nz-color-picker.toRgbString.description",
          "type": "function",
          "typeRaw": "`() => string`",
          "default": ""
        }
      ]
    },
    "doc": "/components/color-picker/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/color-picker",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-color-block",
    "title": "nz-color-block.title",
    "description": "nz-color-block.description",
    "whenToUse": "nz-color-block.whenToUse",
    "properties": [
      {
        "name": "nzColor",
        "inputType": 0,
        "description": "nz-color-block.nzColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'#1677ff'`",
        "pureDefault": "#1677ff"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-color-block.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzOnClick",
        "inputType": 0,
        "description": "nz-color-block.nzOnClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/color-picker/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/color-picker",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-comment",
    "title": "nz-comment.title",
    "description": "nz-comment.description",
    "whenToUse": "nz-comment.whenToUse",
    "properties": [
      {
        "name": "nzAuthor",
        "inputType": 0,
        "description": "nz-comment.nzAuthor.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDatetime",
        "inputType": 0,
        "description": "nz-comment.nzDatetime.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/comment/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/comment",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-comment-avatar",
    "title": "nz-comment-avatar.title",
    "description": "nz-comment-avatar.description",
    "whenToUse": "nz-comment-avatar.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/comment/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/comment",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-comment-content",
    "title": "nz-comment-content.title",
    "description": "nz-comment-content.description",
    "whenToUse": "nz-comment-content.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/comment/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/comment",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-comment-action",
    "title": "nz-comment-action.title",
    "description": "nz-comment-action.description",
    "whenToUse": "nz-comment-action.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/comment/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/comment",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-cron-expression",
    "title": "nz-cron-expression.title",
    "description": "nz-cron-expression.description",
    "whenToUse": "nz-cron-expression.whenToUse",
    "properties": [
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-cron-expression.nzType.description",
        "type": "Enum",
        "typeRaw": "`'linux'｜'spring'`",
        "default": "`linux`",
        "typeDefinition": [
          "linux",
          "spring"
        ],
        "pureDefault": "linux"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-cron-expression.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzBorderless",
        "inputType": 0,
        "description": "nz-cron-expression.nzBorderless.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-cron-expression.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large'｜'small'｜'default'`",
        "default": "`default`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzCollapseDisable",
        "inputType": 0,
        "description": "nz-cron-expression.nzCollapseDisable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-cron-expression.nzExtra.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSemantic",
        "inputType": 0,
        "description": "nz-cron-expression.nzSemantic.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/cron-expression/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/cron-expression",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-date-picker",
    "title": "nz-date-picker.title",
    "description": "nz-date-picker.description",
    "whenToUse": "nz-date-picker.whenToUse",
    "properties": [
      {
        "name": "nzDateRender",
        "inputType": 0,
        "description": "nz-date-picker.nzDateRender.description",
        "type": "string",
        "typeRaw": "-",
        "default": "`TemplateRef<Date> | string | ((d: Date) => TemplateRef<Date> | string)`",
        "pureDefault": "TemplateRef<Date> | string | ((d: Date) => TemplateRef<Date> | string)",
        "_common": true
      },
      {
        "name": "nzDisabledTime",
        "inputType": 0,
        "description": "nz-date-picker.nzDisabledTime.description",
        "type": "function",
        "typeRaw": "`(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzShowTime",
        "inputType": 0,
        "description": "nz-date-picker.nzShowTime.description",
        "type": "object",
        "typeRaw": "`object | boolean`",
        "default": "[TimePicker Options](/components/time-picker/en#api)",
        "pureDefault": "[TimePicker Options](/components/time-picker/en#api)",
        "_common": true
      },
      {
        "name": "nzShowToday",
        "inputType": 0,
        "description": "nz-date-picker.nzShowToday.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "_common": true
      },
      {
        "name": "nzShowNow",
        "inputType": 0,
        "description": "nz-date-picker.nzShowNow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "_common": true
      },
      {
        "name": "nzShowWeekNumber",
        "inputType": 0,
        "description": "nz-date-picker.nzShowWeekNumber.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzOnOk",
        "inputType": 1,
        "description": "nz-date-picker.nzOnOk.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Date>`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-date-picker.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-date-picker.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "_common": true
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-date-picker.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-date-picker.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzDefaultPickerValue",
        "inputType": 0,
        "description": "nz-date-picker.nzDefaultPickerValue.description",
        "type": "object",
        "typeRaw": "`Date | Date[]`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-date-picker.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true,
        "forceInputType": 0
      },
      {
        "name": "nzDisabledDate",
        "inputType": 0,
        "description": "nz-date-picker.nzDisabledDate.description",
        "type": "function",
        "typeRaw": "`(current: Date) => boolean`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzDropdownClassName",
        "inputType": 0,
        "description": "nz-date-picker.nzDropdownClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzFormat",
        "inputType": 0,
        "description": "nz-date-picker.nzFormat.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzInputReadOnly",
        "inputType": 0,
        "description": "nz-date-picker.nzInputReadOnly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzLocale",
        "inputType": 0,
        "description": "nz-date-picker.nzLocale.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "[default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)",
        "pureDefault": "[default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)",
        "_common": true
      },
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-date-picker.nzMode.description",
        "type": "Date",
        "typeRaw": "`'date' | 'week' | 'month' | 'quarter'  | 'year'`",
        "default": "`'date'`",
        "pureDefault": "date",
        "_common": true
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-date-picker.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string | string[]`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzPopupStyle",
        "inputType": 0,
        "description": "nz-date-picker.nzPopupStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "`{}`",
        "pureDefault": "{}",
        "_common": true
      },
      {
        "name": "nzRenderExtraFooter",
        "inputType": 0,
        "description": "nz-date-picker.nzRenderExtraFooter.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef | string | (() => TemplateRef | string)`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-date-picker.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small'`",
        "default": "",
        "typeDefinition": [
          "large",
          "small"
        ],
        "_common": true
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-date-picker.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ],
        "_common": true
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-date-picker.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'`",
        "default": "`'bottomLeft'`",
        "typeDefinition": [
          "bottomLeft",
          "bottomRight",
          "topLeft",
          "topRight"
        ],
        "pureDefault": "bottomLeft",
        "_common": true
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-date-picker.nzSuffixIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzVariant",
        "inputType": 0,
        "description": "nz-date-picker.nzVariant.description",
        "type": "Enum",
        "typeRaw": "`'outlined' | 'borderless' | 'filled' | 'underlined'`",
        "default": "`'outlined'`",
        "typeDefinition": [
          "outlined",
          "borderless",
          "filled",
          "underlined"
        ],
        "pureDefault": "outlined",
        "_common": true
      },
      {
        "name": "nzInline",
        "inputType": 0,
        "description": "nz-date-picker.nzInline.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzOnOpenChange",
        "inputType": 1,
        "description": "nz-date-picker.nzOnOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzOnPanelChange",
        "inputType": 1,
        "description": "nz-date-picker.nzOnPanelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzPanelChangeType>`",
        "default": "",
        "_common": true
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-date-picker.ngModel.description",
        "type": "object",
        "typeRaw": "`Date`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "description": "nz-date-picker.ngModelChange.description"
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-date-picker.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-date-picker.name.description"
      }
    ],
    "types": {},
    "doc": "/components/date-picker/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/date-picker",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-range-picker",
    "title": "nz-range-picker.title",
    "description": "nz-range-picker.description",
    "whenToUse": "nz-range-picker.whenToUse",
    "properties": [
      {
        "name": "nzShowTime",
        "inputType": 0,
        "description": "nz-range-picker.nzShowTime.description",
        "type": "object",
        "typeRaw": "`object | boolean`",
        "default": "[TimePicker Options](/components/time-picker/en#api)",
        "pureDefault": "[TimePicker Options](/components/time-picker/en#api)",
        "_common": true
      },
      {
        "name": "nzDisabledTime",
        "inputType": 0,
        "description": "nz-range-picker.nzDisabledTime.description",
        "type": "function",
        "typeRaw": "`(current: Date, partial: 'start' | 'end') => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzShowWeekNumber",
        "inputType": 0,
        "description": "nz-range-picker.nzShowWeekNumber.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzOnOk",
        "inputType": 1,
        "description": "nz-range-picker.nzOnOk.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Date[]>`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-range-picker.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-range-picker.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "_common": true
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-range-picker.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-range-picker.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzDefaultPickerValue",
        "inputType": 0,
        "description": "nz-range-picker.nzDefaultPickerValue.description",
        "type": "object",
        "typeRaw": "`Date | Date[]`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-range-picker.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true,
        "forceInputType": 0
      },
      {
        "name": "nzDisabledDate",
        "inputType": 0,
        "description": "nz-range-picker.nzDisabledDate.description",
        "type": "function",
        "typeRaw": "`(current: Date) => boolean`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzDropdownClassName",
        "inputType": 0,
        "description": "nz-range-picker.nzDropdownClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzFormat",
        "inputType": 0,
        "description": "nz-range-picker.nzFormat.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzInputReadOnly",
        "inputType": 0,
        "description": "nz-range-picker.nzInputReadOnly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzLocale",
        "inputType": 0,
        "description": "nz-range-picker.nzLocale.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "[default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)",
        "pureDefault": "[default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)",
        "_common": true
      },
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-range-picker.nzMode.description",
        "type": "Date",
        "typeRaw": "`'date' | 'week' | 'month' | 'quarter'  | 'year'`",
        "default": "`'date'`",
        "pureDefault": "date",
        "_common": true
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-range-picker.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string | string[]`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzPopupStyle",
        "inputType": 0,
        "description": "nz-range-picker.nzPopupStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "`{}`",
        "pureDefault": "{}",
        "_common": true
      },
      {
        "name": "nzRenderExtraFooter",
        "inputType": 0,
        "description": "nz-range-picker.nzRenderExtraFooter.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef | string | (() => TemplateRef | string)`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-range-picker.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small'`",
        "default": "",
        "typeDefinition": [
          "large",
          "small"
        ],
        "_common": true
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-range-picker.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ],
        "_common": true
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-range-picker.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'`",
        "default": "`'bottomLeft'`",
        "typeDefinition": [
          "bottomLeft",
          "bottomRight",
          "topLeft",
          "topRight"
        ],
        "pureDefault": "bottomLeft",
        "_common": true
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-range-picker.nzSuffixIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzVariant",
        "inputType": 0,
        "description": "nz-range-picker.nzVariant.description",
        "type": "Enum",
        "typeRaw": "`'outlined' | 'borderless' | 'filled' | 'underlined'`",
        "default": "`'outlined'`",
        "typeDefinition": [
          "outlined",
          "borderless",
          "filled",
          "underlined"
        ],
        "pureDefault": "outlined",
        "_common": true
      },
      {
        "name": "nzInline",
        "inputType": 0,
        "description": "nz-range-picker.nzInline.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzOnOpenChange",
        "inputType": 1,
        "description": "nz-range-picker.nzOnOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzOnPanelChange",
        "inputType": 1,
        "description": "nz-range-picker.nzOnPanelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzPanelChangeType>`",
        "default": "",
        "_common": true
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-range-picker.ngModel.description",
        "type": "Array",
        "typeRaw": "`Date[]`",
        "default": ""
      },
      {
        "name": "nzRanges",
        "inputType": 0,
        "description": "nz-range-picker.nzRanges.description",
        "type": "object",
        "typeRaw": "`{ [ key: string ]: Date[] } | { [ key: string ]: () => Date[] }`",
        "default": ""
      },
      {
        "name": "nzSeparator",
        "inputType": 0,
        "description": "nz-range-picker.nzSeparator.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef`",
        "default": "`'~'`",
        "pureDefault": "~"
      },
      {
        "name": "nzOnCalendarChange",
        "inputType": 1,
        "description": "nz-range-picker.nzOnCalendarChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Date[]>`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "description": "nz-range-picker.ngModelChange.description"
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-range-picker.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-range-picker.name.description"
      }
    ],
    "types": {},
    "doc": "/components/date-picker/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/date-picker",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-descriptions",
    "title": "nz-descriptions.title",
    "description": "nz-descriptions.description",
    "whenToUse": "nz-descriptions.whenToUse",
    "properties": [
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-descriptions.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-descriptions.nzExtra.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzBordered",
        "inputType": 0,
        "description": "nz-descriptions.nzBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzColumn",
        "inputType": 0,
        "description": "nz-descriptions.nzColumn.description",
        "type": "number",
        "typeRaw": "`number | object`",
        "default": "`{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }`",
        "pureDefault": "{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-descriptions.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'middle' | 'small'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "middle",
          "small"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzColon",
        "inputType": 0,
        "description": "nz-descriptions.nzColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzLayout",
        "inputType": 0,
        "description": "nz-descriptions.nzLayout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal' | 'vertical'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical"
        ],
        "pureDefault": "horizontal"
      }
    ],
    "types": {},
    "doc": "/components/descriptions/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/descriptions",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-descriptions-item",
    "title": "nz-descriptions-item.title",
    "description": "nz-descriptions-item.description",
    "whenToUse": "nz-descriptions-item.whenToUse",
    "properties": [
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-descriptions-item.nzTitle.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`string | TemplateRef<void>`",
        "pureDefault": "string | TemplateRef<void>"
      },
      {
        "name": "nzSpan",
        "inputType": 0,
        "description": "nz-descriptions-item.nzSpan.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      }
    ],
    "types": {},
    "doc": "/components/descriptions/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/descriptions",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-divider",
    "title": "nz-divider.title",
    "description": "nz-divider.description",
    "whenToUse": "nz-divider.whenToUse",
    "properties": [
      {
        "name": "nzDashed",
        "inputType": 0,
        "description": "nz-divider.nzDashed.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-divider.nzType.description",
        "type": "Enum",
        "typeRaw": "`'horizontal' | 'vertical'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzText",
        "inputType": 0,
        "description": "nz-divider.nzText.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPlain",
        "inputType": 0,
        "description": "nz-divider.nzPlain.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOrientation",
        "inputType": 0,
        "description": "nz-divider.nzOrientation.description",
        "type": "Enum",
        "typeRaw": "`'center' | 'left' | 'right'`",
        "default": "`'center'`",
        "typeDefinition": [
          "center",
          "left",
          "right"
        ],
        "pureDefault": "center"
      },
      {
        "name": "nzVariant",
        "inputType": 0,
        "description": "nz-divider.nzVariant.description",
        "type": "Enum",
        "typeRaw": "`'dashed' | 'dotted' | 'solid'`",
        "default": "`'solid'`",
        "typeDefinition": [
          "dashed",
          "dotted",
          "solid"
        ],
        "pureDefault": "solid"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-divider.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'small' | 'middle' | 'large'`",
        "default": "",
        "typeDefinition": [
          "small",
          "middle",
          "large"
        ]
      }
    ],
    "types": {},
    "doc": "/components/divider/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/divider",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-drawer",
    "title": "nz-drawer.title",
    "description": "nz-drawer.description",
    "whenToUse": "nz-drawer.whenToUse",
    "properties": [
      {
        "name": "nzClosable",
        "inputType": 0,
        "description": "nz-drawer.nzClosable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzCloseIcon",
        "inputType": 0,
        "description": "nz-drawer.nzCloseIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void> | null`",
        "default": "`'close'`",
        "pureDefault": "close"
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-drawer.nzExtra.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void> | null`",
        "default": ""
      },
      {
        "name": "nzMask",
        "inputType": 0,
        "description": "nz-drawer.nzMask.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzMaskClosable",
        "inputType": 0,
        "description": "nz-drawer.nzMaskClosable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzCloseOnNavigation",
        "inputType": 0,
        "description": "nz-drawer.nzCloseOnNavigation.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzKeyboard",
        "inputType": 0,
        "description": "nz-drawer.nzKeyboard.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzMaskStyle",
        "inputType": 0,
        "description": "nz-drawer.nzMaskStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "`{}`",
        "pureDefault": "{}"
      },
      {
        "name": "nzBodyStyle",
        "inputType": 0,
        "description": "nz-drawer.nzBodyStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "`{}`",
        "pureDefault": "{}"
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-drawer.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzFooter",
        "inputType": 0,
        "description": "nz-drawer.nzFooter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzVisible",
        "inputType": 0,
        "description": "nz-drawer.nzVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-drawer.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'right' | 'bottom' | 'left'`",
        "default": "`'right'`",
        "typeDefinition": [
          "top",
          "right",
          "bottom",
          "left"
        ],
        "pureDefault": "right"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-drawer.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'large'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "large"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-drawer.nzWidth.description",
        "type": "number",
        "typeRaw": "`number | string`",
        "default": ""
      },
      {
        "name": "nzHeight",
        "inputType": 0,
        "description": "nz-drawer.nzHeight.description",
        "type": "number",
        "typeRaw": "`number | string`",
        "default": ""
      },
      {
        "name": "nzOffsetX",
        "inputType": 0,
        "description": "nz-drawer.nzOffsetX.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzOffsetY",
        "inputType": 0,
        "description": "nz-drawer.nzOffsetY.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzWrapClassName",
        "inputType": 0,
        "description": "nz-drawer.nzWrapClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzZIndex",
        "inputType": 0,
        "description": "nz-drawer.nzZIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1000`",
        "pureDefault": "1000"
      },
      {
        "name": "nzOnClose",
        "inputType": 1,
        "description": "nz-drawer.nzOnClose.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/drawer/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/drawer",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-dropdown",
    "title": "nz-dropdown.title",
    "description": "nz-dropdown.description",
    "whenToUse": "nz-dropdown.whenToUse",
    "properties": [
      {
        "name": "nzDropdownMenu",
        "inputType": 0,
        "description": "nz-dropdown.nzDropdownMenu.description",
        "type": "object",
        "typeRaw": "`NzDropdownMenuComponent`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-dropdown.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-dropdown.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'`",
        "default": "`'bottomLeft'`",
        "typeDefinition": [
          "bottomLeft",
          "bottomCenter",
          "bottomRight",
          "topLeft",
          "topCenter",
          "topRight"
        ],
        "pureDefault": "bottomLeft"
      },
      {
        "name": "nzTrigger",
        "inputType": 0,
        "description": "nz-dropdown.nzTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'hover'`",
        "default": "`'hover'`",
        "typeDefinition": [
          "click",
          "hover"
        ],
        "pureDefault": "hover"
      },
      {
        "name": "nzClickHide",
        "inputType": 0,
        "description": "nz-dropdown.nzClickHide.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzVisible",
        "inputType": 2,
        "description": "nz-dropdown.nzVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzOverlayClassName",
        "inputType": 0,
        "description": "nz-dropdown.nzOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzOverlayStyle",
        "inputType": 0,
        "description": "nz-dropdown.nzOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzVisibleChange",
        "inputType": 1,
        "description": "nz-dropdown.nzVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzArrow",
        "inputType": 0,
        "description": "nz-dropdown.nzArrow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/dropdown/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/dropdown",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-dropdown-menu",
    "title": "nz-dropdown-menu.title",
    "description": "nz-dropdown-menu.description",
    "whenToUse": "nz-dropdown-menu.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/dropdown/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/dropdown",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-empty",
    "title": "nz-empty.title",
    "description": "nz-empty.description",
    "whenToUse": "nz-empty.whenToUse",
    "properties": [
      {
        "name": "nzNotFoundImage",
        "inputType": 0,
        "description": "nz-empty.nzNotFoundImage.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-empty.nzNotFoundContent.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void> | null`",
        "default": ""
      },
      {
        "name": "nzNotFoundFooter",
        "inputType": 0,
        "description": "nz-empty.nzNotFoundFooter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/empty/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/empty",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-image",
    "title": "nz-image.title",
    "description": "nz-image.description",
    "whenToUse": "nz-image.whenToUse",
    "properties": [
      {
        "name": "nzSrc",
        "inputType": 0,
        "description": "nz-image.nzSrc.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAlt",
        "inputType": 0,
        "description": "nz-image.nzAlt.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-image.nzWidth.description",
        "type": "number",
        "typeRaw": "`number|string`",
        "default": "`auto`",
        "pureDefault": "auto"
      },
      {
        "name": "nzHeight",
        "inputType": 0,
        "description": "nz-image.nzHeight.description",
        "type": "number",
        "typeRaw": "`number|string`",
        "default": "`auto`",
        "pureDefault": "auto"
      },
      {
        "name": "nzAutoSrcset",
        "inputType": 0,
        "description": "nz-image.nzAutoSrcset.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSrcLoader",
        "inputType": 0,
        "description": "nz-image.nzSrcLoader.description",
        "type": "object",
        "typeRaw": "`NzImageSrcLoader`",
        "default": "`defaultImageSrcLoader`",
        "pureDefault": "defaultImageSrcLoader"
      },
      {
        "name": "nzPriority",
        "inputType": 0,
        "description": "nz-image.nzPriority.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/experimental-image/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/experimental-image",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-flex",
    "title": "nz-flex.title",
    "description": "nz-flex.description",
    "whenToUse": "nz-flex.whenToUse",
    "properties": [
      {
        "name": "nzVertical",
        "inputType": 0,
        "description": "nz-flex.nzVertical.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzJustify",
        "inputType": 0,
        "description": "nz-flex.nzJustify.description",
        "type": "string",
        "typeRaw": "reference [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)",
        "default": "`'normal'`",
        "pureDefault": "normal"
      },
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "nz-flex.nzAlign.description",
        "type": "string",
        "typeRaw": "reference [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)",
        "default": "`'normal'`",
        "pureDefault": "normal"
      },
      {
        "name": "nzGap",
        "inputType": 0,
        "description": "nz-flex.nzGap.description",
        "type": "Enum",
        "typeRaw": "`'small' | 'middle' | 'large' | number | string`",
        "default": "`0`",
        "typeDefinition": [
          "small",
          "middle",
          "large",
          "number",
          "string"
        ],
        "pureDefault": "0"
      },
      {
        "name": "nzWrap",
        "inputType": 0,
        "description": "nz-flex.nzWrap.description",
        "type": "string",
        "typeRaw": "reference [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)",
        "default": "`'nowrap'`",
        "pureDefault": "nowrap"
      },
      {
        "name": "nzFlex",
        "inputType": 0,
        "description": "nz-flex.nzFlex.description",
        "type": "string",
        "typeRaw": "reference [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)",
        "default": "`'unset'`",
        "pureDefault": "unset"
      }
    ],
    "types": {},
    "doc": "/components/flex/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/flex",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-float-button-group",
    "title": "nz-float-button-group.title",
    "description": "nz-float-button-group.description",
    "whenToUse": "nz-float-button-group.whenToUse",
    "properties": [
      {
        "name": "nzTrigger",
        "inputType": 0,
        "description": "nz-float-button-group.nzTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'hover'`",
        "default": "",
        "typeDefinition": [
          "click",
          "hover"
        ]
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-float-button-group.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'right' | 'bottom' | 'left'`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "right",
          "bottom",
          "left"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzOpen",
        "inputType": 0,
        "description": "nz-float-button-group.nzOpen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzOnOpenChange",
        "inputType": 1,
        "description": "nz-float-button-group.nzOnOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/float-button/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/float-button",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-float-button-top",
    "title": "nz-float-button-top.title",
    "description": "nz-float-button-top.description",
    "whenToUse": "nz-float-button-top.whenToUse",
    "properties": [
      {
        "name": "nzVisibilityHeight",
        "inputType": 0,
        "description": "nz-float-button-top.nzVisibilityHeight.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`400`",
        "pureDefault": "400"
      },
      {
        "name": "nzTarget",
        "inputType": 0,
        "description": "nz-float-button-top.nzTarget.description",
        "type": "string",
        "typeRaw": "`string | Element`",
        "default": "`window`",
        "pureDefault": "window"
      },
      {
        "name": "nzDuration",
        "inputType": 0,
        "description": "nz-float-button-top.nzDuration.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`450`",
        "pureDefault": "450"
      }
    ],
    "types": {},
    "doc": "/components/float-button/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/float-button",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-form",
    "title": "nz-form.title",
    "description": "nz-form.description",
    "whenToUse": "nz-form.whenToUse",
    "properties": [
      {
        "name": "nzLayout",
        "inputType": 0,
        "description": "nz-form.nzLayout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal' | 'vertical' | 'inline'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical",
          "inline"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzAutoTips",
        "inputType": 0,
        "description": "nz-form.nzAutoTips.description",
        "type": "object",
        "typeRaw": "`Record<string, Record<string, string>>`",
        "default": "`{}`",
        "pureDefault": "{}"
      },
      {
        "name": "nzDisableAutoTips",
        "inputType": 0,
        "description": "nz-form.nzDisableAutoTips.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzNoColon",
        "inputType": 0,
        "description": "nz-form.nzNoColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipIcon",
        "inputType": 0,
        "description": "nz-form.nzTooltipIcon.description",
        "type": "string",
        "typeRaw": "`string | { type: string; theme: ThemeType }`",
        "default": "`{ type: 'question-circle', theme: 'outline' }`",
        "pureDefault": "{ type: 'question-circle', theme: 'outline' }"
      },
      {
        "name": "nzLabelAlign",
        "inputType": 0,
        "description": "nz-form.nzLabelAlign.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'right'`",
        "default": "`'right'`",
        "typeDefinition": [
          "left",
          "right"
        ],
        "pureDefault": "right"
      },
      {
        "name": "nzLabelWrap",
        "inputType": 0,
        "description": "nz-form.nzLabelWrap.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzRequiredMark",
        "inputType": 0,
        "description": "nz-form.nzRequiredMark.description",
        "type": "object",
        "typeRaw": "`NzRequiredMark`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "formGroup",
        "inputType": 0,
        "type": "object",
        "typeRaw": "`object`",
        "description": "nz-form.formGroup.description"
      },
      {
        "name": "ngSubmit",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "description": "nz-form.ngSubmit.description"
      }
    ],
    "types": {},
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form",
    "standalone": false,
    "snippet": "<form __$1>$0</form>"
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-form-item",
    "title": "nz-form-item.title",
    "description": "nz-form-item.description",
    "whenToUse": "nz-form-item.whenToUse",
    "properties": [
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "nz-form-item.nzAlign.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'middle' | 'bottom'`",
        "default": "",
        "typeDefinition": [
          "top",
          "middle",
          "bottom"
        ]
      },
      {
        "name": "nzGutter",
        "inputType": 0,
        "description": "nz-form-item.nzGutter.description",
        "type": "Enum",
        "typeRaw": "`string | number | object | [number, number] | [object, object]`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzJustify",
        "inputType": 0,
        "description": "nz-form-item.nzJustify.description",
        "type": "Enum",
        "typeRaw": "`'start' | 'end' | 'center' | 'space-around' | 'space-between'`",
        "default": "",
        "typeDefinition": [
          "start",
          "end",
          "center",
          "space-around",
          "space-between"
        ]
      },
      {
        "name": "nzRequired",
        "inputType": 0,
        "description": "nz-form-item.nzRequired.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzNoColon",
        "inputType": 0,
        "description": "nz-form-item.nzNoColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFor",
        "inputType": 0,
        "description": "nz-form-item.nzFor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipTitle",
        "inputType": 0,
        "description": "nz-form-item.nzTooltipTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTooltipIcon",
        "inputType": 0,
        "description": "nz-form-item.nzTooltipIcon.description",
        "type": "string",
        "typeRaw": "`string | NzFormTooltipIcon`",
        "default": ""
      },
      {
        "name": "nzLabelAlign",
        "inputType": 0,
        "description": "nz-form-item.nzLabelAlign.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'right'`",
        "default": "`'right'`",
        "typeDefinition": [
          "left",
          "right"
        ],
        "pureDefault": "right"
      },
      {
        "name": "nzLabelWrap",
        "inputType": 0,
        "description": "nz-form-item.nzLabelWrap.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-form-label",
    "title": "nz-form-label.title",
    "description": "nz-form-label.description",
    "whenToUse": "nz-form-label.whenToUse",
    "properties": [
      {
        "name": "nzFlex",
        "inputType": 0,
        "description": "nz-form-label.nzFlex.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzOffset",
        "inputType": 0,
        "description": "nz-form-label.nzOffset.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzOrder",
        "inputType": 0,
        "description": "nz-form-label.nzOrder.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPull",
        "inputType": 0,
        "description": "nz-form-label.nzPull.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPush",
        "inputType": 0,
        "description": "nz-form-label.nzPush.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSpan",
        "inputType": 0,
        "description": "nz-form-label.nzSpan.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXs",
        "inputType": 0,
        "description": "nz-form-label.nzXs.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSm",
        "inputType": 0,
        "description": "nz-form-label.nzSm.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzMd",
        "inputType": 0,
        "description": "nz-form-label.nzMd.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzLg",
        "inputType": 0,
        "description": "nz-form-label.nzLg.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXl",
        "inputType": 0,
        "description": "nz-form-label.nzXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXXl",
        "inputType": 0,
        "description": "nz-form-label.nzXXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzRequired",
        "inputType": 0,
        "description": "nz-form-label.nzRequired.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzNoColon",
        "inputType": 0,
        "description": "nz-form-label.nzNoColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFor",
        "inputType": 0,
        "description": "nz-form-label.nzFor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipTitle",
        "inputType": 0,
        "description": "nz-form-label.nzTooltipTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTooltipIcon",
        "inputType": 0,
        "description": "nz-form-label.nzTooltipIcon.description",
        "type": "string",
        "typeRaw": "`string | NzFormTooltipIcon`",
        "default": ""
      },
      {
        "name": "nzLabelAlign",
        "inputType": 0,
        "description": "nz-form-label.nzLabelAlign.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'right'`",
        "default": "`'right'`",
        "typeDefinition": [
          "left",
          "right"
        ],
        "pureDefault": "right"
      },
      {
        "name": "nzLabelWrap",
        "inputType": 0,
        "description": "nz-form-label.nzLabelWrap.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-form-control",
    "title": "nz-form-control.title",
    "description": "nz-form-control.description",
    "whenToUse": "nz-form-control.whenToUse",
    "properties": [
      {
        "name": "nzFlex",
        "inputType": 0,
        "description": "nz-form-control.nzFlex.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzOffset",
        "inputType": 0,
        "description": "nz-form-control.nzOffset.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzOrder",
        "inputType": 0,
        "description": "nz-form-control.nzOrder.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPull",
        "inputType": 0,
        "description": "nz-form-control.nzPull.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPush",
        "inputType": 0,
        "description": "nz-form-control.nzPush.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSpan",
        "inputType": 0,
        "description": "nz-form-control.nzSpan.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXs",
        "inputType": 0,
        "description": "nz-form-control.nzXs.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSm",
        "inputType": 0,
        "description": "nz-form-control.nzSm.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzMd",
        "inputType": 0,
        "description": "nz-form-control.nzMd.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzLg",
        "inputType": 0,
        "description": "nz-form-control.nzLg.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXl",
        "inputType": 0,
        "description": "nz-form-control.nzXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXXl",
        "inputType": 0,
        "description": "nz-form-control.nzXXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzValidateStatus",
        "inputType": 0,
        "description": "nz-form-control.nzValidateStatus.description",
        "type": "Enum",
        "typeRaw": "`'success' | 'warning' | 'error' | 'validating' | FormControl | NgModel`",
        "default": "first `FormControl` or `NgModel` in `nz-form-control`",
        "typeDefinition": [
          "success",
          "warning",
          "error",
          "validating",
          "FormControl",
          "NgModel"
        ],
        "pureDefault": "first `FormControl` or `NgModel` in `nz-form-control`"
      },
      {
        "name": "nzHasFeedback",
        "inputType": 0,
        "description": "nz-form-control.nzHasFeedback.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-form-control.nzExtra.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSuccessTip",
        "inputType": 0,
        "description": "nz-form-control.nzSuccessTip.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<{ $implicit: FormControl | NgModel }>`",
        "default": ""
      },
      {
        "name": "nzWarningTip",
        "inputType": 0,
        "description": "nz-form-control.nzWarningTip.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<{ $implicit: FormControl | NgModel }>`",
        "default": ""
      },
      {
        "name": "nzErrorTip",
        "inputType": 0,
        "description": "nz-form-control.nzErrorTip.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<{ $implicit: FormControl | NgModel }>`",
        "default": ""
      },
      {
        "name": "nzValidatingTip",
        "inputType": 0,
        "description": "nz-form-control.nzValidatingTip.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<{ $implicit: FormControl | NgModel }>`",
        "default": ""
      },
      {
        "name": "nzAutoTips",
        "inputType": 0,
        "description": "nz-form-control.nzAutoTips.description",
        "type": "object",
        "typeRaw": "`Record<string, string | Record<string, string>>`",
        "default": ""
      },
      {
        "name": "nzDisableAutoTips",
        "inputType": 0,
        "description": "nz-form-control.nzDisableAutoTips.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-form-split",
    "title": "nz-form-split.title",
    "description": "nz-form-split.description",
    "whenToUse": "nz-form-split.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-form-text",
    "title": "nz-form-text.title",
    "description": "nz-form-text.description",
    "whenToUse": "nz-form-text.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-graph",
    "title": "nz-graph.title",
    "description": "nz-graph.description",
    "whenToUse": "nz-graph.whenToUse",
    "properties": [
      {
        "name": "nzGraphData",
        "inputType": 0,
        "description": "nz-graph.nzGraphData.description",
        "type": "object",
        "typeRaw": "`NzGraphData(data: NzGraphDataDef?)`",
        "default": "``",
        "pureDefault": ""
      },
      {
        "name": "nzRankDirection",
        "inputType": 0,
        "description": "nz-graph.nzRankDirection.description",
        "type": "object",
        "typeRaw": "`TB` | `BT` | `LR` | `RL`",
        "default": "`LR`",
        "pureDefault": "LR"
      },
      {
        "name": "nzAutoSize",
        "inputType": 0,
        "description": "nz-graph.nzAutoSize.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzGraphLayoutConfig",
        "inputType": 0,
        "description": "nz-graph.nzGraphLayoutConfig.description",
        "type": "object",
        "typeRaw": "`NzGraphLayoutConfig`",
        "default": "``",
        "pureDefault": ""
      }
    ],
    "types": {},
    "doc": "/components/graph/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/graph",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-graph-zoom",
    "title": "nz-graph-zoom.title",
    "description": "nz-graph-zoom.description",
    "whenToUse": "nz-graph-zoom.whenToUse",
    "properties": [
      {
        "name": "nzZoom",
        "inputType": 2,
        "description": "nz-graph-zoom.nzZoom.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzMinZoom",
        "inputType": 0,
        "description": "nz-graph-zoom.nzMinZoom.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzMaxZoom",
        "inputType": 0,
        "description": "nz-graph-zoom.nzMaxZoom.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`10`",
        "pureDefault": "10"
      },
      {
        "name": "nzTransformEvent",
        "inputType": 1,
        "description": "nz-graph-zoom.nzTransformEvent.description",
        "type": "function",
        "typeRaw": "`() => NzZoomTransform`",
        "default": "``",
        "pureDefault": ""
      },
      {
        "name": "fitCenter",
        "inputType": 1,
        "description": "nz-graph-zoom.fitCenter.description",
        "type": "function",
        "typeRaw": "`() => void`",
        "default": "`void`",
        "pureDefault": "void"
      },
      {
        "name": "focus",
        "inputType": 1,
        "description": "nz-graph-zoom.focus.description",
        "type": "function",
        "typeRaw": "`(e: SVGGElement, duration: number) => void`",
        "default": "`void`",
        "pureDefault": "void"
      }
    ],
    "types": {},
    "doc": "/components/graph/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/graph",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzGraphNode",
    "title": "nzGraphNode.title",
    "description": "nzGraphNode.description",
    "whenToUse": "nzGraphNode.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/graph/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/graph",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzGraphGroupNode",
    "title": "nzGraphGroupNode.title",
    "description": "nzGraphGroupNode.description",
    "whenToUse": "nzGraphGroupNode.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/graph/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/graph",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzGraphEdge",
    "title": "nzGraphEdge.title",
    "description": "nzGraphEdge.description",
    "whenToUse": "nzGraphEdge.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/graph/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/graph",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-hash-code",
    "title": "nz-hash-code.title",
    "description": "nz-hash-code.description",
    "whenToUse": "nz-hash-code.whenToUse",
    "properties": [
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-hash-code.nzValue.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-hash-code.nzTitle.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'HashCode'`",
        "pureDefault": "HashCode"
      },
      {
        "name": "nzLogo",
        "inputType": 0,
        "description": "nz-hash-code.nzLogo.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void> | string`",
        "default": ""
      },
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-hash-code.nzMode.description",
        "type": "Enum",
        "typeRaw": "`'single' | 'double' | 'strip' | 'rect'`",
        "default": "`'double'`",
        "typeDefinition": [
          "single",
          "double",
          "strip",
          "rect"
        ],
        "pureDefault": "double"
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-hash-code.nzType.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'primary'`",
        "default": "`'primary'`",
        "typeDefinition": [
          "default",
          "primary"
        ],
        "pureDefault": "primary"
      },
      {
        "name": "nzOnCopy",
        "inputType": 1,
        "description": "nz-hash-code.nzOnCopy.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/hash-code/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/hash-code",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-icon",
    "title": "nz-icon.title",
    "description": "nz-icon.description",
    "whenToUse": "nz-icon.whenToUse",
    "properties": [
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-icon.nzType.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "typeDefinition": {
          "type": "complex",
          "conditionField": "theme",
          "list": [
            {
              "conditionValue": "outline",
              "values": [
                {
                  "value": "aim",
                  "label": "aim"
                },
                {
                  "value": "alert",
                  "label": "alert"
                },
                {
                  "value": "align-right",
                  "label": "align-right"
                },
                {
                  "value": "align-center",
                  "label": "align-center"
                },
                {
                  "value": "aliwangwang",
                  "label": "aliwangwang"
                },
                {
                  "value": "amazon",
                  "label": "amazon"
                },
                {
                  "value": "ant-design",
                  "label": "ant-design"
                },
                {
                  "value": "api",
                  "label": "api"
                },
                {
                  "value": "ant-cloud",
                  "label": "ant-cloud"
                },
                {
                  "value": "align-left",
                  "label": "align-left"
                },
                {
                  "value": "apple",
                  "label": "apple"
                },
                {
                  "value": "alipay-circle",
                  "label": "alipay-circle"
                },
                {
                  "value": "appstore-add",
                  "label": "appstore-add"
                },
                {
                  "value": "alipay",
                  "label": "alipay"
                },
                {
                  "value": "arrow-down",
                  "label": "arrow-down"
                },
                {
                  "value": "arrows-alt",
                  "label": "arrows-alt"
                },
                {
                  "value": "apartment",
                  "label": "apartment"
                },
                {
                  "value": "audio",
                  "label": "audio"
                },
                {
                  "value": "audio-muted",
                  "label": "audio-muted"
                },
                {
                  "value": "arrow-up",
                  "label": "arrow-up"
                },
                {
                  "value": "android",
                  "label": "android"
                },
                {
                  "value": "aliyun",
                  "label": "aliyun"
                },
                {
                  "value": "area-chart",
                  "label": "area-chart"
                },
                {
                  "value": "arrow-left",
                  "label": "arrow-left"
                },
                {
                  "value": "backward",
                  "label": "backward"
                },
                {
                  "value": "bank",
                  "label": "bank"
                },
                {
                  "value": "baidu",
                  "label": "baidu"
                },
                {
                  "value": "barcode",
                  "label": "barcode"
                },
                {
                  "value": "bars",
                  "label": "bars"
                },
                {
                  "value": "behance-square",
                  "label": "behance-square"
                },
                {
                  "value": "behance",
                  "label": "behance"
                },
                {
                  "value": "bell",
                  "label": "bell"
                },
                {
                  "value": "bilibili",
                  "label": "bilibili"
                },
                {
                  "value": "bg-colors",
                  "label": "bg-colors"
                },
                {
                  "value": "block",
                  "label": "block"
                },
                {
                  "value": "bold",
                  "label": "bold"
                },
                {
                  "value": "border-bottom",
                  "label": "border-bottom"
                },
                {
                  "value": "border-horizontal",
                  "label": "border-horizontal"
                },
                {
                  "value": "border-left",
                  "label": "border-left"
                },
                {
                  "value": "border",
                  "label": "border"
                },
                {
                  "value": "border-inner",
                  "label": "border-inner"
                },
                {
                  "value": "bar-chart",
                  "label": "bar-chart"
                },
                {
                  "value": "border-right",
                  "label": "border-right"
                },
                {
                  "value": "border-verticle",
                  "label": "border-verticle"
                },
                {
                  "value": "account-book",
                  "label": "account-book"
                },
                {
                  "value": "alibaba",
                  "label": "alibaba"
                },
                {
                  "value": "branches",
                  "label": "branches"
                },
                {
                  "value": "border-top",
                  "label": "border-top"
                },
                {
                  "value": "arrow-right",
                  "label": "arrow-right"
                },
                {
                  "value": "bug",
                  "label": "bug"
                },
                {
                  "value": "audit",
                  "label": "audit"
                },
                {
                  "value": "calendar",
                  "label": "calendar"
                },
                {
                  "value": "calculator",
                  "label": "calculator"
                },
                {
                  "value": "camera",
                  "label": "camera"
                },
                {
                  "value": "box-plot",
                  "label": "box-plot"
                },
                {
                  "value": "car",
                  "label": "car"
                },
                {
                  "value": "bulb",
                  "label": "bulb"
                },
                {
                  "value": "book",
                  "label": "book"
                },
                {
                  "value": "caret-right",
                  "label": "caret-right"
                },
                {
                  "value": "carry-out",
                  "label": "carry-out"
                },
                {
                  "value": "caret-left",
                  "label": "caret-left"
                },
                {
                  "value": "caret-down",
                  "label": "caret-down"
                },
                {
                  "value": "check",
                  "label": "check"
                },
                {
                  "value": "check-square",
                  "label": "check-square"
                },
                {
                  "value": "chrome",
                  "label": "chrome"
                },
                {
                  "value": "caret-up",
                  "label": "caret-up"
                },
                {
                  "value": "clock-circle",
                  "label": "clock-circle"
                },
                {
                  "value": "ci",
                  "label": "ci"
                },
                {
                  "value": "ci-circle",
                  "label": "ci-circle"
                },
                {
                  "value": "close",
                  "label": "close"
                },
                {
                  "value": "close-circle",
                  "label": "close-circle"
                },
                {
                  "value": "close-square",
                  "label": "close-square"
                },
                {
                  "value": "cloud-download",
                  "label": "cloud-download"
                },
                {
                  "value": "cloud",
                  "label": "cloud"
                },
                {
                  "value": "cloud-server",
                  "label": "cloud-server"
                },
                {
                  "value": "cloud-sync",
                  "label": "cloud-sync"
                },
                {
                  "value": "code",
                  "label": "code"
                },
                {
                  "value": "check-circle",
                  "label": "check-circle"
                },
                {
                  "value": "codepen-circle",
                  "label": "codepen-circle"
                },
                {
                  "value": "code-sandbox",
                  "label": "code-sandbox"
                },
                {
                  "value": "codepen",
                  "label": "codepen"
                },
                {
                  "value": "cluster",
                  "label": "cluster"
                },
                {
                  "value": "column-height",
                  "label": "column-height"
                },
                {
                  "value": "cloud-upload",
                  "label": "cloud-upload"
                },
                {
                  "value": "column-width",
                  "label": "column-width"
                },
                {
                  "value": "compress",
                  "label": "compress"
                },
                {
                  "value": "compass",
                  "label": "compass"
                },
                {
                  "value": "console-sql",
                  "label": "console-sql"
                },
                {
                  "value": "appstore",
                  "label": "appstore"
                },
                {
                  "value": "contacts",
                  "label": "contacts"
                },
                {
                  "value": "coffee",
                  "label": "coffee"
                },
                {
                  "value": "container",
                  "label": "container"
                },
                {
                  "value": "copy",
                  "label": "copy"
                },
                {
                  "value": "control",
                  "label": "control"
                },
                {
                  "value": "copyright-circle",
                  "label": "copyright-circle"
                },
                {
                  "value": "clear",
                  "label": "clear"
                },
                {
                  "value": "build",
                  "label": "build"
                },
                {
                  "value": "dash",
                  "label": "dash"
                },
                {
                  "value": "database",
                  "label": "database"
                },
                {
                  "value": "border-outer",
                  "label": "border-outer"
                },
                {
                  "value": "delete",
                  "label": "delete"
                },
                {
                  "value": "dashboard",
                  "label": "dashboard"
                },
                {
                  "value": "delete-row",
                  "label": "delete-row"
                },
                {
                  "value": "delivered-procedure",
                  "label": "delivered-procedure"
                },
                {
                  "value": "deployment-unit",
                  "label": "deployment-unit"
                },
                {
                  "value": "delete-column",
                  "label": "delete-column"
                },
                {
                  "value": "desktop",
                  "label": "desktop"
                },
                {
                  "value": "diff",
                  "label": "diff"
                },
                {
                  "value": "dingtalk",
                  "label": "dingtalk"
                },
                {
                  "value": "dingding",
                  "label": "dingding"
                },
                {
                  "value": "dislike",
                  "label": "dislike"
                },
                {
                  "value": "disconnect",
                  "label": "disconnect"
                },
                {
                  "value": "comment",
                  "label": "comment"
                },
                {
                  "value": "docker",
                  "label": "docker"
                },
                {
                  "value": "dollar-circle",
                  "label": "dollar-circle"
                },
                {
                  "value": "double-left",
                  "label": "double-left"
                },
                {
                  "value": "dollar",
                  "label": "dollar"
                },
                {
                  "value": "dot-chart",
                  "label": "dot-chart"
                },
                {
                  "value": "dot-net",
                  "label": "dot-net"
                },
                {
                  "value": "double-right",
                  "label": "double-right"
                },
                {
                  "value": "down-circle",
                  "label": "down-circle"
                },
                {
                  "value": "down",
                  "label": "down"
                },
                {
                  "value": "borderless-table",
                  "label": "borderless-table"
                },
                {
                  "value": "drag",
                  "label": "drag"
                },
                {
                  "value": "dribbble-square",
                  "label": "dribbble-square"
                },
                {
                  "value": "dribbble",
                  "label": "dribbble"
                },
                {
                  "value": "down-square",
                  "label": "down-square"
                },
                {
                  "value": "ellipsis",
                  "label": "ellipsis"
                },
                {
                  "value": "dropbox",
                  "label": "dropbox"
                },
                {
                  "value": "enter",
                  "label": "enter"
                },
                {
                  "value": "euro-circle",
                  "label": "euro-circle"
                },
                {
                  "value": "environment",
                  "label": "environment"
                },
                {
                  "value": "exception",
                  "label": "exception"
                },
                {
                  "value": "euro",
                  "label": "euro"
                },
                {
                  "value": "customer-service",
                  "label": "customer-service"
                },
                {
                  "value": "exclamation-circle",
                  "label": "exclamation-circle"
                },
                {
                  "value": "expand-alt",
                  "label": "expand-alt"
                },
                {
                  "value": "exclamation",
                  "label": "exclamation"
                },
                {
                  "value": "expand",
                  "label": "expand"
                },
                {
                  "value": "export",
                  "label": "export"
                },
                {
                  "value": "experiment",
                  "label": "experiment"
                },
                {
                  "value": "eye-invisible",
                  "label": "eye-invisible"
                },
                {
                  "value": "eye",
                  "label": "eye"
                },
                {
                  "value": "facebook",
                  "label": "facebook"
                },
                {
                  "value": "fast-forward",
                  "label": "fast-forward"
                },
                {
                  "value": "fall",
                  "label": "fall"
                },
                {
                  "value": "download",
                  "label": "download"
                },
                {
                  "value": "field-binary",
                  "label": "field-binary"
                },
                {
                  "value": "field-number",
                  "label": "field-number"
                },
                {
                  "value": "credit-card",
                  "label": "credit-card"
                },
                {
                  "value": "field-string",
                  "label": "field-string"
                },
                {
                  "value": "field-time",
                  "label": "field-time"
                },
                {
                  "value": "file-excel",
                  "label": "file-excel"
                },
                {
                  "value": "file-exclamation",
                  "label": "file-exclamation"
                },
                {
                  "value": "file-add",
                  "label": "file-add"
                },
                {
                  "value": "file-done",
                  "label": "file-done"
                },
                {
                  "value": "crown",
                  "label": "crown"
                },
                {
                  "value": "discord",
                  "label": "discord"
                },
                {
                  "value": "file-markdown",
                  "label": "file-markdown"
                },
                {
                  "value": "file",
                  "label": "file"
                },
                {
                  "value": "file-pdf",
                  "label": "file-pdf"
                },
                {
                  "value": "file-jpg",
                  "label": "file-jpg"
                },
                {
                  "value": "file-gif",
                  "label": "file-gif"
                },
                {
                  "value": "file-sync",
                  "label": "file-sync"
                },
                {
                  "value": "file-protect",
                  "label": "file-protect"
                },
                {
                  "value": "file-search",
                  "label": "file-search"
                },
                {
                  "value": "file-unknown",
                  "label": "file-unknown"
                },
                {
                  "value": "file-word",
                  "label": "file-word"
                },
                {
                  "value": "file-text",
                  "label": "file-text"
                },
                {
                  "value": "file-zip",
                  "label": "file-zip"
                },
                {
                  "value": "filter",
                  "label": "filter"
                },
                {
                  "value": "flag",
                  "label": "flag"
                },
                {
                  "value": "fire",
                  "label": "fire"
                },
                {
                  "value": "folder-add",
                  "label": "folder-add"
                },
                {
                  "value": "folder-open",
                  "label": "folder-open"
                },
                {
                  "value": "folder",
                  "label": "folder"
                },
                {
                  "value": "font-size",
                  "label": "font-size"
                },
                {
                  "value": "edit",
                  "label": "edit"
                },
                {
                  "value": "file-ppt",
                  "label": "file-ppt"
                },
                {
                  "value": "form",
                  "label": "form"
                },
                {
                  "value": "folder-view",
                  "label": "folder-view"
                },
                {
                  "value": "copyright",
                  "label": "copyright"
                },
                {
                  "value": "fork",
                  "label": "fork"
                },
                {
                  "value": "forward",
                  "label": "forward"
                },
                {
                  "value": "function",
                  "label": "function"
                },
                {
                  "value": "fullscreen-exit",
                  "label": "fullscreen-exit"
                },
                {
                  "value": "fund",
                  "label": "fund"
                },
                {
                  "value": "fund-projection-screen",
                  "label": "fund-projection-screen"
                },
                {
                  "value": "funnel-plot",
                  "label": "funnel-plot"
                },
                {
                  "value": "gateway",
                  "label": "gateway"
                },
                {
                  "value": "gift",
                  "label": "gift"
                },
                {
                  "value": "gif",
                  "label": "gif"
                },
                {
                  "value": "font-colors",
                  "label": "font-colors"
                },
                {
                  "value": "frown",
                  "label": "frown"
                },
                {
                  "value": "global",
                  "label": "global"
                },
                {
                  "value": "gitlab",
                  "label": "gitlab"
                },
                {
                  "value": "gold",
                  "label": "gold"
                },
                {
                  "value": "google",
                  "label": "google"
                },
                {
                  "value": "google-plus",
                  "label": "google-plus"
                },
                {
                  "value": "group",
                  "label": "group"
                },
                {
                  "value": "hdd",
                  "label": "hdd"
                },
                {
                  "value": "harmony-o-s",
                  "label": "harmony-o-s"
                },
                {
                  "value": "heart",
                  "label": "heart"
                },
                {
                  "value": "heat-map",
                  "label": "heat-map"
                },
                {
                  "value": "highlight",
                  "label": "highlight"
                },
                {
                  "value": "home",
                  "label": "home"
                },
                {
                  "value": "html5",
                  "label": "html5"
                },
                {
                  "value": "format-painter",
                  "label": "format-painter"
                },
                {
                  "value": "ie",
                  "label": "ie"
                },
                {
                  "value": "idcard",
                  "label": "idcard"
                },
                {
                  "value": "github",
                  "label": "github"
                },
                {
                  "value": "hourglass",
                  "label": "hourglass"
                },
                {
                  "value": "holder",
                  "label": "holder"
                },
                {
                  "value": "fullscreen",
                  "label": "fullscreen"
                },
                {
                  "value": "info-circle",
                  "label": "info-circle"
                },
                {
                  "value": "fund-view",
                  "label": "fund-view"
                },
                {
                  "value": "inbox",
                  "label": "inbox"
                },
                {
                  "value": "insert-row-left",
                  "label": "insert-row-left"
                },
                {
                  "value": "info",
                  "label": "info"
                },
                {
                  "value": "import",
                  "label": "import"
                },
                {
                  "value": "insert-row-above",
                  "label": "insert-row-above"
                },
                {
                  "value": "insert-row-right",
                  "label": "insert-row-right"
                },
                {
                  "value": "interaction",
                  "label": "interaction"
                },
                {
                  "value": "italic",
                  "label": "italic"
                },
                {
                  "value": "java",
                  "label": "java"
                },
                {
                  "value": "issues-close",
                  "label": "issues-close"
                },
                {
                  "value": "java-script",
                  "label": "java-script"
                },
                {
                  "value": "kubernetes",
                  "label": "kubernetes"
                },
                {
                  "value": "instagram",
                  "label": "instagram"
                },
                {
                  "value": "laptop",
                  "label": "laptop"
                },
                {
                  "value": "layout",
                  "label": "layout"
                },
                {
                  "value": "insurance",
                  "label": "insurance"
                },
                {
                  "value": "left-square",
                  "label": "left-square"
                },
                {
                  "value": "line-chart",
                  "label": "line-chart"
                },
                {
                  "value": "left-circle",
                  "label": "left-circle"
                },
                {
                  "value": "line",
                  "label": "line"
                },
                {
                  "value": "like",
                  "label": "like"
                },
                {
                  "value": "loading",
                  "label": "loading"
                },
                {
                  "value": "loading-3-quarters",
                  "label": "loading-3-quarters"
                },
                {
                  "value": "linux",
                  "label": "linux"
                },
                {
                  "value": "line-height",
                  "label": "line-height"
                },
                {
                  "value": "left",
                  "label": "left"
                },
                {
                  "value": "lock",
                  "label": "lock"
                },
                {
                  "value": "mac-command",
                  "label": "mac-command"
                },
                {
                  "value": "mail",
                  "label": "mail"
                },
                {
                  "value": "link",
                  "label": "link"
                },
                {
                  "value": "man",
                  "label": "man"
                },
                {
                  "value": "medicine-box",
                  "label": "medicine-box"
                },
                {
                  "value": "medium-workmark",
                  "label": "medium-workmark"
                },
                {
                  "value": "medium",
                  "label": "medium"
                },
                {
                  "value": "meh",
                  "label": "meh"
                },
                {
                  "value": "logout",
                  "label": "logout"
                },
                {
                  "value": "menu-fold",
                  "label": "menu-fold"
                },
                {
                  "value": "login",
                  "label": "login"
                },
                {
                  "value": "linkedin",
                  "label": "linkedin"
                },
                {
                  "value": "message",
                  "label": "message"
                },
                {
                  "value": "menu",
                  "label": "menu"
                },
                {
                  "value": "minus-circle",
                  "label": "minus-circle"
                },
                {
                  "value": "key",
                  "label": "key"
                },
                {
                  "value": "minus-square",
                  "label": "minus-square"
                },
                {
                  "value": "mobile",
                  "label": "mobile"
                },
                {
                  "value": "money-collect",
                  "label": "money-collect"
                },
                {
                  "value": "fast-backward",
                  "label": "fast-backward"
                },
                {
                  "value": "monitor",
                  "label": "monitor"
                },
                {
                  "value": "moon",
                  "label": "moon"
                },
                {
                  "value": "more",
                  "label": "more"
                },
                {
                  "value": "node-index",
                  "label": "node-index"
                },
                {
                  "value": "node-collapse",
                  "label": "node-collapse"
                },
                {
                  "value": "node-expand",
                  "label": "node-expand"
                },
                {
                  "value": "merge",
                  "label": "merge"
                },
                {
                  "value": "menu-unfold",
                  "label": "menu-unfold"
                },
                {
                  "value": "number",
                  "label": "number"
                },
                {
                  "value": "merge-cells",
                  "label": "merge-cells"
                },
                {
                  "value": "notification",
                  "label": "notification"
                },
                {
                  "value": "ordered-list",
                  "label": "ordered-list"
                },
                {
                  "value": "paper-clip",
                  "label": "paper-clip"
                },
                {
                  "value": "partition",
                  "label": "partition"
                },
                {
                  "value": "muted",
                  "label": "muted"
                },
                {
                  "value": "pause",
                  "label": "pause"
                },
                {
                  "value": "one-to-one",
                  "label": "one-to-one"
                },
                {
                  "value": "pay-circle",
                  "label": "pay-circle"
                },
                {
                  "value": "percentage",
                  "label": "percentage"
                },
                {
                  "value": "pic-center",
                  "label": "pic-center"
                },
                {
                  "value": "pic-right",
                  "label": "pic-right"
                },
                {
                  "value": "pic-left",
                  "label": "pic-left"
                },
                {
                  "value": "pause-circle",
                  "label": "pause-circle"
                },
                {
                  "value": "pie-chart",
                  "label": "pie-chart"
                },
                {
                  "value": "picture",
                  "label": "picture"
                },
                {
                  "value": "play-circle",
                  "label": "play-circle"
                },
                {
                  "value": "play-square",
                  "label": "play-square"
                },
                {
                  "value": "plus",
                  "label": "plus"
                },
                {
                  "value": "plus-square",
                  "label": "plus-square"
                },
                {
                  "value": "plus-circle",
                  "label": "plus-circle"
                },
                {
                  "value": "pound-circle",
                  "label": "pound-circle"
                },
                {
                  "value": "pound",
                  "label": "pound"
                },
                {
                  "value": "poweroff",
                  "label": "poweroff"
                },
                {
                  "value": "profile",
                  "label": "profile"
                },
                {
                  "value": "printer",
                  "label": "printer"
                },
                {
                  "value": "project",
                  "label": "project"
                },
                {
                  "value": "product",
                  "label": "product"
                },
                {
                  "value": "phone",
                  "label": "phone"
                },
                {
                  "value": "property-safety",
                  "label": "property-safety"
                },
                {
                  "value": "python",
                  "label": "python"
                },
                {
                  "value": "pinterest",
                  "label": "pinterest"
                },
                {
                  "value": "pushpin",
                  "label": "pushpin"
                },
                {
                  "value": "qrcode",
                  "label": "qrcode"
                },
                {
                  "value": "question-circle",
                  "label": "question-circle"
                },
                {
                  "value": "radius-bottomleft",
                  "label": "radius-bottomleft"
                },
                {
                  "value": "radius-bottomright",
                  "label": "radius-bottomright"
                },
                {
                  "value": "pull-request",
                  "label": "pull-request"
                },
                {
                  "value": "question",
                  "label": "question"
                },
                {
                  "value": "radius-setting",
                  "label": "radius-setting"
                },
                {
                  "value": "radar-chart",
                  "label": "radar-chart"
                },
                {
                  "value": "radius-upleft",
                  "label": "radius-upleft"
                },
                {
                  "value": "radius-upright",
                  "label": "radius-upright"
                },
                {
                  "value": "read",
                  "label": "read"
                },
                {
                  "value": "reconciliation",
                  "label": "reconciliation"
                },
                {
                  "value": "red-envelope",
                  "label": "red-envelope"
                },
                {
                  "value": "reddit",
                  "label": "reddit"
                },
                {
                  "value": "redo",
                  "label": "redo"
                },
                {
                  "value": "reload",
                  "label": "reload"
                },
                {
                  "value": "retweet",
                  "label": "retweet"
                },
                {
                  "value": "rest",
                  "label": "rest"
                },
                {
                  "value": "right-circle",
                  "label": "right-circle"
                },
                {
                  "value": "right-square",
                  "label": "right-square"
                },
                {
                  "value": "right",
                  "label": "right"
                },
                {
                  "value": "robot",
                  "label": "robot"
                },
                {
                  "value": "rise",
                  "label": "rise"
                },
                {
                  "value": "rocket",
                  "label": "rocket"
                },
                {
                  "value": "rollback",
                  "label": "rollback"
                },
                {
                  "value": "rotate-right",
                  "label": "rotate-right"
                },
                {
                  "value": "safety-certificate",
                  "label": "safety-certificate"
                },
                {
                  "value": "rotate-left",
                  "label": "rotate-left"
                },
                {
                  "value": "qq",
                  "label": "qq"
                },
                {
                  "value": "ruby",
                  "label": "ruby"
                },
                {
                  "value": "save",
                  "label": "save"
                },
                {
                  "value": "scan",
                  "label": "scan"
                },
                {
                  "value": "security-scan",
                  "label": "security-scan"
                },
                {
                  "value": "scissor",
                  "label": "scissor"
                },
                {
                  "value": "schedule",
                  "label": "schedule"
                },
                {
                  "value": "select",
                  "label": "select"
                },
                {
                  "value": "send",
                  "label": "send"
                },
                {
                  "value": "minus",
                  "label": "minus"
                },
                {
                  "value": "shake",
                  "label": "shake"
                },
                {
                  "value": "setting",
                  "label": "setting"
                },
                {
                  "value": "shop",
                  "label": "shop"
                },
                {
                  "value": "shopping",
                  "label": "shopping"
                },
                {
                  "value": "shopping-cart",
                  "label": "shopping-cart"
                },
                {
                  "value": "shrink",
                  "label": "shrink"
                },
                {
                  "value": "sisternode",
                  "label": "sisternode"
                },
                {
                  "value": "sketch",
                  "label": "sketch"
                },
                {
                  "value": "skin",
                  "label": "skin"
                },
                {
                  "value": "skype",
                  "label": "skype"
                },
                {
                  "value": "slack",
                  "label": "slack"
                },
                {
                  "value": "slack-square",
                  "label": "slack-square"
                },
                {
                  "value": "sliders",
                  "label": "sliders"
                },
                {
                  "value": "small-dash",
                  "label": "small-dash"
                },
                {
                  "value": "smile",
                  "label": "smile"
                },
                {
                  "value": "snippets",
                  "label": "snippets"
                },
                {
                  "value": "file-image",
                  "label": "file-image"
                },
                {
                  "value": "solution",
                  "label": "solution"
                },
                {
                  "value": "sort-ascending",
                  "label": "sort-ascending"
                },
                {
                  "value": "split-cells",
                  "label": "split-cells"
                },
                {
                  "value": "sort-descending",
                  "label": "sort-descending"
                },
                {
                  "value": "signature",
                  "label": "signature"
                },
                {
                  "value": "spotify",
                  "label": "spotify"
                },
                {
                  "value": "search",
                  "label": "search"
                },
                {
                  "value": "star",
                  "label": "star"
                },
                {
                  "value": "step-forward",
                  "label": "step-forward"
                },
                {
                  "value": "stock",
                  "label": "stock"
                },
                {
                  "value": "sound",
                  "label": "sound"
                },
                {
                  "value": "step-backward",
                  "label": "step-backward"
                },
                {
                  "value": "share-alt",
                  "label": "share-alt"
                },
                {
                  "value": "stop",
                  "label": "stop"
                },
                {
                  "value": "sun",
                  "label": "sun"
                },
                {
                  "value": "strikethrough",
                  "label": "strikethrough"
                },
                {
                  "value": "swap-left",
                  "label": "swap-left"
                },
                {
                  "value": "swap",
                  "label": "swap"
                },
                {
                  "value": "switcher",
                  "label": "switcher"
                },
                {
                  "value": "sync",
                  "label": "sync"
                },
                {
                  "value": "table",
                  "label": "table"
                },
                {
                  "value": "tag",
                  "label": "tag"
                },
                {
                  "value": "tablet",
                  "label": "tablet"
                },
                {
                  "value": "taobao-circle",
                  "label": "taobao-circle"
                },
                {
                  "value": "taobao",
                  "label": "taobao"
                },
                {
                  "value": "team",
                  "label": "team"
                },
                {
                  "value": "subnode",
                  "label": "subnode"
                },
                {
                  "value": "thunderbolt",
                  "label": "thunderbolt"
                },
                {
                  "value": "tags",
                  "label": "tags"
                },
                {
                  "value": "tool",
                  "label": "tool"
                },
                {
                  "value": "trademark-circle",
                  "label": "trademark-circle"
                },
                {
                  "value": "tik-tok",
                  "label": "tik-tok"
                },
                {
                  "value": "to-top",
                  "label": "to-top"
                },
                {
                  "value": "swap-right",
                  "label": "swap-right"
                },
                {
                  "value": "translation",
                  "label": "translation"
                },
                {
                  "value": "safety",
                  "label": "safety"
                },
                {
                  "value": "truck",
                  "label": "truck"
                },
                {
                  "value": "twitch",
                  "label": "twitch"
                },
                {
                  "value": "underline",
                  "label": "underline"
                },
                {
                  "value": "undo",
                  "label": "undo"
                },
                {
                  "value": "unlock",
                  "label": "unlock"
                },
                {
                  "value": "ungroup",
                  "label": "ungroup"
                },
                {
                  "value": "trademark",
                  "label": "trademark"
                },
                {
                  "value": "twitter",
                  "label": "twitter"
                },
                {
                  "value": "open-a-i",
                  "label": "open-a-i"
                },
                {
                  "value": "up",
                  "label": "up"
                },
                {
                  "value": "up-square",
                  "label": "up-square"
                },
                {
                  "value": "upload",
                  "label": "upload"
                },
                {
                  "value": "usb",
                  "label": "usb"
                },
                {
                  "value": "trophy",
                  "label": "trophy"
                },
                {
                  "value": "user",
                  "label": "user"
                },
                {
                  "value": "user-delete",
                  "label": "user-delete"
                },
                {
                  "value": "usergroup-add",
                  "label": "usergroup-add"
                },
                {
                  "value": "usergroup-delete",
                  "label": "usergroup-delete"
                },
                {
                  "value": "unordered-list",
                  "label": "unordered-list"
                },
                {
                  "value": "verified",
                  "label": "verified"
                },
                {
                  "value": "vertical-left",
                  "label": "vertical-left"
                },
                {
                  "value": "vertical-right",
                  "label": "vertical-right"
                },
                {
                  "value": "video-camera",
                  "label": "video-camera"
                },
                {
                  "value": "video-camera-add",
                  "label": "video-camera-add"
                },
                {
                  "value": "vertical-align-top",
                  "label": "vertical-align-top"
                },
                {
                  "value": "user-add",
                  "label": "user-add"
                },
                {
                  "value": "history",
                  "label": "history"
                },
                {
                  "value": "insert-row-below",
                  "label": "insert-row-below"
                },
                {
                  "value": "wechat",
                  "label": "wechat"
                },
                {
                  "value": "wechat-work",
                  "label": "wechat-work"
                },
                {
                  "value": "warning",
                  "label": "warning"
                },
                {
                  "value": "weibo-circle",
                  "label": "weibo-circle"
                },
                {
                  "value": "weibo",
                  "label": "weibo"
                },
                {
                  "value": "wifi",
                  "label": "wifi"
                },
                {
                  "value": "weibo-square",
                  "label": "weibo-square"
                },
                {
                  "value": "windows",
                  "label": "windows"
                },
                {
                  "value": "whats-app",
                  "label": "whats-app"
                },
                {
                  "value": "woman",
                  "label": "woman"
                },
                {
                  "value": "user-switch",
                  "label": "user-switch"
                },
                {
                  "value": "yahoo",
                  "label": "yahoo"
                },
                {
                  "value": "x",
                  "label": "x"
                },
                {
                  "value": "yuque",
                  "label": "yuque"
                },
                {
                  "value": "zhihu",
                  "label": "zhihu"
                },
                {
                  "value": "youtube",
                  "label": "youtube"
                },
                {
                  "value": "vertical-align-middle",
                  "label": "vertical-align-middle"
                },
                {
                  "value": "up-circle",
                  "label": "up-circle"
                },
                {
                  "value": "transaction",
                  "label": "transaction"
                },
                {
                  "value": "zoom-out",
                  "label": "zoom-out"
                },
                {
                  "value": "zoom-in",
                  "label": "zoom-in"
                },
                {
                  "value": "vertical-align-bottom",
                  "label": "vertical-align-bottom"
                },
                {
                  "value": "wallet",
                  "label": "wallet"
                }
              ]
            },
            {
              "conditionValue": "fill",
              "values": [
                {
                  "value": "alipay-square",
                  "label": "alipay-square"
                },
                {
                  "value": "aliwangwang",
                  "label": "aliwangwang"
                },
                {
                  "value": "alipay-circle",
                  "label": "alipay-circle"
                },
                {
                  "value": "alert",
                  "label": "alert"
                },
                {
                  "value": "amazon-circle",
                  "label": "amazon-circle"
                },
                {
                  "value": "android",
                  "label": "android"
                },
                {
                  "value": "apple",
                  "label": "apple"
                },
                {
                  "value": "amazon-square",
                  "label": "amazon-square"
                },
                {
                  "value": "appstore",
                  "label": "appstore"
                },
                {
                  "value": "api",
                  "label": "api"
                },
                {
                  "value": "bank",
                  "label": "bank"
                },
                {
                  "value": "behance-circle",
                  "label": "behance-circle"
                },
                {
                  "value": "behance-square",
                  "label": "behance-square"
                },
                {
                  "value": "bell",
                  "label": "bell"
                },
                {
                  "value": "bilibili",
                  "label": "bilibili"
                },
                {
                  "value": "audio",
                  "label": "audio"
                },
                {
                  "value": "book",
                  "label": "book"
                },
                {
                  "value": "account-book",
                  "label": "account-book"
                },
                {
                  "value": "box-plot",
                  "label": "box-plot"
                },
                {
                  "value": "bug",
                  "label": "bug"
                },
                {
                  "value": "backward",
                  "label": "backward"
                },
                {
                  "value": "build",
                  "label": "build"
                },
                {
                  "value": "calculator",
                  "label": "calculator"
                },
                {
                  "value": "calendar",
                  "label": "calendar"
                },
                {
                  "value": "bulb",
                  "label": "bulb"
                },
                {
                  "value": "camera",
                  "label": "camera"
                },
                {
                  "value": "caret-down",
                  "label": "caret-down"
                },
                {
                  "value": "caret-right",
                  "label": "caret-right"
                },
                {
                  "value": "caret-left",
                  "label": "caret-left"
                },
                {
                  "value": "carry-out",
                  "label": "carry-out"
                },
                {
                  "value": "car",
                  "label": "car"
                },
                {
                  "value": "caret-up",
                  "label": "caret-up"
                },
                {
                  "value": "chrome",
                  "label": "chrome"
                },
                {
                  "value": "ci-circle",
                  "label": "ci-circle"
                },
                {
                  "value": "check-square",
                  "label": "check-square"
                },
                {
                  "value": "clock-circle",
                  "label": "clock-circle"
                },
                {
                  "value": "close-circle",
                  "label": "close-circle"
                },
                {
                  "value": "close-square",
                  "label": "close-square"
                },
                {
                  "value": "cloud",
                  "label": "cloud"
                },
                {
                  "value": "code-sandbox-circle",
                  "label": "code-sandbox-circle"
                },
                {
                  "value": "code",
                  "label": "code"
                },
                {
                  "value": "codepen-square",
                  "label": "codepen-square"
                },
                {
                  "value": "code-sandbox-square",
                  "label": "code-sandbox-square"
                },
                {
                  "value": "codepen-circle",
                  "label": "codepen-circle"
                },
                {
                  "value": "compass",
                  "label": "compass"
                },
                {
                  "value": "check-circle",
                  "label": "check-circle"
                },
                {
                  "value": "contacts",
                  "label": "contacts"
                },
                {
                  "value": "container",
                  "label": "container"
                },
                {
                  "value": "credit-card",
                  "label": "credit-card"
                },
                {
                  "value": "control",
                  "label": "control"
                },
                {
                  "value": "crown",
                  "label": "crown"
                },
                {
                  "value": "copy",
                  "label": "copy"
                },
                {
                  "value": "copyright-circle",
                  "label": "copyright-circle"
                },
                {
                  "value": "customer-service",
                  "label": "customer-service"
                },
                {
                  "value": "dashboard",
                  "label": "dashboard"
                },
                {
                  "value": "database",
                  "label": "database"
                },
                {
                  "value": "delete",
                  "label": "delete"
                },
                {
                  "value": "diff",
                  "label": "diff"
                },
                {
                  "value": "dingtalk-circle",
                  "label": "dingtalk-circle"
                },
                {
                  "value": "dingtalk-square",
                  "label": "dingtalk-square"
                },
                {
                  "value": "discord",
                  "label": "discord"
                },
                {
                  "value": "dislike",
                  "label": "dislike"
                },
                {
                  "value": "dollar-circle",
                  "label": "dollar-circle"
                },
                {
                  "value": "down-circle",
                  "label": "down-circle"
                },
                {
                  "value": "down-square",
                  "label": "down-square"
                },
                {
                  "value": "dribbble-square",
                  "label": "dribbble-square"
                },
                {
                  "value": "dribbble-circle",
                  "label": "dribbble-circle"
                },
                {
                  "value": "edit",
                  "label": "edit"
                },
                {
                  "value": "environment",
                  "label": "environment"
                },
                {
                  "value": "euro-circle",
                  "label": "euro-circle"
                },
                {
                  "value": "experiment",
                  "label": "experiment"
                },
                {
                  "value": "eye",
                  "label": "eye"
                },
                {
                  "value": "eye-invisible",
                  "label": "eye-invisible"
                },
                {
                  "value": "exclamation-circle",
                  "label": "exclamation-circle"
                },
                {
                  "value": "dropbox-circle",
                  "label": "dropbox-circle"
                },
                {
                  "value": "fast-backward",
                  "label": "fast-backward"
                },
                {
                  "value": "facebook",
                  "label": "facebook"
                },
                {
                  "value": "file-excel",
                  "label": "file-excel"
                },
                {
                  "value": "file-exclamation",
                  "label": "file-exclamation"
                },
                {
                  "value": "file",
                  "label": "file"
                },
                {
                  "value": "file-image",
                  "label": "file-image"
                },
                {
                  "value": "file-markdown",
                  "label": "file-markdown"
                },
                {
                  "value": "file-pdf",
                  "label": "file-pdf"
                },
                {
                  "value": "file-ppt",
                  "label": "file-ppt"
                },
                {
                  "value": "fast-forward",
                  "label": "fast-forward"
                },
                {
                  "value": "dropbox-square",
                  "label": "dropbox-square"
                },
                {
                  "value": "file-text",
                  "label": "file-text"
                },
                {
                  "value": "file-zip",
                  "label": "file-zip"
                },
                {
                  "value": "file-unknown",
                  "label": "file-unknown"
                },
                {
                  "value": "file-word",
                  "label": "file-word"
                },
                {
                  "value": "filter",
                  "label": "filter"
                },
                {
                  "value": "fire",
                  "label": "fire"
                },
                {
                  "value": "flag",
                  "label": "flag"
                },
                {
                  "value": "folder-add",
                  "label": "folder-add"
                },
                {
                  "value": "folder",
                  "label": "folder"
                },
                {
                  "value": "folder-open",
                  "label": "folder-open"
                },
                {
                  "value": "file-add",
                  "label": "file-add"
                },
                {
                  "value": "frown",
                  "label": "frown"
                },
                {
                  "value": "fund",
                  "label": "fund"
                },
                {
                  "value": "forward",
                  "label": "forward"
                },
                {
                  "value": "funnel-plot",
                  "label": "funnel-plot"
                },
                {
                  "value": "gift",
                  "label": "gift"
                },
                {
                  "value": "gitlab",
                  "label": "gitlab"
                },
                {
                  "value": "gold",
                  "label": "gold"
                },
                {
                  "value": "github",
                  "label": "github"
                },
                {
                  "value": "golden",
                  "label": "golden"
                },
                {
                  "value": "google-plus-square",
                  "label": "google-plus-square"
                },
                {
                  "value": "google-plus-circle",
                  "label": "google-plus-circle"
                },
                {
                  "value": "google-square",
                  "label": "google-square"
                },
                {
                  "value": "heart",
                  "label": "heart"
                },
                {
                  "value": "format-painter",
                  "label": "format-painter"
                },
                {
                  "value": "highlight",
                  "label": "highlight"
                },
                {
                  "value": "home",
                  "label": "home"
                },
                {
                  "value": "hourglass",
                  "label": "hourglass"
                },
                {
                  "value": "hdd",
                  "label": "hdd"
                },
                {
                  "value": "html5",
                  "label": "html5"
                },
                {
                  "value": "idcard",
                  "label": "idcard"
                },
                {
                  "value": "google-circle",
                  "label": "google-circle"
                },
                {
                  "value": "ie-square",
                  "label": "ie-square"
                },
                {
                  "value": "insurance",
                  "label": "insurance"
                },
                {
                  "value": "instagram",
                  "label": "instagram"
                },
                {
                  "value": "ie-circle",
                  "label": "ie-circle"
                },
                {
                  "value": "layout",
                  "label": "layout"
                },
                {
                  "value": "left-circle",
                  "label": "left-circle"
                },
                {
                  "value": "interaction",
                  "label": "interaction"
                },
                {
                  "value": "left-square",
                  "label": "left-square"
                },
                {
                  "value": "linkedin",
                  "label": "linkedin"
                },
                {
                  "value": "like",
                  "label": "like"
                },
                {
                  "value": "mail",
                  "label": "mail"
                },
                {
                  "value": "mac-command",
                  "label": "mac-command"
                },
                {
                  "value": "medicine-box",
                  "label": "medicine-box"
                },
                {
                  "value": "medium-circle",
                  "label": "medium-circle"
                },
                {
                  "value": "medium-square",
                  "label": "medium-square"
                },
                {
                  "value": "meh",
                  "label": "meh"
                },
                {
                  "value": "lock",
                  "label": "lock"
                },
                {
                  "value": "merge",
                  "label": "merge"
                },
                {
                  "value": "message",
                  "label": "message"
                },
                {
                  "value": "minus-circle",
                  "label": "minus-circle"
                },
                {
                  "value": "minus-square",
                  "label": "minus-square"
                },
                {
                  "value": "mobile",
                  "label": "mobile"
                },
                {
                  "value": "moon",
                  "label": "moon"
                },
                {
                  "value": "muted",
                  "label": "muted"
                },
                {
                  "value": "notification",
                  "label": "notification"
                },
                {
                  "value": "pay-circle",
                  "label": "pay-circle"
                },
                {
                  "value": "phone",
                  "label": "phone"
                },
                {
                  "value": "pinterest",
                  "label": "pinterest"
                },
                {
                  "value": "play-circle",
                  "label": "play-circle"
                },
                {
                  "value": "pie-chart",
                  "label": "pie-chart"
                },
                {
                  "value": "pause-circle",
                  "label": "pause-circle"
                },
                {
                  "value": "picture",
                  "label": "picture"
                },
                {
                  "value": "play-square",
                  "label": "play-square"
                },
                {
                  "value": "pound-circle",
                  "label": "pound-circle"
                },
                {
                  "value": "plus-circle",
                  "label": "plus-circle"
                },
                {
                  "value": "plus-square",
                  "label": "plus-square"
                },
                {
                  "value": "printer",
                  "label": "printer"
                },
                {
                  "value": "product",
                  "label": "product"
                },
                {
                  "value": "profile",
                  "label": "profile"
                },
                {
                  "value": "property-safety",
                  "label": "property-safety"
                },
                {
                  "value": "project",
                  "label": "project"
                },
                {
                  "value": "qq-circle",
                  "label": "qq-circle"
                },
                {
                  "value": "question-circle",
                  "label": "question-circle"
                },
                {
                  "value": "qq-square",
                  "label": "qq-square"
                },
                {
                  "value": "reconciliation",
                  "label": "reconciliation"
                },
                {
                  "value": "red-envelope",
                  "label": "red-envelope"
                },
                {
                  "value": "reddit-circle",
                  "label": "reddit-circle"
                },
                {
                  "value": "read",
                  "label": "read"
                },
                {
                  "value": "reddit-square",
                  "label": "reddit-square"
                },
                {
                  "value": "right-circle",
                  "label": "right-circle"
                },
                {
                  "value": "right-square",
                  "label": "right-square"
                },
                {
                  "value": "rest",
                  "label": "rest"
                },
                {
                  "value": "money-collect",
                  "label": "money-collect"
                },
                {
                  "value": "safety-certificate",
                  "label": "safety-certificate"
                },
                {
                  "value": "rocket",
                  "label": "rocket"
                },
                {
                  "value": "schedule",
                  "label": "schedule"
                },
                {
                  "value": "security-scan",
                  "label": "security-scan"
                },
                {
                  "value": "pushpin",
                  "label": "pushpin"
                },
                {
                  "value": "setting",
                  "label": "setting"
                },
                {
                  "value": "save",
                  "label": "save"
                },
                {
                  "value": "shopping",
                  "label": "shopping"
                },
                {
                  "value": "shop",
                  "label": "shop"
                },
                {
                  "value": "signal",
                  "label": "signal"
                },
                {
                  "value": "open-a-i",
                  "label": "open-a-i"
                },
                {
                  "value": "signature",
                  "label": "signature"
                },
                {
                  "value": "sketch-circle",
                  "label": "sketch-circle"
                },
                {
                  "value": "skype",
                  "label": "skype"
                },
                {
                  "value": "slack-circle",
                  "label": "slack-circle"
                },
                {
                  "value": "sketch-square",
                  "label": "sketch-square"
                },
                {
                  "value": "slack-square",
                  "label": "slack-square"
                },
                {
                  "value": "skin",
                  "label": "skin"
                },
                {
                  "value": "sliders",
                  "label": "sliders"
                },
                {
                  "value": "smile",
                  "label": "smile"
                },
                {
                  "value": "snippets",
                  "label": "snippets"
                },
                {
                  "value": "sound",
                  "label": "sound"
                },
                {
                  "value": "spotify",
                  "label": "spotify"
                },
                {
                  "value": "star",
                  "label": "star"
                },
                {
                  "value": "step-backward",
                  "label": "step-backward"
                },
                {
                  "value": "step-forward",
                  "label": "step-forward"
                },
                {
                  "value": "stop",
                  "label": "stop"
                },
                {
                  "value": "sun",
                  "label": "sun"
                },
                {
                  "value": "info-circle",
                  "label": "info-circle"
                },
                {
                  "value": "tablet",
                  "label": "tablet"
                },
                {
                  "value": "tag",
                  "label": "tag"
                },
                {
                  "value": "taobao-circle",
                  "label": "taobao-circle"
                },
                {
                  "value": "tags",
                  "label": "tags"
                },
                {
                  "value": "thunderbolt",
                  "label": "thunderbolt"
                },
                {
                  "value": "taobao-square",
                  "label": "taobao-square"
                },
                {
                  "value": "tik-tok",
                  "label": "tik-tok"
                },
                {
                  "value": "tool",
                  "label": "tool"
                },
                {
                  "value": "trademark-circle",
                  "label": "trademark-circle"
                },
                {
                  "value": "trophy",
                  "label": "trophy"
                },
                {
                  "value": "twitch",
                  "label": "twitch"
                },
                {
                  "value": "robot",
                  "label": "robot"
                },
                {
                  "value": "truck",
                  "label": "truck"
                },
                {
                  "value": "twitter-square",
                  "label": "twitter-square"
                },
                {
                  "value": "twitter-circle",
                  "label": "twitter-circle"
                },
                {
                  "value": "unlock",
                  "label": "unlock"
                },
                {
                  "value": "up-circle",
                  "label": "up-circle"
                },
                {
                  "value": "switcher",
                  "label": "switcher"
                },
                {
                  "value": "up-square",
                  "label": "up-square"
                },
                {
                  "value": "usb",
                  "label": "usb"
                },
                {
                  "value": "video-camera",
                  "label": "video-camera"
                },
                {
                  "value": "wallet",
                  "label": "wallet"
                },
                {
                  "value": "wechat",
                  "label": "wechat"
                },
                {
                  "value": "weibo-circle",
                  "label": "weibo-circle"
                },
                {
                  "value": "windows",
                  "label": "windows"
                },
                {
                  "value": "yahoo",
                  "label": "yahoo"
                },
                {
                  "value": "youtube",
                  "label": "youtube"
                },
                {
                  "value": "yuque",
                  "label": "yuque"
                },
                {
                  "value": "zhihu-circle",
                  "label": "zhihu-circle"
                },
                {
                  "value": "zhihu-square",
                  "label": "zhihu-square"
                },
                {
                  "value": "wechat-work",
                  "label": "wechat-work"
                },
                {
                  "value": "weibo-square",
                  "label": "weibo-square"
                },
                {
                  "value": "x",
                  "label": "x"
                },
                {
                  "value": "warning",
                  "label": "warning"
                }
              ]
            },
            {
              "conditionValue": "twotone",
              "values": [
                {
                  "value": "account-book",
                  "label": "account-book"
                },
                {
                  "value": "alert",
                  "label": "alert"
                },
                {
                  "value": "api",
                  "label": "api"
                },
                {
                  "value": "audio",
                  "label": "audio"
                },
                {
                  "value": "bank",
                  "label": "bank"
                },
                {
                  "value": "bell",
                  "label": "bell"
                },
                {
                  "value": "book",
                  "label": "book"
                },
                {
                  "value": "appstore",
                  "label": "appstore"
                },
                {
                  "value": "bug",
                  "label": "bug"
                },
                {
                  "value": "bulb",
                  "label": "bulb"
                },
                {
                  "value": "calendar",
                  "label": "calendar"
                },
                {
                  "value": "calculator",
                  "label": "calculator"
                },
                {
                  "value": "car",
                  "label": "car"
                },
                {
                  "value": "camera",
                  "label": "camera"
                },
                {
                  "value": "box-plot",
                  "label": "box-plot"
                },
                {
                  "value": "carry-out",
                  "label": "carry-out"
                },
                {
                  "value": "ci-circle",
                  "label": "ci-circle"
                },
                {
                  "value": "ci",
                  "label": "ci"
                },
                {
                  "value": "check-square",
                  "label": "check-square"
                },
                {
                  "value": "clock-circle",
                  "label": "clock-circle"
                },
                {
                  "value": "close-circle",
                  "label": "close-circle"
                },
                {
                  "value": "close-square",
                  "label": "close-square"
                },
                {
                  "value": "check-circle",
                  "label": "check-circle"
                },
                {
                  "value": "cloud",
                  "label": "cloud"
                },
                {
                  "value": "code",
                  "label": "code"
                },
                {
                  "value": "compass",
                  "label": "compass"
                },
                {
                  "value": "contacts",
                  "label": "contacts"
                },
                {
                  "value": "container",
                  "label": "container"
                },
                {
                  "value": "copy",
                  "label": "copy"
                },
                {
                  "value": "build",
                  "label": "build"
                },
                {
                  "value": "credit-card",
                  "label": "credit-card"
                },
                {
                  "value": "copyright",
                  "label": "copyright"
                },
                {
                  "value": "customer-service",
                  "label": "customer-service"
                },
                {
                  "value": "crown",
                  "label": "crown"
                },
                {
                  "value": "dashboard",
                  "label": "dashboard"
                },
                {
                  "value": "delete",
                  "label": "delete"
                },
                {
                  "value": "diff",
                  "label": "diff"
                },
                {
                  "value": "database",
                  "label": "database"
                },
                {
                  "value": "dollar-circle",
                  "label": "dollar-circle"
                },
                {
                  "value": "dollar",
                  "label": "dollar"
                },
                {
                  "value": "down-circle",
                  "label": "down-circle"
                },
                {
                  "value": "dislike",
                  "label": "dislike"
                },
                {
                  "value": "copyright-circle",
                  "label": "copyright-circle"
                },
                {
                  "value": "down-square",
                  "label": "down-square"
                },
                {
                  "value": "edit",
                  "label": "edit"
                },
                {
                  "value": "euro-circle",
                  "label": "euro-circle"
                },
                {
                  "value": "environment",
                  "label": "environment"
                },
                {
                  "value": "euro",
                  "label": "euro"
                },
                {
                  "value": "exclamation-circle",
                  "label": "exclamation-circle"
                },
                {
                  "value": "experiment",
                  "label": "experiment"
                },
                {
                  "value": "eye-invisible",
                  "label": "eye-invisible"
                },
                {
                  "value": "eye",
                  "label": "eye"
                },
                {
                  "value": "file-add",
                  "label": "file-add"
                },
                {
                  "value": "file-excel",
                  "label": "file-excel"
                },
                {
                  "value": "file-exclamation",
                  "label": "file-exclamation"
                },
                {
                  "value": "control",
                  "label": "control"
                },
                {
                  "value": "file-image",
                  "label": "file-image"
                },
                {
                  "value": "file-markdown",
                  "label": "file-markdown"
                },
                {
                  "value": "file",
                  "label": "file"
                },
                {
                  "value": "file-text",
                  "label": "file-text"
                },
                {
                  "value": "file-unknown",
                  "label": "file-unknown"
                },
                {
                  "value": "file-zip",
                  "label": "file-zip"
                },
                {
                  "value": "filter",
                  "label": "filter"
                },
                {
                  "value": "fire",
                  "label": "fire"
                },
                {
                  "value": "file-ppt",
                  "label": "file-ppt"
                },
                {
                  "value": "flag",
                  "label": "flag"
                },
                {
                  "value": "folder-open",
                  "label": "folder-open"
                },
                {
                  "value": "folder-add",
                  "label": "folder-add"
                },
                {
                  "value": "folder",
                  "label": "folder"
                },
                {
                  "value": "frown",
                  "label": "frown"
                },
                {
                  "value": "fund",
                  "label": "fund"
                },
                {
                  "value": "funnel-plot",
                  "label": "funnel-plot"
                },
                {
                  "value": "gift",
                  "label": "gift"
                },
                {
                  "value": "gold",
                  "label": "gold"
                },
                {
                  "value": "file-word",
                  "label": "file-word"
                },
                {
                  "value": "hdd",
                  "label": "hdd"
                },
                {
                  "value": "heart",
                  "label": "heart"
                },
                {
                  "value": "file-pdf",
                  "label": "file-pdf"
                },
                {
                  "value": "home",
                  "label": "home"
                },
                {
                  "value": "hourglass",
                  "label": "hourglass"
                },
                {
                  "value": "html5",
                  "label": "html5"
                },
                {
                  "value": "idcard",
                  "label": "idcard"
                },
                {
                  "value": "highlight",
                  "label": "highlight"
                },
                {
                  "value": "info-circle",
                  "label": "info-circle"
                },
                {
                  "value": "insurance",
                  "label": "insurance"
                },
                {
                  "value": "layout",
                  "label": "layout"
                },
                {
                  "value": "interaction",
                  "label": "interaction"
                },
                {
                  "value": "left-square",
                  "label": "left-square"
                },
                {
                  "value": "like",
                  "label": "like"
                },
                {
                  "value": "left-circle",
                  "label": "left-circle"
                },
                {
                  "value": "lock",
                  "label": "lock"
                },
                {
                  "value": "mail",
                  "label": "mail"
                },
                {
                  "value": "medicine-box",
                  "label": "medicine-box"
                },
                {
                  "value": "meh",
                  "label": "meh"
                },
                {
                  "value": "minus-square",
                  "label": "minus-square"
                },
                {
                  "value": "minus-circle",
                  "label": "minus-circle"
                },
                {
                  "value": "mobile",
                  "label": "mobile"
                },
                {
                  "value": "money-collect",
                  "label": "money-collect"
                },
                {
                  "value": "notification",
                  "label": "notification"
                },
                {
                  "value": "message",
                  "label": "message"
                },
                {
                  "value": "pause-circle",
                  "label": "pause-circle"
                },
                {
                  "value": "phone",
                  "label": "phone"
                },
                {
                  "value": "picture",
                  "label": "picture"
                },
                {
                  "value": "play-circle",
                  "label": "play-circle"
                },
                {
                  "value": "play-square",
                  "label": "play-square"
                },
                {
                  "value": "pie-chart",
                  "label": "pie-chart"
                },
                {
                  "value": "plus-circle",
                  "label": "plus-circle"
                },
                {
                  "value": "pound-circle",
                  "label": "pound-circle"
                },
                {
                  "value": "plus-square",
                  "label": "plus-square"
                },
                {
                  "value": "printer",
                  "label": "printer"
                },
                {
                  "value": "project",
                  "label": "project"
                },
                {
                  "value": "profile",
                  "label": "profile"
                },
                {
                  "value": "property-safety",
                  "label": "property-safety"
                },
                {
                  "value": "pushpin",
                  "label": "pushpin"
                },
                {
                  "value": "question-circle",
                  "label": "question-circle"
                },
                {
                  "value": "reconciliation",
                  "label": "reconciliation"
                },
                {
                  "value": "red-envelope",
                  "label": "red-envelope"
                },
                {
                  "value": "rest",
                  "label": "rest"
                },
                {
                  "value": "right-circle",
                  "label": "right-circle"
                },
                {
                  "value": "right-square",
                  "label": "right-square"
                },
                {
                  "value": "rocket",
                  "label": "rocket"
                },
                {
                  "value": "safety-certificate",
                  "label": "safety-certificate"
                },
                {
                  "value": "save",
                  "label": "save"
                },
                {
                  "value": "security-scan",
                  "label": "security-scan"
                },
                {
                  "value": "schedule",
                  "label": "schedule"
                },
                {
                  "value": "setting",
                  "label": "setting"
                },
                {
                  "value": "shop",
                  "label": "shop"
                },
                {
                  "value": "shopping",
                  "label": "shopping"
                },
                {
                  "value": "skin",
                  "label": "skin"
                },
                {
                  "value": "sliders",
                  "label": "sliders"
                },
                {
                  "value": "snippets",
                  "label": "snippets"
                },
                {
                  "value": "star",
                  "label": "star"
                },
                {
                  "value": "stop",
                  "label": "stop"
                },
                {
                  "value": "switcher",
                  "label": "switcher"
                },
                {
                  "value": "tablet",
                  "label": "tablet"
                },
                {
                  "value": "tag",
                  "label": "tag"
                },
                {
                  "value": "tags",
                  "label": "tags"
                },
                {
                  "value": "sound",
                  "label": "sound"
                },
                {
                  "value": "tool",
                  "label": "tool"
                },
                {
                  "value": "trophy",
                  "label": "trophy"
                },
                {
                  "value": "thunderbolt",
                  "label": "thunderbolt"
                },
                {
                  "value": "unlock",
                  "label": "unlock"
                },
                {
                  "value": "up-square",
                  "label": "up-square"
                },
                {
                  "value": "usb",
                  "label": "usb"
                },
                {
                  "value": "smile",
                  "label": "smile"
                },
                {
                  "value": "video-camera",
                  "label": "video-camera"
                },
                {
                  "value": "wallet",
                  "label": "wallet"
                },
                {
                  "value": "warning",
                  "label": "warning"
                },
                {
                  "value": "trademark-circle",
                  "label": "trademark-circle"
                },
                {
                  "value": "up-circle",
                  "label": "up-circle"
                }
              ]
            }
          ]
        }
      },
      {
        "name": "nzTheme",
        "inputType": 0,
        "description": "nz-icon.nzTheme.description",
        "type": "Enum",
        "typeRaw": "`'fill'|'outline'|'twotone'`",
        "default": "`'outline'`",
        "typeDefinition": [
          "fill",
          "outline",
          "twotone"
        ],
        "pureDefault": "outline"
      },
      {
        "name": "nzSpin",
        "inputType": 0,
        "description": "nz-icon.nzSpin.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTwotoneColor",
        "inputType": 0,
        "description": "nz-icon.nzTwotoneColor.description",
        "type": "string",
        "typeRaw": "`string (hex color)`",
        "default": ""
      },
      {
        "name": "nzIconfont",
        "inputType": 0,
        "description": "nz-icon.nzIconfont.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzRotate",
        "inputType": 0,
        "description": "nz-icon.nzRotate.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/icon/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/icon",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-icon",
    "title": "nz-icon.title",
    "description": "nz-icon.description",
    "whenToUse": "nz-icon.whenToUse",
    "properties": [
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-icon.nzType.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "typeDefinition": {
          "type": "complex",
          "conditionField": "theme",
          "list": [
            {
              "conditionValue": "outline",
              "values": [
                {
                  "value": "aim",
                  "label": "aim"
                },
                {
                  "value": "alert",
                  "label": "alert"
                },
                {
                  "value": "align-right",
                  "label": "align-right"
                },
                {
                  "value": "align-center",
                  "label": "align-center"
                },
                {
                  "value": "aliwangwang",
                  "label": "aliwangwang"
                },
                {
                  "value": "amazon",
                  "label": "amazon"
                },
                {
                  "value": "ant-design",
                  "label": "ant-design"
                },
                {
                  "value": "api",
                  "label": "api"
                },
                {
                  "value": "ant-cloud",
                  "label": "ant-cloud"
                },
                {
                  "value": "align-left",
                  "label": "align-left"
                },
                {
                  "value": "apple",
                  "label": "apple"
                },
                {
                  "value": "alipay-circle",
                  "label": "alipay-circle"
                },
                {
                  "value": "appstore-add",
                  "label": "appstore-add"
                },
                {
                  "value": "alipay",
                  "label": "alipay"
                },
                {
                  "value": "arrow-down",
                  "label": "arrow-down"
                },
                {
                  "value": "arrows-alt",
                  "label": "arrows-alt"
                },
                {
                  "value": "apartment",
                  "label": "apartment"
                },
                {
                  "value": "audio",
                  "label": "audio"
                },
                {
                  "value": "audio-muted",
                  "label": "audio-muted"
                },
                {
                  "value": "arrow-up",
                  "label": "arrow-up"
                },
                {
                  "value": "android",
                  "label": "android"
                },
                {
                  "value": "aliyun",
                  "label": "aliyun"
                },
                {
                  "value": "area-chart",
                  "label": "area-chart"
                },
                {
                  "value": "arrow-left",
                  "label": "arrow-left"
                },
                {
                  "value": "backward",
                  "label": "backward"
                },
                {
                  "value": "bank",
                  "label": "bank"
                },
                {
                  "value": "baidu",
                  "label": "baidu"
                },
                {
                  "value": "barcode",
                  "label": "barcode"
                },
                {
                  "value": "bars",
                  "label": "bars"
                },
                {
                  "value": "behance-square",
                  "label": "behance-square"
                },
                {
                  "value": "behance",
                  "label": "behance"
                },
                {
                  "value": "bell",
                  "label": "bell"
                },
                {
                  "value": "bilibili",
                  "label": "bilibili"
                },
                {
                  "value": "bg-colors",
                  "label": "bg-colors"
                },
                {
                  "value": "block",
                  "label": "block"
                },
                {
                  "value": "bold",
                  "label": "bold"
                },
                {
                  "value": "border-bottom",
                  "label": "border-bottom"
                },
                {
                  "value": "border-horizontal",
                  "label": "border-horizontal"
                },
                {
                  "value": "border-left",
                  "label": "border-left"
                },
                {
                  "value": "border",
                  "label": "border"
                },
                {
                  "value": "border-inner",
                  "label": "border-inner"
                },
                {
                  "value": "bar-chart",
                  "label": "bar-chart"
                },
                {
                  "value": "border-right",
                  "label": "border-right"
                },
                {
                  "value": "border-verticle",
                  "label": "border-verticle"
                },
                {
                  "value": "account-book",
                  "label": "account-book"
                },
                {
                  "value": "alibaba",
                  "label": "alibaba"
                },
                {
                  "value": "branches",
                  "label": "branches"
                },
                {
                  "value": "border-top",
                  "label": "border-top"
                },
                {
                  "value": "arrow-right",
                  "label": "arrow-right"
                },
                {
                  "value": "bug",
                  "label": "bug"
                },
                {
                  "value": "audit",
                  "label": "audit"
                },
                {
                  "value": "calendar",
                  "label": "calendar"
                },
                {
                  "value": "calculator",
                  "label": "calculator"
                },
                {
                  "value": "camera",
                  "label": "camera"
                },
                {
                  "value": "box-plot",
                  "label": "box-plot"
                },
                {
                  "value": "car",
                  "label": "car"
                },
                {
                  "value": "bulb",
                  "label": "bulb"
                },
                {
                  "value": "book",
                  "label": "book"
                },
                {
                  "value": "caret-right",
                  "label": "caret-right"
                },
                {
                  "value": "carry-out",
                  "label": "carry-out"
                },
                {
                  "value": "caret-left",
                  "label": "caret-left"
                },
                {
                  "value": "caret-down",
                  "label": "caret-down"
                },
                {
                  "value": "check",
                  "label": "check"
                },
                {
                  "value": "check-square",
                  "label": "check-square"
                },
                {
                  "value": "chrome",
                  "label": "chrome"
                },
                {
                  "value": "caret-up",
                  "label": "caret-up"
                },
                {
                  "value": "clock-circle",
                  "label": "clock-circle"
                },
                {
                  "value": "ci",
                  "label": "ci"
                },
                {
                  "value": "ci-circle",
                  "label": "ci-circle"
                },
                {
                  "value": "close",
                  "label": "close"
                },
                {
                  "value": "close-circle",
                  "label": "close-circle"
                },
                {
                  "value": "close-square",
                  "label": "close-square"
                },
                {
                  "value": "cloud-download",
                  "label": "cloud-download"
                },
                {
                  "value": "cloud",
                  "label": "cloud"
                },
                {
                  "value": "cloud-server",
                  "label": "cloud-server"
                },
                {
                  "value": "cloud-sync",
                  "label": "cloud-sync"
                },
                {
                  "value": "code",
                  "label": "code"
                },
                {
                  "value": "check-circle",
                  "label": "check-circle"
                },
                {
                  "value": "codepen-circle",
                  "label": "codepen-circle"
                },
                {
                  "value": "code-sandbox",
                  "label": "code-sandbox"
                },
                {
                  "value": "codepen",
                  "label": "codepen"
                },
                {
                  "value": "cluster",
                  "label": "cluster"
                },
                {
                  "value": "column-height",
                  "label": "column-height"
                },
                {
                  "value": "cloud-upload",
                  "label": "cloud-upload"
                },
                {
                  "value": "column-width",
                  "label": "column-width"
                },
                {
                  "value": "compress",
                  "label": "compress"
                },
                {
                  "value": "compass",
                  "label": "compass"
                },
                {
                  "value": "console-sql",
                  "label": "console-sql"
                },
                {
                  "value": "appstore",
                  "label": "appstore"
                },
                {
                  "value": "contacts",
                  "label": "contacts"
                },
                {
                  "value": "coffee",
                  "label": "coffee"
                },
                {
                  "value": "container",
                  "label": "container"
                },
                {
                  "value": "copy",
                  "label": "copy"
                },
                {
                  "value": "control",
                  "label": "control"
                },
                {
                  "value": "copyright-circle",
                  "label": "copyright-circle"
                },
                {
                  "value": "clear",
                  "label": "clear"
                },
                {
                  "value": "build",
                  "label": "build"
                },
                {
                  "value": "dash",
                  "label": "dash"
                },
                {
                  "value": "database",
                  "label": "database"
                },
                {
                  "value": "border-outer",
                  "label": "border-outer"
                },
                {
                  "value": "delete",
                  "label": "delete"
                },
                {
                  "value": "dashboard",
                  "label": "dashboard"
                },
                {
                  "value": "delete-row",
                  "label": "delete-row"
                },
                {
                  "value": "delivered-procedure",
                  "label": "delivered-procedure"
                },
                {
                  "value": "deployment-unit",
                  "label": "deployment-unit"
                },
                {
                  "value": "delete-column",
                  "label": "delete-column"
                },
                {
                  "value": "desktop",
                  "label": "desktop"
                },
                {
                  "value": "diff",
                  "label": "diff"
                },
                {
                  "value": "dingtalk",
                  "label": "dingtalk"
                },
                {
                  "value": "dingding",
                  "label": "dingding"
                },
                {
                  "value": "dislike",
                  "label": "dislike"
                },
                {
                  "value": "disconnect",
                  "label": "disconnect"
                },
                {
                  "value": "comment",
                  "label": "comment"
                },
                {
                  "value": "docker",
                  "label": "docker"
                },
                {
                  "value": "dollar-circle",
                  "label": "dollar-circle"
                },
                {
                  "value": "double-left",
                  "label": "double-left"
                },
                {
                  "value": "dollar",
                  "label": "dollar"
                },
                {
                  "value": "dot-chart",
                  "label": "dot-chart"
                },
                {
                  "value": "dot-net",
                  "label": "dot-net"
                },
                {
                  "value": "double-right",
                  "label": "double-right"
                },
                {
                  "value": "down-circle",
                  "label": "down-circle"
                },
                {
                  "value": "down",
                  "label": "down"
                },
                {
                  "value": "borderless-table",
                  "label": "borderless-table"
                },
                {
                  "value": "drag",
                  "label": "drag"
                },
                {
                  "value": "dribbble-square",
                  "label": "dribbble-square"
                },
                {
                  "value": "dribbble",
                  "label": "dribbble"
                },
                {
                  "value": "down-square",
                  "label": "down-square"
                },
                {
                  "value": "ellipsis",
                  "label": "ellipsis"
                },
                {
                  "value": "dropbox",
                  "label": "dropbox"
                },
                {
                  "value": "enter",
                  "label": "enter"
                },
                {
                  "value": "euro-circle",
                  "label": "euro-circle"
                },
                {
                  "value": "environment",
                  "label": "environment"
                },
                {
                  "value": "exception",
                  "label": "exception"
                },
                {
                  "value": "euro",
                  "label": "euro"
                },
                {
                  "value": "customer-service",
                  "label": "customer-service"
                },
                {
                  "value": "exclamation-circle",
                  "label": "exclamation-circle"
                },
                {
                  "value": "expand-alt",
                  "label": "expand-alt"
                },
                {
                  "value": "exclamation",
                  "label": "exclamation"
                },
                {
                  "value": "expand",
                  "label": "expand"
                },
                {
                  "value": "export",
                  "label": "export"
                },
                {
                  "value": "experiment",
                  "label": "experiment"
                },
                {
                  "value": "eye-invisible",
                  "label": "eye-invisible"
                },
                {
                  "value": "eye",
                  "label": "eye"
                },
                {
                  "value": "facebook",
                  "label": "facebook"
                },
                {
                  "value": "fast-forward",
                  "label": "fast-forward"
                },
                {
                  "value": "fall",
                  "label": "fall"
                },
                {
                  "value": "download",
                  "label": "download"
                },
                {
                  "value": "field-binary",
                  "label": "field-binary"
                },
                {
                  "value": "field-number",
                  "label": "field-number"
                },
                {
                  "value": "credit-card",
                  "label": "credit-card"
                },
                {
                  "value": "field-string",
                  "label": "field-string"
                },
                {
                  "value": "field-time",
                  "label": "field-time"
                },
                {
                  "value": "file-excel",
                  "label": "file-excel"
                },
                {
                  "value": "file-exclamation",
                  "label": "file-exclamation"
                },
                {
                  "value": "file-add",
                  "label": "file-add"
                },
                {
                  "value": "file-done",
                  "label": "file-done"
                },
                {
                  "value": "crown",
                  "label": "crown"
                },
                {
                  "value": "discord",
                  "label": "discord"
                },
                {
                  "value": "file-markdown",
                  "label": "file-markdown"
                },
                {
                  "value": "file",
                  "label": "file"
                },
                {
                  "value": "file-pdf",
                  "label": "file-pdf"
                },
                {
                  "value": "file-jpg",
                  "label": "file-jpg"
                },
                {
                  "value": "file-gif",
                  "label": "file-gif"
                },
                {
                  "value": "file-sync",
                  "label": "file-sync"
                },
                {
                  "value": "file-protect",
                  "label": "file-protect"
                },
                {
                  "value": "file-search",
                  "label": "file-search"
                },
                {
                  "value": "file-unknown",
                  "label": "file-unknown"
                },
                {
                  "value": "file-word",
                  "label": "file-word"
                },
                {
                  "value": "file-text",
                  "label": "file-text"
                },
                {
                  "value": "file-zip",
                  "label": "file-zip"
                },
                {
                  "value": "filter",
                  "label": "filter"
                },
                {
                  "value": "flag",
                  "label": "flag"
                },
                {
                  "value": "fire",
                  "label": "fire"
                },
                {
                  "value": "folder-add",
                  "label": "folder-add"
                },
                {
                  "value": "folder-open",
                  "label": "folder-open"
                },
                {
                  "value": "folder",
                  "label": "folder"
                },
                {
                  "value": "font-size",
                  "label": "font-size"
                },
                {
                  "value": "edit",
                  "label": "edit"
                },
                {
                  "value": "file-ppt",
                  "label": "file-ppt"
                },
                {
                  "value": "form",
                  "label": "form"
                },
                {
                  "value": "folder-view",
                  "label": "folder-view"
                },
                {
                  "value": "copyright",
                  "label": "copyright"
                },
                {
                  "value": "fork",
                  "label": "fork"
                },
                {
                  "value": "forward",
                  "label": "forward"
                },
                {
                  "value": "function",
                  "label": "function"
                },
                {
                  "value": "fullscreen-exit",
                  "label": "fullscreen-exit"
                },
                {
                  "value": "fund",
                  "label": "fund"
                },
                {
                  "value": "fund-projection-screen",
                  "label": "fund-projection-screen"
                },
                {
                  "value": "funnel-plot",
                  "label": "funnel-plot"
                },
                {
                  "value": "gateway",
                  "label": "gateway"
                },
                {
                  "value": "gift",
                  "label": "gift"
                },
                {
                  "value": "gif",
                  "label": "gif"
                },
                {
                  "value": "font-colors",
                  "label": "font-colors"
                },
                {
                  "value": "frown",
                  "label": "frown"
                },
                {
                  "value": "global",
                  "label": "global"
                },
                {
                  "value": "gitlab",
                  "label": "gitlab"
                },
                {
                  "value": "gold",
                  "label": "gold"
                },
                {
                  "value": "google",
                  "label": "google"
                },
                {
                  "value": "google-plus",
                  "label": "google-plus"
                },
                {
                  "value": "group",
                  "label": "group"
                },
                {
                  "value": "hdd",
                  "label": "hdd"
                },
                {
                  "value": "harmony-o-s",
                  "label": "harmony-o-s"
                },
                {
                  "value": "heart",
                  "label": "heart"
                },
                {
                  "value": "heat-map",
                  "label": "heat-map"
                },
                {
                  "value": "highlight",
                  "label": "highlight"
                },
                {
                  "value": "home",
                  "label": "home"
                },
                {
                  "value": "html5",
                  "label": "html5"
                },
                {
                  "value": "format-painter",
                  "label": "format-painter"
                },
                {
                  "value": "ie",
                  "label": "ie"
                },
                {
                  "value": "idcard",
                  "label": "idcard"
                },
                {
                  "value": "github",
                  "label": "github"
                },
                {
                  "value": "hourglass",
                  "label": "hourglass"
                },
                {
                  "value": "holder",
                  "label": "holder"
                },
                {
                  "value": "fullscreen",
                  "label": "fullscreen"
                },
                {
                  "value": "info-circle",
                  "label": "info-circle"
                },
                {
                  "value": "fund-view",
                  "label": "fund-view"
                },
                {
                  "value": "inbox",
                  "label": "inbox"
                },
                {
                  "value": "insert-row-left",
                  "label": "insert-row-left"
                },
                {
                  "value": "info",
                  "label": "info"
                },
                {
                  "value": "import",
                  "label": "import"
                },
                {
                  "value": "insert-row-above",
                  "label": "insert-row-above"
                },
                {
                  "value": "insert-row-right",
                  "label": "insert-row-right"
                },
                {
                  "value": "interaction",
                  "label": "interaction"
                },
                {
                  "value": "italic",
                  "label": "italic"
                },
                {
                  "value": "java",
                  "label": "java"
                },
                {
                  "value": "issues-close",
                  "label": "issues-close"
                },
                {
                  "value": "java-script",
                  "label": "java-script"
                },
                {
                  "value": "kubernetes",
                  "label": "kubernetes"
                },
                {
                  "value": "instagram",
                  "label": "instagram"
                },
                {
                  "value": "laptop",
                  "label": "laptop"
                },
                {
                  "value": "layout",
                  "label": "layout"
                },
                {
                  "value": "insurance",
                  "label": "insurance"
                },
                {
                  "value": "left-square",
                  "label": "left-square"
                },
                {
                  "value": "line-chart",
                  "label": "line-chart"
                },
                {
                  "value": "left-circle",
                  "label": "left-circle"
                },
                {
                  "value": "line",
                  "label": "line"
                },
                {
                  "value": "like",
                  "label": "like"
                },
                {
                  "value": "loading",
                  "label": "loading"
                },
                {
                  "value": "loading-3-quarters",
                  "label": "loading-3-quarters"
                },
                {
                  "value": "linux",
                  "label": "linux"
                },
                {
                  "value": "line-height",
                  "label": "line-height"
                },
                {
                  "value": "left",
                  "label": "left"
                },
                {
                  "value": "lock",
                  "label": "lock"
                },
                {
                  "value": "mac-command",
                  "label": "mac-command"
                },
                {
                  "value": "mail",
                  "label": "mail"
                },
                {
                  "value": "link",
                  "label": "link"
                },
                {
                  "value": "man",
                  "label": "man"
                },
                {
                  "value": "medicine-box",
                  "label": "medicine-box"
                },
                {
                  "value": "medium-workmark",
                  "label": "medium-workmark"
                },
                {
                  "value": "medium",
                  "label": "medium"
                },
                {
                  "value": "meh",
                  "label": "meh"
                },
                {
                  "value": "logout",
                  "label": "logout"
                },
                {
                  "value": "menu-fold",
                  "label": "menu-fold"
                },
                {
                  "value": "login",
                  "label": "login"
                },
                {
                  "value": "linkedin",
                  "label": "linkedin"
                },
                {
                  "value": "message",
                  "label": "message"
                },
                {
                  "value": "menu",
                  "label": "menu"
                },
                {
                  "value": "minus-circle",
                  "label": "minus-circle"
                },
                {
                  "value": "key",
                  "label": "key"
                },
                {
                  "value": "minus-square",
                  "label": "minus-square"
                },
                {
                  "value": "mobile",
                  "label": "mobile"
                },
                {
                  "value": "money-collect",
                  "label": "money-collect"
                },
                {
                  "value": "fast-backward",
                  "label": "fast-backward"
                },
                {
                  "value": "monitor",
                  "label": "monitor"
                },
                {
                  "value": "moon",
                  "label": "moon"
                },
                {
                  "value": "more",
                  "label": "more"
                },
                {
                  "value": "node-index",
                  "label": "node-index"
                },
                {
                  "value": "node-collapse",
                  "label": "node-collapse"
                },
                {
                  "value": "node-expand",
                  "label": "node-expand"
                },
                {
                  "value": "merge",
                  "label": "merge"
                },
                {
                  "value": "menu-unfold",
                  "label": "menu-unfold"
                },
                {
                  "value": "number",
                  "label": "number"
                },
                {
                  "value": "merge-cells",
                  "label": "merge-cells"
                },
                {
                  "value": "notification",
                  "label": "notification"
                },
                {
                  "value": "ordered-list",
                  "label": "ordered-list"
                },
                {
                  "value": "paper-clip",
                  "label": "paper-clip"
                },
                {
                  "value": "partition",
                  "label": "partition"
                },
                {
                  "value": "muted",
                  "label": "muted"
                },
                {
                  "value": "pause",
                  "label": "pause"
                },
                {
                  "value": "one-to-one",
                  "label": "one-to-one"
                },
                {
                  "value": "pay-circle",
                  "label": "pay-circle"
                },
                {
                  "value": "percentage",
                  "label": "percentage"
                },
                {
                  "value": "pic-center",
                  "label": "pic-center"
                },
                {
                  "value": "pic-right",
                  "label": "pic-right"
                },
                {
                  "value": "pic-left",
                  "label": "pic-left"
                },
                {
                  "value": "pause-circle",
                  "label": "pause-circle"
                },
                {
                  "value": "pie-chart",
                  "label": "pie-chart"
                },
                {
                  "value": "picture",
                  "label": "picture"
                },
                {
                  "value": "play-circle",
                  "label": "play-circle"
                },
                {
                  "value": "play-square",
                  "label": "play-square"
                },
                {
                  "value": "plus",
                  "label": "plus"
                },
                {
                  "value": "plus-square",
                  "label": "plus-square"
                },
                {
                  "value": "plus-circle",
                  "label": "plus-circle"
                },
                {
                  "value": "pound-circle",
                  "label": "pound-circle"
                },
                {
                  "value": "pound",
                  "label": "pound"
                },
                {
                  "value": "poweroff",
                  "label": "poweroff"
                },
                {
                  "value": "profile",
                  "label": "profile"
                },
                {
                  "value": "printer",
                  "label": "printer"
                },
                {
                  "value": "project",
                  "label": "project"
                },
                {
                  "value": "product",
                  "label": "product"
                },
                {
                  "value": "phone",
                  "label": "phone"
                },
                {
                  "value": "property-safety",
                  "label": "property-safety"
                },
                {
                  "value": "python",
                  "label": "python"
                },
                {
                  "value": "pinterest",
                  "label": "pinterest"
                },
                {
                  "value": "pushpin",
                  "label": "pushpin"
                },
                {
                  "value": "qrcode",
                  "label": "qrcode"
                },
                {
                  "value": "question-circle",
                  "label": "question-circle"
                },
                {
                  "value": "radius-bottomleft",
                  "label": "radius-bottomleft"
                },
                {
                  "value": "radius-bottomright",
                  "label": "radius-bottomright"
                },
                {
                  "value": "pull-request",
                  "label": "pull-request"
                },
                {
                  "value": "question",
                  "label": "question"
                },
                {
                  "value": "radius-setting",
                  "label": "radius-setting"
                },
                {
                  "value": "radar-chart",
                  "label": "radar-chart"
                },
                {
                  "value": "radius-upleft",
                  "label": "radius-upleft"
                },
                {
                  "value": "radius-upright",
                  "label": "radius-upright"
                },
                {
                  "value": "read",
                  "label": "read"
                },
                {
                  "value": "reconciliation",
                  "label": "reconciliation"
                },
                {
                  "value": "red-envelope",
                  "label": "red-envelope"
                },
                {
                  "value": "reddit",
                  "label": "reddit"
                },
                {
                  "value": "redo",
                  "label": "redo"
                },
                {
                  "value": "reload",
                  "label": "reload"
                },
                {
                  "value": "retweet",
                  "label": "retweet"
                },
                {
                  "value": "rest",
                  "label": "rest"
                },
                {
                  "value": "right-circle",
                  "label": "right-circle"
                },
                {
                  "value": "right-square",
                  "label": "right-square"
                },
                {
                  "value": "right",
                  "label": "right"
                },
                {
                  "value": "robot",
                  "label": "robot"
                },
                {
                  "value": "rise",
                  "label": "rise"
                },
                {
                  "value": "rocket",
                  "label": "rocket"
                },
                {
                  "value": "rollback",
                  "label": "rollback"
                },
                {
                  "value": "rotate-right",
                  "label": "rotate-right"
                },
                {
                  "value": "safety-certificate",
                  "label": "safety-certificate"
                },
                {
                  "value": "rotate-left",
                  "label": "rotate-left"
                },
                {
                  "value": "qq",
                  "label": "qq"
                },
                {
                  "value": "ruby",
                  "label": "ruby"
                },
                {
                  "value": "save",
                  "label": "save"
                },
                {
                  "value": "scan",
                  "label": "scan"
                },
                {
                  "value": "security-scan",
                  "label": "security-scan"
                },
                {
                  "value": "scissor",
                  "label": "scissor"
                },
                {
                  "value": "schedule",
                  "label": "schedule"
                },
                {
                  "value": "select",
                  "label": "select"
                },
                {
                  "value": "send",
                  "label": "send"
                },
                {
                  "value": "minus",
                  "label": "minus"
                },
                {
                  "value": "shake",
                  "label": "shake"
                },
                {
                  "value": "setting",
                  "label": "setting"
                },
                {
                  "value": "shop",
                  "label": "shop"
                },
                {
                  "value": "shopping",
                  "label": "shopping"
                },
                {
                  "value": "shopping-cart",
                  "label": "shopping-cart"
                },
                {
                  "value": "shrink",
                  "label": "shrink"
                },
                {
                  "value": "sisternode",
                  "label": "sisternode"
                },
                {
                  "value": "sketch",
                  "label": "sketch"
                },
                {
                  "value": "skin",
                  "label": "skin"
                },
                {
                  "value": "skype",
                  "label": "skype"
                },
                {
                  "value": "slack",
                  "label": "slack"
                },
                {
                  "value": "slack-square",
                  "label": "slack-square"
                },
                {
                  "value": "sliders",
                  "label": "sliders"
                },
                {
                  "value": "small-dash",
                  "label": "small-dash"
                },
                {
                  "value": "smile",
                  "label": "smile"
                },
                {
                  "value": "snippets",
                  "label": "snippets"
                },
                {
                  "value": "file-image",
                  "label": "file-image"
                },
                {
                  "value": "solution",
                  "label": "solution"
                },
                {
                  "value": "sort-ascending",
                  "label": "sort-ascending"
                },
                {
                  "value": "split-cells",
                  "label": "split-cells"
                },
                {
                  "value": "sort-descending",
                  "label": "sort-descending"
                },
                {
                  "value": "signature",
                  "label": "signature"
                },
                {
                  "value": "spotify",
                  "label": "spotify"
                },
                {
                  "value": "search",
                  "label": "search"
                },
                {
                  "value": "star",
                  "label": "star"
                },
                {
                  "value": "step-forward",
                  "label": "step-forward"
                },
                {
                  "value": "stock",
                  "label": "stock"
                },
                {
                  "value": "sound",
                  "label": "sound"
                },
                {
                  "value": "step-backward",
                  "label": "step-backward"
                },
                {
                  "value": "share-alt",
                  "label": "share-alt"
                },
                {
                  "value": "stop",
                  "label": "stop"
                },
                {
                  "value": "sun",
                  "label": "sun"
                },
                {
                  "value": "strikethrough",
                  "label": "strikethrough"
                },
                {
                  "value": "swap-left",
                  "label": "swap-left"
                },
                {
                  "value": "swap",
                  "label": "swap"
                },
                {
                  "value": "switcher",
                  "label": "switcher"
                },
                {
                  "value": "sync",
                  "label": "sync"
                },
                {
                  "value": "table",
                  "label": "table"
                },
                {
                  "value": "tag",
                  "label": "tag"
                },
                {
                  "value": "tablet",
                  "label": "tablet"
                },
                {
                  "value": "taobao-circle",
                  "label": "taobao-circle"
                },
                {
                  "value": "taobao",
                  "label": "taobao"
                },
                {
                  "value": "team",
                  "label": "team"
                },
                {
                  "value": "subnode",
                  "label": "subnode"
                },
                {
                  "value": "thunderbolt",
                  "label": "thunderbolt"
                },
                {
                  "value": "tags",
                  "label": "tags"
                },
                {
                  "value": "tool",
                  "label": "tool"
                },
                {
                  "value": "trademark-circle",
                  "label": "trademark-circle"
                },
                {
                  "value": "tik-tok",
                  "label": "tik-tok"
                },
                {
                  "value": "to-top",
                  "label": "to-top"
                },
                {
                  "value": "swap-right",
                  "label": "swap-right"
                },
                {
                  "value": "translation",
                  "label": "translation"
                },
                {
                  "value": "safety",
                  "label": "safety"
                },
                {
                  "value": "truck",
                  "label": "truck"
                },
                {
                  "value": "twitch",
                  "label": "twitch"
                },
                {
                  "value": "underline",
                  "label": "underline"
                },
                {
                  "value": "undo",
                  "label": "undo"
                },
                {
                  "value": "unlock",
                  "label": "unlock"
                },
                {
                  "value": "ungroup",
                  "label": "ungroup"
                },
                {
                  "value": "trademark",
                  "label": "trademark"
                },
                {
                  "value": "twitter",
                  "label": "twitter"
                },
                {
                  "value": "open-a-i",
                  "label": "open-a-i"
                },
                {
                  "value": "up",
                  "label": "up"
                },
                {
                  "value": "up-square",
                  "label": "up-square"
                },
                {
                  "value": "upload",
                  "label": "upload"
                },
                {
                  "value": "usb",
                  "label": "usb"
                },
                {
                  "value": "trophy",
                  "label": "trophy"
                },
                {
                  "value": "user",
                  "label": "user"
                },
                {
                  "value": "user-delete",
                  "label": "user-delete"
                },
                {
                  "value": "usergroup-add",
                  "label": "usergroup-add"
                },
                {
                  "value": "usergroup-delete",
                  "label": "usergroup-delete"
                },
                {
                  "value": "unordered-list",
                  "label": "unordered-list"
                },
                {
                  "value": "verified",
                  "label": "verified"
                },
                {
                  "value": "vertical-left",
                  "label": "vertical-left"
                },
                {
                  "value": "vertical-right",
                  "label": "vertical-right"
                },
                {
                  "value": "video-camera",
                  "label": "video-camera"
                },
                {
                  "value": "video-camera-add",
                  "label": "video-camera-add"
                },
                {
                  "value": "vertical-align-top",
                  "label": "vertical-align-top"
                },
                {
                  "value": "user-add",
                  "label": "user-add"
                },
                {
                  "value": "history",
                  "label": "history"
                },
                {
                  "value": "insert-row-below",
                  "label": "insert-row-below"
                },
                {
                  "value": "wechat",
                  "label": "wechat"
                },
                {
                  "value": "wechat-work",
                  "label": "wechat-work"
                },
                {
                  "value": "warning",
                  "label": "warning"
                },
                {
                  "value": "weibo-circle",
                  "label": "weibo-circle"
                },
                {
                  "value": "weibo",
                  "label": "weibo"
                },
                {
                  "value": "wifi",
                  "label": "wifi"
                },
                {
                  "value": "weibo-square",
                  "label": "weibo-square"
                },
                {
                  "value": "windows",
                  "label": "windows"
                },
                {
                  "value": "whats-app",
                  "label": "whats-app"
                },
                {
                  "value": "woman",
                  "label": "woman"
                },
                {
                  "value": "user-switch",
                  "label": "user-switch"
                },
                {
                  "value": "yahoo",
                  "label": "yahoo"
                },
                {
                  "value": "x",
                  "label": "x"
                },
                {
                  "value": "yuque",
                  "label": "yuque"
                },
                {
                  "value": "zhihu",
                  "label": "zhihu"
                },
                {
                  "value": "youtube",
                  "label": "youtube"
                },
                {
                  "value": "vertical-align-middle",
                  "label": "vertical-align-middle"
                },
                {
                  "value": "up-circle",
                  "label": "up-circle"
                },
                {
                  "value": "transaction",
                  "label": "transaction"
                },
                {
                  "value": "zoom-out",
                  "label": "zoom-out"
                },
                {
                  "value": "zoom-in",
                  "label": "zoom-in"
                },
                {
                  "value": "vertical-align-bottom",
                  "label": "vertical-align-bottom"
                },
                {
                  "value": "wallet",
                  "label": "wallet"
                }
              ]
            },
            {
              "conditionValue": "fill",
              "values": [
                {
                  "value": "alipay-square",
                  "label": "alipay-square"
                },
                {
                  "value": "aliwangwang",
                  "label": "aliwangwang"
                },
                {
                  "value": "alipay-circle",
                  "label": "alipay-circle"
                },
                {
                  "value": "alert",
                  "label": "alert"
                },
                {
                  "value": "amazon-circle",
                  "label": "amazon-circle"
                },
                {
                  "value": "android",
                  "label": "android"
                },
                {
                  "value": "apple",
                  "label": "apple"
                },
                {
                  "value": "amazon-square",
                  "label": "amazon-square"
                },
                {
                  "value": "appstore",
                  "label": "appstore"
                },
                {
                  "value": "api",
                  "label": "api"
                },
                {
                  "value": "bank",
                  "label": "bank"
                },
                {
                  "value": "behance-circle",
                  "label": "behance-circle"
                },
                {
                  "value": "behance-square",
                  "label": "behance-square"
                },
                {
                  "value": "bell",
                  "label": "bell"
                },
                {
                  "value": "bilibili",
                  "label": "bilibili"
                },
                {
                  "value": "audio",
                  "label": "audio"
                },
                {
                  "value": "book",
                  "label": "book"
                },
                {
                  "value": "account-book",
                  "label": "account-book"
                },
                {
                  "value": "box-plot",
                  "label": "box-plot"
                },
                {
                  "value": "bug",
                  "label": "bug"
                },
                {
                  "value": "backward",
                  "label": "backward"
                },
                {
                  "value": "build",
                  "label": "build"
                },
                {
                  "value": "calculator",
                  "label": "calculator"
                },
                {
                  "value": "calendar",
                  "label": "calendar"
                },
                {
                  "value": "bulb",
                  "label": "bulb"
                },
                {
                  "value": "camera",
                  "label": "camera"
                },
                {
                  "value": "caret-down",
                  "label": "caret-down"
                },
                {
                  "value": "caret-right",
                  "label": "caret-right"
                },
                {
                  "value": "caret-left",
                  "label": "caret-left"
                },
                {
                  "value": "carry-out",
                  "label": "carry-out"
                },
                {
                  "value": "car",
                  "label": "car"
                },
                {
                  "value": "caret-up",
                  "label": "caret-up"
                },
                {
                  "value": "chrome",
                  "label": "chrome"
                },
                {
                  "value": "ci-circle",
                  "label": "ci-circle"
                },
                {
                  "value": "check-square",
                  "label": "check-square"
                },
                {
                  "value": "clock-circle",
                  "label": "clock-circle"
                },
                {
                  "value": "close-circle",
                  "label": "close-circle"
                },
                {
                  "value": "close-square",
                  "label": "close-square"
                },
                {
                  "value": "cloud",
                  "label": "cloud"
                },
                {
                  "value": "code-sandbox-circle",
                  "label": "code-sandbox-circle"
                },
                {
                  "value": "code",
                  "label": "code"
                },
                {
                  "value": "codepen-square",
                  "label": "codepen-square"
                },
                {
                  "value": "code-sandbox-square",
                  "label": "code-sandbox-square"
                },
                {
                  "value": "codepen-circle",
                  "label": "codepen-circle"
                },
                {
                  "value": "compass",
                  "label": "compass"
                },
                {
                  "value": "check-circle",
                  "label": "check-circle"
                },
                {
                  "value": "contacts",
                  "label": "contacts"
                },
                {
                  "value": "container",
                  "label": "container"
                },
                {
                  "value": "credit-card",
                  "label": "credit-card"
                },
                {
                  "value": "control",
                  "label": "control"
                },
                {
                  "value": "crown",
                  "label": "crown"
                },
                {
                  "value": "copy",
                  "label": "copy"
                },
                {
                  "value": "copyright-circle",
                  "label": "copyright-circle"
                },
                {
                  "value": "customer-service",
                  "label": "customer-service"
                },
                {
                  "value": "dashboard",
                  "label": "dashboard"
                },
                {
                  "value": "database",
                  "label": "database"
                },
                {
                  "value": "delete",
                  "label": "delete"
                },
                {
                  "value": "diff",
                  "label": "diff"
                },
                {
                  "value": "dingtalk-circle",
                  "label": "dingtalk-circle"
                },
                {
                  "value": "dingtalk-square",
                  "label": "dingtalk-square"
                },
                {
                  "value": "discord",
                  "label": "discord"
                },
                {
                  "value": "dislike",
                  "label": "dislike"
                },
                {
                  "value": "dollar-circle",
                  "label": "dollar-circle"
                },
                {
                  "value": "down-circle",
                  "label": "down-circle"
                },
                {
                  "value": "down-square",
                  "label": "down-square"
                },
                {
                  "value": "dribbble-square",
                  "label": "dribbble-square"
                },
                {
                  "value": "dribbble-circle",
                  "label": "dribbble-circle"
                },
                {
                  "value": "edit",
                  "label": "edit"
                },
                {
                  "value": "environment",
                  "label": "environment"
                },
                {
                  "value": "euro-circle",
                  "label": "euro-circle"
                },
                {
                  "value": "experiment",
                  "label": "experiment"
                },
                {
                  "value": "eye",
                  "label": "eye"
                },
                {
                  "value": "eye-invisible",
                  "label": "eye-invisible"
                },
                {
                  "value": "exclamation-circle",
                  "label": "exclamation-circle"
                },
                {
                  "value": "dropbox-circle",
                  "label": "dropbox-circle"
                },
                {
                  "value": "fast-backward",
                  "label": "fast-backward"
                },
                {
                  "value": "facebook",
                  "label": "facebook"
                },
                {
                  "value": "file-excel",
                  "label": "file-excel"
                },
                {
                  "value": "file-exclamation",
                  "label": "file-exclamation"
                },
                {
                  "value": "file",
                  "label": "file"
                },
                {
                  "value": "file-image",
                  "label": "file-image"
                },
                {
                  "value": "file-markdown",
                  "label": "file-markdown"
                },
                {
                  "value": "file-pdf",
                  "label": "file-pdf"
                },
                {
                  "value": "file-ppt",
                  "label": "file-ppt"
                },
                {
                  "value": "fast-forward",
                  "label": "fast-forward"
                },
                {
                  "value": "dropbox-square",
                  "label": "dropbox-square"
                },
                {
                  "value": "file-text",
                  "label": "file-text"
                },
                {
                  "value": "file-zip",
                  "label": "file-zip"
                },
                {
                  "value": "file-unknown",
                  "label": "file-unknown"
                },
                {
                  "value": "file-word",
                  "label": "file-word"
                },
                {
                  "value": "filter",
                  "label": "filter"
                },
                {
                  "value": "fire",
                  "label": "fire"
                },
                {
                  "value": "flag",
                  "label": "flag"
                },
                {
                  "value": "folder-add",
                  "label": "folder-add"
                },
                {
                  "value": "folder",
                  "label": "folder"
                },
                {
                  "value": "folder-open",
                  "label": "folder-open"
                },
                {
                  "value": "file-add",
                  "label": "file-add"
                },
                {
                  "value": "frown",
                  "label": "frown"
                },
                {
                  "value": "fund",
                  "label": "fund"
                },
                {
                  "value": "forward",
                  "label": "forward"
                },
                {
                  "value": "funnel-plot",
                  "label": "funnel-plot"
                },
                {
                  "value": "gift",
                  "label": "gift"
                },
                {
                  "value": "gitlab",
                  "label": "gitlab"
                },
                {
                  "value": "gold",
                  "label": "gold"
                },
                {
                  "value": "github",
                  "label": "github"
                },
                {
                  "value": "golden",
                  "label": "golden"
                },
                {
                  "value": "google-plus-square",
                  "label": "google-plus-square"
                },
                {
                  "value": "google-plus-circle",
                  "label": "google-plus-circle"
                },
                {
                  "value": "google-square",
                  "label": "google-square"
                },
                {
                  "value": "heart",
                  "label": "heart"
                },
                {
                  "value": "format-painter",
                  "label": "format-painter"
                },
                {
                  "value": "highlight",
                  "label": "highlight"
                },
                {
                  "value": "home",
                  "label": "home"
                },
                {
                  "value": "hourglass",
                  "label": "hourglass"
                },
                {
                  "value": "hdd",
                  "label": "hdd"
                },
                {
                  "value": "html5",
                  "label": "html5"
                },
                {
                  "value": "idcard",
                  "label": "idcard"
                },
                {
                  "value": "google-circle",
                  "label": "google-circle"
                },
                {
                  "value": "ie-square",
                  "label": "ie-square"
                },
                {
                  "value": "insurance",
                  "label": "insurance"
                },
                {
                  "value": "instagram",
                  "label": "instagram"
                },
                {
                  "value": "ie-circle",
                  "label": "ie-circle"
                },
                {
                  "value": "layout",
                  "label": "layout"
                },
                {
                  "value": "left-circle",
                  "label": "left-circle"
                },
                {
                  "value": "interaction",
                  "label": "interaction"
                },
                {
                  "value": "left-square",
                  "label": "left-square"
                },
                {
                  "value": "linkedin",
                  "label": "linkedin"
                },
                {
                  "value": "like",
                  "label": "like"
                },
                {
                  "value": "mail",
                  "label": "mail"
                },
                {
                  "value": "mac-command",
                  "label": "mac-command"
                },
                {
                  "value": "medicine-box",
                  "label": "medicine-box"
                },
                {
                  "value": "medium-circle",
                  "label": "medium-circle"
                },
                {
                  "value": "medium-square",
                  "label": "medium-square"
                },
                {
                  "value": "meh",
                  "label": "meh"
                },
                {
                  "value": "lock",
                  "label": "lock"
                },
                {
                  "value": "merge",
                  "label": "merge"
                },
                {
                  "value": "message",
                  "label": "message"
                },
                {
                  "value": "minus-circle",
                  "label": "minus-circle"
                },
                {
                  "value": "minus-square",
                  "label": "minus-square"
                },
                {
                  "value": "mobile",
                  "label": "mobile"
                },
                {
                  "value": "moon",
                  "label": "moon"
                },
                {
                  "value": "muted",
                  "label": "muted"
                },
                {
                  "value": "notification",
                  "label": "notification"
                },
                {
                  "value": "pay-circle",
                  "label": "pay-circle"
                },
                {
                  "value": "phone",
                  "label": "phone"
                },
                {
                  "value": "pinterest",
                  "label": "pinterest"
                },
                {
                  "value": "play-circle",
                  "label": "play-circle"
                },
                {
                  "value": "pie-chart",
                  "label": "pie-chart"
                },
                {
                  "value": "pause-circle",
                  "label": "pause-circle"
                },
                {
                  "value": "picture",
                  "label": "picture"
                },
                {
                  "value": "play-square",
                  "label": "play-square"
                },
                {
                  "value": "pound-circle",
                  "label": "pound-circle"
                },
                {
                  "value": "plus-circle",
                  "label": "plus-circle"
                },
                {
                  "value": "plus-square",
                  "label": "plus-square"
                },
                {
                  "value": "printer",
                  "label": "printer"
                },
                {
                  "value": "product",
                  "label": "product"
                },
                {
                  "value": "profile",
                  "label": "profile"
                },
                {
                  "value": "property-safety",
                  "label": "property-safety"
                },
                {
                  "value": "project",
                  "label": "project"
                },
                {
                  "value": "qq-circle",
                  "label": "qq-circle"
                },
                {
                  "value": "question-circle",
                  "label": "question-circle"
                },
                {
                  "value": "qq-square",
                  "label": "qq-square"
                },
                {
                  "value": "reconciliation",
                  "label": "reconciliation"
                },
                {
                  "value": "red-envelope",
                  "label": "red-envelope"
                },
                {
                  "value": "reddit-circle",
                  "label": "reddit-circle"
                },
                {
                  "value": "read",
                  "label": "read"
                },
                {
                  "value": "reddit-square",
                  "label": "reddit-square"
                },
                {
                  "value": "right-circle",
                  "label": "right-circle"
                },
                {
                  "value": "right-square",
                  "label": "right-square"
                },
                {
                  "value": "rest",
                  "label": "rest"
                },
                {
                  "value": "money-collect",
                  "label": "money-collect"
                },
                {
                  "value": "safety-certificate",
                  "label": "safety-certificate"
                },
                {
                  "value": "rocket",
                  "label": "rocket"
                },
                {
                  "value": "schedule",
                  "label": "schedule"
                },
                {
                  "value": "security-scan",
                  "label": "security-scan"
                },
                {
                  "value": "pushpin",
                  "label": "pushpin"
                },
                {
                  "value": "setting",
                  "label": "setting"
                },
                {
                  "value": "save",
                  "label": "save"
                },
                {
                  "value": "shopping",
                  "label": "shopping"
                },
                {
                  "value": "shop",
                  "label": "shop"
                },
                {
                  "value": "signal",
                  "label": "signal"
                },
                {
                  "value": "open-a-i",
                  "label": "open-a-i"
                },
                {
                  "value": "signature",
                  "label": "signature"
                },
                {
                  "value": "sketch-circle",
                  "label": "sketch-circle"
                },
                {
                  "value": "skype",
                  "label": "skype"
                },
                {
                  "value": "slack-circle",
                  "label": "slack-circle"
                },
                {
                  "value": "sketch-square",
                  "label": "sketch-square"
                },
                {
                  "value": "slack-square",
                  "label": "slack-square"
                },
                {
                  "value": "skin",
                  "label": "skin"
                },
                {
                  "value": "sliders",
                  "label": "sliders"
                },
                {
                  "value": "smile",
                  "label": "smile"
                },
                {
                  "value": "snippets",
                  "label": "snippets"
                },
                {
                  "value": "sound",
                  "label": "sound"
                },
                {
                  "value": "spotify",
                  "label": "spotify"
                },
                {
                  "value": "star",
                  "label": "star"
                },
                {
                  "value": "step-backward",
                  "label": "step-backward"
                },
                {
                  "value": "step-forward",
                  "label": "step-forward"
                },
                {
                  "value": "stop",
                  "label": "stop"
                },
                {
                  "value": "sun",
                  "label": "sun"
                },
                {
                  "value": "info-circle",
                  "label": "info-circle"
                },
                {
                  "value": "tablet",
                  "label": "tablet"
                },
                {
                  "value": "tag",
                  "label": "tag"
                },
                {
                  "value": "taobao-circle",
                  "label": "taobao-circle"
                },
                {
                  "value": "tags",
                  "label": "tags"
                },
                {
                  "value": "thunderbolt",
                  "label": "thunderbolt"
                },
                {
                  "value": "taobao-square",
                  "label": "taobao-square"
                },
                {
                  "value": "tik-tok",
                  "label": "tik-tok"
                },
                {
                  "value": "tool",
                  "label": "tool"
                },
                {
                  "value": "trademark-circle",
                  "label": "trademark-circle"
                },
                {
                  "value": "trophy",
                  "label": "trophy"
                },
                {
                  "value": "twitch",
                  "label": "twitch"
                },
                {
                  "value": "robot",
                  "label": "robot"
                },
                {
                  "value": "truck",
                  "label": "truck"
                },
                {
                  "value": "twitter-square",
                  "label": "twitter-square"
                },
                {
                  "value": "twitter-circle",
                  "label": "twitter-circle"
                },
                {
                  "value": "unlock",
                  "label": "unlock"
                },
                {
                  "value": "up-circle",
                  "label": "up-circle"
                },
                {
                  "value": "switcher",
                  "label": "switcher"
                },
                {
                  "value": "up-square",
                  "label": "up-square"
                },
                {
                  "value": "usb",
                  "label": "usb"
                },
                {
                  "value": "video-camera",
                  "label": "video-camera"
                },
                {
                  "value": "wallet",
                  "label": "wallet"
                },
                {
                  "value": "wechat",
                  "label": "wechat"
                },
                {
                  "value": "weibo-circle",
                  "label": "weibo-circle"
                },
                {
                  "value": "windows",
                  "label": "windows"
                },
                {
                  "value": "yahoo",
                  "label": "yahoo"
                },
                {
                  "value": "youtube",
                  "label": "youtube"
                },
                {
                  "value": "yuque",
                  "label": "yuque"
                },
                {
                  "value": "zhihu-circle",
                  "label": "zhihu-circle"
                },
                {
                  "value": "zhihu-square",
                  "label": "zhihu-square"
                },
                {
                  "value": "wechat-work",
                  "label": "wechat-work"
                },
                {
                  "value": "weibo-square",
                  "label": "weibo-square"
                },
                {
                  "value": "x",
                  "label": "x"
                },
                {
                  "value": "warning",
                  "label": "warning"
                }
              ]
            },
            {
              "conditionValue": "twotone",
              "values": [
                {
                  "value": "account-book",
                  "label": "account-book"
                },
                {
                  "value": "alert",
                  "label": "alert"
                },
                {
                  "value": "api",
                  "label": "api"
                },
                {
                  "value": "audio",
                  "label": "audio"
                },
                {
                  "value": "bank",
                  "label": "bank"
                },
                {
                  "value": "bell",
                  "label": "bell"
                },
                {
                  "value": "book",
                  "label": "book"
                },
                {
                  "value": "appstore",
                  "label": "appstore"
                },
                {
                  "value": "bug",
                  "label": "bug"
                },
                {
                  "value": "bulb",
                  "label": "bulb"
                },
                {
                  "value": "calendar",
                  "label": "calendar"
                },
                {
                  "value": "calculator",
                  "label": "calculator"
                },
                {
                  "value": "car",
                  "label": "car"
                },
                {
                  "value": "camera",
                  "label": "camera"
                },
                {
                  "value": "box-plot",
                  "label": "box-plot"
                },
                {
                  "value": "carry-out",
                  "label": "carry-out"
                },
                {
                  "value": "ci-circle",
                  "label": "ci-circle"
                },
                {
                  "value": "ci",
                  "label": "ci"
                },
                {
                  "value": "check-square",
                  "label": "check-square"
                },
                {
                  "value": "clock-circle",
                  "label": "clock-circle"
                },
                {
                  "value": "close-circle",
                  "label": "close-circle"
                },
                {
                  "value": "close-square",
                  "label": "close-square"
                },
                {
                  "value": "check-circle",
                  "label": "check-circle"
                },
                {
                  "value": "cloud",
                  "label": "cloud"
                },
                {
                  "value": "code",
                  "label": "code"
                },
                {
                  "value": "compass",
                  "label": "compass"
                },
                {
                  "value": "contacts",
                  "label": "contacts"
                },
                {
                  "value": "container",
                  "label": "container"
                },
                {
                  "value": "copy",
                  "label": "copy"
                },
                {
                  "value": "build",
                  "label": "build"
                },
                {
                  "value": "credit-card",
                  "label": "credit-card"
                },
                {
                  "value": "copyright",
                  "label": "copyright"
                },
                {
                  "value": "customer-service",
                  "label": "customer-service"
                },
                {
                  "value": "crown",
                  "label": "crown"
                },
                {
                  "value": "dashboard",
                  "label": "dashboard"
                },
                {
                  "value": "delete",
                  "label": "delete"
                },
                {
                  "value": "diff",
                  "label": "diff"
                },
                {
                  "value": "database",
                  "label": "database"
                },
                {
                  "value": "dollar-circle",
                  "label": "dollar-circle"
                },
                {
                  "value": "dollar",
                  "label": "dollar"
                },
                {
                  "value": "down-circle",
                  "label": "down-circle"
                },
                {
                  "value": "dislike",
                  "label": "dislike"
                },
                {
                  "value": "copyright-circle",
                  "label": "copyright-circle"
                },
                {
                  "value": "down-square",
                  "label": "down-square"
                },
                {
                  "value": "edit",
                  "label": "edit"
                },
                {
                  "value": "euro-circle",
                  "label": "euro-circle"
                },
                {
                  "value": "environment",
                  "label": "environment"
                },
                {
                  "value": "euro",
                  "label": "euro"
                },
                {
                  "value": "exclamation-circle",
                  "label": "exclamation-circle"
                },
                {
                  "value": "experiment",
                  "label": "experiment"
                },
                {
                  "value": "eye-invisible",
                  "label": "eye-invisible"
                },
                {
                  "value": "eye",
                  "label": "eye"
                },
                {
                  "value": "file-add",
                  "label": "file-add"
                },
                {
                  "value": "file-excel",
                  "label": "file-excel"
                },
                {
                  "value": "file-exclamation",
                  "label": "file-exclamation"
                },
                {
                  "value": "control",
                  "label": "control"
                },
                {
                  "value": "file-image",
                  "label": "file-image"
                },
                {
                  "value": "file-markdown",
                  "label": "file-markdown"
                },
                {
                  "value": "file",
                  "label": "file"
                },
                {
                  "value": "file-text",
                  "label": "file-text"
                },
                {
                  "value": "file-unknown",
                  "label": "file-unknown"
                },
                {
                  "value": "file-zip",
                  "label": "file-zip"
                },
                {
                  "value": "filter",
                  "label": "filter"
                },
                {
                  "value": "fire",
                  "label": "fire"
                },
                {
                  "value": "file-ppt",
                  "label": "file-ppt"
                },
                {
                  "value": "flag",
                  "label": "flag"
                },
                {
                  "value": "folder-open",
                  "label": "folder-open"
                },
                {
                  "value": "folder-add",
                  "label": "folder-add"
                },
                {
                  "value": "folder",
                  "label": "folder"
                },
                {
                  "value": "frown",
                  "label": "frown"
                },
                {
                  "value": "fund",
                  "label": "fund"
                },
                {
                  "value": "funnel-plot",
                  "label": "funnel-plot"
                },
                {
                  "value": "gift",
                  "label": "gift"
                },
                {
                  "value": "gold",
                  "label": "gold"
                },
                {
                  "value": "file-word",
                  "label": "file-word"
                },
                {
                  "value": "hdd",
                  "label": "hdd"
                },
                {
                  "value": "heart",
                  "label": "heart"
                },
                {
                  "value": "file-pdf",
                  "label": "file-pdf"
                },
                {
                  "value": "home",
                  "label": "home"
                },
                {
                  "value": "hourglass",
                  "label": "hourglass"
                },
                {
                  "value": "html5",
                  "label": "html5"
                },
                {
                  "value": "idcard",
                  "label": "idcard"
                },
                {
                  "value": "highlight",
                  "label": "highlight"
                },
                {
                  "value": "info-circle",
                  "label": "info-circle"
                },
                {
                  "value": "insurance",
                  "label": "insurance"
                },
                {
                  "value": "layout",
                  "label": "layout"
                },
                {
                  "value": "interaction",
                  "label": "interaction"
                },
                {
                  "value": "left-square",
                  "label": "left-square"
                },
                {
                  "value": "like",
                  "label": "like"
                },
                {
                  "value": "left-circle",
                  "label": "left-circle"
                },
                {
                  "value": "lock",
                  "label": "lock"
                },
                {
                  "value": "mail",
                  "label": "mail"
                },
                {
                  "value": "medicine-box",
                  "label": "medicine-box"
                },
                {
                  "value": "meh",
                  "label": "meh"
                },
                {
                  "value": "minus-square",
                  "label": "minus-square"
                },
                {
                  "value": "minus-circle",
                  "label": "minus-circle"
                },
                {
                  "value": "mobile",
                  "label": "mobile"
                },
                {
                  "value": "money-collect",
                  "label": "money-collect"
                },
                {
                  "value": "notification",
                  "label": "notification"
                },
                {
                  "value": "message",
                  "label": "message"
                },
                {
                  "value": "pause-circle",
                  "label": "pause-circle"
                },
                {
                  "value": "phone",
                  "label": "phone"
                },
                {
                  "value": "picture",
                  "label": "picture"
                },
                {
                  "value": "play-circle",
                  "label": "play-circle"
                },
                {
                  "value": "play-square",
                  "label": "play-square"
                },
                {
                  "value": "pie-chart",
                  "label": "pie-chart"
                },
                {
                  "value": "plus-circle",
                  "label": "plus-circle"
                },
                {
                  "value": "pound-circle",
                  "label": "pound-circle"
                },
                {
                  "value": "plus-square",
                  "label": "plus-square"
                },
                {
                  "value": "printer",
                  "label": "printer"
                },
                {
                  "value": "project",
                  "label": "project"
                },
                {
                  "value": "profile",
                  "label": "profile"
                },
                {
                  "value": "property-safety",
                  "label": "property-safety"
                },
                {
                  "value": "pushpin",
                  "label": "pushpin"
                },
                {
                  "value": "question-circle",
                  "label": "question-circle"
                },
                {
                  "value": "reconciliation",
                  "label": "reconciliation"
                },
                {
                  "value": "red-envelope",
                  "label": "red-envelope"
                },
                {
                  "value": "rest",
                  "label": "rest"
                },
                {
                  "value": "right-circle",
                  "label": "right-circle"
                },
                {
                  "value": "right-square",
                  "label": "right-square"
                },
                {
                  "value": "rocket",
                  "label": "rocket"
                },
                {
                  "value": "safety-certificate",
                  "label": "safety-certificate"
                },
                {
                  "value": "save",
                  "label": "save"
                },
                {
                  "value": "security-scan",
                  "label": "security-scan"
                },
                {
                  "value": "schedule",
                  "label": "schedule"
                },
                {
                  "value": "setting",
                  "label": "setting"
                },
                {
                  "value": "shop",
                  "label": "shop"
                },
                {
                  "value": "shopping",
                  "label": "shopping"
                },
                {
                  "value": "skin",
                  "label": "skin"
                },
                {
                  "value": "sliders",
                  "label": "sliders"
                },
                {
                  "value": "snippets",
                  "label": "snippets"
                },
                {
                  "value": "star",
                  "label": "star"
                },
                {
                  "value": "stop",
                  "label": "stop"
                },
                {
                  "value": "switcher",
                  "label": "switcher"
                },
                {
                  "value": "tablet",
                  "label": "tablet"
                },
                {
                  "value": "tag",
                  "label": "tag"
                },
                {
                  "value": "tags",
                  "label": "tags"
                },
                {
                  "value": "sound",
                  "label": "sound"
                },
                {
                  "value": "tool",
                  "label": "tool"
                },
                {
                  "value": "trophy",
                  "label": "trophy"
                },
                {
                  "value": "thunderbolt",
                  "label": "thunderbolt"
                },
                {
                  "value": "unlock",
                  "label": "unlock"
                },
                {
                  "value": "up-square",
                  "label": "up-square"
                },
                {
                  "value": "usb",
                  "label": "usb"
                },
                {
                  "value": "smile",
                  "label": "smile"
                },
                {
                  "value": "video-camera",
                  "label": "video-camera"
                },
                {
                  "value": "wallet",
                  "label": "wallet"
                },
                {
                  "value": "warning",
                  "label": "warning"
                },
                {
                  "value": "trademark-circle",
                  "label": "trademark-circle"
                },
                {
                  "value": "up-circle",
                  "label": "up-circle"
                }
              ]
            }
          ]
        }
      },
      {
        "name": "nzTheme",
        "inputType": 0,
        "description": "nz-icon.nzTheme.description",
        "type": "Enum",
        "typeRaw": "`'fill'|'outline'|'twotone'`",
        "default": "`'outline'`",
        "typeDefinition": [
          "fill",
          "outline",
          "twotone"
        ],
        "pureDefault": "outline"
      },
      {
        "name": "nzSpin",
        "inputType": 0,
        "description": "nz-icon.nzSpin.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTwotoneColor",
        "inputType": 0,
        "description": "nz-icon.nzTwotoneColor.description",
        "type": "string",
        "typeRaw": "`string (hex color)`",
        "default": ""
      },
      {
        "name": "nzIconfont",
        "inputType": 0,
        "description": "nz-icon.nzIconfont.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzRotate",
        "inputType": 0,
        "description": "nz-icon.nzRotate.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/icon/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/icon",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-image",
    "title": "nz-image.title",
    "description": "nz-image.description",
    "whenToUse": "nz-image.whenToUse",
    "properties": [
      {
        "name": "nzSrc",
        "inputType": 0,
        "description": "nz-image.nzSrc.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzFallback",
        "inputType": 0,
        "description": "nz-image.nzFallback.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPlaceholder",
        "inputType": 0,
        "description": "nz-image.nzPlaceholder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDisablePreview",
        "inputType": 0,
        "description": "nz-image.nzDisablePreview.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCloseOnNavigation",
        "inputType": 0,
        "description": "nz-image.nzCloseOnNavigation.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-image.nzDirection.description",
        "type": "object",
        "typeRaw": "`Direction`",
        "default": "`'ltr'`",
        "pureDefault": "ltr"
      },
      {
        "name": "nzScaleStep",
        "inputType": 0,
        "description": "nz-image.nzScaleStep.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.5`",
        "pureDefault": "0.5"
      }
    ],
    "types": {},
    "doc": "/components/image/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/image",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-input",
    "title": "nz-input.title",
    "description": "nz-input.description",
    "whenToUse": "nz-input.whenToUse",
    "properties": [
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-input.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzAutosize",
        "inputType": 0,
        "description": "nz-input.nzAutosize.description",
        "type": "boolean",
        "typeRaw": "`boolean | { minRows: number, maxRows: number }`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzVariant",
        "inputType": 0,
        "description": "nz-input.nzVariant.description",
        "type": "Enum",
        "typeRaw": "`'outlined' | 'borderless' | 'filled' | 'underlined'`",
        "default": "`'outlined'`",
        "typeDefinition": [
          "outlined",
          "borderless",
          "filled",
          "underlined"
        ],
        "pureDefault": "outlined"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-input.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzStepperless",
        "inputType": 0,
        "description": "nz-input.nzStepperless.description",
        "type": "string",
        "typeRaw": "~~`boolean`~~",
        "default": "~~`true`~~",
        "pureDefault": "~~`true`~~"
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "type": "any",
        "typeRaw": "`any`",
        "description": "nz-input.ngModel.description"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "description": "nz-input.ngModelChange.description"
      },
      {
        "name": "disabled",
        "inputType": 0,
        "type": "boolean",
        "typeRaw": "`boolean`",
        "forceInputType": 0,
        "description": "nz-input.disabled.description"
      },
      {
        "name": "nzAutocomplete",
        "inputType": 0,
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef`",
        "default": "auto",
        "description": "nz-input.nzAutocomplete.description"
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-input.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-input.name.description"
      }
    ],
    "types": {},
    "doc": "/components/input/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input",
    "standalone": false,
    "snippet": "<input __$1>"
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-input-wrapper",
    "title": "nz-input-wrapper.title",
    "description": "nz-input-wrapper.description",
    "whenToUse": "nz-input-wrapper.whenToUse",
    "properties": [
      {
        "name": "nzAddonBefore",
        "inputType": 0,
        "description": "nz-input-wrapper.nzAddonBefore.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAddonAfter",
        "inputType": 0,
        "description": "nz-input-wrapper.nzAddonAfter.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-input-wrapper.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzSuffix",
        "inputType": 0,
        "description": "nz-input-wrapper.nzSuffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-input-wrapper.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzClear",
        "inputType": 1,
        "description": "nz-input-wrapper.nzClear.description",
        "type": "object",
        "typeRaw": "`OutputEmitterRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/input/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-input-password",
    "title": "nz-input-password.title",
    "description": "nz-input-password.description",
    "whenToUse": "nz-input-password.whenToUse",
    "properties": [
      {
        "name": "nzVisibilityToggle",
        "inputType": 0,
        "description": "nz-input-password.nzVisibilityToggle.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzVisible",
        "inputType": 0,
        "description": "nz-input-password.nzVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzVisibleChange",
        "inputType": 1,
        "description": "nz-input-password.nzVisibleChange.description",
        "type": "object",
        "typeRaw": "`OutputEmitterRef<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/input/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-input-search",
    "title": "nz-input-search.title",
    "description": "nz-input-search.description",
    "whenToUse": "nz-input-search.whenToUse",
    "properties": [
      {
        "name": "nzEnterButton",
        "inputType": 0,
        "description": "nz-input-search.nzEnterButton.description",
        "type": "boolean",
        "typeRaw": "`boolean | string`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-input-search.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzSearch",
        "inputType": 1,
        "description": "nz-input-search.nzSearch.description",
        "type": "object",
        "typeRaw": "`{ value: string, event: Event, source: 'clear' | 'input' }`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/input/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-input-group",
    "title": "nz-input-group.title",
    "description": "nz-input-group.description",
    "whenToUse": "nz-input-group.whenToUse",
    "properties": [
      {
        "name": "nzAddOnAfter",
        "inputType": 0,
        "description": "nz-input-group.nzAddOnAfter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzAddOnBefore",
        "inputType": 0,
        "description": "nz-input-group.nzAddOnBefore.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-input-group.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSuffix",
        "inputType": 0,
        "description": "nz-input-group.nzSuffix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-input-group.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-input-group.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      }
    ],
    "types": {},
    "doc": "/components/input/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-textarea-count",
    "title": "nz-textarea-count.title",
    "description": "nz-textarea-count.description",
    "whenToUse": "nz-textarea-count.whenToUse",
    "properties": [
      {
        "name": "nzMaxCharacterCount",
        "inputType": 0,
        "description": "nz-textarea-count.nzMaxCharacterCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzComputeCharacterCount",
        "inputType": 0,
        "description": "nz-textarea-count.nzComputeCharacterCount.description",
        "type": "function",
        "typeRaw": "`(v: string) => number`",
        "default": "`v => v.length`",
        "pureDefault": "v => v.length"
      }
    ],
    "types": {},
    "doc": "/components/input/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-input-otp",
    "title": "nz-input-otp.title",
    "description": "nz-input-otp.description",
    "whenToUse": "nz-input-otp.whenToUse",
    "properties": [
      {
        "name": "disabled",
        "inputType": 0,
        "description": "nz-input-otp.disabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzFormatter",
        "inputType": 0,
        "description": "nz-input-otp.nzFormatter.description",
        "type": "function",
        "typeRaw": "`(value: string) => string`",
        "default": ""
      },
      {
        "name": "nzMask",
        "inputType": 0,
        "description": "nz-input-otp.nzMask.description",
        "type": "boolean",
        "typeRaw": "`boolean  | null`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "nzLength",
        "inputType": 0,
        "description": "nz-input-otp.nzLength.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`6`",
        "pureDefault": "6"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-input-otp.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-input-otp.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      }
    ],
    "types": {},
    "doc": "/components/input/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-input-number",
    "title": "nz-input-number.title",
    "description": "nz-input-number.description",
    "whenToUse": "nz-input-number.whenToUse",
    "properties": [
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-input-number.ngModel.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-input-number.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-input-number.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-input-number.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzVariant",
        "inputType": 0,
        "description": "nz-input-number.nzVariant.description",
        "type": "Enum",
        "typeRaw": "`'outlined' | 'borderless' | 'filled' | 'underlined'`",
        "default": "`'outlined'`",
        "typeDefinition": [
          "outlined",
          "borderless",
          "filled",
          "underlined"
        ],
        "pureDefault": "outlined"
      },
      {
        "name": "nzControls",
        "inputType": 0,
        "description": "nz-input-number.nzControls.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-input-number.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzFormatter",
        "inputType": 0,
        "description": "nz-input-number.nzFormatter.description",
        "type": "function",
        "typeRaw": "`(value: number) => string`",
        "default": ""
      },
      {
        "name": "nzKeyboard",
        "inputType": 0,
        "description": "nz-input-number.nzKeyboard.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzMax",
        "inputType": 0,
        "description": "nz-input-number.nzMax.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "[Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)",
        "pureDefault": "[Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)"
      },
      {
        "name": "nzMin",
        "inputType": 0,
        "description": "nz-input-number.nzMin.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "[Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER)",
        "pureDefault": "[Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER)"
      },
      {
        "name": "nzParser",
        "inputType": 0,
        "description": "nz-input-number.nzParser.description",
        "type": "function",
        "typeRaw": "`(value: string) => number`",
        "default": ""
      },
      {
        "name": "nzPrecision",
        "inputType": 0,
        "description": "nz-input-number.nzPrecision.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzReadOnly",
        "inputType": 0,
        "description": "nz-input-number.nzReadOnly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-input-number.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-input-number.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStep",
        "inputType": 0,
        "description": "nz-input-number.nzStep.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzAddonBefore",
        "inputType": 0,
        "description": "nz-input-number.nzAddonBefore.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAddonAfter",
        "inputType": 0,
        "description": "nz-input-number.nzAddonAfter.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-input-number.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzSuffix",
        "inputType": 0,
        "description": "nz-input-number.nzSuffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzOnStep",
        "inputType": 1,
        "description": "nz-input-number.nzOnStep.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{ value: number, offset: number, type: 'up' | 'down' }>`",
        "default": ""
      },
      {
        "name": "nzFocus",
        "inputType": 1,
        "description": "nz-input-number.nzFocus.description",
        "type": "object",
        "typeRaw": "`OutputRef<void>`",
        "default": ""
      },
      {
        "name": "nzBlur",
        "inputType": 1,
        "description": "nz-input-number.nzBlur.description",
        "type": "object",
        "typeRaw": "`OutputRef<void>`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-input-number.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-input-number.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-input-number.name.description"
      }
    ],
    "types": {},
    "doc": "/components/input-number/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input-number",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-sider",
    "title": "nz-sider.title",
    "description": "nz-sider.description",
    "whenToUse": "nz-sider.whenToUse",
    "properties": [
      {
        "name": "nzBreakpoint",
        "inputType": 0,
        "description": "nz-sider.nzBreakpoint.description",
        "type": "Enum",
        "typeRaw": "`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'`",
        "default": "",
        "typeDefinition": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "xxl"
        ]
      },
      {
        "name": "nzCollapsedWidth",
        "inputType": 0,
        "description": "nz-sider.nzCollapsedWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`64`",
        "pureDefault": "64"
      },
      {
        "name": "nzCollapsible",
        "inputType": 0,
        "description": "nz-sider.nzCollapsible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCollapsed",
        "inputType": 2,
        "description": "nz-sider.nzCollapsed.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzReverseArrow",
        "inputType": 0,
        "description": "nz-sider.nzReverseArrow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTrigger",
        "inputType": 0,
        "description": "nz-sider.nzTrigger.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzZeroTrigger",
        "inputType": 0,
        "description": "nz-sider.nzZeroTrigger.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-sider.nzWidth.description",
        "type": "number",
        "typeRaw": "`number | string`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "nzTheme",
        "inputType": 0,
        "description": "nz-sider.nzTheme.description",
        "type": "Enum",
        "typeRaw": "`'light' | 'dark'`",
        "default": "`'dark'`",
        "typeDefinition": [
          "light",
          "dark"
        ],
        "pureDefault": "dark"
      },
      {
        "name": "nzCollapsedChange",
        "inputType": 1,
        "description": "nz-sider.nzCollapsedChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/layout/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/layout",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-list",
    "title": "nz-list.title",
    "description": "nz-list.description",
    "whenToUse": "nz-list.whenToUse",
    "properties": [
      {
        "name": "nzBordered",
        "inputType": 0,
        "description": "nz-list.nzBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFooter",
        "inputType": 0,
        "description": "nz-list.nzFooter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzHeader",
        "inputType": 0,
        "description": "nz-list.nzHeader.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzItemLayout",
        "inputType": 0,
        "description": "nz-list.nzItemLayout.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "vertical",
          "horizontal"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-list.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-list.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzSplit",
        "inputType": 0,
        "description": "nz-list.nzSplit.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      }
    ],
    "types": {},
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-list-empty",
    "title": "nz-list-empty.title",
    "description": "nz-list-empty.description",
    "whenToUse": "nz-list-empty.whenToUse",
    "properties": [
      {
        "name": "nzNoResult",
        "inputType": 0,
        "description": "nz-list-empty.nzNoResult.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-list-header",
    "title": "nz-list-header.title",
    "description": "nz-list-header.description",
    "whenToUse": "nz-list-header.whenToUse",
    "properties": [
      {
        "name": "nzNoFlex",
        "inputType": 0,
        "description": "nz-list-header.nzNoFlex.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-list-footer",
    "title": "nz-list-footer.title",
    "description": "nz-list-footer.description",
    "whenToUse": "nz-list-footer.whenToUse",
    "properties": [
      {
        "name": "nzNoFlex",
        "inputType": 0,
        "description": "nz-list-footer.nzNoFlex.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-list-pagination",
    "title": "nz-list-pagination.title",
    "description": "nz-list-pagination.description",
    "whenToUse": "nz-list-pagination.whenToUse",
    "properties": [
      {
        "name": "nzNoFlex",
        "inputType": 0,
        "description": "nz-list-pagination.nzNoFlex.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-list-load-more",
    "title": "nz-list-load-more.title",
    "description": "nz-list-load-more.description",
    "whenToUse": "nz-list-load-more.whenToUse",
    "properties": [
      {
        "name": "nzNoFlex",
        "inputType": 0,
        "description": "nz-list-load-more.nzNoFlex.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-list-item",
    "title": "nz-list-item.title",
    "description": "nz-list-item.description",
    "whenToUse": "nz-list-item.whenToUse",
    "properties": [
      {
        "name": "nzNoFlex",
        "inputType": 0,
        "description": "nz-list-item.nzNoFlex.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-list-item-meta",
    "title": "nz-list-item-meta.title",
    "description": "nz-list-item-meta.description",
    "whenToUse": "nz-list-item-meta.whenToUse",
    "properties": [
      {
        "name": "nzAvatar",
        "inputType": 0,
        "description": "nz-list-item-meta.nzAvatar.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDescription",
        "inputType": 0,
        "description": "nz-list-item-meta.nzDescription.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-list-item-meta.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-mention",
    "title": "nz-mention.title",
    "description": "nz-mention.description",
    "whenToUse": "nz-mention.whenToUse",
    "properties": [
      {
        "name": "nzMentionTrigger",
        "inputType": 0,
        "description": "nz-mention.nzMentionTrigger.description",
        "type": "object",
        "typeRaw": "`HTMLTextAreaElement | HTMLInputElement`",
        "default": ""
      },
      {
        "name": "nzMentionSuggestion",
        "inputType": 0,
        "description": "nz-mention.nzMentionSuggestion.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any>`",
        "default": ""
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-mention.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-mention.nzNotFoundContent.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'无匹配结果，轻敲空格完成输入'`",
        "pureDefault": "无匹配结果，轻敲空格完成输入"
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-mention.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'button' | 'top'`",
        "default": "`'bottom'`",
        "typeDefinition": [
          "button",
          "top"
        ],
        "pureDefault": "bottom"
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-mention.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string | string[]`",
        "default": "`'@'`",
        "pureDefault": "@"
      },
      {
        "name": "nzSuggestions",
        "inputType": 0,
        "description": "nz-mention.nzSuggestions.description",
        "type": "object",
        "typeRaw": "`any[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-mention.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-mention.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzClearIcon",
        "inputType": 0,
        "description": "nz-mention.nzClearIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzVariant",
        "inputType": 0,
        "description": "nz-mention.nzVariant.description",
        "type": "Enum",
        "typeRaw": "`'outlined' | 'filled' | 'borderless' | 'underlined'`",
        "default": "`'outlined'`",
        "typeDefinition": [
          "outlined",
          "filled",
          "borderless",
          "underlined"
        ],
        "pureDefault": "outlined"
      },
      {
        "name": "nzValueWith",
        "inputType": 0,
        "description": "nz-mention.nzValueWith.description",
        "type": "function",
        "typeRaw": "`(any) => string | (value: string) => string`",
        "default": ""
      },
      {
        "name": "nzOnSelect",
        "inputType": 1,
        "description": "nz-mention.nzOnSelect.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "default": ""
      },
      {
        "name": "nzOnSearchChange",
        "inputType": 1,
        "description": "nz-mention.nzOnSearchChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MentionOnSearchTypes>`",
        "default": ""
      },
      {
        "name": "nzOnClear",
        "inputType": 1,
        "description": "nz-mention.nzOnClear.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/mention/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/mention",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nzMentionTrigger",
    "title": "nzMentionTrigger.title",
    "description": "nzMentionTrigger.description",
    "whenToUse": "nzMentionTrigger.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/mention/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/mention",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nzMentionSuggestion",
    "title": "nzMentionSuggestion.title",
    "description": "nzMentionSuggestion.description",
    "whenToUse": "nzMentionSuggestion.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/mention/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/mention",
    "standalone": false,
    "snippet": "<ng-container *nzMentionSuggestion=\"let ${1|item|}\">$0</ng-container>"
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-menu",
    "title": "nz-menu.title",
    "description": "nz-menu.description",
    "whenToUse": "nz-menu.whenToUse",
    "properties": [
      {
        "name": "nzInlineCollapsed",
        "inputType": 0,
        "description": "nz-menu.nzInlineCollapsed.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzInlineIndent",
        "inputType": 0,
        "description": "nz-menu.nzInlineIndent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`24`",
        "pureDefault": "24"
      },
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-menu.nzMode.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal' | 'inline'`",
        "default": "`'vertical'`",
        "typeDefinition": [
          "vertical",
          "horizontal",
          "inline"
        ],
        "pureDefault": "vertical"
      },
      {
        "name": "nzSelectable",
        "inputType": 0,
        "description": "nz-menu.nzSelectable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzTheme",
        "inputType": 0,
        "description": "nz-menu.nzTheme.description",
        "type": "Enum",
        "typeRaw": "`'light' | 'dark'`",
        "default": "`'light'`",
        "typeDefinition": [
          "light",
          "dark"
        ],
        "pureDefault": "light"
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-menu.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzMenuItemComponent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/menu/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/menu",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-menu-item",
    "title": "nz-menu-item.title",
    "description": "nz-menu-item.description",
    "whenToUse": "nz-menu-item.whenToUse",
    "properties": [
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-menu-item.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzSelected",
        "inputType": 0,
        "description": "nz-menu-item.nzSelected.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzMatchRouter",
        "inputType": 0,
        "description": "nz-menu-item.nzMatchRouter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzMatchRouterExact",
        "inputType": 0,
        "description": "nz-menu-item.nzMatchRouterExact.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDanger",
        "inputType": 0,
        "description": "nz-menu-item.nzDanger.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/menu/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/menu",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-submenu",
    "title": "nz-submenu.title",
    "description": "nz-submenu.description",
    "whenToUse": "nz-submenu.whenToUse",
    "properties": [
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-submenu.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'`",
        "default": "`'bottomLeft'`",
        "typeDefinition": [
          "bottomLeft",
          "bottomCenter",
          "bottomRight",
          "topLeft",
          "topCenter",
          "topRight"
        ],
        "pureDefault": "bottomLeft"
      },
      {
        "name": "nzOpen",
        "inputType": 2,
        "description": "nz-submenu.nzOpen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-submenu.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-submenu.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-submenu.nzIcon.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzMenuClassName",
        "inputType": 0,
        "description": "nz-submenu.nzMenuClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTriggerSubMenuAction",
        "inputType": 0,
        "description": "nz-submenu.nzTriggerSubMenuAction.description",
        "type": "Enum",
        "typeRaw": "`'hover' | 'click'`",
        "default": "`'hover'`",
        "typeDefinition": [
          "hover",
          "click"
        ],
        "pureDefault": "hover"
      },
      {
        "name": "nzOpenChange",
        "inputType": 1,
        "description": "nz-submenu.nzOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/menu/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/menu",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-menu-group",
    "title": "nz-menu-group.title",
    "description": "nz-menu-group.description",
    "whenToUse": "nz-menu-group.whenToUse",
    "properties": [
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-menu-group.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/menu/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/menu",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-menu-divider",
    "title": "nz-menu-divider.title",
    "description": "nz-menu-divider.description",
    "whenToUse": "nz-menu-divider.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/menu/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/menu",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-modal",
    "title": "nz-modal.title",
    "description": "nz-modal.description",
    "whenToUse": "nz-modal.whenToUse",
    "properties": [
      {
        "name": "nzAfterOpen",
        "inputType": 0,
        "description": "nz-modal.nzAfterOpen.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter`",
        "default": ""
      },
      {
        "name": "nzAfterClose",
        "inputType": 0,
        "description": "nz-modal.nzAfterClose.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter`",
        "default": ""
      },
      {
        "name": "nzBodyStyle",
        "inputType": 0,
        "description": "nz-modal.nzBodyStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzCancelText",
        "inputType": 0,
        "description": "nz-modal.nzCancelText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Cancel'`",
        "pureDefault": "Cancel"
      },
      {
        "name": "nzCentered",
        "inputType": 0,
        "description": "nz-modal.nzCentered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzClosable",
        "inputType": 0,
        "description": "nz-modal.nzClosable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzOkLoading",
        "inputType": 0,
        "description": "nz-modal.nzOkLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCancelLoading",
        "inputType": 0,
        "description": "nz-modal.nzCancelLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOkDisabled",
        "inputType": 0,
        "description": "nz-modal.nzOkDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCancelDisabled",
        "inputType": 0,
        "description": "nz-modal.nzCancelDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDraggable",
        "inputType": 0,
        "description": "nz-modal.nzDraggable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFooter",
        "inputType": 0,
        "description": "nz-modal.nzFooter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<{}> | ModalButtonOptions[] | null`",
        "default": "OK and Cancel buttons",
        "pureDefault": "OK and Cancel buttons"
      },
      {
        "name": "nzKeyboard",
        "inputType": 0,
        "description": "nz-modal.nzKeyboard.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzMask",
        "inputType": 0,
        "description": "nz-modal.nzMask.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzMaskClosable",
        "inputType": 0,
        "description": "nz-modal.nzMaskClosable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzCloseOnNavigation",
        "inputType": 0,
        "description": "nz-modal.nzCloseOnNavigation.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-modal.nzDirection.description",
        "type": "Enum",
        "typeRaw": "`'ltr' | 'rtl'`",
        "default": "",
        "typeDefinition": [
          "ltr",
          "rtl"
        ]
      },
      {
        "name": "nzMaskStyle",
        "inputType": 0,
        "description": "nz-modal.nzMaskStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzOkText",
        "inputType": 0,
        "description": "nz-modal.nzOkText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'OK'`",
        "pureDefault": "OK"
      },
      {
        "name": "nzOkType",
        "inputType": 0,
        "description": "nz-modal.nzOkType.description",
        "type": "Enum",
        "typeRaw": "`'primary' |'dashed' |'link' |'text'`",
        "default": "`primary`",
        "typeDefinition": [
          "primary",
          "dashed",
          "link",
          "text"
        ],
        "pureDefault": "primary"
      },
      {
        "name": "nzOkDanger",
        "inputType": 0,
        "description": "nz-modal.nzOkDanger.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzStyle",
        "inputType": 0,
        "description": "nz-modal.nzStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzCloseIcon",
        "inputType": 0,
        "description": "nz-modal.nzCloseIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-modal.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<{}>`",
        "default": ""
      },
      {
        "name": "nzVisible",
        "inputType": 0,
        "description": "nz-modal.nzVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-modal.nzWidth.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": "`520`",
        "pureDefault": "520"
      },
      {
        "name": "nzClassName",
        "inputType": 0,
        "description": "nz-modal.nzClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzWrapClassName",
        "inputType": 0,
        "description": "nz-modal.nzWrapClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzZIndex",
        "inputType": 0,
        "description": "nz-modal.nzZIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1000`",
        "pureDefault": "1000"
      },
      {
        "name": "nzOnCancel",
        "inputType": 0,
        "description": "nz-modal.nzOnCancel.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter`",
        "default": ""
      },
      {
        "name": "nzOnOk",
        "inputType": 0,
        "description": "nz-modal.nzOnOk.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter`",
        "default": ""
      },
      {
        "name": "nzContent",
        "inputType": 0,
        "description": "nz-modal.nzContent.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<{}> | Component | ng-content`",
        "default": ""
      },
      {
        "name": "nzData",
        "inputType": 0,
        "description": "nz-modal.nzData.description",
        "type": "object",
        "typeRaw": "`object`, will be the value of the injection token NZ_MODAL_DATA when `nzContent` is a component",
        "default": ""
      },
      {
        "name": "nzIconType",
        "inputType": 0,
        "description": "nz-modal.nzIconType.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'question-circle'`",
        "pureDefault": "question-circle"
      },
      {
        "name": "nzAutofocus",
        "inputType": 0,
        "description": "nz-modal.nzAutofocus.description",
        "type": "Enum",
        "typeRaw": "`'ok' | 'cancel' | 'auto' | null`",
        "default": "`'auto'`",
        "typeDefinition": [
          "ok",
          "cancel",
          "auto",
          "null"
        ],
        "pureDefault": "auto"
      }
    ],
    "types": {},
    "doc": "/components/modal/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/modal",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzModalTitle",
    "title": "nzModalTitle.title",
    "description": "nzModalTitle.description",
    "whenToUse": "nzModalTitle.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/modal/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/modal",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzModalContent",
    "title": "nzModalContent.title",
    "description": "nzModalContent.description",
    "whenToUse": "nzModalContent.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/modal/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/modal",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzModalFooter",
    "title": "nzModalFooter.title",
    "description": "nzModalFooter.description",
    "whenToUse": "nzModalFooter.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/modal/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/modal",
    "standalone": false,
    "snippet": "<div *nzModalFooter>$0</div>"
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-page-header",
    "title": "nz-page-header.title",
    "description": "nz-page-header.description",
    "whenToUse": "nz-page-header.whenToUse",
    "properties": [
      {
        "name": "nzGhost",
        "inputType": 0,
        "description": "nz-page-header.nzGhost.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-page-header.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSubtitle",
        "inputType": 0,
        "description": "nz-page-header.nzSubtitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzBackIcon",
        "inputType": 0,
        "description": "nz-page-header.nzBackIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzBack",
        "inputType": 1,
        "description": "nz-page-header.nzBack.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": "Call [Location#back](https://angular.dev/api/common/Location#back) when the event not subscribed（you need import [RouterModule](https://angular.dev/api/router/RouterModule) or register [Location](https://angular.dev/api/common/Location)）",
        "pureDefault": "Call [Location#back](https://angular.dev/api/common/Location#back) when the event not subscribed（you need import [RouterModule](https://angular.dev/api/router/RouterModule) or register [Location](https://angular.dev/api/common/Location)）"
      }
    ],
    "types": {},
    "doc": "/components/page-header/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/page-header",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-pagination",
    "title": "nz-pagination.title",
    "description": "nz-pagination.description",
    "whenToUse": "nz-pagination.whenToUse",
    "properties": [
      {
        "name": "nzTotal",
        "inputType": 0,
        "description": "nz-pagination.nzTotal.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzPageIndex",
        "inputType": 2,
        "description": "nz-pagination.nzPageIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzPageSize",
        "inputType": 2,
        "description": "nz-pagination.nzPageSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`10`",
        "pureDefault": "10"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-pagination.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzShowQuickJumper",
        "inputType": 0,
        "description": "nz-pagination.nzShowQuickJumper.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowSizeChanger",
        "inputType": 0,
        "description": "nz-pagination.nzShowSizeChanger.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSimple",
        "inputType": 0,
        "description": "nz-pagination.nzSimple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-pagination.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzResponsive",
        "inputType": 0,
        "description": "nz-pagination.nzResponsive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPageSizeOptions",
        "inputType": 0,
        "description": "nz-pagination.nzPageSizeOptions.description",
        "type": "Array",
        "typeRaw": "`number[]`",
        "default": "`[10, 20, 30, 40]`",
        "pureDefault": "[10, 20, 30, 40]"
      },
      {
        "name": "nzItemRender",
        "inputType": 0,
        "description": "nz-pagination.nzItemRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: 'page' | 'prev' | 'next'| 'prev_5'| 'next_5', page: number }>`",
        "default": ""
      },
      {
        "name": "nzShowTotal",
        "inputType": 0,
        "description": "nz-pagination.nzShowTotal.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: number, range: [ number, number ] }>`",
        "default": ""
      },
      {
        "name": "nzHideOnSinglePage",
        "inputType": 0,
        "description": "nz-pagination.nzHideOnSinglePage.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "nz-pagination.nzAlign.description",
        "type": "object",
        "typeRaw": "`NzPaginationAlign`",
        "default": "`start`",
        "pureDefault": "start"
      },
      {
        "name": "nzPageIndexChange",
        "inputType": 1,
        "description": "nz-pagination.nzPageIndexChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzPageSizeChange",
        "inputType": 1,
        "description": "nz-pagination.nzPageSizeChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/pagination/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pagination",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nzBytes",
    "title": "nzBytes.title",
    "description": "nzBytes.description",
    "whenToUse": "nzBytes.whenToUse",
    "properties": [
      {
        "name": "decimal",
        "inputType": 0,
        "description": "nzBytes.decimal.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "'0'",
        "pureDefault": "0"
      },
      {
        "name": "from",
        "inputType": 0,
        "description": "nzBytes.from.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "'B'",
        "pureDefault": "B"
      },
      {
        "name": "to",
        "inputType": 0,
        "description": "nzBytes.to.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "''",
        "pureDefault": ""
      }
    ],
    "types": {},
    "doc": "/components/pipes/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pipes",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nzToCssUnit",
    "title": "nzToCssUnit.title",
    "description": "nzToCssUnit.description",
    "whenToUse": "nzToCssUnit.whenToUse",
    "properties": [
      {
        "name": "defaultUnit",
        "inputType": 0,
        "description": "nzToCssUnit.defaultUnit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "'px'",
        "pureDefault": "px"
      }
    ],
    "types": {},
    "doc": "/components/pipes/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pipes",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nzEllipsis",
    "title": "nzEllipsis.title",
    "description": "nzEllipsis.description",
    "whenToUse": "nzEllipsis.whenToUse",
    "properties": [
      {
        "name": "length",
        "inputType": 0,
        "description": "nzEllipsis.length.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "''",
        "pureDefault": ""
      },
      {
        "name": "suffix",
        "inputType": 0,
        "description": "nzEllipsis.suffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "''",
        "pureDefault": ""
      }
    ],
    "types": {},
    "doc": "/components/pipes/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pipes",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nzAggregate",
    "title": "nzAggregate.title",
    "description": "nzAggregate.description",
    "whenToUse": "nzAggregate.whenToUse",
    "properties": [
      {
        "name": "method",
        "inputType": 0,
        "description": "nzAggregate.method.description",
        "type": "Enum",
        "typeRaw": "`'sum' | 'max' | 'min' | 'avg'`",
        "default": "''",
        "typeDefinition": [
          "sum",
          "max",
          "min",
          "avg"
        ],
        "pureDefault": ""
      }
    ],
    "types": {},
    "doc": "/components/pipes/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pipes",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nzSanitizer",
    "title": "nzSanitizer.title",
    "description": "nzSanitizer.description",
    "whenToUse": "nzSanitizer.whenToUse",
    "properties": [
      {
        "name": "type",
        "inputType": 0,
        "description": "nzSanitizer.type.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "'html'",
        "pureDefault": "html"
      }
    ],
    "types": {},
    "doc": "/components/pipes/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pipes",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-popconfirm",
    "title": "nz-popconfirm.title",
    "description": "nz-popconfirm.description",
    "whenToUse": "nz-popconfirm.whenToUse",
    "properties": [
      {
        "name": "nzTooltipArrowPointAtCenter",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipArrowPointAtCenter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipTitle",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTooltipTitleContext",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipTitleContext.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzTooltipTrigger",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'focus' | 'hover' | null`",
        "default": "`'hover'`",
        "typeDefinition": [
          "click",
          "focus",
          "hover",
          "null"
        ],
        "pureDefault": "hover"
      },
      {
        "name": "nzTooltipPlacement",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | Array<string>`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom",
          "Array<string>"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzTooltipColor",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOrigin",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipOrigin.description",
        "type": "object",
        "typeRaw": "`ElementRef`",
        "default": ""
      },
      {
        "name": "nzTooltipVisible",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipVisibleChange",
        "inputType": 1,
        "description": "nz-popconfirm.nzTooltipVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzTooltipMouseEnterDelay",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipMouseEnterDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.15`",
        "pureDefault": "0.15"
      },
      {
        "name": "nzTooltipMouseLeaveDelay",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipMouseLeaveDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzTooltipOverlayClassName",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOverlayStyle",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzPopconfirmArrowPointAtCenter",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmArrowPointAtCenter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPopconfirmTitle",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPopconfirmTitleContext",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmTitleContext.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzPopconfirmTrigger",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'focus' | 'hover' | null`",
        "default": "`'click'`",
        "typeDefinition": [
          "click",
          "focus",
          "hover",
          "null"
        ],
        "pureDefault": "click"
      },
      {
        "name": "nzPopconfirmPlacement",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | Array<string>`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom",
          "Array<string>"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzPopconfirmOrigin",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmOrigin.description",
        "type": "object",
        "typeRaw": "`ElementRef`",
        "default": ""
      },
      {
        "name": "nzPopconfirmVisible",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPopconfirmShowArrow",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmShowArrow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzPopconfirmVisibleChange",
        "inputType": 1,
        "description": "nz-popconfirm.nzPopconfirmVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzPopconfirmMouseEnterDelay",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmMouseEnterDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.15`",
        "pureDefault": "0.15"
      },
      {
        "name": "nzPopconfirmMouseLeaveDelay",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmMouseLeaveDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzPopconfirmOverlayClassName",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPopconfirmOverlayStyle",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzPopconfirmBackdrop",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOkButtonProps",
        "inputType": 0,
        "description": "nz-popconfirm.nzOkButtonProps.description",
        "type": "object",
        "typeRaw": "`NzPopConfirmButtonProps`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "nzCancelButtonProps",
        "inputType": 0,
        "description": "nz-popconfirm.nzCancelButtonProps.description",
        "type": "object",
        "typeRaw": "`NzPopConfirmButtonProps`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "nzCondition",
        "inputType": 0,
        "description": "nz-popconfirm.nzCondition.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-popconfirm.nzIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void> | null`",
        "default": ""
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-popconfirm.nzAutoFocus.description",
        "type": "Enum",
        "typeRaw": "`null | 'ok' | 'cancel'`",
        "default": "`null`",
        "typeDefinition": [
          "null",
          "ok",
          "cancel"
        ],
        "pureDefault": "null"
      },
      {
        "name": "nzBeforeConfirm",
        "inputType": 0,
        "description": "nz-popconfirm.nzBeforeConfirm.description",
        "type": "function",
        "typeRaw": "`(() => Observable<boolean> | Promise<boolean> | boolean) | null`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "nzOnCancel",
        "inputType": 1,
        "description": "nz-popconfirm.nzOnCancel.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "nzOnConfirm",
        "inputType": 1,
        "description": "nz-popconfirm.nzOnConfirm.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/popconfirm/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/popconfirm",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-popover",
    "title": "nz-popover.title",
    "description": "nz-popover.description",
    "whenToUse": "nz-popover.whenToUse",
    "properties": [
      {
        "name": "nzTooltipArrowPointAtCenter",
        "inputType": 0,
        "description": "nz-popover.nzTooltipArrowPointAtCenter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipTitle",
        "inputType": 0,
        "description": "nz-popover.nzTooltipTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTooltipTitleContext",
        "inputType": 0,
        "description": "nz-popover.nzTooltipTitleContext.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzTooltipTrigger",
        "inputType": 0,
        "description": "nz-popover.nzTooltipTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'focus' | 'hover' | null`",
        "default": "`'hover'`",
        "typeDefinition": [
          "click",
          "focus",
          "hover",
          "null"
        ],
        "pureDefault": "hover"
      },
      {
        "name": "nzTooltipPlacement",
        "inputType": 0,
        "description": "nz-popover.nzTooltipPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | Array<string>`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom",
          "Array<string>"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzTooltipColor",
        "inputType": 0,
        "description": "nz-popover.nzTooltipColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOrigin",
        "inputType": 0,
        "description": "nz-popover.nzTooltipOrigin.description",
        "type": "object",
        "typeRaw": "`ElementRef`",
        "default": ""
      },
      {
        "name": "nzTooltipVisible",
        "inputType": 0,
        "description": "nz-popover.nzTooltipVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipVisibleChange",
        "inputType": 1,
        "description": "nz-popover.nzTooltipVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzTooltipMouseEnterDelay",
        "inputType": 0,
        "description": "nz-popover.nzTooltipMouseEnterDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.15`",
        "pureDefault": "0.15"
      },
      {
        "name": "nzTooltipMouseLeaveDelay",
        "inputType": 0,
        "description": "nz-popover.nzTooltipMouseLeaveDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzTooltipOverlayClassName",
        "inputType": 0,
        "description": "nz-popover.nzTooltipOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOverlayStyle",
        "inputType": 0,
        "description": "nz-popover.nzTooltipOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzPopoverArrowPointAtCenter",
        "inputType": 0,
        "description": "nz-popover.nzPopoverArrowPointAtCenter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPopoverTitle",
        "inputType": 0,
        "description": "nz-popover.nzPopoverTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPopoverTitleContext",
        "inputType": 0,
        "description": "nz-popover.nzPopoverTitleContext.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzPopoverContent",
        "inputType": 0,
        "description": "nz-popover.nzPopoverContent.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPopoverContentContext",
        "inputType": 0,
        "description": "nz-popover.nzPopoverContentContext.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzPopoverTrigger",
        "inputType": 0,
        "description": "nz-popover.nzPopoverTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'focus' | 'hover' | null`",
        "default": "`'hover'`",
        "typeDefinition": [
          "click",
          "focus",
          "hover",
          "null"
        ],
        "pureDefault": "hover"
      },
      {
        "name": "nzPopoverPlacement",
        "inputType": 0,
        "description": "nz-popover.nzPopoverPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | Array<string>`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom",
          "Array<string>"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzPopoverOrigin",
        "inputType": 0,
        "description": "nz-popover.nzPopoverOrigin.description",
        "type": "object",
        "typeRaw": "`ElementRef`",
        "default": ""
      },
      {
        "name": "nzPopoverVisible",
        "inputType": 0,
        "description": "nz-popover.nzPopoverVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPopoverVisibleChange",
        "inputType": 1,
        "description": "nz-popover.nzPopoverVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzPopoverMouseEnterDelay",
        "inputType": 0,
        "description": "nz-popover.nzPopoverMouseEnterDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.15`",
        "pureDefault": "0.15"
      },
      {
        "name": "nzPopoverMouseLeaveDelay",
        "inputType": 0,
        "description": "nz-popover.nzPopoverMouseLeaveDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzPopoverOverlayClassName",
        "inputType": 0,
        "description": "nz-popover.nzPopoverOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPopoverOverlayStyle",
        "inputType": 0,
        "description": "nz-popover.nzPopoverOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzPopoverOverlayClickable",
        "inputType": 0,
        "description": "nz-popover.nzPopoverOverlayClickable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      }
    ],
    "types": {},
    "doc": "/components/popover/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/popover",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-progress",
    "title": "nz-progress.title",
    "description": "nz-progress.description",
    "whenToUse": "nz-progress.whenToUse",
    "properties": [
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-progress.nzType.description",
        "type": "Enum",
        "typeRaw": "`'line' | 'circle' | 'dashboard'`",
        "default": "`'line'`",
        "typeDefinition": [
          "line",
          "circle",
          "dashboard"
        ],
        "pureDefault": "line"
      },
      {
        "name": "nzFormat",
        "inputType": 0,
        "description": "nz-progress.nzFormat.description",
        "type": "function",
        "typeRaw": "`(percent: number) => string | TemplateRef<{ $implicit: number }>`",
        "default": "`percent => percent + '%'`",
        "pureDefault": "percent => percent + '%"
      },
      {
        "name": "nzPercent",
        "inputType": 0,
        "description": "nz-progress.nzPercent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzShowInfo",
        "inputType": 0,
        "description": "nz-progress.nzShowInfo.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-progress.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'success' | 'exception' | 'active' | 'normal'`",
        "default": "",
        "typeDefinition": [
          "success",
          "exception",
          "active",
          "normal"
        ]
      },
      {
        "name": "nzStrokeLinecap",
        "inputType": 0,
        "description": "nz-progress.nzStrokeLinecap.description",
        "type": "Enum",
        "typeRaw": "`'round' | 'square'`",
        "default": "`'round'`",
        "typeDefinition": [
          "round",
          "square"
        ],
        "pureDefault": "round"
      },
      {
        "name": "nzStrokeColor",
        "inputType": 0,
        "description": "nz-progress.nzStrokeColor.description",
        "type": "string",
        "typeRaw": "`string | { from: string; to: string: direction: string; [percent: string]: string }`",
        "default": ""
      },
      {
        "name": "nzSuccessPercent",
        "inputType": 0,
        "description": "nz-progress.nzSuccessPercent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "0",
        "pureDefault": "0"
      },
      {
        "name": "nzStrokeWidth",
        "inputType": 0,
        "description": "nz-progress.nzStrokeWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`8`",
        "pureDefault": "8"
      },
      {
        "name": "nzSteps",
        "inputType": 0,
        "description": "nz-progress.nzSteps.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-progress.nzWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`132`",
        "pureDefault": "132"
      },
      {
        "name": "nzStrokeWidth",
        "inputType": 0,
        "description": "nz-progress.nzStrokeWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`6`",
        "pureDefault": "6"
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-progress.nzWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`132`",
        "pureDefault": "132"
      },
      {
        "name": "nzStrokeWidth",
        "inputType": 0,
        "description": "nz-progress.nzStrokeWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`6`",
        "pureDefault": "6"
      },
      {
        "name": "nzGapDegree",
        "inputType": 0,
        "description": "nz-progress.nzGapDegree.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzGapPosition",
        "inputType": 0,
        "description": "nz-progress.nzGapPosition.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'right' | 'bottom' | 'left'`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "right",
          "bottom",
          "left"
        ],
        "pureDefault": "top"
      }
    ],
    "types": {},
    "doc": "/components/progress/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/progress",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-qrcode",
    "title": "nz-qrcode.title",
    "description": "nz-qrcode.description",
    "whenToUse": "nz-qrcode.whenToUse",
    "properties": [
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-qrcode.nzValue.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzColor",
        "inputType": 0,
        "description": "nz-qrcode.nzColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'#000000'`",
        "pureDefault": "#000000"
      },
      {
        "name": "nzBgColor",
        "inputType": 0,
        "description": "nz-qrcode.nzBgColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'#FFFFFF'`",
        "pureDefault": "#FFFFFF"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-qrcode.nzSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`160`",
        "pureDefault": "160"
      },
      {
        "name": "nzPadding",
        "inputType": 0,
        "description": "nz-qrcode.nzPadding.description",
        "type": "number",
        "typeRaw": "`number | number[]`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-qrcode.nzIcon.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzIconSize",
        "inputType": 0,
        "description": "nz-qrcode.nzIconSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`40`",
        "pureDefault": "40"
      },
      {
        "name": "nzBordered",
        "inputType": 0,
        "description": "nz-qrcode.nzBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-qrcode.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'active'｜'expired' ｜'loading'`",
        "default": "`'active'`",
        "typeDefinition": [
          "active",
          "expired",
          "loading"
        ],
        "pureDefault": "active"
      },
      {
        "name": "nzStatusRender",
        "inputType": 0,
        "description": "nz-qrcode.nzStatusRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void> | string`",
        "default": ""
      },
      {
        "name": "nzLevel",
        "inputType": 0,
        "description": "nz-qrcode.nzLevel.description",
        "type": "object",
        "typeRaw": "`'L'｜'M'｜'Q'｜'H'`",
        "default": "`'M'`",
        "pureDefault": "M"
      },
      {
        "name": "nzRefresh",
        "inputType": 1,
        "description": "nz-qrcode.nzRefresh.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/qr-code/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/qr-code",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-radio",
    "title": "nz-radio.title",
    "description": "nz-radio.description",
    "whenToUse": "nz-radio.whenToUse",
    "properties": [
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-radio.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-radio.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-radio.ngModel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-radio.nzValue.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-radio.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-radio.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-radio.name.description"
      }
    ],
    "types": {},
    "doc": "/components/radio/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/radio",
    "standalone": false,
    "snippet": "<label __$1>$2</label>"
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-radio-button",
    "title": "nz-radio-button.title",
    "description": "nz-radio-button.description",
    "whenToUse": "nz-radio-button.whenToUse",
    "properties": [
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-radio-button.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-radio-button.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-radio-button.ngModel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-radio-button.nzValue.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-radio-button.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/radio/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/radio",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-radio-group",
    "title": "nz-radio-group.title",
    "description": "nz-radio-group.description",
    "whenToUse": "nz-radio-group.whenToUse",
    "properties": [
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-radio-group.ngModel.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "nzName",
        "inputType": 0,
        "description": "nz-radio-group.nzName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-radio-group.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-radio-group.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-radio-group.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "nzButtonStyle",
        "inputType": 0,
        "description": "nz-radio-group.nzButtonStyle.description",
        "type": "Enum",
        "typeRaw": "`'outline' | 'solid'`",
        "default": "`'outline'`",
        "typeDefinition": [
          "outline",
          "solid"
        ],
        "pureDefault": "outline"
      }
    ],
    "types": {},
    "doc": "/components/radio/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/radio",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-rate",
    "title": "nz-rate.title",
    "description": "nz-rate.description",
    "whenToUse": "nz-rate.whenToUse",
    "properties": [
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-rate.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzAllowHalf",
        "inputType": 0,
        "description": "nz-rate.nzAllowHalf.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-rate.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCharacter",
        "inputType": 0,
        "description": "nz-rate.nzCharacter.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": "`<nz-icon nzType=\"star\" />`",
        "pureDefault": "<nz-icon nzType=\"star\" />"
      },
      {
        "name": "nzCount",
        "inputType": 0,
        "description": "nz-rate.nzCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`5`",
        "pureDefault": "5"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-rate.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzTooltips",
        "inputType": 0,
        "description": "nz-rate.nzTooltips.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-rate.ngModel.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-rate.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzOnBlur",
        "inputType": 1,
        "description": "nz-rate.nzOnBlur.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<FocusEvent>`",
        "default": ""
      },
      {
        "name": "nzOnFocus",
        "inputType": 1,
        "description": "nz-rate.nzOnFocus.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<FocusEvent>`",
        "default": ""
      },
      {
        "name": "nzOnHoverChange",
        "inputType": 1,
        "description": "nz-rate.nzOnHoverChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzOnKeyDown",
        "inputType": 1,
        "description": "nz-rate.nzOnKeyDown.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<KeyboardEvent>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-rate.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-rate.name.description"
      }
    ],
    "types": {},
    "doc": "/components/rate/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/rate",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-resizable",
    "title": "nz-resizable.title",
    "description": "nz-resizable.description",
    "whenToUse": "nz-resizable.whenToUse",
    "properties": [
      {
        "name": "nzBounds",
        "inputType": 0,
        "description": "nz-resizable.nzBounds.description",
        "type": "Enum",
        "typeRaw": "`'window' | 'parent' | ElementRef<HTMLElement>`",
        "default": "`parent`",
        "typeDefinition": [
          "window",
          "parent",
          "ElementRef<HTMLElement>"
        ],
        "pureDefault": "parent"
      },
      {
        "name": "nzMaxHeight",
        "inputType": 0,
        "description": "nz-resizable.nzMaxHeight.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzMaxWidth",
        "inputType": 0,
        "description": "nz-resizable.nzMaxWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzMinHeight",
        "inputType": 0,
        "description": "nz-resizable.nzMinHeight.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`40`",
        "pureDefault": "40"
      },
      {
        "name": "nzMinWidth",
        "inputType": 0,
        "description": "nz-resizable.nzMinWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`40`",
        "pureDefault": "40"
      },
      {
        "name": "nzGridColumnCount",
        "inputType": 0,
        "description": "nz-resizable.nzGridColumnCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`-1`",
        "pureDefault": "-1"
      },
      {
        "name": "nzMaxColumn",
        "inputType": 0,
        "description": "nz-resizable.nzMaxColumn.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzMinColumn",
        "inputType": 0,
        "description": "nz-resizable.nzMinColumn.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzLockAspectRatio",
        "inputType": 0,
        "description": "nz-resizable.nzLockAspectRatio.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPreview",
        "inputType": 0,
        "description": "nz-resizable.nzPreview.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-resizable.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzResize",
        "inputType": 1,
        "description": "nz-resizable.nzResize.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzResizeEvent>`",
        "default": ""
      },
      {
        "name": "nzResizeStart",
        "inputType": 1,
        "description": "nz-resizable.nzResizeStart.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzResizeEvent>`",
        "default": ""
      },
      {
        "name": "nzResizeEnd",
        "inputType": 1,
        "description": "nz-resizable.nzResizeEnd.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzResizeEvent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/resizable/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/resizable",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-resize-handle",
    "title": "nz-resize-handle.title",
    "description": "nz-resize-handle.description",
    "whenToUse": "nz-resize-handle.whenToUse",
    "properties": [
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-resize-handle.nzDirection.description",
        "type": "object",
        "typeRaw": "`NzResizeDirection`",
        "default": "`'bottomRight'`",
        "pureDefault": "bottomRight"
      },
      {
        "name": "nzCursorType",
        "inputType": 0,
        "description": "nz-resize-handle.nzCursorType.description",
        "type": "object",
        "typeRaw": "`NzCursorType`",
        "default": "`'window'`",
        "pureDefault": "window"
      }
    ],
    "types": {},
    "doc": "/components/resizable/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/resizable",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-resize-handles",
    "title": "nz-resize-handles.title",
    "description": "nz-resize-handles.description",
    "whenToUse": "nz-resize-handles.whenToUse",
    "properties": [
      {
        "name": "nzDirections",
        "inputType": 0,
        "description": "nz-resize-handles.nzDirections.description",
        "type": "string",
        "typeRaw": "`<NzResizeDirection | NzResizeHandleOption>[]`",
        "default": "ALL DIRECTIONS",
        "pureDefault": "ALL DIRECTIONS"
      }
    ],
    "types": {},
    "doc": "/components/resizable/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/resizable",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-result",
    "title": "nz-result.title",
    "description": "nz-result.description",
    "whenToUse": "nz-result.whenToUse",
    "properties": [
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-result.nzTitle.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void> | string`",
        "default": ""
      },
      {
        "name": "nzSubTitle",
        "inputType": 0,
        "description": "nz-result.nzSubTitle.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void> | string`",
        "default": ""
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-result.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'success' | 'error' | 'info' | 'warning'| '404' | '403' | '500'`",
        "default": "`'info'`",
        "typeDefinition": [
          "success",
          "error",
          "info",
          "warning",
          "404",
          "403",
          "500"
        ],
        "pureDefault": "info"
      },
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-result.nzIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void> | string`",
        "default": ""
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-result.nzExtra.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void> | string`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/result/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/result",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-segmented",
    "title": "nz-segmented.title",
    "description": "nz-segmented.description",
    "whenToUse": "nz-segmented.whenToUse",
    "properties": [
      {
        "name": "nzBlock",
        "inputType": 0,
        "description": "nz-segmented.nzBlock.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-segmented.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzOptions",
        "inputType": 0,
        "description": "nz-segmented.nzOptions.description",
        "type": "Array",
        "typeRaw": "`string[] | number[] | Array<{ label: string; value: string | number; icon: string; disabled?: boolean }>`",
        "default": ""
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-segmented.nzSize.description",
        "type": "string",
        "typeRaw": "`large | default | small`",
        "default": ""
      },
      {
        "name": "nzShape",
        "inputType": 0,
        "description": "nz-segmented.nzShape.description",
        "type": "string",
        "typeRaw": "`default | round`",
        "default": "`default`",
        "pureDefault": "default"
      },
      {
        "name": "nzVertical",
        "inputType": 0,
        "description": "nz-segmented.nzVertical.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzName",
        "inputType": 0,
        "description": "nz-segmented.nzName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-segmented.ngModel.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzValueChange",
        "inputType": 1,
        "description": "nz-segmented.nzValueChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string | number>`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-segmented.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string | number>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/segmented/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/segmented",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-select",
    "title": "nz-select.title",
    "description": "nz-select.description",
    "whenToUse": "nz-select.whenToUse",
    "properties": [
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-select.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-select.ngModel.description",
        "type": "object",
        "typeRaw": "`any | any[]`",
        "default": ""
      },
      {
        "name": "compareWith",
        "inputType": 0,
        "description": "nz-select.compareWith.description",
        "type": "function",
        "typeRaw": "`(o1: any, o2: any) => boolean`",
        "default": "`(o1: any, o2: any) => o1===o2`",
        "pureDefault": "(o1: any, o2: any) => o1===o2"
      },
      {
        "name": "nzAutoClearSearchValue",
        "inputType": 0,
        "description": "nz-select.nzAutoClearSearchValue.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-select.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-select.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzVariant",
        "inputType": 0,
        "description": "nz-select.nzVariant.description",
        "type": "Enum",
        "typeRaw": "`'outlined' | 'borderless' | 'filled' | 'underlined'`",
        "default": "`'outlined'`",
        "typeDefinition": [
          "outlined",
          "borderless",
          "filled",
          "underlined"
        ],
        "pureDefault": "outlined"
      },
      {
        "name": "nzOpen",
        "inputType": 2,
        "description": "nz-select.nzOpen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-select.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-select.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzDropdownClassName",
        "inputType": 0,
        "description": "nz-select.nzDropdownClassName.description",
        "type": "string",
        "typeRaw": "`string | string[]`",
        "default": ""
      },
      {
        "name": "nzDropdownMatchSelectWidth",
        "inputType": 0,
        "description": "nz-select.nzDropdownMatchSelectWidth.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzDropdownStyle",
        "inputType": 0,
        "description": "nz-select.nzDropdownStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzCustomTemplate",
        "inputType": 0,
        "description": "nz-select.nzCustomTemplate.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzOptionComponent }>`",
        "default": ""
      },
      {
        "name": "nzServerSearch",
        "inputType": 0,
        "description": "nz-select.nzServerSearch.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFilterOption",
        "inputType": 0,
        "description": "nz-select.nzFilterOption.description",
        "type": "function",
        "typeRaw": "`(input?: string, option?: NzOptionComponent) => boolean;`",
        "default": ""
      },
      {
        "name": "nzMaxMultipleCount",
        "inputType": 0,
        "description": "nz-select.nzMaxMultipleCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`Infinity`",
        "pureDefault": "Infinity"
      },
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-select.nzMode.description",
        "type": "Enum",
        "typeRaw": "`'multiple' | 'tags' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "multiple",
          "tags",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-select.nzNotFoundContent.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": "`'Not Found'`",
        "pureDefault": "Not Found"
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-select.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzShowArrow",
        "inputType": 0,
        "description": "nz-select.nzShowArrow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`(for single select), `false`(for multiple select)",
        "pureDefault": "true`(for single select), `false`(for multiple select"
      },
      {
        "name": "nzShowSearch",
        "inputType": 0,
        "description": "nz-select.nzShowSearch.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-select.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-select.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-select.nzPrefix.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any> | string`",
        "default": ""
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-select.nzSuffixIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any> | string`",
        "default": ""
      },
      {
        "name": "nzRemoveIcon",
        "inputType": 0,
        "description": "nz-select.nzRemoveIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any>`",
        "default": ""
      },
      {
        "name": "nzClearIcon",
        "inputType": 0,
        "description": "nz-select.nzClearIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any>`",
        "default": ""
      },
      {
        "name": "nzMenuItemSelectedIcon",
        "inputType": 0,
        "description": "nz-select.nzMenuItemSelectedIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any>`",
        "default": ""
      },
      {
        "name": "nzTokenSeparators",
        "inputType": 0,
        "description": "nz-select.nzTokenSeparators.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-select.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "false",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzMaxTagCount",
        "inputType": 0,
        "description": "nz-select.nzMaxTagCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzOptions",
        "inputType": 0,
        "description": "nz-select.nzOptions.description",
        "type": "Array",
        "typeRaw": "`Array<{ label: string | number | TemplateRef<any>; value: any; key?: string | number; disabled?: boolean; hide?: boolean; groupLabel?: string | TemplateRef<any>;}>`",
        "default": ""
      },
      {
        "name": "nzMaxTagPlaceholder",
        "inputType": 0,
        "description": "nz-select.nzMaxTagPlaceholder.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: any[] }>`",
        "default": ""
      },
      {
        "name": "nzOptionHeightPx",
        "inputType": 0,
        "description": "nz-select.nzOptionHeightPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32"
      },
      {
        "name": "nzOptionOverflowSize",
        "inputType": 0,
        "description": "nz-select.nzOptionOverflowSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`8`",
        "pureDefault": "8"
      },
      {
        "name": "nzSelectOnTab",
        "inputType": 0,
        "description": "nz-select.nzSelectOnTab.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-select.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any[]>`",
        "default": ""
      },
      {
        "name": "nzOpenChange",
        "inputType": 1,
        "description": "nz-select.nzOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzScrollToBottom",
        "inputType": 1,
        "description": "nz-select.nzScrollToBottom.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "default": ""
      },
      {
        "name": "nzOnSearch",
        "inputType": 1,
        "description": "nz-select.nzOnSearch.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "nzOnClear",
        "inputType": 1,
        "description": "nz-select.nzOnClear.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "default": ""
      },
      {
        "name": "nzFocus",
        "inputType": 1,
        "description": "nz-select.nzFocus.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "default": ""
      },
      {
        "name": "nzBlur",
        "inputType": 1,
        "description": "nz-select.nzBlur.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-select.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-select.name.description"
      }
    ],
    "types": {},
    "doc": "/components/select/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/select",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-option",
    "title": "nz-option.title",
    "description": "nz-option.description",
    "whenToUse": "nz-option.whenToUse",
    "properties": [
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-option.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-option.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzLabel",
        "inputType": 0,
        "description": "nz-option.nzLabel.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-option.nzValue.description",
        "type": "object",
        "typeRaw": "`any `",
        "default": ""
      },
      {
        "name": "nzKey",
        "inputType": 0,
        "description": "nz-option.nzKey.description",
        "type": "string",
        "typeRaw": "`string | number `",
        "default": ""
      },
      {
        "name": "nzHide",
        "inputType": 0,
        "description": "nz-option.nzHide.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCustomContent",
        "inputType": 0,
        "description": "nz-option.nzCustomContent.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/select/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/select",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-option-group",
    "title": "nz-option-group.title",
    "description": "nz-option-group.description",
    "whenToUse": "nz-option-group.whenToUse",
    "properties": [
      {
        "name": "nzLabel",
        "inputType": 0,
        "description": "nz-option-group.nzLabel.description",
        "type": "string",
        "typeRaw": "`string | number | TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/select/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/select",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-skeleton",
    "title": "nz-skeleton.title",
    "description": "nz-skeleton.description",
    "whenToUse": "nz-skeleton.whenToUse",
    "properties": [
      {
        "name": "nzActive",
        "inputType": 0,
        "description": "nz-skeleton.nzActive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAvatar",
        "inputType": 0,
        "description": "nz-skeleton.nzAvatar.description",
        "type": "boolean",
        "typeRaw": "`boolean | NzSkeletonAvatar`",
        "default": "`false`",
        "complexType": "NzSkeletonAvatar",
        "pureDefault": "false"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-skeleton.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzParagraph",
        "inputType": 0,
        "description": "nz-skeleton.nzParagraph.description",
        "type": "boolean",
        "typeRaw": "`boolean | NzSkeletonParagraph`",
        "default": "`true`",
        "complexType": "NzSkeletonParagraph",
        "pureDefault": "true"
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-skeleton.nzTitle.description",
        "type": "boolean",
        "typeRaw": "`boolean | NzSkeletonTitle`",
        "default": "`true`",
        "complexType": "NzSkeletonTitle",
        "pureDefault": "true"
      },
      {
        "name": "nzRound",
        "inputType": 0,
        "description": "nz-skeleton.nzRound.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {
      "NzSkeletonAvatar": [
        {
          "name": "size",
          "inputType": 0,
          "description": "nz-skeleton.size.description",
          "type": "number",
          "typeRaw": "`number | 'large' | 'small' | 'default'`",
          "default": ""
        },
        {
          "name": "shape",
          "inputType": 0,
          "description": "nz-skeleton.shape.description",
          "type": "Enum",
          "typeRaw": "`'circle' | 'square'`",
          "default": "",
          "typeDefinition": [
            "circle",
            "square"
          ]
        }
      ],
      "NzSkeletonParagraph": [
        {
          "name": "rows",
          "inputType": 0,
          "description": "nz-skeleton.rows.description",
          "type": "number",
          "typeRaw": "`number`",
          "default": ""
        },
        {
          "name": "width",
          "inputType": 0,
          "description": "nz-skeleton.width.description",
          "type": "number",
          "typeRaw": "`number | string | Array<number | string>`",
          "default": ""
        }
      ],
      "NzSkeletonTitle": [
        {
          "name": "width",
          "inputType": 0,
          "description": "nz-skeleton.width.description",
          "type": "number",
          "typeRaw": "`number | string`",
          "default": ""
        }
      ]
    },
    "doc": "/components/skeleton/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/skeleton",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-slider",
    "title": "nz-slider.title",
    "description": "nz-slider.description",
    "whenToUse": "nz-slider.whenToUse",
    "properties": [
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-slider.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzDots",
        "inputType": 0,
        "description": "nz-slider.nzDots.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzIncluded",
        "inputType": 0,
        "description": "nz-slider.nzIncluded.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzMarks",
        "inputType": 0,
        "description": "nz-slider.nzMarks.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "`{ number: string/HTML }` or `{ number: { style: object, label: string/HTML } }`",
        "pureDefault": "{ number: string/HTML }` or `{ number: { style: object, label: string/HTML } }"
      },
      {
        "name": "nzMax",
        "inputType": 0,
        "description": "nz-slider.nzMax.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`100`",
        "pureDefault": "100"
      },
      {
        "name": "nzMin",
        "inputType": 0,
        "description": "nz-slider.nzMin.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzRange",
        "inputType": 0,
        "description": "nz-slider.nzRange.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzStep",
        "inputType": 0,
        "description": "nz-slider.nzStep.description",
        "type": "number",
        "typeRaw": "`number | null`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzTipFormatter",
        "inputType": 0,
        "description": "nz-slider.nzTipFormatter.description",
        "type": "function",
        "typeRaw": "`(value: number) => string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-slider.ngModel.description",
        "type": "number",
        "typeRaw": "`number | number[]`",
        "default": ""
      },
      {
        "name": "nzVertical",
        "inputType": 0,
        "description": "nz-slider.nzVertical.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzReverse",
        "inputType": 0,
        "description": "nz-slider.nzReverse.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipVisible",
        "inputType": 0,
        "description": "nz-slider.nzTooltipVisible.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'always' | 'never'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "always",
          "never"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzTooltipPlacement",
        "inputType": 0,
        "description": "nz-slider.nzTooltipPlacement.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzOnAfterChange",
        "inputType": 1,
        "description": "nz-slider.nzOnAfterChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number[] | number>`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-slider.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number[] | number>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-slider.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-slider.name.description"
      }
    ],
    "types": {},
    "doc": "/components/slider/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/slider",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-space",
    "title": "nz-space.title",
    "description": "nz-space.description",
    "whenToUse": "nz-space.whenToUse",
    "properties": [
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-space.nzSize.description",
        "type": "object",
        "typeRaw": "`NzSpaceSize | NzSpaceSize[]`",
        "default": "`'small'`",
        "pureDefault": "small"
      },
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-space.nzDirection.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "vertical",
          "horizontal"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "nz-space.nzAlign.description",
        "type": "Enum",
        "typeRaw": "`'start' | 'end' | 'baseline' | 'center'`",
        "default": "",
        "typeDefinition": [
          "start",
          "end",
          "baseline",
          "center"
        ]
      },
      {
        "name": "nzWrap",
        "inputType": 0,
        "description": "nz-space.nzWrap.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSplit",
        "inputType": 0,
        "description": "nz-space.nzSplit.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef | string`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/space/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/space",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-space-compact",
    "title": "nz-space-compact.title",
    "description": "nz-space-compact.description",
    "whenToUse": "nz-space-compact.whenToUse",
    "properties": [
      {
        "name": "nzBlock",
        "inputType": 0,
        "description": "nz-space-compact.nzBlock.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-space-compact.nzDirection.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "vertical",
          "horizontal"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-space-compact.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      }
    ],
    "types": {},
    "doc": "/components/space/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/space",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-spin",
    "title": "nz-spin.title",
    "description": "nz-spin.description",
    "whenToUse": "nz-spin.whenToUse",
    "properties": [
      {
        "name": "nzDelay",
        "inputType": 0,
        "description": "nz-spin.nzDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzIndicator",
        "inputType": 0,
        "description": "nz-spin.nzIndicator.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-spin.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzSpinning",
        "inputType": 0,
        "description": "nz-spin.nzSpinning.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "forceInputType": 0
      },
      {
        "name": "nzSimple",
        "inputType": 0,
        "description": "nz-spin.nzSimple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTip",
        "inputType": 0,
        "description": "nz-spin.nzTip.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/spin/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/spin",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-splitter",
    "title": "nz-splitter.title",
    "description": "nz-splitter.description",
    "whenToUse": "nz-splitter.whenToUse",
    "properties": [
      {
        "name": "nzLayout",
        "inputType": 0,
        "description": "nz-splitter.nzLayout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal' | 'vertical'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzLazy",
        "inputType": 0,
        "description": "nz-splitter.nzLazy.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzResizeStart",
        "inputType": 1,
        "description": "nz-splitter.nzResizeStart.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number[]>`",
        "default": ""
      },
      {
        "name": "nzResize",
        "inputType": 1,
        "description": "nz-splitter.nzResize.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number[]>`",
        "default": ""
      },
      {
        "name": "nzResizeEnd",
        "inputType": 1,
        "description": "nz-splitter.nzResizeEnd.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number[]>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/splitter/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/splitter",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-splitter-panel",
    "title": "nz-splitter-panel.title",
    "description": "nz-splitter-panel.description",
    "whenToUse": "nz-splitter-panel.whenToUse",
    "properties": [
      {
        "name": "nzDefaultSize",
        "inputType": 0,
        "description": "nz-splitter-panel.nzDefaultSize.description",
        "type": "number",
        "typeRaw": "`number | string`",
        "default": ""
      },
      {
        "name": "nzMin",
        "inputType": 0,
        "description": "nz-splitter-panel.nzMin.description",
        "type": "number",
        "typeRaw": "`number | string`",
        "default": ""
      },
      {
        "name": "nzMax",
        "inputType": 0,
        "description": "nz-splitter-panel.nzMax.description",
        "type": "number",
        "typeRaw": "`number | string`",
        "default": ""
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-splitter-panel.nzSize.description",
        "type": "number",
        "typeRaw": "`number | string`",
        "default": ""
      },
      {
        "name": "nzCollapsible",
        "inputType": 0,
        "description": "nz-splitter-panel.nzCollapsible.description",
        "type": "boolean",
        "typeRaw": "`boolean  | { start?: boolean; end?: boolean }`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzResizable",
        "inputType": 0,
        "description": "nz-splitter-panel.nzResizable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      }
    ],
    "types": {},
    "doc": "/components/splitter/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/splitter",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-statistic",
    "title": "nz-statistic.title",
    "description": "nz-statistic.description",
    "whenToUse": "nz-statistic.whenToUse",
    "properties": [
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-statistic.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSuffix",
        "inputType": 0,
        "description": "nz-statistic.nzSuffix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-statistic.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-statistic.nzValue.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzValueStyle",
        "inputType": 0,
        "description": "nz-statistic.nzValueStyle.description",
        "type": "object",
        "typeRaw": "`Object`",
        "default": ""
      },
      {
        "name": "nzValueTemplate",
        "inputType": 0,
        "description": "nz-statistic.nzValueTemplate.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: string | number }>`",
        "default": ""
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-statistic.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      }
    ],
    "types": {},
    "doc": "/components/statistic/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/statistic",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-countdown",
    "title": "nz-countdown.title",
    "description": "nz-countdown.description",
    "whenToUse": "nz-countdown.whenToUse",
    "properties": [
      {
        "name": "nzFormat",
        "inputType": 0,
        "description": "nz-countdown.nzFormat.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'HH:mm:ss'`",
        "pureDefault": "HH:mm:ss"
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-countdown.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSuffix",
        "inputType": 0,
        "description": "nz-countdown.nzSuffix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-countdown.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-countdown.nzValue.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzValueTemplate",
        "inputType": 0,
        "description": "nz-countdown.nzValueTemplate.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: number }>`",
        "default": ""
      },
      {
        "name": "nzCountdownFinish",
        "inputType": 1,
        "description": "nz-countdown.nzCountdownFinish.description",
        "type": "string",
        "typeRaw": "`void`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/statistic/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/statistic",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nzFormat",
    "title": "nzFormat.title",
    "description": "nzFormat.description",
    "whenToUse": "nzFormat.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/statistic/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/statistic",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-steps",
    "title": "nz-steps.title",
    "description": "nz-steps.description",
    "whenToUse": "nz-steps.whenToUse",
    "properties": [
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-steps.nzType.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'navigation'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "navigation"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzCurrent",
        "inputType": 0,
        "description": "nz-steps.nzCurrent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-steps.nzDirection.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "vertical",
          "horizontal"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzLabelPlacement",
        "inputType": 0,
        "description": "nz-steps.nzLabelPlacement.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "vertical",
          "horizontal"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzProgressDot",
        "inputType": 0,
        "description": "nz-steps.nzProgressDot.description",
        "type": "boolean",
        "typeRaw": "`boolean | TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }>`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-steps.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-steps.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'wait' | 'process' | 'finish' | 'error'`",
        "default": "`'process'`",
        "typeDefinition": [
          "wait",
          "process",
          "finish",
          "error"
        ],
        "pureDefault": "process"
      },
      {
        "name": "nzStartIndex",
        "inputType": 0,
        "description": "nz-steps.nzStartIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzIndexChange",
        "inputType": 1,
        "description": "nz-steps.nzIndexChange.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/steps/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/steps",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-step",
    "title": "nz-step.title",
    "description": "nz-step.description",
    "whenToUse": "nz-step.whenToUse",
    "properties": [
      {
        "name": "nzDescription",
        "inputType": 0,
        "description": "nz-step.nzDescription.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-step.nzIcon.description",
        "type": "string",
        "typeRaw": "`string | string[] | Set<string> | { [klass: string]: any; }` | `TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-step.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'wait' | 'process' | 'finish' | 'error'`",
        "default": "`'wait'`",
        "typeDefinition": [
          "wait",
          "process",
          "finish",
          "error"
        ],
        "pureDefault": "wait"
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-step.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSubtitle",
        "inputType": 0,
        "description": "nz-step.nzSubtitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-step.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzPercentage",
        "inputType": 0,
        "description": "nz-step.nzPercentage.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/steps/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/steps",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-switch",
    "title": "nz-switch.title",
    "description": "nz-switch.description",
    "whenToUse": "nz-switch.whenToUse",
    "properties": [
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-switch.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-switch.ngModel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCheckedChildren",
        "inputType": 0,
        "description": "nz-switch.nzCheckedChildren.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzUnCheckedChildren",
        "inputType": 0,
        "description": "nz-switch.nzUnCheckedChildren.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-switch.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-switch.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-switch.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzControl",
        "inputType": 0,
        "description": "nz-switch.nzControl.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-switch.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-switch.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-switch.name.description"
      }
    ],
    "types": {},
    "doc": "/components/switch/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/switch",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-table",
    "title": "nz-table.title",
    "description": "nz-table.description",
    "whenToUse": "nz-table.whenToUse",
    "properties": [
      {
        "name": "nzData",
        "inputType": 0,
        "description": "nz-table.nzData.description",
        "type": "Array",
        "typeRaw": "`T[]`",
        "default": ""
      },
      {
        "name": "nzFrontPagination",
        "inputType": 0,
        "description": "nz-table.nzFrontPagination.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzTotal",
        "inputType": 0,
        "description": "nz-table.nzTotal.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzCustomColumn",
        "inputType": 0,
        "description": "nz-table.nzCustomColumn.description",
        "type": "Array",
        "typeRaw": "`NzCustomColumn[]`",
        "default": ""
      },
      {
        "name": "nzPageIndex",
        "inputType": 2,
        "description": "nz-table.nzPageIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzPageSize",
        "inputType": 2,
        "description": "nz-table.nzPageSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzShowPagination",
        "inputType": 0,
        "description": "nz-table.nzShowPagination.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzPaginationPosition",
        "inputType": 0,
        "description": "nz-table.nzPaginationPosition.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'bottom' | 'both'`",
        "default": "`'bottom'`",
        "typeDefinition": [
          "top",
          "bottom",
          "both"
        ],
        "pureDefault": "bottom"
      },
      {
        "name": "nzPaginationType",
        "inputType": 0,
        "description": "nz-table.nzPaginationType.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'small'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "small"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzBordered",
        "inputType": 0,
        "description": "nz-table.nzBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOuterBordered",
        "inputType": 0,
        "description": "nz-table.nzOuterBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzWidthConfig",
        "inputType": 0,
        "description": "nz-table.nzWidthConfig.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-table.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'middle' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "middle",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-table.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzLoadingIndicator",
        "inputType": 0,
        "description": "nz-table.nzLoadingIndicator.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzLoadingDelay",
        "inputType": 0,
        "description": "nz-table.nzLoadingDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzScroll",
        "inputType": 0,
        "description": "nz-table.nzScroll.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-table.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzFooter",
        "inputType": 0,
        "description": "nz-table.nzFooter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzNoResult",
        "inputType": 0,
        "description": "nz-table.nzNoResult.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPageSizeOptions",
        "inputType": 0,
        "description": "nz-table.nzPageSizeOptions.description",
        "type": "Array",
        "typeRaw": "`number[]`",
        "default": "`[10, 20, 30, 40]`",
        "pureDefault": "[10, 20, 30, 40]"
      },
      {
        "name": "nzShowQuickJumper",
        "inputType": 0,
        "description": "nz-table.nzShowQuickJumper.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowSizeChanger",
        "inputType": 0,
        "description": "nz-table.nzShowSizeChanger.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowTotal",
        "inputType": 0,
        "description": "nz-table.nzShowTotal.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: number, range: [ number, number ] }>`",
        "default": ""
      },
      {
        "name": "nzItemRender",
        "inputType": 0,
        "description": "nz-table.nzItemRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>`",
        "default": ""
      },
      {
        "name": "nzHideOnSinglePage",
        "inputType": 0,
        "description": "nz-table.nzHideOnSinglePage.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSimple",
        "inputType": 0,
        "description": "nz-table.nzSimple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzTemplateMode",
        "inputType": 0,
        "description": "nz-table.nzTemplateMode.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzVirtualItemSize",
        "inputType": 0,
        "description": "nz-table.nzVirtualItemSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzVirtualMaxBufferPx",
        "inputType": 0,
        "description": "nz-table.nzVirtualMaxBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "nzVirtualMinBufferPx",
        "inputType": 0,
        "description": "nz-table.nzVirtualMinBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`100`",
        "pureDefault": "100"
      },
      {
        "name": "nzVirtualForTrackBy",
        "inputType": 0,
        "description": "nz-table.nzVirtualForTrackBy.description",
        "type": "object",
        "typeRaw": "`TrackByFunction<T>`",
        "default": ""
      },
      {
        "name": "noDataVirtualHeight",
        "inputType": 0,
        "description": "nz-table.noDataVirtualHeight.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'182px'`",
        "pureDefault": "182px"
      },
      {
        "name": "nzPageIndexChange",
        "inputType": 1,
        "description": "nz-table.nzPageIndexChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzPageSizeChange",
        "inputType": 1,
        "description": "nz-table.nzPageSizeChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzCurrentPageDataChange",
        "inputType": 1,
        "description": "nz-table.nzCurrentPageDataChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<T[]>`",
        "default": ""
      },
      {
        "name": "nzCustomColumnChange",
        "inputType": 1,
        "description": "nz-table.nzCustomColumnChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzCustomColumn[]>`",
        "default": ""
      },
      {
        "name": "nzQueryParams",
        "inputType": 1,
        "description": "nz-table.nzQueryParams.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzTableQueryParams>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "th",
    "title": "th.title",
    "description": "th.description",
    "whenToUse": "th.whenToUse",
    "properties": [
      {
        "name": "nzShowCheckbox",
        "inputType": 0,
        "description": "th.nzShowCheckbox.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "th.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzIndeterminate",
        "inputType": 0,
        "description": "th.nzIndeterminate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzLabel",
        "inputType": 0,
        "description": "th.nzLabel.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzChecked",
        "inputType": 2,
        "description": "th.nzChecked.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzCheckedChange",
        "inputType": 1,
        "description": "th.nzCheckedChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzShowRowSelection",
        "inputType": 0,
        "description": "th.nzShowRowSelection.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzSelections",
        "inputType": 0,
        "description": "th.nzSelections.description",
        "type": "Array",
        "typeRaw": "`Array<{ text: string, onSelect: any }>`",
        "default": ""
      },
      {
        "name": "nzShowSort",
        "inputType": 0,
        "description": "th.nzShowSort.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzSortFn",
        "inputType": 0,
        "description": "th.nzSortFn.description",
        "type": "object",
        "typeRaw": "`NzTableSortFn<T> | boolean`",
        "default": ""
      },
      {
        "name": "nzSortOrder",
        "inputType": 0,
        "description": "th.nzSortOrder.description",
        "type": "Enum",
        "typeRaw": "`'descend' | 'ascend' | null`",
        "default": "",
        "typeDefinition": [
          "descend",
          "ascend",
          "null"
        ]
      },
      {
        "name": "nzSortDirections",
        "inputType": 0,
        "description": "th.nzSortDirections.description",
        "type": "Array",
        "typeRaw": "`Array<'descend' | 'ascend' | null>`",
        "default": "`['ascend', 'descend', null]`",
        "pureDefault": "['ascend', 'descend', null]"
      },
      {
        "name": "nzSortOrderChange",
        "inputType": 1,
        "description": "th.nzSortOrderChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<'descend' | 'ascend' | null>`",
        "default": ""
      },
      {
        "name": "nzShowFilter",
        "inputType": 0,
        "description": "th.nzShowFilter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzFilterFn",
        "inputType": 0,
        "description": "th.nzFilterFn.description",
        "type": "object",
        "typeRaw": "`NzTableFilterFn<T> | boolean`",
        "default": ""
      },
      {
        "name": "nzFilters",
        "inputType": 0,
        "description": "th.nzFilters.description",
        "type": "Array",
        "typeRaw": "`Array<{ text: string; value: any; byDefault?: boolean }>`",
        "default": ""
      },
      {
        "name": "nzFilterMultiple",
        "inputType": 0,
        "description": "th.nzFilterMultiple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzFilterChange",
        "inputType": 1,
        "description": "th.nzFilterChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any[] | any>`",
        "default": ""
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "th.nzWidth.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzLeft",
        "inputType": 0,
        "description": "th.nzLeft.description",
        "type": "string",
        "typeRaw": "`string | boolean`",
        "default": ""
      },
      {
        "name": "nzRight",
        "inputType": 0,
        "description": "th.nzRight.description",
        "type": "string",
        "typeRaw": "`string | boolean`",
        "default": ""
      },
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "th.nzAlign.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'right' | 'center'`",
        "default": "",
        "typeDefinition": [
          "left",
          "right",
          "center"
        ]
      },
      {
        "name": "nzCellControl",
        "inputType": 0,
        "description": "th.nzCellControl.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzBreakWord",
        "inputType": 0,
        "description": "th.nzBreakWord.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzEllipsis",
        "inputType": 0,
        "description": "th.nzEllipsis.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzColumnKey",
        "inputType": 0,
        "description": "th.nzColumnKey.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "td",
    "title": "td.title",
    "description": "td.description",
    "whenToUse": "td.whenToUse",
    "properties": [
      {
        "name": "nzShowCheckbox",
        "inputType": 0,
        "description": "td.nzShowCheckbox.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "td.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzIndeterminate",
        "inputType": 0,
        "description": "td.nzIndeterminate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzLabel",
        "inputType": 0,
        "description": "td.nzLabel.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzChecked",
        "inputType": 2,
        "description": "td.nzChecked.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzCheckedChange",
        "inputType": 1,
        "description": "td.nzCheckedChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "colSpan",
        "inputType": 0,
        "description": "td.colSpan.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "rowSpan",
        "inputType": 0,
        "description": "td.rowSpan.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "nzShowExpand",
        "inputType": 0,
        "description": "td.nzShowExpand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzExpand",
        "inputType": 2,
        "description": "td.nzExpand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzExpandIcon",
        "inputType": 0,
        "description": "td.nzExpandIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzExpandChange",
        "inputType": 1,
        "description": "td.nzExpandChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzLeft",
        "inputType": 0,
        "description": "td.nzLeft.description",
        "type": "string",
        "typeRaw": "`string | boolean`",
        "default": ""
      },
      {
        "name": "nzRight",
        "inputType": 0,
        "description": "td.nzRight.description",
        "type": "string",
        "typeRaw": "`string | boolean`",
        "default": ""
      },
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "td.nzAlign.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'right' | 'center'`",
        "default": "",
        "typeDefinition": [
          "left",
          "right",
          "center"
        ]
      },
      {
        "name": "nzCellControl",
        "inputType": 0,
        "description": "td.nzCellControl.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzBreakWord",
        "inputType": 0,
        "description": "td.nzBreakWord.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzEllipsis",
        "inputType": 0,
        "description": "td.nzEllipsis.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzIndentSize",
        "inputType": 0,
        "description": "td.nzIndentSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "thead",
    "title": "thead.title",
    "description": "thead.description",
    "whenToUse": "thead.whenToUse",
    "properties": [
      {
        "name": "nzSortOrderChange",
        "inputType": 1,
        "description": "thead.nzSortOrderChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{ key: string, value: 'descend' | 'ascend' | null }>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "tr",
    "title": "tr.title",
    "description": "tr.description",
    "whenToUse": "tr.whenToUse",
    "properties": [
      {
        "name": "nzExpand",
        "inputType": 0,
        "description": "tr.nzExpand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "tfoot",
    "title": "tfoot.title",
    "description": "tfoot.description",
    "whenToUse": "tfoot.whenToUse",
    "properties": [
      {
        "name": "nzSummary",
        "inputType": 0,
        "description": "tfoot.nzSummary.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzFixed",
        "inputType": 0,
        "description": "tfoot.nzFixed.description",
        "type": "boolean",
        "typeRaw": "`boolean | 'top' | 'bottom'`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-filter-trigger",
    "title": "nz-filter-trigger.title",
    "description": "nz-filter-trigger.description",
    "whenToUse": "nz-filter-trigger.whenToUse",
    "properties": [
      {
        "name": "nzDropdownMenu",
        "inputType": 0,
        "description": "nz-filter-trigger.nzDropdownMenu.description",
        "type": "object",
        "typeRaw": "`NzDropdownMenuComponent`",
        "default": ""
      },
      {
        "name": "nzVisible",
        "inputType": 2,
        "description": "nz-filter-trigger.nzVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzActive",
        "inputType": 0,
        "description": "nz-filter-trigger.nzActive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzHasBackdrop",
        "inputType": 0,
        "description": "nz-filter-trigger.nzHasBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzVisibleChange",
        "inputType": 1,
        "description": "nz-filter-trigger.nzVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-virtual-scroll",
    "title": "nz-virtual-scroll.title",
    "description": "nz-virtual-scroll.description",
    "whenToUse": "nz-virtual-scroll.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-tabs",
    "title": "nz-tabs.title",
    "description": "nz-tabs.description",
    "whenToUse": "nz-tabs.whenToUse",
    "properties": [
      {
        "name": "nzSelectedIndex",
        "inputType": 0,
        "description": "nz-tabs.nzSelectedIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzAnimated",
        "inputType": 0,
        "description": "nz-tabs.nzAnimated.description",
        "type": "boolean",
        "typeRaw": "`boolean | {inkBar:boolean, tabPane:boolean}`",
        "default": "`true`, `false` when `type=\"card\"`",
        "pureDefault": "true`, `false` when `type=\"card"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-tabs.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzTabBarExtraContent",
        "inputType": 0,
        "description": "nz-tabs.nzTabBarExtraContent.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTabBarStyle",
        "inputType": 0,
        "description": "nz-tabs.nzTabBarStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzTabPosition",
        "inputType": 0,
        "description": "nz-tabs.nzTabPosition.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'right' | 'bottom' | 'left'`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "right",
          "bottom",
          "left"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-tabs.nzType.description",
        "type": "Enum",
        "typeRaw": "`'line' | 'card' | 'editable-card'`",
        "default": "`'line'`",
        "typeDefinition": [
          "line",
          "card",
          "editable-card"
        ],
        "pureDefault": "line"
      },
      {
        "name": "nzTabBarGutter",
        "inputType": 0,
        "description": "nz-tabs.nzTabBarGutter.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzHideAll",
        "inputType": 0,
        "description": "nz-tabs.nzHideAll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzLinkRouter",
        "inputType": 0,
        "description": "nz-tabs.nzLinkRouter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzLinkExact",
        "inputType": 0,
        "description": "nz-tabs.nzLinkExact.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzCanDeactivate",
        "inputType": 0,
        "description": "nz-tabs.nzCanDeactivate.description",
        "type": "object",
        "typeRaw": "`NzTabsCanDeactivateFn`",
        "default": ""
      },
      {
        "name": "nzCentered",
        "inputType": 0,
        "description": "nz-tabs.nzCentered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDestroyInactiveTabPane",
        "inputType": 0,
        "description": "nz-tabs.nzDestroyInactiveTabPane.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSelectedIndexChange",
        "inputType": 1,
        "description": "nz-tabs.nzSelectedIndexChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzSelectChange",
        "inputType": 1,
        "description": "nz-tabs.nzSelectChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{index: number,tab: NzTabComponent}>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/tabs/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tabs",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-tab",
    "title": "nz-tab.title",
    "description": "nz-tab.description",
    "whenToUse": "nz-tab.whenToUse",
    "properties": [
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-tab.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzForceRender",
        "inputType": 0,
        "description": "nz-tab.nzForceRender.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-tab.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-tab.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "nzContextmenu",
        "inputType": 1,
        "description": "nz-tab.nzContextmenu.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      },
      {
        "name": "nzSelect",
        "inputType": 1,
        "description": "nz-tab.nzSelect.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "nzDeselect",
        "inputType": 1,
        "description": "nz-tab.nzDeselect.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/tabs/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tabs",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-tab",
    "title": "nz-tab.title",
    "description": "nz-tab.description",
    "whenToUse": "nz-tab.whenToUse",
    "properties": [
      {
        "name": "nzTabBarExtraContent",
        "inputType": 0,
        "description": "nz-tab.nzTabBarExtraContent.description",
        "type": "Enum",
        "typeRaw": "`'start' | 'end'`",
        "default": "`'end'`",
        "typeDefinition": [
          "start",
          "end"
        ],
        "pureDefault": "end"
      }
    ],
    "types": {},
    "doc": "/components/tabs/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tabs",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzTabBarExtraContent",
    "title": "nzTabBarExtraContent.title",
    "description": "nzTabBarExtraContent.description",
    "whenToUse": "nzTabBarExtraContent.whenToUse",
    "properties": [
      {
        "name": "nzTabBarExtraContent",
        "inputType": 0,
        "description": "nzTabBarExtraContent.nzTabBarExtraContent.description",
        "type": "Enum",
        "typeRaw": "`'start' | 'end'`",
        "default": "`'end'`",
        "typeDefinition": [
          "start",
          "end"
        ],
        "pureDefault": "end"
      }
    ],
    "types": {},
    "doc": "/components/tabs/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tabs",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-tag",
    "title": "nz-tag.title",
    "description": "nz-tag.description",
    "whenToUse": "nz-tag.whenToUse",
    "properties": [
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-tag.nzMode.description",
        "type": "Enum",
        "typeRaw": "`'closeable' | 'default' | 'checkable'`",
        "default": "`'default'`",
        "typeDefinition": [
          "closeable",
          "default",
          "checkable"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzChecked",
        "inputType": 2,
        "description": "nz-tag.nzChecked.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzColor",
        "inputType": 0,
        "description": "nz-tag.nzColor.description",
        "type": "Enum",
        "typeRaw": "`string`",
        "default": "",
        "typeDefinition": [
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
          "purple"
        ]
      },
      {
        "name": "nzBordered",
        "inputType": 0,
        "description": "nz-tag.nzBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzOnClose",
        "inputType": 1,
        "description": "nz-tag.nzOnClose.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      },
      {
        "name": "nzCheckedChange",
        "inputType": 1,
        "description": "nz-tag.nzCheckedChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/tag/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tag",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-time-picker",
    "title": "nz-time-picker.title",
    "description": "nz-time-picker.description",
    "whenToUse": "nz-time-picker.whenToUse",
    "properties": [
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-time-picker.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-time-picker.ngModel.description",
        "type": "object",
        "typeRaw": "`Date`",
        "default": ""
      },
      {
        "name": "nzAddOn",
        "inputType": 0,
        "description": "nz-time-picker.nzAddOn.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzAllowEmpty",
        "inputType": 0,
        "description": "nz-time-picker.nzAllowEmpty.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-time-picker.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-time-picker.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzClearText",
        "inputType": 0,
        "description": "nz-time-picker.nzClearText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'clear'`",
        "pureDefault": "clear"
      },
      {
        "name": "nzNowText",
        "inputType": 0,
        "description": "nz-time-picker.nzNowText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Now'`",
        "pureDefault": "Now"
      },
      {
        "name": "nzOkText",
        "inputType": 0,
        "description": "nz-time-picker.nzOkText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Ok'`",
        "pureDefault": "Ok"
      },
      {
        "name": "nzDefaultOpenValue",
        "inputType": 0,
        "description": "nz-time-picker.nzDefaultOpenValue.description",
        "type": "object",
        "typeRaw": "`Date`",
        "default": "`new Date()`",
        "pureDefault": "new Date()"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-time-picker.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzDisabledHours",
        "inputType": 0,
        "description": "nz-time-picker.nzDisabledHours.description",
        "type": "function",
        "typeRaw": "`() => number[]`",
        "default": ""
      },
      {
        "name": "nzDisabledMinutes",
        "inputType": 0,
        "description": "nz-time-picker.nzDisabledMinutes.description",
        "type": "function",
        "typeRaw": "`(hour: number) => number[]`",
        "default": ""
      },
      {
        "name": "nzDisabledSeconds",
        "inputType": 0,
        "description": "nz-time-picker.nzDisabledSeconds.description",
        "type": "function",
        "typeRaw": "`(hour: number, minute: number) => number[]`",
        "default": ""
      },
      {
        "name": "nzFormat",
        "inputType": 0,
        "description": "nz-time-picker.nzFormat.description",
        "type": "string",
        "typeRaw": "[DatePipe](https://angular.dev/api/common/DatePipe)",
        "default": "`'HH:mm:ss'`",
        "pureDefault": "HH:mm:ss"
      },
      {
        "name": "nzHideDisabledOptions",
        "inputType": 0,
        "description": "nz-time-picker.nzHideDisabledOptions.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzHourStep",
        "inputType": 0,
        "description": "nz-time-picker.nzHourStep.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzMinuteStep",
        "inputType": 0,
        "description": "nz-time-picker.nzMinuteStep.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzSecondStep",
        "inputType": 0,
        "description": "nz-time-picker.nzSecondStep.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-time-picker.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-time-picker.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzVariant",
        "inputType": 0,
        "description": "nz-time-picker.nzVariant.description",
        "type": "Enum",
        "typeRaw": "`'outlined' | 'borderless' | 'filled' | 'underlined'`",
        "default": "`'outlined'`",
        "typeDefinition": [
          "outlined",
          "borderless",
          "filled",
          "underlined"
        ],
        "pureDefault": "outlined"
      },
      {
        "name": "nzInputReadOnly",
        "inputType": 0,
        "description": "nz-time-picker.nzInputReadOnly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOpen",
        "inputType": 2,
        "description": "nz-time-picker.nzOpen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-time-picker.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Select a time'`",
        "pureDefault": "Select a time"
      },
      {
        "name": "nzPopupClassName",
        "inputType": 0,
        "description": "nz-time-picker.nzPopupClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`''`",
        "pureDefault": ""
      },
      {
        "name": "nzUse12Hours",
        "inputType": 0,
        "description": "nz-time-picker.nzUse12Hours.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-time-picker.nzSuffixIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-time-picker.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Date>`",
        "default": ""
      },
      {
        "name": "nzOpenChange",
        "inputType": 1,
        "description": "nz-time-picker.nzOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-time-picker.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-time-picker.name.description"
      }
    ],
    "types": {},
    "doc": "/components/time-picker/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/time-picker",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-timeline",
    "title": "nz-timeline.title",
    "description": "nz-timeline.description",
    "whenToUse": "nz-timeline.whenToUse",
    "properties": [
      {
        "name": "nzPending",
        "inputType": 0,
        "description": "nz-timeline.nzPending.description",
        "type": "string",
        "typeRaw": "`string | boolean | TemplateRef<void>`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPendingDot",
        "inputType": 0,
        "description": "nz-timeline.nzPendingDot.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": "`<nz-icon nzType=\"loading\" />`",
        "pureDefault": "<nz-icon nzType=\"loading\" />"
      },
      {
        "name": "nzReverse",
        "inputType": 0,
        "description": "nz-timeline.nzReverse.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-timeline.nzMode.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'alternate' | 'right' | 'custom'`",
        "default": "",
        "typeDefinition": [
          "left",
          "alternate",
          "right",
          "custom"
        ]
      }
    ],
    "types": {},
    "doc": "/components/timeline/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/timeline",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-timeline-item",
    "title": "nz-timeline-item.title",
    "description": "nz-timeline-item.description",
    "whenToUse": "nz-timeline-item.whenToUse",
    "properties": [
      {
        "name": "nzColor",
        "inputType": 0,
        "description": "nz-timeline-item.nzColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`blue`",
        "pureDefault": "blue"
      },
      {
        "name": "nzDot",
        "inputType": 0,
        "description": "nz-timeline-item.nzDot.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPosition",
        "inputType": 0,
        "description": "nz-timeline-item.nzPosition.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'right'`",
        "default": "",
        "typeDefinition": [
          "left",
          "right"
        ]
      },
      {
        "name": "nzLabel",
        "inputType": 0,
        "description": "nz-timeline-item.nzLabel.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/timeline/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/timeline",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-transfer",
    "title": "nz-transfer.title",
    "description": "nz-transfer.description",
    "whenToUse": "nz-transfer.whenToUse",
    "properties": [
      {
        "name": "nzDataSource",
        "inputType": 0,
        "description": "nz-transfer.nzDataSource.description",
        "type": "Array",
        "typeRaw": "`TransferItem[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-transfer.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzTitles",
        "inputType": 0,
        "description": "nz-transfer.nzTitles.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`['', '']`",
        "pureDefault": "['', '']"
      },
      {
        "name": "nzOperations",
        "inputType": 0,
        "description": "nz-transfer.nzOperations.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`['', '']`",
        "pureDefault": "['', '']"
      },
      {
        "name": "nzListStyle",
        "inputType": 0,
        "description": "nz-transfer.nzListStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzItemUnit",
        "inputType": 0,
        "description": "nz-transfer.nzItemUnit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'item'`",
        "pureDefault": "item"
      },
      {
        "name": "nzItemsUnit",
        "inputType": 0,
        "description": "nz-transfer.nzItemsUnit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'items'`",
        "pureDefault": "items"
      },
      {
        "name": "nzRenderList",
        "inputType": 0,
        "description": "nz-transfer.nzRenderList.description",
        "type": "Array",
        "typeRaw": "`Array<TemplateRef<void> | null>`",
        "default": "`[null, null]`",
        "pureDefault": "[null, null]"
      },
      {
        "name": "nzRender",
        "inputType": 0,
        "description": "nz-transfer.nzRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzFooter",
        "inputType": 0,
        "description": "nz-transfer.nzFooter.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzShowSelectAll",
        "inputType": 0,
        "description": "nz-transfer.nzShowSelectAll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzShowSearch",
        "inputType": 0,
        "description": "nz-transfer.nzShowSearch.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFilterOption",
        "inputType": 0,
        "description": "nz-transfer.nzFilterOption.description",
        "type": "function",
        "typeRaw": "`(inputValue: string, item: TransferItem) => boolean`",
        "default": ""
      },
      {
        "name": "nzSearchPlaceholder",
        "inputType": 0,
        "description": "nz-transfer.nzSearchPlaceholder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Search here'`",
        "pureDefault": "Search here"
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-transfer.nzNotFoundContent.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'The list is empty'`",
        "pureDefault": "The list is empty"
      },
      {
        "name": "nzCanMove",
        "inputType": 0,
        "description": "nz-transfer.nzCanMove.description",
        "type": "function",
        "typeRaw": "`(arg: TransferCanMove) => Observable<TransferItem[]>`",
        "default": ""
      },
      {
        "name": "nzSelectedKeys",
        "inputType": 0,
        "description": "nz-transfer.nzSelectedKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "nzTargetKeys",
        "inputType": 0,
        "description": "nz-transfer.nzTargetKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "nzOneWay",
        "inputType": 0,
        "description": "nz-transfer.nzOneWay.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-transfer.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzChange",
        "inputType": 1,
        "description": "nz-transfer.nzChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<TransferChange>`",
        "default": ""
      },
      {
        "name": "nzSearchChange",
        "inputType": 1,
        "description": "nz-transfer.nzSearchChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<TransferSearchChange>`",
        "default": ""
      },
      {
        "name": "nzSelectChange",
        "inputType": 1,
        "description": "nz-transfer.nzSelectChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<TransferSearchChange>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/transfer/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/transfer",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-tree",
    "title": "nz-tree.title",
    "description": "nz-tree.description",
    "whenToUse": "nz-tree.whenToUse",
    "properties": [
      {
        "name": "nzData",
        "inputType": 0,
        "description": "nz-tree.nzData.description",
        "type": "Array",
        "typeRaw": "`NzTreeNodeOptions[] | NzTreeNode[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzBlockNode",
        "inputType": 0,
        "description": "nz-tree.nzBlockNode.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCheckable",
        "inputType": 0,
        "description": "nz-tree.nzCheckable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowExpand",
        "inputType": 0,
        "description": "nz-tree.nzShowExpand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzShowLine",
        "inputType": 0,
        "description": "nz-tree.nzShowLine.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExpandedIcon",
        "inputType": 0,
        "description": "nz-tree.nzExpandedIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzTreeNode }>`",
        "default": ""
      },
      {
        "name": "nzShowIcon",
        "inputType": 0,
        "description": "nz-tree.nzShowIcon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAsyncData",
        "inputType": 0,
        "description": "nz-tree.nzAsyncData.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDraggable",
        "inputType": 0,
        "description": "nz-tree.nzDraggable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzMultiple",
        "inputType": 0,
        "description": "nz-tree.nzMultiple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzHideUnMatched",
        "inputType": 0,
        "description": "nz-tree.nzHideUnMatched.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCheckStrictly",
        "inputType": 0,
        "description": "nz-tree.nzCheckStrictly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTreeTemplate",
        "inputType": 0,
        "description": "nz-tree.nzTreeTemplate.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzTreeNode }>`",
        "default": ""
      },
      {
        "name": "nzExpandAll",
        "inputType": 0,
        "description": "nz-tree.nzExpandAll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExpandedKeys",
        "inputType": 0,
        "description": "nz-tree.nzExpandedKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzCheckedKeys",
        "inputType": 0,
        "description": "nz-tree.nzCheckedKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzSelectedKeys",
        "inputType": 0,
        "description": "nz-tree.nzSelectedKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzSearchValue",
        "inputType": 0,
        "description": "nz-tree.nzSearchValue.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "nzSearchFunc",
        "inputType": 0,
        "description": "nz-tree.nzSearchFunc.description",
        "type": "function",
        "typeRaw": "`(node: NzTreeNodeOptions) => boolean`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "nzBeforeDrop",
        "inputType": 0,
        "description": "nz-tree.nzBeforeDrop.description",
        "type": "function",
        "typeRaw": "`(confirm: NzFormatBeforeDropEvent) => Observable<boolean>`",
        "default": ""
      },
      {
        "name": "nzVirtualHeight",
        "inputType": 0,
        "description": "nz-tree.nzVirtualHeight.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzVirtualItemSize",
        "inputType": 0,
        "description": "nz-tree.nzVirtualItemSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28`",
        "pureDefault": "28"
      },
      {
        "name": "nzVirtualMaxBufferPx",
        "inputType": 0,
        "description": "nz-tree.nzVirtualMaxBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`500`",
        "pureDefault": "500"
      },
      {
        "name": "nzVirtualMinBufferPx",
        "inputType": 0,
        "description": "nz-tree.nzVirtualMinBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28`",
        "pureDefault": "28"
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-tree.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzDblClick",
        "inputType": 1,
        "description": "nz-tree.nzDblClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzContextMenu",
        "inputType": 1,
        "description": "nz-tree.nzContextMenu.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzCheckboxChange",
        "inputType": 1,
        "description": "nz-tree.nzCheckboxChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzExpandChange",
        "inputType": 1,
        "description": "nz-tree.nzExpandChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzSearchValueChange",
        "inputType": 1,
        "description": "nz-tree.nzSearchValueChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDragStart",
        "inputType": 1,
        "description": "nz-tree.nzOnDragStart.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDragEnter",
        "inputType": 1,
        "description": "nz-tree.nzOnDragEnter.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDragOver",
        "inputType": 1,
        "description": "nz-tree.nzOnDragOver.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDragLeave",
        "inputType": 1,
        "description": "nz-tree.nzOnDragLeave.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDrop",
        "inputType": 1,
        "description": "nz-tree.nzOnDrop.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDragEnd",
        "inputType": 1,
        "description": "nz-tree.nzOnDragEnd.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/tree/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-tree-select",
    "title": "nz-tree-select.title",
    "description": "nz-tree-select.description",
    "whenToUse": "nz-tree-select.whenToUse",
    "properties": [
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-tree-select.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-tree-select.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-tree-select.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-tree-select.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'`",
        "default": "`'bottomLeft'`",
        "typeDefinition": [
          "bottomLeft",
          "bottomRight",
          "topLeft",
          "topRight"
        ],
        "pureDefault": "bottomLeft"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-tree-select.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzShowIcon",
        "inputType": 0,
        "description": "nz-tree-select.nzShowIcon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowSearch",
        "inputType": 0,
        "description": "nz-tree-select.nzShowSearch.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-tree-select.nzNotFoundContent.description",
        "type": "Enum",
        "typeRaw": "`'string' | 'TemplateRef<void>'`",
        "default": "",
        "typeDefinition": [
          "string",
          "TemplateRef<void>"
        ]
      },
      {
        "name": "nzDropdownMatchSelectWidth",
        "inputType": 0,
        "description": "nz-tree-select.nzDropdownMatchSelectWidth.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzDropdownStyle",
        "inputType": 0,
        "description": "nz-tree-select.nzDropdownStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzDropdownClassName",
        "inputType": 0,
        "description": "nz-tree-select.nzDropdownClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzMultiple",
        "inputType": 0,
        "description": "nz-tree-select.nzMultiple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzHideUnMatched",
        "inputType": 0,
        "description": "nz-tree-select.nzHideUnMatched.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-tree-select.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-tree-select.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzCheckable",
        "inputType": 0,
        "description": "nz-tree-select.nzCheckable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCheckStrictly",
        "inputType": 0,
        "description": "nz-tree-select.nzCheckStrictly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowExpand",
        "inputType": 0,
        "description": "nz-tree-select.nzShowExpand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzShowLine",
        "inputType": 0,
        "description": "nz-tree-select.nzShowLine.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-tree-select.nzPrefix.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any> | string`",
        "default": ""
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-tree-select.nzSuffixIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any> | string`",
        "default": ""
      },
      {
        "name": "nzAsyncData",
        "inputType": 0,
        "description": "nz-tree-select.nzAsyncData.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzNodes",
        "inputType": 0,
        "description": "nz-tree-select.nzNodes.description",
        "type": "Array",
        "typeRaw": "`NzTreeNodeOptions[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzDefaultExpandAll",
        "inputType": 0,
        "description": "nz-tree-select.nzDefaultExpandAll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExpandedKeys",
        "inputType": 0,
        "description": "nz-tree-select.nzExpandedKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "nzDisplayWith",
        "inputType": 0,
        "description": "nz-tree-select.nzDisplayWith.description",
        "type": "function",
        "typeRaw": "`(node: NzTreeNode) => string`",
        "default": "`(node: NzTreeNode) => node.title`",
        "pureDefault": "(node: NzTreeNode) => node.title"
      },
      {
        "name": "nzMaxTagCount",
        "inputType": 0,
        "description": "nz-tree-select.nzMaxTagCount.description",
        "type": "number",
        "typeRaw": "number",
        "default": ""
      },
      {
        "name": "nzMaxTagPlaceholder",
        "inputType": 0,
        "description": "nz-tree-select.nzMaxTagPlaceholder.description",
        "type": "TemplateRef",
        "typeRaw": "TemplateRef<{ $implicit: NzTreeNode[] }>",
        "default": ""
      },
      {
        "name": "nzTreeTemplate",
        "inputType": 0,
        "description": "nz-tree-select.nzTreeTemplate.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzTreeNode }>`",
        "default": ""
      },
      {
        "name": "nzVariant",
        "inputType": 0,
        "description": "nz-tree-select.nzVariant.description",
        "type": "Enum",
        "typeRaw": "`'outlined' | 'borderless' | 'filled' | 'underlined'`",
        "default": "`'outlined'`",
        "typeDefinition": [
          "outlined",
          "borderless",
          "filled",
          "underlined"
        ],
        "pureDefault": "outlined"
      },
      {
        "name": "nzVirtualHeight",
        "inputType": 0,
        "description": "nz-tree-select.nzVirtualHeight.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzVirtualItemSize",
        "inputType": 0,
        "description": "nz-tree-select.nzVirtualItemSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28`",
        "pureDefault": "28"
      },
      {
        "name": "nzVirtualMaxBufferPx",
        "inputType": 0,
        "description": "nz-tree-select.nzVirtualMaxBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`500`",
        "pureDefault": "500"
      },
      {
        "name": "nzVirtualMinBufferPx",
        "inputType": 0,
        "description": "nz-tree-select.nzVirtualMinBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28`",
        "pureDefault": "28"
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-tree-select.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExpandChange",
        "inputType": 1,
        "description": "nz-tree-select.nzExpandChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "type": "any",
        "typeRaw": "`any`",
        "description": "nz-tree-select.ngModel.description"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "description": "nz-tree-select.ngModelChange.description"
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-tree-select.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-tree-select.name.description"
      }
    ],
    "types": {},
    "doc": "/components/tree-select/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-select",
    "standalone": false,
    "selfClosingTag": true
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-tree-view",
    "title": "nz-tree-view.title",
    "description": "nz-tree-view.description",
    "whenToUse": "nz-tree-view.whenToUse",
    "properties": [
      {
        "name": "nzTreeControl",
        "inputType": 0,
        "description": "nz-tree-view.nzTreeControl.description",
        "type": "string",
        "typeRaw": "[TreeControl](https://material.angular.io/cdk/tree/api#TreeControl)",
        "default": ""
      },
      {
        "name": "nzDataSource",
        "inputType": 0,
        "description": "nz-tree-view.nzDataSource.description",
        "type": "object",
        "typeRaw": "`DataSource<T> | Observable<T[]> | T[]`, [DataSource](https://material.angular.io/cdk/tree/overview#data-source)",
        "default": ""
      },
      {
        "name": "nzDirectoryTree",
        "inputType": 0,
        "description": "nz-tree-view.nzDirectoryTree.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBlockNode",
        "inputType": 0,
        "description": "nz-tree-view.nzBlockNode.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-tree-virtual-scroll-view",
    "title": "nz-tree-virtual-scroll-view.title",
    "description": "nz-tree-virtual-scroll-view.description",
    "whenToUse": "nz-tree-virtual-scroll-view.whenToUse",
    "properties": [
      {
        "name": "nzTreeControl",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzTreeControl.description",
        "type": "string",
        "typeRaw": "[TreeControl](https://material.angular.io/cdk/tree/api#TreeControl)",
        "default": ""
      },
      {
        "name": "nzDataSource",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzDataSource.description",
        "type": "object",
        "typeRaw": "`DataSource<T> | Observable<T[]> | T[]`, [DataSource](https://material.angular.io/cdk/tree/overview#data-source)",
        "default": ""
      },
      {
        "name": "nzDirectoryTree",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzDirectoryTree.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBlockNode",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzBlockNode.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzItemSize",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzItemSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28`",
        "pureDefault": "28"
      },
      {
        "name": "nzMinBufferPx",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzMinBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28 * 5`",
        "pureDefault": "28 * 5"
      },
      {
        "name": "nzMaxBufferPx",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzMaxBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28 * 10`",
        "pureDefault": "28 * 10"
      }
    ],
    "types": {},
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzTreeNodeDef",
    "title": "nzTreeNodeDef.title",
    "description": "nzTreeNodeDef.description",
    "whenToUse": "nzTreeNodeDef.whenToUse",
    "properties": [
      {
        "name": "nzTreeNodeDefWhen",
        "inputType": 0,
        "description": "nzTreeNodeDef.nzTreeNodeDefWhen.description",
        "type": "function",
        "typeRaw": "`(index: number, nodeData: T) => boolean`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-tree-node",
    "title": "nz-tree-node.title",
    "description": "nz-tree-node.description",
    "whenToUse": "nz-tree-node.whenToUse",
    "properties": [
      {
        "name": "nzTreeNodeToggleRecursive",
        "inputType": 0,
        "description": "nz-tree-node.nzTreeNodeToggleRecursive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzTreeNodePadding",
    "title": "nzTreeNodePadding.title",
    "description": "nzTreeNodePadding.description",
    "whenToUse": "nzTreeNodePadding.whenToUse",
    "properties": [
      {
        "name": "nzTreeNodeToggleRecursive",
        "inputType": 0,
        "description": "nzTreeNodePadding.nzTreeNodeToggleRecursive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nzTreeNodeIndentLine",
    "title": "nzTreeNodeIndentLine.title",
    "description": "nzTreeNodeIndentLine.description",
    "whenToUse": "nzTreeNodeIndentLine.whenToUse",
    "properties": [
      {
        "name": "nzTreeNodeToggleRecursive",
        "inputType": 0,
        "description": "nzTreeNodeIndentLine.nzTreeNodeToggleRecursive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-tree-node-toggle",
    "title": "nz-tree-node-toggle.title",
    "description": "nz-tree-node-toggle.description",
    "whenToUse": "nz-tree-node-toggle.whenToUse",
    "properties": [
      {
        "name": "nzTreeNodeToggleRecursive",
        "inputType": 0,
        "description": "nz-tree-node-toggle.nzTreeNodeToggleRecursive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzTreeNodeToggleRotateIcon",
    "title": "nzTreeNodeToggleRotateIcon.title",
    "description": "nzTreeNodeToggleRotateIcon.description",
    "whenToUse": "nzTreeNodeToggleRotateIcon.whenToUse",
    "properties": [
      {
        "name": "nzSelected",
        "inputType": 0,
        "description": "nzTreeNodeToggleRotateIcon.nzSelected.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nzTreeNodeToggleRotateIcon.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nzTreeNodeToggleRotateIcon.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nzTreeNodeToggleActiveIcon",
    "title": "nzTreeNodeToggleActiveIcon.title",
    "description": "nzTreeNodeToggleActiveIcon.description",
    "whenToUse": "nzTreeNodeToggleActiveIcon.whenToUse",
    "properties": [
      {
        "name": "nzSelected",
        "inputType": 0,
        "description": "nzTreeNodeToggleActiveIcon.nzSelected.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nzTreeNodeToggleActiveIcon.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nzTreeNodeToggleActiveIcon.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-tree-node-option",
    "title": "nz-tree-node-option.title",
    "description": "nz-tree-node-option.description",
    "whenToUse": "nz-tree-node-option.whenToUse",
    "properties": [
      {
        "name": "nzSelected",
        "inputType": 0,
        "description": "nz-tree-node-option.nzSelected.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-tree-node-option.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-tree-node-option.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-tree-node-checkbox",
    "title": "nz-tree-node-checkbox.title",
    "description": "nz-tree-node-checkbox.description",
    "whenToUse": "nz-tree-node-checkbox.whenToUse",
    "properties": [
      {
        "name": "nzChecked",
        "inputType": 0,
        "description": "nz-tree-node-checkbox.nzChecked.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-tree-node-checkbox.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzIndeterminate",
        "inputType": 0,
        "description": "nz-tree-node-checkbox.nzIndeterminate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-tree-node-checkbox.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "directive",
    "selector": "nz-typography",
    "title": "nz-typography.title",
    "description": "nz-typography.description",
    "whenToUse": "nz-typography.whenToUse",
    "properties": [
      {
        "name": "nzContent",
        "inputType": 0,
        "description": "nz-typography.nzContent.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzCopyable",
        "inputType": 0,
        "description": "nz-typography.nzCopyable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzEditable",
        "inputType": 0,
        "description": "nz-typography.nzEditable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCopyIcons",
        "inputType": 0,
        "description": "nz-typography.nzCopyIcons.description",
        "type": "string",
        "typeRaw": "`[string | TemplateRef<void>, string | TemplateRef<void>]`",
        "default": "`['copy', 'check']`",
        "pureDefault": "['copy', 'check']"
      },
      {
        "name": "nzCopyTooltips",
        "inputType": 0,
        "description": "nz-typography.nzCopyTooltips.description",
        "type": "string",
        "typeRaw": "`null | [string | TemplateRef<void>, string | TemplateRef<void>]`",
        "default": ""
      },
      {
        "name": "nzEditIcon",
        "inputType": 0,
        "description": "nz-typography.nzEditIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": "`'edit'`",
        "pureDefault": "edit"
      },
      {
        "name": "nzEditTooltip",
        "inputType": 0,
        "description": "nz-typography.nzEditTooltip.description",
        "type": "string",
        "typeRaw": "`null | string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzEllipsis",
        "inputType": 0,
        "description": "nz-typography.nzEllipsis.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSuffix",
        "inputType": 0,
        "description": "nz-typography.nzSuffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzCopyText",
        "inputType": 0,
        "description": "nz-typography.nzCopyText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-typography.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzExpandable",
        "inputType": 0,
        "description": "nz-typography.nzExpandable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzEllipsisRows",
        "inputType": 0,
        "description": "nz-typography.nzEllipsisRows.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-typography.nzType.description",
        "type": "Enum",
        "typeRaw": "`'secondary' | 'warning' | 'danger' | 'success'`",
        "default": "",
        "typeDefinition": [
          "secondary",
          "warning",
          "danger",
          "success"
        ]
      },
      {
        "name": "nzContentChange",
        "inputType": 1,
        "description": "nz-typography.nzContentChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "nzExpandChange",
        "inputType": 1,
        "description": "nz-typography.nzExpandChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "nzOnEllipsis",
        "inputType": 1,
        "description": "nz-typography.nzOnEllipsis.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/typography/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/typography",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-upload",
    "title": "nz-upload.title",
    "description": "nz-upload.description",
    "whenToUse": "nz-upload.whenToUse",
    "properties": [
      {
        "name": "nzAccept",
        "inputType": 0,
        "description": "nz-upload.nzAccept.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAction",
        "inputType": 0,
        "description": "nz-upload.nzAction.description",
        "type": "string",
        "typeRaw": "`string | ((file: NzUploadFile) => string | Observable<string>)`",
        "default": ""
      },
      {
        "name": "nzDirectory",
        "inputType": 0,
        "description": "nz-upload.nzDirectory.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBeforeUpload",
        "inputType": 0,
        "description": "nz-upload.nzBeforeUpload.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile, fileList: NzUploadFile[]) => boolean | Observable<boolean>`",
        "default": ""
      },
      {
        "name": "nzCustomRequest",
        "inputType": 0,
        "description": "nz-upload.nzCustomRequest.description",
        "type": "function",
        "typeRaw": "`(item) => Subscription`",
        "default": ""
      },
      {
        "name": "nzData",
        "inputType": 0,
        "description": "nz-upload.nzData.description",
        "type": "object",
        "typeRaw": "`Object | ((file: NzUploadFile) => Object | Observable<{}>)`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-upload.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzFileList",
        "inputType": 0,
        "description": "nz-upload.nzFileList.description",
        "type": "Array",
        "typeRaw": "`NzUploadFile[]`",
        "default": ""
      },
      {
        "name": "nzLimit",
        "inputType": 0,
        "description": "nz-upload.nzLimit.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-upload.nzSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzFileType",
        "inputType": 0,
        "description": "nz-upload.nzFileType.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzFilter",
        "inputType": 0,
        "description": "nz-upload.nzFilter.description",
        "type": "Array",
        "typeRaw": "`UploadFilter[]`",
        "default": ""
      },
      {
        "name": "nzHeaders",
        "inputType": 0,
        "description": "nz-upload.nzHeaders.description",
        "type": "object",
        "typeRaw": "`Object | ((file: NzUploadFile) => Object | Observable<{}>)`",
        "default": ""
      },
      {
        "name": "nzListType",
        "inputType": 0,
        "description": "nz-upload.nzListType.description",
        "type": "Enum",
        "typeRaw": "`'text' | 'picture' | 'picture-card'`",
        "default": "`'text'`",
        "typeDefinition": [
          "text",
          "picture",
          "picture-card"
        ],
        "pureDefault": "text"
      },
      {
        "name": "nzMultiple",
        "inputType": 0,
        "description": "nz-upload.nzMultiple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzName",
        "inputType": 0,
        "description": "nz-upload.nzName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'file'`",
        "pureDefault": "file"
      },
      {
        "name": "nzShowUploadList",
        "inputType": 0,
        "description": "nz-upload.nzShowUploadList.description",
        "type": "boolean",
        "typeRaw": "`boolean | { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzShowButton",
        "inputType": 0,
        "description": "nz-upload.nzShowButton.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzWithCredentials",
        "inputType": 0,
        "description": "nz-upload.nzWithCredentials.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOpenFileDialogOnClick",
        "inputType": 0,
        "description": "nz-upload.nzOpenFileDialogOnClick.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzPreview",
        "inputType": 0,
        "description": "nz-upload.nzPreview.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile) => void`",
        "default": ""
      },
      {
        "name": "nzPreviewFile",
        "inputType": 0,
        "description": "nz-upload.nzPreviewFile.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile) => Observable<dataURL: string>`",
        "default": ""
      },
      {
        "name": "nzPreviewIsImage",
        "inputType": 0,
        "description": "nz-upload.nzPreviewIsImage.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile) => boolean`",
        "default": ""
      },
      {
        "name": "nzRemove",
        "inputType": 0,
        "description": "nz-upload.nzRemove.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile) => boolean | Observable<boolean>`",
        "default": ""
      },
      {
        "name": "nzChange",
        "inputType": 1,
        "description": "nz-upload.nzChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzUploadChangeParam>`",
        "default": ""
      },
      {
        "name": "nzDownload",
        "inputType": 0,
        "description": "nz-upload.nzDownload.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile) => void`",
        "default": "Jump to new TAB",
        "pureDefault": "Jump to new TAB"
      },
      {
        "name": "nzTransformFile",
        "inputType": 0,
        "description": "nz-upload.nzTransformFile.description",
        "type": "string",
        "typeRaw": "~~`(file: NzUploadFile) => NzUploadTransformFileType`~~",
        "default": ""
      },
      {
        "name": "nzIconRender",
        "inputType": 0,
        "description": "nz-upload.nzIconRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzUploadFile }>`",
        "default": ""
      },
      {
        "name": "nzFileListRender",
        "inputType": 0,
        "description": "nz-upload.nzFileListRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzUploadFile[] }>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/upload/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/upload",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-watermark",
    "title": "nz-watermark.title",
    "description": "nz-watermark.description",
    "whenToUse": "nz-watermark.whenToUse",
    "properties": [
      {
        "name": "nzContent",
        "inputType": 0,
        "description": "nz-watermark.nzContent.description",
        "type": "string",
        "typeRaw": "`string | string[]`",
        "default": ""
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-watermark.nzWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`120`",
        "pureDefault": "120"
      },
      {
        "name": "nzHeight",
        "inputType": 0,
        "description": "nz-watermark.nzHeight.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`64`",
        "pureDefault": "64"
      },
      {
        "name": "nzRotate",
        "inputType": 0,
        "description": "nz-watermark.nzRotate.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`-22`",
        "pureDefault": "-22"
      },
      {
        "name": "nzZIndex",
        "inputType": 0,
        "description": "nz-watermark.nzZIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`9`",
        "pureDefault": "9"
      },
      {
        "name": "nzImage",
        "inputType": 0,
        "description": "nz-watermark.nzImage.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzFont",
        "inputType": 0,
        "description": "nz-watermark.nzFont.description",
        "type": "object",
        "typeRaw": "`FontType`",
        "default": "FontType",
        "complexType": "FontType",
        "pureDefault": "FontType"
      },
      {
        "name": "nzGap",
        "inputType": 0,
        "description": "nz-watermark.nzGap.description",
        "type": "string",
        "typeRaw": "`[number, number]`",
        "default": "`[100, 100]`",
        "pureDefault": "[100, 100]"
      },
      {
        "name": "nzOffset",
        "inputType": 0,
        "description": "nz-watermark.nzOffset.description",
        "type": "string",
        "typeRaw": "`[number, number]`",
        "default": "`[nzGap[0]/2, nzGap[1]/2]`",
        "pureDefault": "[nzGap[0]/2, nzGap[1]/2]"
      }
    ],
    "types": {
      "FontType": [
        {
          "name": "color",
          "inputType": 0,
          "description": "nz-watermark.color.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`rgba(0,0,0,.15)`",
          "pureDefault": "rgba(0,0,0,.15)"
        },
        {
          "name": "fontSize",
          "inputType": 0,
          "description": "nz-watermark.fontSize.description",
          "type": "number",
          "typeRaw": "`number`",
          "default": "`16`",
          "pureDefault": "16"
        },
        {
          "name": "fontWeight",
          "inputType": 0,
          "description": "nz-watermark.fontWeight.description",
          "type": "Enum",
          "typeRaw": "`'normal' | 'light' | 'weight' | number`",
          "default": "`'normal'`",
          "typeDefinition": [
            "normal",
            "light",
            "weight",
            "number"
          ],
          "pureDefault": "normal"
        },
        {
          "name": "fontFamily",
          "inputType": 0,
          "description": "nz-watermark.fontFamily.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`'sans-serif'`",
          "pureDefault": "sans-serif"
        },
        {
          "name": "fontStyle",
          "inputType": 0,
          "description": "nz-watermark.fontStyle.description",
          "type": "Enum",
          "typeRaw": "`'none' | 'normal' | 'italic' | 'oblique'`",
          "default": "`'normal'`",
          "typeDefinition": [
            "none",
            "normal",
            "italic",
            "oblique"
          ],
          "pureDefault": "normal"
        }
      ]
    },
    "doc": "/components/watermark/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/watermark",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "auto-focus",
    "title": "auto-focus.title",
    "description": "auto-focus.description",
    "whenToUse": "auto-focus.whenToUse",
    "properties": [
      {
        "name": "enabled",
        "inputType": 0,
        "description": "auto-focus.enabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "auto-focus.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`25`",
        "pureDefault": "25"
      },
      {
        "name": "focus",
        "inputType": 1,
        "description": "auto-focus.focus.description",
        "type": "string",
        "typeRaw": "`void`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/auto-focus/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/auto-focus",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "cell",
    "title": "cell.title",
    "description": "cell.description",
    "whenToUse": "cell.whenToUse",
    "properties": [
      {
        "name": "value",
        "inputType": 0,
        "description": "cell.value.description",
        "type": "string",
        "typeRaw": "`unknown`",
        "default": ""
      },
      {
        "name": "options",
        "inputType": 0,
        "description": "cell.options.description",
        "type": "object",
        "typeRaw": "`CellOptions`",
        "default": "",
        "complexType": "CellOptions"
      },
      {
        "name": "loading",
        "inputType": 0,
        "description": "cell.loading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {
      "CellOptions": [
        {
          "name": "type",
          "inputType": 0,
          "description": "cell.type.description",
          "type": "string",
          "typeRaw": "-",
          "default": ""
        },
        {
          "name": "tooltip",
          "inputType": 0,
          "description": "cell.tooltip.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "renderType",
          "inputType": 0,
          "description": "cell.renderType.description",
          "type": "string",
          "typeRaw": "`primary,success,danger,warning`",
          "default": ""
        },
        {
          "name": "size",
          "inputType": 0,
          "description": "cell.size.description",
          "type": "string",
          "typeRaw": "`large,small`",
          "default": ""
        },
        {
          "name": "unit",
          "inputType": 0,
          "description": "cell.unit.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "default",
          "inputType": 0,
          "description": "cell.default.description",
          "type": "string",
          "typeRaw": "`string",
          "default": "CellDefaultText`",
          "pureDefault": "CellDefaultText`"
        },
        {
          "name": "mask",
          "inputType": 0,
          "description": "cell.mask.description",
          "type": "string",
          "typeRaw": "`string, FormatMaskOption`",
          "default": ""
        },
        {
          "name": "widget",
          "inputType": 0,
          "description": "cell.widget.description",
          "type": "object",
          "typeRaw": "`{key?: string, data?: string}`",
          "default": ""
        },
        {
          "name": "date",
          "inputType": 0,
          "description": "cell.date.description",
          "type": "object",
          "typeRaw": "`{format?: string}`",
          "default": ""
        },
        {
          "name": "mega",
          "inputType": 0,
          "description": "cell.mega.description",
          "type": "object",
          "typeRaw": "`CurrencyMegaOptions`",
          "default": ""
        },
        {
          "name": "currency",
          "inputType": 0,
          "description": "cell.currency.description",
          "type": "object",
          "typeRaw": "`CurrencyFormatOptions`",
          "default": ""
        },
        {
          "name": "boolean",
          "inputType": 0,
          "description": "cell.boolean.description",
          "type": "object",
          "typeRaw": "`YNOptions`",
          "default": ""
        },
        {
          "name": "img",
          "inputType": 0,
          "description": "cell.img.description",
          "type": "object",
          "typeRaw": "`{ size?: number; big?: boolean }`",
          "default": ""
        },
        {
          "name": "link",
          "inputType": 0,
          "description": "cell.link.description",
          "type": "object",
          "typeRaw": "`{ url?: string; target?: string }`",
          "default": ""
        },
        {
          "name": "html",
          "inputType": 0,
          "description": "cell.html.description",
          "type": "object",
          "typeRaw": "`{ safe?: string }`",
          "default": ""
        },
        {
          "name": "badge",
          "inputType": 0,
          "description": "cell.badge.description",
          "type": "object",
          "typeRaw": "`{ data?: CellBadge }`",
          "default": ""
        },
        {
          "name": "tag",
          "inputType": 0,
          "description": "cell.tag.description",
          "type": "object",
          "typeRaw": "`{ data?: CellTag }`",
          "default": ""
        },
        {
          "name": "checkbox",
          "inputType": 0,
          "description": "cell.checkbox.description",
          "type": "object",
          "typeRaw": "`{ label?: string }`",
          "default": ""
        },
        {
          "name": "radio",
          "inputType": 0,
          "description": "cell.radio.description",
          "type": "object",
          "typeRaw": "`{ label?: string }`",
          "default": ""
        }
      ]
    },
    "doc": "/components/cell/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/cell",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "count-down",
    "title": "count-down.title",
    "description": "count-down.description",
    "whenToUse": "count-down.whenToUse",
    "properties": [
      {
        "name": "target",
        "inputType": 0,
        "description": "count-down.target.description",
        "type": "number",
        "typeRaw": "`number",
        "default": "Date`",
        "pureDefault": "Date`"
      },
      {
        "name": "config",
        "inputType": 0,
        "description": "count-down.config.description",
        "type": "object",
        "typeRaw": "`CountdownConfig`",
        "default": ""
      },
      {
        "name": "event",
        "inputType": 1,
        "description": "count-down.event.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<CountdownEvent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/count-down/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/count-down",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "extend",
    "title": "extend.title",
    "description": "extend.description",
    "whenToUse": "extend.whenToUse",
    "properties": [
      {
        "name": "ngModelEnd",
        "inputType": 2,
        "description": "extend.ngModelEnd.description",
        "type": "object",
        "typeRaw": "`Date`",
        "default": ""
      },
      {
        "name": "shortcut",
        "inputType": 0,
        "description": "extend.shortcut.description",
        "type": "boolean",
        "typeRaw": "`boolean",
        "default": "DateRangePickerShortcut`",
        "pureDefault": "DateRangePickerShortcut`"
      }
    ],
    "types": {},
    "doc": "/components/date-picker/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/date-picker",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "down-file",
    "title": "down-file.title",
    "description": "down-file.description",
    "whenToUse": "down-file.whenToUse",
    "properties": [
      {
        "name": "http-data",
        "inputType": 0,
        "description": "down-file.http-data.description",
        "type": "object",
        "typeRaw": "`{}`",
        "default": ""
      },
      {
        "name": "http-body",
        "inputType": 0,
        "description": "down-file.http-body.description",
        "type": "object",
        "typeRaw": "`{}`",
        "default": ""
      },
      {
        "name": "http-method",
        "inputType": 0,
        "description": "down-file.http-method.description",
        "type": "object",
        "typeRaw": "`'POST','GET','HEAD','PUT','PATCH','DELETE'`",
        "default": "`'GET'`",
        "pureDefault": "GET"
      },
      {
        "name": "http-url",
        "inputType": 0,
        "description": "down-file.http-url.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "file-name",
        "inputType": 0,
        "description": "down-file.file-name.description",
        "type": "string",
        "typeRaw": "`string, (rep: HttpResponse<Blob>) => string`",
        "default": ""
      },
      {
        "name": "pre",
        "inputType": 0,
        "description": "down-file.pre.description",
        "type": "function",
        "typeRaw": "`(ev: MouseEvent) => Promise<boolean>`",
        "default": ""
      },
      {
        "name": "success",
        "inputType": 1,
        "description": "down-file.success.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<HttpResponse<Blob>>`",
        "default": ""
      },
      {
        "name": "error",
        "inputType": 1,
        "description": "down-file.error.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/down-file/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/down-file",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "ellipsis",
    "title": "ellipsis.title",
    "description": "ellipsis.description",
    "whenToUse": "ellipsis.whenToUse",
    "properties": [
      {
        "name": "tooltip",
        "inputType": 0,
        "description": "ellipsis.tooltip.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "length",
        "inputType": 0,
        "description": "ellipsis.length.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "lines",
        "inputType": 0,
        "description": "ellipsis.lines.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "fullWidthRecognition",
        "inputType": 0,
        "description": "ellipsis.fullWidthRecognition.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "tail",
        "inputType": 0,
        "description": "ellipsis.tail.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'...'`",
        "pureDefault": "..."
      }
    ],
    "types": {},
    "doc": "/components/ellipsis/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/ellipsis",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "error-collect",
    "title": "error-collect.title",
    "description": "error-collect.description",
    "whenToUse": "error-collect.whenToUse",
    "properties": [
      {
        "name": "freq",
        "inputType": 0,
        "description": "error-collect.freq.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`250`",
        "pureDefault": "250"
      },
      {
        "name": "offsetTop",
        "inputType": 0,
        "description": "error-collect.offsetTop.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`145`",
        "pureDefault": "145"
      }
    ],
    "types": {},
    "doc": "/components/error-collect/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/error-collect",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "error-collect",
    "title": "error-collect.title",
    "description": "error-collect.description",
    "whenToUse": "error-collect.whenToUse",
    "properties": [
      {
        "name": "freq",
        "inputType": 0,
        "description": "error-collect.freq.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`250`",
        "pureDefault": "250"
      },
      {
        "name": "offsetTop",
        "inputType": 0,
        "description": "error-collect.offsetTop.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`145`",
        "pureDefault": "145"
      }
    ],
    "types": {},
    "doc": "/components/error-collect/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/error-collect",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "exception",
    "title": "exception.title",
    "description": "exception.description",
    "whenToUse": "exception.whenToUse",
    "properties": [
      {
        "name": "type",
        "inputType": 0,
        "description": "exception.type.description",
        "type": "Enum",
        "typeRaw": "`'403','404','500'`",
        "default": "",
        "typeDefinition": [
          "403",
          "404",
          "500"
        ]
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "exception.title.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "desc",
        "inputType": 0,
        "description": "exception.desc.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "img",
        "inputType": 0,
        "description": "exception.img.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "backRouterLink",
        "inputType": 0,
        "description": "exception.backRouterLink.description",
        "type": "string",
        "typeRaw": "`string, any[]`",
        "default": "`/`",
        "pureDefault": "/"
      },
      {
        "name": "ng-content",
        "inputType": 0,
        "description": "exception.ng-content.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/exception/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/exception",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "footer-toolbar",
    "title": "footer-toolbar.title",
    "description": "footer-toolbar.description",
    "whenToUse": "footer-toolbar.whenToUse",
    "properties": [
      {
        "name": "ng-content",
        "inputType": 0,
        "description": "footer-toolbar.ng-content.description",
        "type": "string",
        "typeRaw": "`-`",
        "default": ""
      },
      {
        "name": "errorCollect",
        "inputType": 0,
        "description": "footer-toolbar.errorCollect.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "extra",
        "inputType": 0,
        "description": "footer-toolbar.extra.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/footer-toolbar/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/footer-toolbar",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "full-content",
    "title": "full-content.title",
    "description": "full-content.description",
    "whenToUse": "full-content.whenToUse",
    "properties": [
      {
        "name": "fullscreen",
        "inputType": 2,
        "description": "full-content.fullscreen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "hideTitle",
        "inputType": 0,
        "description": "full-content.hideTitle.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "full-content.padding.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`24`",
        "pureDefault": "24"
      }
    ],
    "types": {},
    "doc": "/components/full-content/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/full-content",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "full-toggle",
    "title": "full-toggle.title",
    "description": "full-toggle.description",
    "whenToUse": "full-toggle.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/full-content/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/full-content",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "global-footer",
    "title": "global-footer.title",
    "description": "global-footer.description",
    "whenToUse": "global-footer.whenToUse",
    "properties": [
      {
        "name": "links",
        "inputType": 0,
        "description": "global-footer.links.description",
        "type": "object",
        "typeRaw": "`GlobalFooterLink`",
        "default": "",
        "complexType": "GlobalFooterLink"
      },
      {
        "name": "copyright",
        "inputType": 0,
        "description": "global-footer.copyright.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef`",
        "default": ""
      }
    ],
    "types": {
      "GlobalFooterLink": [
        {
          "name": "title",
          "inputType": 0,
          "description": "global-footer.title.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "href",
          "inputType": 0,
          "description": "global-footer.href.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "blankTarget",
          "inputType": 0,
          "description": "global-footer.blankTarget.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        }
      ]
    },
    "doc": "/components/global-footer/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/global-footer",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "global-footer-item",
    "title": "global-footer-item.title",
    "description": "global-footer-item.description",
    "whenToUse": "global-footer-item.whenToUse",
    "properties": [
      {
        "name": "ng-content",
        "inputType": 0,
        "description": "global-footer-item.ng-content.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "href",
        "inputType": 0,
        "description": "global-footer-item.href.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "blankTarget",
        "inputType": 0,
        "description": "global-footer-item.blankTarget.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/global-footer/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/global-footer",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "hotkey",
    "title": "hotkey.title",
    "description": "hotkey.description",
    "whenToUse": "hotkey.whenToUse",
    "properties": [
      {
        "name": "hotkey",
        "inputType": 0,
        "description": "hotkey.hotkey.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/hotkey/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/hotkey",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "media",
    "title": "media.title",
    "description": "media.description",
    "whenToUse": "media.whenToUse",
    "properties": [
      {
        "name": "type",
        "inputType": 0,
        "description": "media.type.description",
        "type": "string",
        "typeRaw": "`audio, video`",
        "default": "`video`",
        "pureDefault": "video"
      },
      {
        "name": "source",
        "inputType": 0,
        "description": "media.source.description",
        "type": "string",
        "typeRaw": "`string, PlyrMediaSource`",
        "default": ""
      },
      {
        "name": "options",
        "inputType": 0,
        "description": "media.options.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "media.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "media.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Plyr>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/media/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/media",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "notice-icon",
    "title": "notice-icon.title",
    "description": "notice-icon.description",
    "whenToUse": "notice-icon.whenToUse",
    "properties": [
      {
        "name": "data",
        "inputType": 0,
        "description": "notice-icon.data.description",
        "type": "Array",
        "typeRaw": "`NoticeItem[]`",
        "default": ""
      },
      {
        "name": "count",
        "inputType": 0,
        "description": "notice-icon.count.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "loading",
        "inputType": 0,
        "description": "notice-icon.loading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "centered",
        "inputType": 0,
        "description": "notice-icon.centered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "select",
        "inputType": 1,
        "description": "notice-icon.select.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NoticeIconSelect>`",
        "default": ""
      },
      {
        "name": "clear",
        "inputType": 1,
        "description": "notice-icon.clear.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "popoverVisible",
        "inputType": 0,
        "description": "notice-icon.popoverVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "popoverVisibleChange",
        "inputType": 1,
        "description": "notice-icon.popoverVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "btnClass",
        "inputType": 0,
        "description": "notice-icon.btnClass.description",
        "type": "string",
        "typeRaw": "`ngClass`",
        "default": ""
      },
      {
        "name": "btnIconClass",
        "inputType": 0,
        "description": "notice-icon.btnIconClass.description",
        "type": "string",
        "typeRaw": "`ngClass`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/notice-icon/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/notice-icon",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "observeSize",
    "title": "observeSize.title",
    "description": "observeSize.description",
    "whenToUse": "observeSize.whenToUse",
    "properties": [
      {
        "name": "observeSize",
        "inputType": 1,
        "description": "observeSize.observeSize.description",
        "type": "Array",
        "typeRaw": "`MutationRecord[]`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/observers/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/observers",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "page-header",
    "title": "page-header.title",
    "description": "page-header.description",
    "whenToUse": "page-header.whenToUse",
    "properties": [
      {
        "name": "title",
        "inputType": 0,
        "description": "page-header.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "titleSub",
        "inputType": 0,
        "description": "page-header.titleSub.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "autoTitle",
        "inputType": 0,
        "description": "page-header.autoTitle.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "syncTitle",
        "inputType": 0,
        "description": "page-header.syncTitle.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "home",
        "inputType": 0,
        "description": "page-header.home.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`首页`",
        "pureDefault": "首页"
      },
      {
        "name": "homeLink",
        "inputType": 0,
        "description": "page-header.homeLink.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`/`",
        "pureDefault": "/"
      },
      {
        "name": "homeI18n",
        "inputType": 0,
        "description": "page-header.homeI18n.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "autoBreadcrumb",
        "inputType": 0,
        "description": "page-header.autoBreadcrumb.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "recursiveBreadcrumb",
        "inputType": 0,
        "description": "page-header.recursiveBreadcrumb.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "loading",
        "inputType": 0,
        "description": "page-header.loading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "wide",
        "inputType": 0,
        "description": "page-header.wide.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "fixed",
        "inputType": 0,
        "description": "page-header.fixed.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "fixedOffsetTop",
        "inputType": 0,
        "description": "page-header.fixedOffsetTop.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`64`",
        "pureDefault": "64"
      },
      {
        "name": "breadcrumb",
        "inputType": 0,
        "description": "page-header.breadcrumb.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "logo",
        "inputType": 0,
        "description": "page-header.logo.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "action",
        "inputType": 0,
        "description": "page-header.action.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "content",
        "inputType": 0,
        "description": "page-header.content.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "extra",
        "inputType": 0,
        "description": "page-header.extra.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "tab",
        "inputType": 0,
        "description": "page-header.tab.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/page-header/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/page-header",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "pdf",
    "title": "pdf.title",
    "description": "pdf.description",
    "whenToUse": "pdf.whenToUse",
    "properties": [
      {
        "name": "src",
        "inputType": 0,
        "description": "pdf.src.description",
        "type": "string",
        "typeRaw": "`string, object, UInt8Array`",
        "default": ""
      },
      {
        "name": "pi",
        "inputType": 0,
        "description": "pdf.pi.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "showAll",
        "inputType": 0,
        "description": "pdf.showAll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "renderText",
        "inputType": 0,
        "description": "pdf.renderText.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "textLayerMode",
        "inputType": 0,
        "description": "pdf.textLayerMode.description",
        "type": "object",
        "typeRaw": "`PdfTextLayerMode`",
        "default": "`ENABLE`",
        "pureDefault": "ENABLE"
      },
      {
        "name": "showBorders",
        "inputType": 0,
        "description": "pdf.showBorders.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "stickToPage",
        "inputType": 0,
        "description": "pdf.stickToPage.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "originalSize",
        "inputType": 0,
        "description": "pdf.originalSize.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "fitToPage",
        "inputType": 0,
        "description": "pdf.fitToPage.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "zoom",
        "inputType": 0,
        "description": "pdf.zoom.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "zoomScale",
        "inputType": 0,
        "description": "pdf.zoomScale.description",
        "type": "object",
        "typeRaw": "`PdfZoomScale`",
        "default": "`page-width`",
        "pureDefault": "page-width"
      },
      {
        "name": "rotation",
        "inputType": 0,
        "description": "pdf.rotation.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "autoReSize",
        "inputType": 0,
        "description": "pdf.autoReSize.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "externalLinkTarget",
        "inputType": 0,
        "description": "pdf.externalLinkTarget.description",
        "type": "object",
        "typeRaw": "`PdfExternalLinkTarget`",
        "default": "`BLANK`",
        "pureDefault": "BLANK"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "pdf.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "change",
        "inputType": 1,
        "description": "pdf.change.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<PdfChangeEvent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/pdf/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/pdf",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "quick-menu",
    "title": "quick-menu.title",
    "description": "quick-menu.description",
    "whenToUse": "quick-menu.whenToUse",
    "properties": [
      {
        "name": "icon",
        "inputType": 0,
        "description": "quick-menu.icon.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": "`question-circle`",
        "pureDefault": "question-circle"
      },
      {
        "name": "top",
        "inputType": 0,
        "description": "quick-menu.top.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`120`",
        "pureDefault": "120"
      },
      {
        "name": "width",
        "inputType": 0,
        "description": "quick-menu.width.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "bgColor",
        "inputType": 0,
        "description": "quick-menu.bgColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "borderColor",
        "inputType": 0,
        "description": "quick-menu.borderColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "expand",
        "inputType": 2,
        "description": "quick-menu.expand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "expandChange",
        "inputType": 1,
        "description": "quick-menu.expandChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/quick-menu/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/quick-menu",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "reuse-tab",
    "title": "reuse-tab.title",
    "description": "reuse-tab.description",
    "whenToUse": "reuse-tab.whenToUse",
    "properties": [
      {
        "name": "i18n",
        "inputType": 0,
        "description": "reuse-tab.i18n.description",
        "type": "object",
        "typeRaw": "`ReuseContextI18n`",
        "default": "",
        "complexType": "ReuseContextI18n"
      },
      {
        "name": "mode",
        "inputType": 0,
        "description": "reuse-tab.mode.description",
        "type": "object",
        "typeRaw": "`ReuseTabMatchMode`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "debug",
        "inputType": 0,
        "description": "reuse-tab.debug.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "max",
        "inputType": 0,
        "description": "reuse-tab.max.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`10`",
        "pureDefault": "10"
      },
      {
        "name": "keepingScroll",
        "inputType": 0,
        "description": "reuse-tab.keepingScroll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "keepingScrollContainer",
        "inputType": 0,
        "description": "reuse-tab.keepingScrollContainer.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "Element`",
        "pureDefault": "Element`"
      },
      {
        "name": "excludes",
        "inputType": 0,
        "description": "reuse-tab.excludes.description",
        "type": "Array",
        "typeRaw": "`RegExp[]`",
        "default": ""
      },
      {
        "name": "allowClose",
        "inputType": 0,
        "description": "reuse-tab.allowClose.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "customContextMenu",
        "inputType": 0,
        "description": "reuse-tab.customContextMenu.description",
        "type": "Array",
        "typeRaw": "`ReuseCustomContextMenu[]`",
        "default": ""
      },
      {
        "name": "tabBarExtraContent",
        "inputType": 0,
        "description": "reuse-tab.tabBarExtraContent.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "tabBarStyle",
        "inputType": 0,
        "description": "reuse-tab.tabBarStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "tabBarGutter",
        "inputType": 0,
        "description": "reuse-tab.tabBarGutter.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "tabType",
        "inputType": 0,
        "description": "reuse-tab.tabType.description",
        "type": "string",
        "typeRaw": "`line, card`",
        "default": "`line`",
        "pureDefault": "line"
      },
      {
        "name": "tabMaxWidth",
        "inputType": 0,
        "description": "reuse-tab.tabMaxWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "routeParamMatchMode",
        "inputType": 0,
        "description": "reuse-tab.routeParamMatchMode.description",
        "type": "string",
        "typeRaw": "`strict,loose`",
        "default": "`strict`",
        "pureDefault": "strict"
      },
      {
        "name": "disabled",
        "inputType": 0,
        "description": "reuse-tab.disabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "titleRender",
        "inputType": 0,
        "description": "reuse-tab.titleRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: ReuseItem }>`",
        "default": ""
      },
      {
        "name": "storageState",
        "inputType": 0,
        "description": "reuse-tab.storageState.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "canClose",
        "inputType": 0,
        "description": "reuse-tab.canClose.description",
        "type": "function",
        "typeRaw": "`(options: { item: ReuseItem; includeNonCloseable: boolean }) => Observable<boolean>`",
        "default": ""
      },
      {
        "name": "close",
        "inputType": 1,
        "description": "reuse-tab.close.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter`",
        "default": ""
      },
      {
        "name": "change",
        "inputType": 1,
        "description": "reuse-tab.change.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter`",
        "default": ""
      }
    ],
    "types": {
      "ReuseContextI18n": [
        {
          "name": "close",
          "inputType": 0,
          "description": "reuse-tab.close.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "closeOther",
          "inputType": 0,
          "description": "reuse-tab.closeOther.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "closeRight",
          "inputType": 0,
          "description": "reuse-tab.closeRight.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "clear",
          "inputType": 0,
          "description": "reuse-tab.clear.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        }
      ]
    },
    "doc": "/components/reuse-tab/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/reuse-tab",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "se-container",
    "title": "se-container.title",
    "description": "se-container.description",
    "whenToUse": "se-container.whenToUse",
    "properties": [
      {
        "name": "gutter",
        "inputType": 0,
        "description": "se-container.gutter.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "se-container",
        "inputType": 0,
        "description": "se-container.se-container.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "se-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "labelWidth",
        "inputType": 0,
        "description": "se-container.labelWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`150`",
        "pureDefault": "150"
      },
      {
        "name": "nzLayout",
        "inputType": 0,
        "description": "se-container.nzLayout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal','vertical','inline'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical",
          "inline"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "se-container.size.description",
        "type": "Enum",
        "typeRaw": "`'default','compact'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "compact"
        ],
        "pureDefault": "default"
      },
      {
        "name": "firstVisual",
        "inputType": 0,
        "description": "se-container.firstVisual.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "ingoreDirty",
        "inputType": 0,
        "description": "se-container.ingoreDirty.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "line",
        "inputType": 0,
        "description": "se-container.line.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "se-container.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "errors",
        "inputType": 0,
        "description": "se-container.errors.description",
        "type": "Array",
        "typeRaw": "`SEErrorRefresh[]`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "se-container.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/se/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/se",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "se-container",
    "title": "se-container.title",
    "description": "se-container.description",
    "whenToUse": "se-container.whenToUse",
    "properties": [
      {
        "name": "gutter",
        "inputType": 0,
        "description": "se-container.gutter.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "se-container",
        "inputType": 0,
        "description": "se-container.se-container.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "se-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "labelWidth",
        "inputType": 0,
        "description": "se-container.labelWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`150`",
        "pureDefault": "150"
      },
      {
        "name": "nzLayout",
        "inputType": 0,
        "description": "se-container.nzLayout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal','vertical','inline'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical",
          "inline"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "se-container.size.description",
        "type": "Enum",
        "typeRaw": "`'default','compact'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "compact"
        ],
        "pureDefault": "default"
      },
      {
        "name": "firstVisual",
        "inputType": 0,
        "description": "se-container.firstVisual.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "ingoreDirty",
        "inputType": 0,
        "description": "se-container.ingoreDirty.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "line",
        "inputType": 0,
        "description": "se-container.line.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "se-container.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "errors",
        "inputType": 0,
        "description": "se-container.errors.description",
        "type": "Array",
        "typeRaw": "`SEErrorRefresh[]`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "se-container.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/se/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/se",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "se",
    "title": "se.title",
    "description": "se.description",
    "whenToUse": "se.whenToUse",
    "properties": [
      {
        "name": "col",
        "inputType": 0,
        "description": "se.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "label",
        "inputType": 0,
        "description": "se.label.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "labelWidth",
        "inputType": 0,
        "description": "se.labelWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "hideLabel",
        "inputType": 0,
        "description": "se.hideLabel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "optional",
        "inputType": 0,
        "description": "se.optional.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "optionalHelp",
        "inputType": 0,
        "description": "se.optionalHelp.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "optionalHelpColor",
        "inputType": 0,
        "description": "se.optionalHelpColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "error",
        "inputType": 0,
        "description": "se.error.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>, { [key: string]: string, TemplateRef<void> }`",
        "default": ""
      },
      {
        "name": "extra",
        "inputType": 0,
        "description": "se.extra.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "required",
        "inputType": 0,
        "description": "se.required.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "controlClass",
        "inputType": 0,
        "description": "se.controlClass.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "id",
        "inputType": 0,
        "description": "se.id.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "line",
        "inputType": 0,
        "description": "se.line.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "se.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/se/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/se",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "se-title",
    "title": "se-title.title",
    "description": "se-title.description",
    "whenToUse": "se-title.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/se/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/se",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "se-title",
    "title": "se-title.title",
    "description": "se-title.description",
    "whenToUse": "se-title.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/se/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/se",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "sg-container",
    "title": "sg-container.title",
    "description": "sg-container.description",
    "whenToUse": "sg-container.whenToUse",
    "properties": [
      {
        "name": "gutter",
        "inputType": 0,
        "description": "sg-container.gutter.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "sg-container",
        "inputType": 0,
        "description": "sg-container.sg-container.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "sg-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "`2`",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "pureDefault": "2"
      }
    ],
    "types": {},
    "doc": "/components/sg/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sg",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "sg-container",
    "title": "sg-container.title",
    "description": "sg-container.description",
    "whenToUse": "sg-container.whenToUse",
    "properties": [
      {
        "name": "gutter",
        "inputType": 0,
        "description": "sg-container.gutter.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "sg-container",
        "inputType": 0,
        "description": "sg-container.sg-container.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "sg-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "`2`",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "pureDefault": "2"
      }
    ],
    "types": {},
    "doc": "/components/sg/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sg",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "sg",
    "title": "sg.title",
    "description": "sg.description",
    "whenToUse": "sg.whenToUse",
    "properties": [
      {
        "name": "col",
        "inputType": 0,
        "description": "sg.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      }
    ],
    "types": {},
    "doc": "/components/sg/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sg",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "st",
    "title": "st.title",
    "description": "st.description",
    "whenToUse": "st.whenToUse",
    "properties": [
      {
        "name": "columns",
        "inputType": 0,
        "description": "st.columns.description",
        "type": "Array",
        "typeRaw": "`STColumn[]`",
        "default": ""
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "st.data.description",
        "type": "string",
        "typeRaw": "`string, STData[], Observable<STData[]>`",
        "default": ""
      },
      {
        "name": "req",
        "inputType": 0,
        "description": "st.req.description",
        "type": "object",
        "typeRaw": "`STReq`",
        "default": "",
        "complexType": "STReq"
      },
      {
        "name": "res",
        "inputType": 0,
        "description": "st.res.description",
        "type": "object",
        "typeRaw": "`STRes`",
        "default": "",
        "complexType": "STRes"
      },
      {
        "name": "pi",
        "inputType": 0,
        "description": "st.pi.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "ps",
        "inputType": 0,
        "description": "st.ps.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`10`",
        "pureDefault": "10"
      },
      {
        "name": "total",
        "inputType": 0,
        "description": "st.total.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "page",
        "inputType": 0,
        "description": "st.page.description",
        "type": "object",
        "typeRaw": "`STPage`",
        "default": "",
        "complexType": "STPage"
      },
      {
        "name": "noResult",
        "inputType": 0,
        "description": "st.noResult.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "bordered",
        "inputType": 0,
        "description": "st.bordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "st.size.description",
        "type": "Enum",
        "typeRaw": "`'small','middle','default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "small",
          "middle",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "widthMode",
        "inputType": 0,
        "description": "st.widthMode.description",
        "type": "object",
        "typeRaw": "`STWidthMode`",
        "default": "",
        "complexType": "STWidthMode"
      },
      {
        "name": "rowClassName",
        "inputType": 0,
        "description": "st.rowClassName.description",
        "type": "function",
        "typeRaw": "`(record: STData, index: number) => string`",
        "default": ""
      },
      {
        "name": "clickRowClassName",
        "inputType": 0,
        "description": "st.clickRowClassName.description",
        "type": "string",
        "typeRaw": "`string, STClickRowClassNameType`",
        "default": ""
      },
      {
        "name": "loading",
        "inputType": 0,
        "description": "st.loading.description",
        "type": "boolean",
        "typeRaw": "`boolean",
        "default": "null`",
        "pureDefault": "null`"
      },
      {
        "name": "loadingIndicator",
        "inputType": 0,
        "description": "st.loadingIndicator.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "loadingDelay",
        "inputType": 0,
        "description": "st.loadingDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "st.delay.description",
        "type": "boolean",
        "typeRaw": "boolean",
        "default": "false",
        "pureDefault": "false"
      },
      {
        "name": "scroll",
        "inputType": 0,
        "description": "st.scroll.description",
        "type": "object",
        "typeRaw": "`{ y?: string; x?: string }`",
        "default": ""
      },
      {
        "name": "virtualScroll",
        "inputType": 0,
        "description": "st.virtualScroll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "virtualItemSize",
        "inputType": 0,
        "description": "st.virtualItemSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`54`",
        "pureDefault": "54"
      },
      {
        "name": "virtualMaxBufferPx",
        "inputType": 0,
        "description": "st.virtualMaxBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "virtualMinBufferPx",
        "inputType": 0,
        "description": "st.virtualMinBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`100`",
        "pureDefault": "100"
      },
      {
        "name": "virtualForTrackBy",
        "inputType": 0,
        "description": "st.virtualForTrackBy.description",
        "type": "object",
        "typeRaw": "`TrackByFunction<T>`",
        "default": ""
      },
      {
        "name": "singleSort",
        "inputType": 0,
        "description": "st.singleSort.description",
        "type": "string",
        "typeRaw": "descend`<br>If specified, return: `sort=columnName.(ascend",
        "default": "descend)`",
        "pureDefault": "descend)`"
      },
      {
        "name": "multiSort",
        "inputType": 0,
        "description": "st.multiSort.description",
        "type": "boolean",
        "typeRaw": "`boolean, STMultiSort`",
        "default": "`false`",
        "complexType": "STMultiSort",
        "pureDefault": "false"
      },
      {
        "name": "header",
        "inputType": 0,
        "description": "st.header.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "showHeader",
        "inputType": 0,
        "description": "st.showHeader.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "footer",
        "inputType": 0,
        "description": "st.footer.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "bodyHeader",
        "inputType": 0,
        "description": "st.bodyHeader.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<STStatisticalResults>`",
        "default": ""
      },
      {
        "name": "body",
        "inputType": 0,
        "description": "st.body.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<STStatisticalResults>`",
        "default": ""
      },
      {
        "name": "widthConfig",
        "inputType": 0,
        "description": "st.widthConfig.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "expandRowByClick",
        "inputType": 0,
        "description": "st.expandRowByClick.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "expandAccordion",
        "inputType": 0,
        "description": "st.expandAccordion.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "expand",
        "inputType": 0,
        "description": "st.expand.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: STData; index: number }>`",
        "default": ""
      },
      {
        "name": "expandIcon",
        "inputType": 0,
        "description": "st.expandIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: STData; index: number }>`",
        "default": ""
      },
      {
        "name": "responsive",
        "inputType": 0,
        "description": "st.responsive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "responsiveHideHeaderFooter",
        "inputType": 0,
        "description": "st.responsiveHideHeaderFooter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "resizable",
        "inputType": 0,
        "description": "st.resizable.description",
        "type": "object",
        "typeRaw": "`STResizable, boolean`",
        "default": "",
        "complexType": "STResizable"
      },
      {
        "name": "trackBy",
        "inputType": 0,
        "description": "st.trackBy.description",
        "type": "object",
        "typeRaw": "`TrackByFunction<T>`",
        "default": ""
      },
      {
        "name": "drag",
        "inputType": 0,
        "description": "st.drag.description",
        "type": "object",
        "typeRaw": "`STDragOptions, boolean`",
        "default": ""
      },
      {
        "name": "change",
        "inputType": 1,
        "description": "st.change.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<STChange>`",
        "default": ""
      },
      {
        "name": "error",
        "inputType": 1,
        "description": "st.error.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<STError>`",
        "default": ""
      }
    ],
    "types": {
      "STReq": [
        {
          "name": "type",
          "inputType": 0,
          "description": "st.type.description",
          "type": "string",
          "typeRaw": "`page,skip`",
          "default": "`page`",
          "pureDefault": "page"
        },
        {
          "name": "params",
          "inputType": 0,
          "description": "st.params.description",
          "type": "object",
          "typeRaw": "`any`",
          "default": ""
        },
        {
          "name": "ignoreParamNull",
          "inputType": 0,
          "description": "st.ignoreParamNull.description",
          "type": "object",
          "typeRaw": "`Boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "method",
          "inputType": 0,
          "description": "st.method.description",
          "type": "object",
          "typeRaw": "`'POST','GET','HEAD','PUT','PATCH','DELETE'`",
          "default": "`'GET'`",
          "pureDefault": "GET"
        },
        {
          "name": "body",
          "inputType": 0,
          "description": "st.body.description",
          "type": "object",
          "typeRaw": "`any`",
          "default": ""
        },
        {
          "name": "headers",
          "inputType": 0,
          "description": "st.headers.description",
          "type": "object",
          "typeRaw": "`any`",
          "default": ""
        },
        {
          "name": "reName",
          "inputType": 0,
          "description": "st.reName.description",
          "type": "object",
          "typeRaw": "`STReqReNameType, ((result: any, options: { pi: number; ps: number; total: number }) => { total: number; list: T[] })`",
          "default": "`{ pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }`",
          "pureDefault": "{ pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }"
        },
        {
          "name": "allInBody",
          "inputType": 0,
          "description": "st.allInBody.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "lazyLoad",
          "inputType": 0,
          "description": "st.lazyLoad.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "process",
          "inputType": 0,
          "description": "st.process.description",
          "type": "function",
          "typeRaw": "`(requestOptions: STRequestOptions) => STRequestOptions`",
          "default": ""
        }
      ],
      "STRes": [
        {
          "name": "reName",
          "inputType": 0,
          "description": "st.reName.description",
          "type": "object",
          "typeRaw": "`{total:string;list:string}`",
          "default": ""
        },
        {
          "name": "process",
          "inputType": 0,
          "description": "st.process.description",
          "type": "function",
          "typeRaw": "`(data: STData[], rawData?: any) => STData[]`",
          "default": ""
        }
      ],
      "STPage": [
        {
          "name": "front",
          "inputType": 0,
          "description": "st.front.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        },
        {
          "name": "zeroIndexed",
          "inputType": 0,
          "description": "st.zeroIndexed.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "position",
          "inputType": 0,
          "description": "st.position.description",
          "type": "string",
          "typeRaw": "`top,bottom,both`",
          "default": "`bottom`",
          "pureDefault": "bottom"
        },
        {
          "name": "placement",
          "inputType": 0,
          "description": "st.placement.description",
          "type": "string",
          "typeRaw": "`left,center,right`",
          "default": "`right`",
          "pureDefault": "right"
        },
        {
          "name": "show",
          "inputType": 0,
          "description": "st.show.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        },
        {
          "name": "showSize",
          "inputType": 0,
          "description": "st.showSize.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "pageSizes",
          "inputType": 0,
          "description": "st.pageSizes.description",
          "type": "Array",
          "typeRaw": "`number[]`",
          "default": "`[10, 20, 30, 40, 50]`",
          "pureDefault": "[10, 20, 30, 40, 50]"
        },
        {
          "name": "showQuickJumper",
          "inputType": 0,
          "description": "st.showQuickJumper.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "total",
          "inputType": 0,
          "description": "st.total.description",
          "type": "boolean",
          "typeRaw": "`boolean, string`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "toTop",
          "inputType": 0,
          "description": "st.toTop.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        },
        {
          "name": "toTopOffset",
          "inputType": 0,
          "description": "st.toTopOffset.description",
          "type": "number",
          "typeRaw": "`number`",
          "default": "`100`",
          "pureDefault": "100"
        },
        {
          "name": "itemRender",
          "inputType": 0,
          "description": "st.itemRender.description",
          "type": "TemplateRef",
          "typeRaw": "`TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>`",
          "default": ""
        },
        {
          "name": "simple",
          "inputType": 0,
          "description": "st.simple.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": ""
        }
      ],
      "STWidthMode": [
        {
          "name": "type",
          "inputType": 0,
          "description": "st.type.description",
          "type": "string",
          "typeRaw": "`strict,default`",
          "default": "`default`",
          "pureDefault": "default"
        },
        {
          "name": "strictBehavior",
          "inputType": 0,
          "description": "st.strictBehavior.description",
          "type": "string",
          "typeRaw": "`wrap,truncate`",
          "default": "`truncate`",
          "pureDefault": "truncate"
        }
      ],
      "STMultiSort": [
        {
          "name": "key",
          "inputType": 0,
          "description": "st.key.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`sort`",
          "pureDefault": "sort"
        },
        {
          "name": "separator",
          "inputType": 0,
          "description": "st.separator.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "nameSeparator",
          "inputType": 0,
          "description": "st.nameSeparator.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`.`",
          "pureDefault": "."
        },
        {
          "name": "arrayParam",
          "inputType": 0,
          "description": "st.arrayParam.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "keepEmptyKey",
          "inputType": 0,
          "description": "st.keepEmptyKey.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        },
        {
          "name": "global",
          "inputType": 0,
          "description": "st.global.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        }
      ],
      "STResizable": [
        {
          "name": "disabled",
          "inputType": 0,
          "description": "st.disabled.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        },
        {
          "name": "bounds",
          "inputType": 0,
          "description": "st.bounds.description",
          "type": "string",
          "typeRaw": "`window, parent, ElementRef<HTMLElement>`",
          "default": "`window`",
          "pureDefault": "window"
        },
        {
          "name": "maxWidth",
          "inputType": 0,
          "description": "st.maxWidth.description",
          "type": "number",
          "typeRaw": "`number`",
          "default": "`360`",
          "pureDefault": "360"
        },
        {
          "name": "minWidth",
          "inputType": 0,
          "description": "st.minWidth.description",
          "type": "number",
          "typeRaw": "`number`",
          "default": "`60`",
          "pureDefault": "60"
        },
        {
          "name": "preview",
          "inputType": 0,
          "description": "st.preview.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        }
      ]
    },
    "doc": "/components/st/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/st",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "sv-container",
    "title": "sv-container.title",
    "description": "sv-container.description",
    "whenToUse": "sv-container.whenToUse",
    "properties": [
      {
        "name": "sv-container",
        "inputType": 0,
        "description": "sv-container.sv-container.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "`3`",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "pureDefault": "3"
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "sv-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "`3`",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "pureDefault": "3"
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "sv-container.size.description",
        "type": "Enum",
        "typeRaw": "`'small','large'`",
        "default": "`'large'`",
        "typeDefinition": [
          "small",
          "large"
        ],
        "pureDefault": "large"
      },
      {
        "name": "layout",
        "inputType": 0,
        "description": "sv-container.layout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal','vertical'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "gutter",
        "inputType": 0,
        "description": "sv-container.gutter.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32"
      },
      {
        "name": "labelWidth",
        "inputType": 0,
        "description": "sv-container.labelWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "default",
        "inputType": 0,
        "description": "sv-container.default.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "sv-container.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "sv-container.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "bordered",
        "inputType": 0,
        "description": "sv-container.bordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "sv-container",
    "title": "sv-container.title",
    "description": "sv-container.description",
    "whenToUse": "sv-container.whenToUse",
    "properties": [
      {
        "name": "sv-container",
        "inputType": 0,
        "description": "sv-container.sv-container.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "`3`",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "pureDefault": "3"
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "sv-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "`3`",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "pureDefault": "3"
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "sv-container.size.description",
        "type": "Enum",
        "typeRaw": "`'small','large'`",
        "default": "`'large'`",
        "typeDefinition": [
          "small",
          "large"
        ],
        "pureDefault": "large"
      },
      {
        "name": "layout",
        "inputType": 0,
        "description": "sv-container.layout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal','vertical'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "gutter",
        "inputType": 0,
        "description": "sv-container.gutter.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32"
      },
      {
        "name": "labelWidth",
        "inputType": 0,
        "description": "sv-container.labelWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "default",
        "inputType": 0,
        "description": "sv-container.default.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "sv-container.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "sv-container.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "bordered",
        "inputType": 0,
        "description": "sv-container.bordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "sv",
    "title": "sv.title",
    "description": "sv.description",
    "whenToUse": "sv.whenToUse",
    "properties": [
      {
        "name": "col",
        "inputType": 0,
        "description": "sv.col.description",
        "type": "string",
        "typeRaw": "-",
        "default": ""
      },
      {
        "name": "label",
        "inputType": 0,
        "description": "sv.label.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "unit",
        "inputType": 0,
        "description": "sv.unit.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "default",
        "inputType": 0,
        "description": "sv.default.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "type",
        "inputType": 0,
        "description": "sv.type.description",
        "type": "Enum",
        "typeRaw": "`'primary','success','danger','warning'`",
        "default": "",
        "typeDefinition": [
          "primary",
          "success",
          "danger",
          "warning"
        ]
      },
      {
        "name": "optional",
        "inputType": 0,
        "description": "sv.optional.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "optionalHelp",
        "inputType": 0,
        "description": "sv.optionalHelp.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "optionalHelpColor",
        "inputType": 0,
        "description": "sv.optionalHelpColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "sv.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "hideLabel",
        "inputType": 0,
        "description": "sv.hideLabel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "sv-title",
    "title": "sv-title.title",
    "description": "sv-title.description",
    "whenToUse": "sv-title.whenToUse",
    "properties": [
      {
        "name": "prefix",
        "inputType": 0,
        "description": "sv-title.prefix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "unit",
        "inputType": 0,
        "description": "sv-title.unit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "tooltip",
        "inputType": 0,
        "description": "sv-title.tooltip.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "sv-title.size.description",
        "type": "Enum",
        "typeRaw": "`'large','small','default'`",
        "default": "`default`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      }
    ],
    "types": {},
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "sv-title",
    "title": "sv-title.title",
    "description": "sv-title.description",
    "whenToUse": "sv-title.whenToUse",
    "properties": [
      {
        "name": "prefix",
        "inputType": 0,
        "description": "sv-title.prefix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "unit",
        "inputType": 0,
        "description": "sv-title.unit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "tooltip",
        "inputType": 0,
        "description": "sv-title.tooltip.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "sv-title.size.description",
        "type": "Enum",
        "typeRaw": "`'large','small','default'`",
        "default": "`default`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      }
    ],
    "types": {},
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "sv-value",
    "title": "sv-value.title",
    "description": "sv-value.description",
    "whenToUse": "sv-value.whenToUse",
    "properties": [
      {
        "name": "prefix",
        "inputType": 0,
        "description": "sv-value.prefix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "unit",
        "inputType": 0,
        "description": "sv-value.unit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "tooltip",
        "inputType": 0,
        "description": "sv-value.tooltip.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "sv-value.size.description",
        "type": "Enum",
        "typeRaw": "`'large','small','default'`",
        "default": "`default`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      }
    ],
    "types": {},
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "component",
    "selector": "tag-select",
    "title": "tag-select.title",
    "description": "tag-select.description",
    "whenToUse": "tag-select.whenToUse",
    "properties": [
      {
        "name": "expandable",
        "inputType": 0,
        "description": "tag-select.expandable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "change",
        "inputType": 1,
        "description": "tag-select.change.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/components/tag-select/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/tag-select",
    "standalone": false
  },
  {
    "lib": "@delon/abc",
    "type": "directive",
    "selector": "xlsx",
    "title": "xlsx.title",
    "description": "xlsx.description",
    "whenToUse": "xlsx.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/xlsx/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/xlsx",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-bar",
    "title": "g2-bar.title",
    "description": "g2-bar.description",
    "whenToUse": "g2-bar.whenToUse",
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-bar.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-bar.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-bar.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-bar.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`rgba(24, 144, 255, 0.85)`",
        "pureDefault": "rgba(24, 144, 255, 0.85)"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-bar.padding.description",
        "type": "Array",
        "typeRaw": "`Array<number",
        "default": "string>",
        "pureDefault": "string>"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-bar.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-bar.data.description",
        "type": "Array",
        "typeRaw": "`G2BarData[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "autoLabel",
        "inputType": 0,
        "description": "g2-bar.autoLabel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "interaction",
        "inputType": 0,
        "description": "g2-bar.interaction.description",
        "type": "object",
        "typeRaw": "`InteractionType`",
        "default": "`none`",
        "pureDefault": "none"
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-bar.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-bar.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2BarClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-bar.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/chart/bar/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/bar",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-card",
    "title": "g2-card.title",
    "description": "g2-card.description",
    "whenToUse": "g2-card.whenToUse",
    "properties": [
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-card.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "avatar",
        "inputType": 0,
        "description": "g2-card.avatar.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "action",
        "inputType": 0,
        "description": "g2-card.action.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "total",
        "inputType": 0,
        "description": "g2-card.total.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "footer",
        "inputType": 0,
        "description": "g2-card.footer.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "contentHeight",
        "inputType": 0,
        "description": "g2-card.contentHeight.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "bordered",
        "inputType": 0,
        "description": "g2-card.bordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/chart/card/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/card",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "chart-echarts",
    "title": "chart-echarts.title",
    "description": "chart-echarts.description",
    "whenToUse": "chart-echarts.whenToUse",
    "properties": [
      {
        "name": "width",
        "inputType": 0,
        "description": "chart-echarts.width.description",
        "type": "number",
        "typeRaw": "`number, string`",
        "default": "`100%`",
        "pureDefault": "100%"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "chart-echarts.height.description",
        "type": "number",
        "typeRaw": "`number, string`",
        "default": "`400px`",
        "pureDefault": "400px"
      },
      {
        "name": "option",
        "inputType": 0,
        "description": "chart-echarts.option.description",
        "type": "object",
        "typeRaw": "`ChartEChartsOption`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "chart-echarts.theme.description",
        "type": "string",
        "typeRaw": "`string, object`",
        "default": ""
      },
      {
        "name": "on",
        "inputType": 0,
        "description": "chart-echarts.on.description",
        "type": "Array",
        "typeRaw": "`ChartEChartsOn[]`",
        "default": ""
      },
      {
        "name": "events",
        "inputType": 1,
        "description": "chart-echarts.events.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ChartEChartsEvent>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/chart/chart-echarts/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/chart-echarts",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-custom",
    "title": "g2-custom.title",
    "description": "g2-custom.description",
    "whenToUse": "g2-custom.whenToUse",
    "properties": [
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-custom.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-custom.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "resizeTime",
        "inputType": 0,
        "description": "g2-custom.resizeTime.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "render",
        "inputType": 1,
        "description": "g2-custom.render.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ElementRef>`",
        "default": ""
      },
      {
        "name": "resize",
        "inputType": 1,
        "description": "g2-custom.resize.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ElementRef>`",
        "default": ""
      },
      {
        "name": "destroy",
        "inputType": 1,
        "description": "g2-custom.destroy.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ElementRef>`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-custom.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      }
    ],
    "types": {},
    "doc": "/chart/custom/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/custom",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-gauge",
    "title": "g2-gauge.title",
    "description": "g2-gauge.description",
    "whenToUse": "g2-gauge.whenToUse",
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-gauge.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-gauge.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-gauge.title.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-gauge.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-gauge.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#2F9CFF`",
        "pureDefault": "#2F9CFF"
      },
      {
        "name": "bgColor",
        "inputType": 0,
        "description": "g2-gauge.bgColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#F0F2F5`",
        "pureDefault": "#F0F2F5"
      },
      {
        "name": "percent",
        "inputType": 0,
        "description": "g2-gauge.percent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-gauge.padding.description",
        "type": "Array",
        "typeRaw": "`Array<number",
        "default": "string>`",
        "pureDefault": "string>`"
      },
      {
        "name": "format",
        "inputType": 0,
        "description": "g2-gauge.format.description",
        "type": "function",
        "typeRaw": "`(text: string, item: {}, index: number) => string`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-gauge.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-gauge.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/chart/gauge/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/gauge",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-mini-area",
    "title": "g2-mini-area.title",
    "description": "g2-mini-area.description",
    "whenToUse": "g2-mini-area.whenToUse",
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-mini-area.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-mini-area.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-mini-area.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`rgba(24, 144, 255, 0.2)`",
        "pureDefault": "rgba(24, 144, 255, 0.2)"
      },
      {
        "name": "borderColor",
        "inputType": 0,
        "description": "g2-mini-area.borderColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#1890FF`",
        "pureDefault": "#1890FF"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-mini-area.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`56`",
        "pureDefault": "56"
      },
      {
        "name": "line",
        "inputType": 0,
        "description": "g2-mini-area.line.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "animate",
        "inputType": 0,
        "description": "g2-mini-area.animate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-mini-area.padding.description",
        "type": "string",
        "typeRaw": "`array`",
        "default": "`[8, 8, 8, 8]`",
        "pureDefault": "[8, 8, 8, 8]"
      },
      {
        "name": "xAxis",
        "inputType": 0,
        "description": "g2-mini-area.xAxis.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "yAxis",
        "inputType": 0,
        "description": "g2-mini-area.yAxis.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "yTooltipSuffix",
        "inputType": 0,
        "description": "g2-mini-area.yTooltipSuffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "tooltipType",
        "inputType": 0,
        "description": "g2-mini-area.tooltipType.description",
        "type": "Enum",
        "typeRaw": "`'mini','default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "mini",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-mini-area.data.description",
        "type": "Array",
        "typeRaw": "`G2MiniAreaData[]`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-mini-area.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-mini-area.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2MiniAreaClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-mini-area.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/chart/mini-area/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/mini-area",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-mini-bar",
    "title": "g2-mini-bar.title",
    "description": "g2-mini-bar.description",
    "whenToUse": "g2-mini-bar.whenToUse",
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-mini-bar.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-mini-bar.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-mini-bar.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#1890FF`",
        "pureDefault": "#1890FF"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-mini-bar.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "yTooltipSuffix",
        "inputType": 0,
        "description": "g2-mini-bar.yTooltipSuffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "tooltipType",
        "inputType": 0,
        "description": "g2-mini-bar.tooltipType.description",
        "type": "Enum",
        "typeRaw": "`'mini','default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "mini",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "borderWidth",
        "inputType": 0,
        "description": "g2-mini-bar.borderWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`5`",
        "pureDefault": "5"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-mini-bar.padding.description",
        "type": "string",
        "typeRaw": "`array`",
        "default": "`[8, 8, 8, 8]`",
        "pureDefault": "[8, 8, 8, 8]"
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-mini-bar.data.description",
        "type": "Array",
        "typeRaw": "`G2MiniBarData[]`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-mini-bar.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-mini-bar.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2MiniBarClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-mini-bar.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/chart/mini-bar/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/mini-bar",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-mini-progress",
    "title": "g2-mini-progress.title",
    "description": "g2-mini-progress.description",
    "whenToUse": "g2-mini-progress.whenToUse",
    "properties": [
      {
        "name": "target",
        "inputType": 0,
        "description": "g2-mini-progress.target.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-mini-progress.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "strokeWidth",
        "inputType": 0,
        "description": "g2-mini-progress.strokeWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "percent",
        "inputType": 0,
        "description": "g2-mini-progress.percent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/chart/mini-progress/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/mini-progress",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "number-info",
    "title": "number-info.title",
    "description": "number-info.description",
    "whenToUse": "number-info.whenToUse",
    "properties": [
      {
        "name": "title",
        "inputType": 0,
        "description": "number-info.title.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "subTitle",
        "inputType": 0,
        "description": "number-info.subTitle.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "total",
        "inputType": 0,
        "description": "number-info.total.description",
        "type": "string",
        "typeRaw": "`string, number`",
        "default": ""
      },
      {
        "name": "suffix",
        "inputType": 0,
        "description": "number-info.suffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "subTotal",
        "inputType": 0,
        "description": "number-info.subTotal.description",
        "type": "string",
        "typeRaw": "`string, number`",
        "default": ""
      },
      {
        "name": "status",
        "inputType": 0,
        "description": "number-info.status.description",
        "type": "Enum",
        "typeRaw": "`'up','down'`",
        "default": "",
        "typeDefinition": [
          "up",
          "down"
        ]
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "number-info.theme.description",
        "type": "Enum",
        "typeRaw": "`'light','default'`",
        "default": "`'light'`",
        "typeDefinition": [
          "light",
          "default"
        ],
        "pureDefault": "light"
      },
      {
        "name": "gap",
        "inputType": 0,
        "description": "number-info.gap.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "8",
        "pureDefault": "8"
      }
    ],
    "types": {},
    "doc": "/chart/number-info/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/number-info",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-pie",
    "title": "g2-pie.title",
    "description": "g2-pie.description",
    "whenToUse": "g2-pie.whenToUse",
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-pie.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-pie.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "animate",
        "inputType": 0,
        "description": "g2-pie.animate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-pie.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`rgba(24, 144, 255, 0.85)`",
        "pureDefault": "rgba(24, 144, 255, 0.85)"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-pie.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "hasLegend",
        "inputType": 0,
        "description": "g2-pie.hasLegend.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-pie.padding.description",
        "type": "Array",
        "typeRaw": "`number[]`",
        "default": "`[12, 0, 12, 0]`",
        "pureDefault": "[12, 0, 12, 0]"
      },
      {
        "name": "percent",
        "inputType": 0,
        "description": "g2-pie.percent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "lineWidth",
        "inputType": 0,
        "description": "g2-pie.lineWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "inner",
        "inputType": 0,
        "description": "g2-pie.inner.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.75`",
        "pureDefault": "0.75"
      },
      {
        "name": "blockMaxWidth",
        "inputType": 0,
        "description": "g2-pie.blockMaxWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`380`",
        "pureDefault": "380"
      },
      {
        "name": "tooltip",
        "inputType": 0,
        "description": "g2-pie.tooltip.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "subTitle",
        "inputType": 0,
        "description": "g2-pie.subTitle.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void><void>`",
        "default": ""
      },
      {
        "name": "total",
        "inputType": 0,
        "description": "g2-pie.total.description",
        "type": "string",
        "typeRaw": "`string,number,TemplateRef<void><void>`",
        "default": ""
      },
      {
        "name": "valueFormat",
        "inputType": 0,
        "description": "g2-pie.valueFormat.description",
        "type": "function",
        "typeRaw": "`(y: number) => string`",
        "default": ""
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-pie.data.description",
        "type": "Array",
        "typeRaw": "`G2PieData[]`",
        "default": ""
      },
      {
        "name": "colors",
        "inputType": 0,
        "description": "g2-pie.colors.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "interaction",
        "inputType": 0,
        "description": "g2-pie.interaction.description",
        "type": "object",
        "typeRaw": "`InteractionType`",
        "default": "`none`",
        "pureDefault": "none"
      },
      {
        "name": "ratio",
        "inputType": 0,
        "description": "g2-pie.ratio.description",
        "type": "object",
        "typeRaw": "`G2PieRatio`",
        "default": "`{ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' }`",
        "pureDefault": "{ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' }"
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-pie.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-pie.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2PieClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-pie.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/chart/pie/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/pie",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-radar",
    "title": "g2-radar.title",
    "description": "g2-radar.description",
    "whenToUse": "g2-radar.whenToUse",
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-radar.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-radar.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-radar.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-radar.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "hasLegend",
        "inputType": 0,
        "description": "g2-radar.hasLegend.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-radar.padding.description",
        "type": "string",
        "typeRaw": "`array`",
        "default": "`[24, 30, 16, 30]`",
        "pureDefault": "[24, 30, 16, 30]"
      },
      {
        "name": "colors",
        "inputType": 0,
        "description": "g2-radar.colors.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-radar.data.description",
        "type": "Array",
        "typeRaw": "`G2RadarData[]`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-radar.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-radar.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2RadarClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-radar.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/chart/radar/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/radar",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-single-bar",
    "title": "g2-single-bar.title",
    "description": "g2-single-bar.description",
    "whenToUse": "g2-single-bar.whenToUse",
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-single-bar.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-single-bar.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "plusColor",
        "inputType": 0,
        "description": "g2-single-bar.plusColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#40a9ff`",
        "pureDefault": "#40a9ff"
      },
      {
        "name": "minusColor",
        "inputType": 0,
        "description": "g2-single-bar.minusColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#ff4d4f`",
        "pureDefault": "#ff4d4f"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-single-bar.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`60`",
        "pureDefault": "60"
      },
      {
        "name": "barSize",
        "inputType": 0,
        "description": "g2-single-bar.barSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`30`",
        "pureDefault": "30"
      },
      {
        "name": "min",
        "inputType": 0,
        "description": "g2-single-bar.min.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "max",
        "inputType": 0,
        "description": "g2-single-bar.max.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`100`",
        "pureDefault": "100"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-single-bar.padding.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "value",
        "inputType": 0,
        "description": "g2-single-bar.value.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "format",
        "inputType": 0,
        "description": "g2-single-bar.format.description",
        "type": "function",
        "typeRaw": "`(value: number) => string`",
        "default": ""
      },
      {
        "name": "textStyle",
        "inputType": 0,
        "description": "g2-single-bar.textStyle.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": "`{ fontSize: 12, color: '#595959' }`",
        "pureDefault": "{ fontSize: 12, color: '#595959' }"
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-single-bar.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-single-bar.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/chart/single-bar/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/single-bar",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-tag-cloud",
    "title": "g2-tag-cloud.title",
    "description": "g2-tag-cloud.description",
    "whenToUse": "g2-tag-cloud.whenToUse",
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-tag-cloud.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-tag-cloud.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-tag-cloud.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "width",
        "inputType": 0,
        "description": "g2-tag-cloud.width.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-tag-cloud.data.description",
        "type": "Array",
        "typeRaw": "`G2TagCloudData[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-tag-cloud.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-tag-cloud.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2TagCloudClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-tag-cloud.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/chart/tag-cloud/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/tag-cloud",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-timeline",
    "title": "g2-timeline.title",
    "description": "g2-timeline.description",
    "whenToUse": "g2-timeline.whenToUse",
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-timeline.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-timeline.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-timeline.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "maxAxis",
        "inputType": 0,
        "description": "g2-timeline.maxAxis.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`2`",
        "pureDefault": "2"
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-timeline.data.description",
        "type": "Array",
        "typeRaw": "`G2TimelineData[]`",
        "default": ""
      },
      {
        "name": "titleMap",
        "inputType": 0,
        "description": "g2-timeline.titleMap.description",
        "type": "object",
        "typeRaw": "`G2TimelineMap`",
        "default": "",
        "complexType": "G2TimelineMap"
      },
      {
        "name": "colorMap",
        "inputType": 0,
        "description": "g2-timeline.colorMap.description",
        "type": "object",
        "typeRaw": "`G2TimelineMap`",
        "default": "`{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }`",
        "complexType": "G2TimelineMap",
        "pureDefault": "{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-timeline.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`400`",
        "pureDefault": "400"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-timeline.padding.description",
        "type": "Array",
        "typeRaw": "`number[]`",
        "default": "`[40, 8, 64, 40]`",
        "pureDefault": "[40, 8, 64, 40]"
      },
      {
        "name": "borderWidth",
        "inputType": 0,
        "description": "g2-timeline.borderWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`2`",
        "pureDefault": "2"
      },
      {
        "name": "mask",
        "inputType": 0,
        "description": "g2-timeline.mask.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`HH:mm`",
        "pureDefault": "HH:mm"
      },
      {
        "name": "maskSlider",
        "inputType": 0,
        "description": "g2-timeline.maskSlider.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`HH:mm`",
        "pureDefault": "HH:mm"
      },
      {
        "name": "position",
        "inputType": 0,
        "description": "g2-timeline.position.description",
        "type": "Enum",
        "typeRaw": "`'top','right','bottom','left'`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "right",
          "bottom",
          "left"
        ],
        "pureDefault": "top"
      },
      {
        "name": "slider",
        "inputType": 0,
        "description": "g2-timeline.slider.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-timeline.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-timeline.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2TimelineClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-timeline.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "types": {
      "G2TimelineMap": [
        {
          "name": "y1",
          "inputType": 0,
          "description": "g2-timeline.y1.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "y2",
          "inputType": 0,
          "description": "g2-timeline.y2.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "y3",
          "inputType": 0,
          "description": "g2-timeline.y3.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "y4",
          "inputType": 0,
          "description": "g2-timeline.y4.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "y5",
          "inputType": 0,
          "description": "g2-timeline.y5.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        }
      ]
    },
    "doc": "/chart/timeline/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/timeline",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "trend",
    "title": "trend.title",
    "description": "trend.description",
    "whenToUse": "trend.whenToUse",
    "properties": [
      {
        "name": "colorful",
        "inputType": 0,
        "description": "trend.colorful.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "flag",
        "inputType": 0,
        "description": "trend.flag.description",
        "type": "Enum",
        "typeRaw": "`'up','down'`",
        "default": "",
        "typeDefinition": [
          "up",
          "down"
        ]
      },
      {
        "name": "reverseColor",
        "inputType": 0,
        "description": "trend.reverseColor.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "types": {},
    "doc": "/chart/trend/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/trend",
    "standalone": false
  },
  {
    "lib": "@delon/chart",
    "type": "component",
    "selector": "g2-water-wave",
    "title": "g2-water-wave.title",
    "description": "g2-water-wave.description",
    "whenToUse": "g2-water-wave.whenToUse",
    "properties": [
      {
        "name": "animate",
        "inputType": 0,
        "description": "g2-water-wave.animate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-water-wave.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-water-wave.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-water-wave.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`160`",
        "pureDefault": "160"
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-water-wave.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#1890FF`",
        "pureDefault": "#1890FF"
      },
      {
        "name": "percent",
        "inputType": 0,
        "description": "g2-water-wave.percent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "types": {},
    "doc": "/chart/water-wave/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/water-wave",
    "standalone": false
  },
  {
    "lib": "@delon/form",
    "type": "component",
    "selector": "sf",
    "title": "sf.title",
    "description": "sf.description",
    "whenToUse": "sf.whenToUse",
    "properties": [
      {
        "name": "layout",
        "inputType": 0,
        "description": "sf.layout.description",
        "type": "string",
        "typeRaw": "`horizontal,vertical,inline`",
        "default": "`horizontal`",
        "pureDefault": "horizontal"
      },
      {
        "name": "schema",
        "inputType": 0,
        "description": "sf.schema.description",
        "type": "object",
        "typeRaw": "`SFSchema`",
        "default": ""
      },
      {
        "name": "ui",
        "inputType": 0,
        "description": "sf.ui.description",
        "type": "object",
        "typeRaw": "`SFUISchema`",
        "default": ""
      },
      {
        "name": "formData",
        "inputType": 0,
        "description": "sf.formData.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "mode",
        "inputType": 0,
        "description": "sf.mode.description",
        "type": "string",
        "typeRaw": "`default,search,edit`",
        "default": "`default`",
        "pureDefault": "default"
      },
      {
        "name": "button",
        "inputType": 0,
        "description": "sf.button.description",
        "type": "object",
        "typeRaw": "`SFButton, 'none'`",
        "default": "`{}`",
        "complexType": "SFButton",
        "pureDefault": "{}"
      },
      {
        "name": "firstVisual",
        "inputType": 0,
        "description": "sf.firstVisual.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "liveValidate",
        "inputType": 0,
        "description": "sf.liveValidate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "autocomplete",
        "inputType": 0,
        "description": "sf.autocomplete.description",
        "type": "string",
        "typeRaw": "`on,off`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "disabled",
        "inputType": 0,
        "description": "sf.disabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "loading",
        "inputType": 0,
        "description": "sf.loading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "sf.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "compact",
        "inputType": 0,
        "description": "sf.compact.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "cleanValue",
        "inputType": 0,
        "description": "sf.cleanValue.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "sf.delay.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "formChange",
        "inputType": 1,
        "description": "sf.formChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formValueChange",
        "inputType": 1,
        "description": "sf.formValueChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<SFValueChange>`",
        "default": ""
      },
      {
        "name": "formSubmit",
        "inputType": 1,
        "description": "sf.formSubmit.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formReset",
        "inputType": 1,
        "description": "sf.formReset.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formError",
        "inputType": 1,
        "description": "sf.formError.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ErrorData[]>`",
        "default": ""
      }
    ],
    "types": {
      "SFButton": [
        {
          "name": "submit",
          "inputType": 0,
          "description": "sf.submit.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`提交`",
          "pureDefault": "提交"
        },
        {
          "name": "reset",
          "inputType": 0,
          "description": "sf.reset.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`重置`",
          "pureDefault": "重置"
        },
        {
          "name": "search",
          "inputType": 0,
          "description": "sf.search.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`搜索`",
          "pureDefault": "搜索"
        },
        {
          "name": "edit",
          "inputType": 0,
          "description": "sf.edit.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`保存`",
          "pureDefault": "保存"
        },
        {
          "name": "render",
          "inputType": 0,
          "description": "sf.render.description",
          "type": "object",
          "typeRaw": "`SFRenderButton`",
          "default": ""
        }
      ]
    },
    "doc": "/form/getting-started/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/form/src",
    "standalone": false
  },
  {
    "lib": "@delon/form",
    "type": "directive",
    "selector": "sf",
    "title": "sf.title",
    "description": "sf.description",
    "whenToUse": "sf.whenToUse",
    "properties": [
      {
        "name": "layout",
        "inputType": 0,
        "description": "sf.layout.description",
        "type": "string",
        "typeRaw": "`horizontal,vertical,inline`",
        "default": "`horizontal`",
        "pureDefault": "horizontal"
      },
      {
        "name": "schema",
        "inputType": 0,
        "description": "sf.schema.description",
        "type": "object",
        "typeRaw": "`SFSchema`",
        "default": ""
      },
      {
        "name": "ui",
        "inputType": 0,
        "description": "sf.ui.description",
        "type": "object",
        "typeRaw": "`SFUISchema`",
        "default": ""
      },
      {
        "name": "formData",
        "inputType": 0,
        "description": "sf.formData.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "mode",
        "inputType": 0,
        "description": "sf.mode.description",
        "type": "string",
        "typeRaw": "`default,search,edit`",
        "default": "`default`",
        "pureDefault": "default"
      },
      {
        "name": "button",
        "inputType": 0,
        "description": "sf.button.description",
        "type": "object",
        "typeRaw": "`SFButton, 'none'`",
        "default": "`{}`",
        "complexType": "SFButton",
        "pureDefault": "{}"
      },
      {
        "name": "firstVisual",
        "inputType": 0,
        "description": "sf.firstVisual.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "liveValidate",
        "inputType": 0,
        "description": "sf.liveValidate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "autocomplete",
        "inputType": 0,
        "description": "sf.autocomplete.description",
        "type": "string",
        "typeRaw": "`on,off`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "disabled",
        "inputType": 0,
        "description": "sf.disabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "loading",
        "inputType": 0,
        "description": "sf.loading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "sf.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "compact",
        "inputType": 0,
        "description": "sf.compact.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "cleanValue",
        "inputType": 0,
        "description": "sf.cleanValue.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "sf.delay.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "formChange",
        "inputType": 1,
        "description": "sf.formChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formValueChange",
        "inputType": 1,
        "description": "sf.formValueChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<SFValueChange>`",
        "default": ""
      },
      {
        "name": "formSubmit",
        "inputType": 1,
        "description": "sf.formSubmit.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formReset",
        "inputType": 1,
        "description": "sf.formReset.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formError",
        "inputType": 1,
        "description": "sf.formError.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ErrorData[]>`",
        "default": ""
      }
    ],
    "types": {
      "SFButton": [
        {
          "name": "submit",
          "inputType": 0,
          "description": "sf.submit.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`提交`",
          "pureDefault": "提交"
        },
        {
          "name": "reset",
          "inputType": 0,
          "description": "sf.reset.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`重置`",
          "pureDefault": "重置"
        },
        {
          "name": "search",
          "inputType": 0,
          "description": "sf.search.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`搜索`",
          "pureDefault": "搜索"
        },
        {
          "name": "edit",
          "inputType": 0,
          "description": "sf.edit.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`保存`",
          "pureDefault": "保存"
        },
        {
          "name": "render",
          "inputType": 0,
          "description": "sf.render.description",
          "type": "object",
          "typeRaw": "`SFRenderButton`",
          "default": ""
        }
      ]
    },
    "doc": "/form/getting-started/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/form/src",
    "standalone": false
  },
  {
    "lib": "ng-zorro-antd",
    "type": "component",
    "selector": "nz-breadcrumb-item",
    "title": "nz-breadcrumb-item.title",
    "description": "nz-breadcrumb-item.description",
    "whenToUse": "nz-breadcrumb-item.whenToUse",
    "properties": [],
    "types": {},
    "doc": "/components/breadcrumb/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/breadcrumb",
    "standalone": false
  },
  {
    "selector": "nz-layout",
    "description": "nz-layout.description",
    "type": "component",
    "lib": "ng-zorro-antd",
    "properties": [],
    "types": {},
    "doc": "",
    "github": "",
    "title": "nz-layout.title",
    "whenToUse": "nz-layout.whenToUse"
  },
  {
    "selector": "nz-header",
    "description": "nz-header.description",
    "type": "component",
    "lib": "ng-zorro-antd",
    "properties": [],
    "types": {},
    "doc": "",
    "github": "",
    "title": "nz-header.title",
    "whenToUse": "nz-header.whenToUse"
  },
  {
    "selector": "nz-content",
    "description": "nz-content.description",
    "type": "component",
    "lib": "ng-zorro-antd",
    "properties": [],
    "types": {},
    "doc": "",
    "github": "",
    "title": "nz-content.title",
    "whenToUse": "nz-content.whenToUse"
  },
  {
    "selector": "nz-footer",
    "description": "nz-footer.description",
    "type": "component",
    "lib": "ng-zorro-antd",
    "properties": [],
    "types": {},
    "doc": "",
    "github": "",
    "title": "nz-footer.title",
    "whenToUse": "nz-footer.whenToUse"
  }
];