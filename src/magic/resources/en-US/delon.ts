export default [
    {
        type: 'component',
        selector: 'st',
        title: 'Simple Table',
        description: 'st 并不是在创造另一个表格组件，而是在 nz-table 基础上以可配置形式渲染表格，在中后台里这种方式可以满足绝大多数场景，但又可以更易地管理表格渲染动作。',
        doc: 'https://ng-alain.com/components/table/zh',
        properties: [
            {
                name: 'columns',
                description: '列描述',
                type: 'string',
                typeRaw: 'STColumn[]',
            },
            {
                name: 'data',
                description: '数据源',
                type: 'string',
                typeRaw: 'string, STData[], Observable<STData[]>',
            },
            {
                name: 'bordered',
                description: '是否显示边框',
                type: 'boolean',
                typeRaw: 'boolean',
                default: false,
            },
        ],
    },
];
