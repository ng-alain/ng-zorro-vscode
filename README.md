# NG-ZORRO Snippets

![Help](help.gif)

[中文](README.zh-CN.md)

## Features

- Automatically completion component names, properties, complex parameters, and optional values
- Automatically filter current component input & output properties
- Mouse hover display component, propertie, and complex parameter documentation

## Usage

Typing `<` in the `.html` file to trigger all components in the intellisense list, pressing `Tab` or `Enter` will be completion automatically; no more!

In addition, some common completion code snippets are built in and prefix with `nzs-`.

## Configuration

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `ng-zorro-vscode.hover` | Whether to enable hover | `boolean` | `true` |
| `ng-zorro-vscode.inlineTemplate` | Whether to enable support inline template in typescript file | `boolean` | `true` |
| `ng-zorro-vscode.signal` | Whether it is `signal` mode, some variables will be automatically added with `()` | `boolean` | `false` |
| `ng-zorro-vscode.officialDocument` | Always use official documentation links | `boolean` | `true` |

## Support Language Versions

Support language list: English, 简体中文, will automatically switch according to the current the display language of VSCode.

> Abort how to changing the display language, pls refer to [Changing the Display Language](https://code.visualstudio.com/docs/getstarted/locales#_changing-the-display-language).

## Links

- [issues](https://github.com/cipchk/ng-zorro-vscode/issues)
- If ng-alain users need additional installation [ng-alain-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
