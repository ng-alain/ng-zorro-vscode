# NG-ZORRO Snippets

![Help](help.gif)

# 注意从 `11.x` 版本开始，显示的语言会跟随 VSCode 的设定，无须安装不同版本 ng-zorro-vscode 插件，因此[简体中文版本](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode-zh-CN)的插件将不再更新。

## 旧版本

**注意：当前最新版本是基于 `11.0.0`**，你依然可以下载其他旧版本：

| 版本号 | 下载链接 |
|---------|----------|
| `10.x` | [10.0.3](https://raw.githubusercontent.com/ng-alain/ng-zorro-vscode/master/cipchk.ng-zorro-vscode-zh-CN-10.0.3.vsix) |
| `9.x` | [9.2.0](https://raw.githubusercontent.com/ng-alain/ng-zorro-vscode/master/cipchk.ng-zorro-vscode-zh-CN-9.2.0.vsix) |
| `8.x` | [8.3.3](https://raw.githubusercontent.com/ng-alain/ng-zorro-vscode/master/cipchk.ng-zorro-vscode-zh-CN-8.3.3.vsix) |
| `7.x` | [7.3.4](https://raw.githubusercontent.com/ng-alain/ng-zorro-vscode/master/cipchk.ng-zorro-vscode-zh-CN-7.3.4.vsix) |

## 特征

- 自动补全组件名、属性、复杂参数、可选值
- 自动筛选当前组件属性
- 鼠标悬停显示组件、属性、复杂参数文档

## 如何使用

在 `.html` 文件里输入 `<` 触发所有组件在智能提醒列表中，按 `Tab` 或 `回车` 自动完成；仅此而已！

除此之外，还内置一些常见的完整代码片断，并且以 `nzs-` 开头。

## 配置项

| 名称 | 描述 | 类型 | 默认值 |
|----|----|----|-----|
| `ng-zorro-vscode.hover` | 是否开启悬停 | `boolean` | `true` |
| `ng-zorro-vscode.inlineTemplate` | 是否支持内联模板 | `boolean` | `true` |

> **注意:** 修改配置必须**重启Visual Studio Code**。

## 支持语言版本

支持语言列表：英文、简体中文，会根据 VSCode 当前语言自动切换。

> 关于如何切换 VSCode 语言，请参考 [Changing the Display Language](https://code.visualstudio.com/docs/getstarted/locales#_changing-the-display-language) 章节。

## 链接

- [issues](https://github.com/cipchk/ng-zorro-vscode/issues)
- 若你是 ng-alain 用户请额外安装 [ng-alain-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)，提供更丰富只针对 ng-alain 的代码片断。

## 更新日志

见[CHANGELOG.md](CHANGELOG.md)
