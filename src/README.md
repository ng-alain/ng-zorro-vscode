# ng-zorro 的 vscode 代码片断

![Plugin in action](help.gif)

请至[Issuses](https://github.com/cipchk/ng-zorro-vscode/issues)提交可能遇到的问题或期望增加的代码片断。

## 安装扩展

按 `F1` 输入 `ext install ng-zorro-vscode` 后回车。

## 如何使用?

你可以任意 `.html`、`.ts` 文件，输入 `nz-` 开头会自动出现在智能提醒列表当中；仅此而已！

## 文档

{{#each @global.i18n}}
### {{ title }}

Trigger | Description
--- | ---
{{#each list}}
{{@key}} | {{@this}}
{{/each}}
{{/each}}

## 更新日志

见[CHANGELOG.md](CHANGELOG.md)
