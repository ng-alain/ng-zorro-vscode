# ng-zorro 的 vscode 代码片断

![Plugin in action](help.gif)

请至[Issuses](https://github.com/cipchk/ng-zorro-vscode/issues)提交可能遇到的问题或期望增加的代码片断。

## 安装扩展

按 `F1` 输入 `ext install ng-zorro-vscode` 后回车。

## 如何使用?

你可以任意 `.html`、`.ts` 文件，输入 `nz-` 开头会自动出现在智能提醒列表当中；仅此而已！

片断中带有 `attr-` 表示属性，`fn-` 表示事件。

> 建议开启 `"editor.snippetSuggestions": "top"` 配置，可确保代码片断优先级高于内置。

## 文档

更多API接口请参考[ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd)。


### 根组件

Trigger | Description
--- | ---
nz-root | 根组件只能引入一次，非必选

### 常规

Trigger | Description
--- | ---
nz-button.attr-ghost | 设置幽灵按钮
nz-button.attr-loading | 设置按钮载入状态
nz-button | 按钮（只含type&amp;size）
nz-button.full | 一个完整指令的按钮
nz-button.group | 按钮组
nz-button.icon-text-left | 文本在左边的图标按钮
nz-button.icon-text-right | 文本在右边的图标按钮
nz-button.icon | 图标按钮
nz-icon | Icon图标
nz-icon.extra-spin | Extra：Icon图标（旋转动画）
nz-icon.extra | Extra：Icon图标

### [ng-alain](https://github.com/cipchk/ng-alain) 片断

Trigger | Description
--- | ---
nz-alain-content | 主标题
nz-alain-content.right-input | 主标题且右边按钮
nz-alain-content.right-inputgroup | 主标题且右边按钮组
nz-alain-form.checkbox | 多选框
nz-alain-form.input-number | 数字输入框
nz-alain-form.input | 输入框
nz-alain-form.radio | 单选框
nz-alain-form.select | 下拉框
nz-alain-form.textarea | 多行文本框
nz-alain-list | 列表页表格
nz-alain-list.search | 列表页搜索表单
nz-alain-modal | 对话框
nz-alain-pro.desc-list | PRO：描述列表
nz-alain-pro.header | PRO：标题
nz-alain-ts.form-get-control | TS：获取表单字段

### 布局

Trigger | Description
--- | ---
nz-grid.attr-col-offset | 栅格左侧的间隔格数，间隔内不可以有栅格
nz-grid.attr-col-order | 栅格顺序
nz-grid.attr-col-pull | 栅格向左移动格数
nz-grid.attr-col-push | 栅格向右移动格数
nz-grid.attr-col-responsive | 栅格占位响应式
nz-grid.attr-col-span | 栅格占位格数，为 0 时相当于 display: none
nz-grid.attr-flex-align | flex 布局下的垂直对齐方式
nz-grid.attr-flex-justify | flex 布局下的水平排列方式
nz-grid.attr-gutter | 栅格间隔
nz-grid.col | 栅格：一列（含：nzSpan、nzOffset）
nz-grid | 栅格：一行一列
nz-grid.responsive | 响应式栅格
nz-grid.row-flex | 栅格：一行flex（含：nzAlign、nzJustify）
nz-grid.row | 栅格：一行
nz-layout | 上中下 Layout 布局
nz-layout.sider | 侧边栏

### 导航

Trigger | Description
--- | ---
nz-affix | 固钉
nz-affix.target | 固钉（指定容器）
nz-breadcrumb.attr-separator | 分隔符自定义
nz-breadcrumb | 面包屑
nz-breadcrumb.icon | 面包屑ICON图标
nz-dropdown.button-full | 按钮式下拉菜单（含一个菜单）
nz-dropdown.button | 按钮式下拉菜单
nz-dropdown | 下拉菜单
nz-dropdown.full | 下拉菜单（含一个菜单）
nz-menu | 导航菜单
nz-menu.group | 分组菜单
nz-menu.item-divider | 菜单项分割线
nz-menu.item | 菜单项
nz-menu.submenu | 子菜单
nz-pagination | 分页
nz-steps | 整体步骤条
nz-steps.step-icon | 步骤条内的每一个步骤（自定义图标）
nz-steps.step | 步骤条内的每一个步骤

### 数据录入

Trigger | Description
--- | ---
nz-checkbox.all | 多选框（全选）
nz-checkbox | 多选框
nz-checkbox.group | 多选框组
nz-datepicker.attr-format | 展示的日期格式，配置参考 Moment.js文档
nz-datepicker | 日期选择框
nz-datepicker.format | 日期选择框（指定时间格式）
nz-datepicker.time | 日期时间选择框
nz-form.attr-control-feedback | 当添加该属性时，配合 nzValidateStatus 属性使用，展示校验状态图标，建议只配合 nz-input 组件使用
nz-form.attr-control-validstatus | 校验状态，属性定义为当前formControl名称可以根据异步返回数据自动显示，也可手动定义
nz-form.attr-layout | 表单布局
nz-form.control-responsive | 表单控制区域，通常用于放置input，select等组件（响应式）
nz-form.control | 表单控制区域，通常用于放置input，select等组件
nz-form | 原生form的增强，用于加强form的样式
nz-form.explain | 用于显示提示信息，会根据当前&#x60;nzValidateStatus&#x60;显示不同的颜色
nz-form.extra | 用于显示表单额外提示信息
nz-form.item-required | 给label添加require样式
nz-form.item | 用于标定一个form item区域
nz-form.label-responsive | 用于标定label区域（响应式）
nz-form.label | 用于标定label区域
nz-form.split | 用于显示 &#x60;-&#x60; 分隔符
nz-input.add-on | 带有前后置标签的输入框
nz-input.attr-autosize | 自适应内容高度（textarea 有效）
nz-input.attr-group-compact | 是否用紧凑模式
nz-input.attr-number-step | 每次改变步数
nz-input | 输入框
nz-input.group | 输入框组合
nz-input.input-add-on-after | 带有前缀图标的输入框
nz-input.input-add-on-before | 带有后缀图标的输入框
nz-input.input-prefix-suffix | 带有前后缀图标的输入框
nz-input.number | 带数字输入框
nz-input.prefix | 带有前缀图标的输入框
nz-input.suffix | 带有后缀图标的输入框
nz-input.TD | 模板驱动风格
nz-input.textarea | 多行输入框
nz-radio.button | 按钮样式的单选组合
nz-radio | 单选框（注：必须配合nz-radio-group使用）
nz-radio.group | 单选框组合，用于包裹一组 nz-radio/nz-radio-button
nz-rate | 评分组件
nz-select.attr-allow-clear | 支持清除, 单选模式有效
nz-select.attr-filter | 是否根据输入过滤选项
nz-select.attr-fn-open-change | 下拉菜单打开关闭回调函数
nz-select.attr-fn-search-change | 搜索内容变化回调函数，参数为搜索内容
nz-select.attr-mode | 设置 Select 的模式
nz-select.attr-not-found | 当下拉列表为空时显示的内容
nz-select.attr-show-search | 是否启用搜索框
nz-select | 选择器
nz-select.search | 搜索框选择器
nz-slider | 滑动输入条
nz-switch | 开关选择器
nz-switch.icon | 开关选择器（带图标）
nz-switch.text | 开关选择器（带文本）
nz-timepicker.attr-format | 展示的时间格式
nz-timepicker | 输入或选择时间的控件
nz-timepicker.format | 输入或选择时间的控件（指定时间格式）
nz-transfer | 穿梭框
nz-transfer.full | 穿梭框（完整版）

### 数据显示

Trigger | Description
--- | ---
nz-avatar | 头像
nz-avatar.icon | Icon头像
nz-avatar.img | 图片头像
nz-avatar.text | 文本头像（自动调整字符大小）
nz-badge.attr-overflow-count | 展示封顶的数字值
nz-badge.attr-show-zero | 当添加该属性时，当数值为 0 时，展示 Badge
nz-badge.attr-status | 设置 Badge 为状态点（nzDot小红点有效）
nz-badge | 徽标数
nz-badge.dot | 徽标数（只有小圆点）
nz-badge.standalone | 徽标数（独立使用，不包裹任何元素）
nz-calendar | 日历
nz-card.attr-bordered | 是否有边框
nz-card.attr-no-hovering | 取消鼠标移过浮起
nz-card | 卡片
nz-card.extra-action | Extra：操作区域组件
nz-card.extra-grid | Extra：网格型内嵌卡片
nz-card.extra-meta | Extra：卡片元信息
nz-card.extra-tab | Extra：卡片选项卡组件
nz-card.extra | Extra：卡片
nz-card.full | 卡片（完整结构）
nz-card.image | 卡片（带图片）
nz-carousel | 走马灯（旋转木马，一组轮播的区域。）
nz-collapse | 折叠面板的项
nz-collapse.full | 折叠面板（带*ngFor）
nz-collapse.set | 折叠面板
nz-list.basic | Extra：基础型列表
nz-list | Extra：通用列表
nz-list.item-action | Extra：列表操作组
nz-list.item-meta | Extra：列表元素
nz-list.item | Extra：列表项
nz-list.responsive | Extra：栅格列表
nz-list.simple | Extra：简单列表（无数据源方式）
nz-popover | 气泡卡片
nz-popover.full | 气泡卡片（完整结构）
nz-table.ajax | 表格（远程异步数据）
nz-table.attr-bordered | 是否显示边框
nz-table.attr-data-source | 同步数据（含无分页）
nz-table.attr-size | table大小
nz-table | 表格
nz-table.divider | 表格：td中分隔数据
nz-table.footer | 表格：标定footer（需要在 nz-table 设定 nzShowFooter 才会生效）
nz-table.full | 表格（完成所有结构）
nz-table.selection | 表格（带选择框操作）
nz-table.sort | 表格：嵌入th中显示排序状态
nz-table.tbody-tr | 表格：标定tbody中tr
nz-table.tbody | 表格：标定tbody
nz-table.td-active-more | 表格：构建带有功能按钮及更多选项的td
nz-table.td-active | 表格：构建带有功能按钮的td
nz-table.td-checkbox | 表格：标定td且含有checkbox
nz-table.td | 表格：标定td
nz-table.th | 表格：标定th
nz-table.thead | 表格：标定thead
nz-tabs.attr-fn-change | 当前激活的Tab Index回调
nz-tabs.attr-position | 页签位置
nz-tabs.attr-type | 页签的基本样式
nz-tabs | 标签页
nz-tabs.tab | 标签页：选项卡
nz-tag.attr-closable | 标签是否可以关闭
nz-tag.attr-color | 标签色（支持css颜色值）
nz-tag.attr-fn-close | 关闭后事件
nz-tag.checkable | 可选择标签
nz-tag | 标签
nz-timeline | 时间轴
nz-timeline.item | 时间轴：项
nz-timeline.pending | 时间轴：幽灵节点（表示时间轴未完成）必须放在nz-timeline下
nz-tooltip | 文字提示
nz-tooltip.full | 文字提示（完整结构）

### 反馈

Trigger | Description
--- | ---
nz-alert.attr-banner | 是否用作顶部公告
nz-alert.attr-closeable | 是否显示关闭按钮
nz-alert.attr-description | 警告提示的辅助性文字介绍
nz-alert.attr-fn-close | 关闭时触发的回调函数
nz-alert.attr-showicon | 是否显示辅助图标
nz-alert.attr-type | 指定警告提示的样式
nz-alert.body | 警告提示（标题与内容使用ng-template格式）
nz-alert | 警告提示
nz-alert.full | 警告提示（完整结构）
nz-modal | 对话框（完整结构，因为需要放置HTML的情况时，认为是比较特别的需求；平常尽可能采用NzModalService服务调用方式）
nz-popconfirm.attr-canceltext | 取消按钮文字
nz-popconfirm.attr-condition | 是否直接执行确定方法
nz-popconfirm.attr-oktext | 确认按钮文字
nz-popconfirm | 气泡确认框
nz-popconfirm.full | 气泡确认框（完整结构）
nz-progress.circle | 进度条（圈形）
nz-progress | 进度条（完整结构）
nz-progress.line | 进度条（线形）
nz-spin.attr-spinning | 是否用于内嵌其他组件的模式
nz-spin.attr-tip | 自定义描述文案
nz-spin | 加载中（用于页面和区块的加载中状态）

### 其它

Trigger | Description
--- | ---
nz-anchor | 锚点（若需要固定，配合 nz-affix 使用）
nz-anchor.link | 锚点项，允许嵌套使用
nz-back-top | 回到顶部
nz-divider | Extra：分割线
nz-divider.full | Extra：分割线（完整）

### 通用属性

Trigger | Description
--- | ---
nz-attr.checked | 是否选中
nz-attr.disabled | 是否禁用
nz-attr.fn-click | 点击事件
nz-attr.fn-select | 选中后事件
nz-attr.label | Label值
nz-attr.loading | 是否加载中
nz-attr.placeholder | 提示信息
nz-attr.placement | 位置
nz-attr.size | 大小属性
nz-attr.trigger | 触发行为
nz-attr.type | 按钮类型属性
nz-attr.value | Value值

## 更新日志

见[CHANGELOG.md](CHANGELOG.md)
