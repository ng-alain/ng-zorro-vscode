export const COG = {
  /** 额外有效组件名清单 */
  VALID_COMPONENT_NAMES: ['th', 'td', 'thead', 'NzModalService'],
  /** 同时拥有组件与指令能力清单 */
  COMPONET_AND_DIRECTIVE: ['se-container', 'se-title', 'error-collect', 'sg-container', 'sv-container', 'sv-title', 'sf'],
  /** 被拆分多个表格属性的组件清单 */
  SPLIT_PROPERTIES: ['th', 'td', '[nz-popconfirm]'],
  /** 忽略组件 */
  INGORE_COMPONENTS: ['message', 'notification', 'layout'],
  /** 忽略属性清单 */
  INGORE_PROPERTIES: ['ng-content'],
  /** 忽略属性对象清单 */
  INGORE_PROPERTI_OBJECT: ['data'],
  /** 组件替换，例如：`nz-modal` */
  COMPONENT_REPLACE: [{ name: 'NzModalService', replace: 'nz-modal' }],
  /** 部分跨页共同API属性应优化处理，值为目录名称 */
  COMMON_PROPERTIE_PATH_PART: ['tooltip', 'grid'],
  /** 共同API属性的获取位置标题名 */
  COMMON_PROPERTIES: {
    'nz-tooltip': { zh: '共同的 API', en: 'Common API' },
    'nz-popconfirm': { component: 'nz-tooltip', zh: '共同的 API', en: 'Common API' },
    'nz-popover': { component: 'nz-tooltip', zh: '共同的 API', en: 'Common API' },
    'nz-date-picker': { zh: '共同的 API', en: 'Common API' },
    'nz-year-picker': { zh: '共同的 API', en: 'Common API' },
    'nz-month-picker': { zh: '共同的 API', en: 'Common API' },
    'nz-range-picker': { zh: '共同的 API', en: 'Common API' },
    'nz-week-picker': { zh: '共同的 API', en: 'Common API' },
    'nz-form-item': { component: 'nz-row', zh: '[nz-row]', en: '[nz-row]' },
    'nz-form-label': { component: 'nz-col', zh: '[nz-col]', en: '[nz-col]' },
    'nz-form-control': { component: 'nz-col', zh: '[nz-col]', en: '[nz-col]' },
  },
};
