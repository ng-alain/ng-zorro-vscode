export default [
  {
    type: 'directive',
    selector: 'nz-button',
    title: '按钮',
    description: '按钮用于开始一个即时操作。',
    doc: 'https://ng.ant.design/components/button/zh',
    properties: [
      {
        name: 'nzType',
        description: '设置按钮类型',
        type: 'string',
        typeDefinition: ['primary', 'dashed', 'danger', 'default'],
        default: 'default',
      },
      {
        name: 'nzGhost',
        description: '幽灵属性，使按钮背景透明',
        type: 'boolean',
        default: false,
      },
      {
        name: 'nzLoading',
        description: '设置按钮载入状态',
        type: 'boolean',
        default: false,
      },
      {
        name: 'nzBlock',
        description: '将按钮宽度调整为其父宽度的选项',
        type: 'boolean',
        default: false,
      },
      {
        name: 'nzShape',
        description: '设置按钮形状',
        type: 'string',
        typeDefinition: ['circle'],
      },
      {
        name: 'nzSize',
        description: '设置按钮大小',
        type: 'string',
        typeDefinition: ['small', 'large'],
        default: 'default',
      },
    ],
  },
  {
    type: 'component',
    selector: 'nz-divider',
    title: '分割线',
    description: '区隔内容的分割线',
    doc: 'https://ng.ant.design/components/divider/zh',
    properties: [
      {
        name: 'nzFilterOption',
        description: '过滤参数',
        type: 'function',
      },
      {
        name: 'nzChange',
        description: '变更回调',
        type: 'EventEmitter',
      },
      {
        name: 'nzDashed',
        description: '是否虚线',
        type: 'boolean',
        default: false,
      },
      {
        name: 'nzType',
        description: '水平还是垂直类型',
        type: 'string',
        typeDefinition: ['horizontal', 'vertical'],
        default: 'horizontal',
      },
      {
        name: 'nzText',
        description: '中间文字',
        type: 'string',
      },
      {
        name: 'nzOrientation',
        description: '中间文字方向',
        type: 'string',
        typeDefinition: ['left', 'right'],
      },
    ],
  },
];
