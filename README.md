# NG-ZORRO Snippets

![Help](help.gif)

[中文](README.zh-CN.md)

# Note: Starting `11` version, the extension language will follow the display language of VSCode, and there is no need to install different versions of the ng-zorro-vscode extension, so will no longer be maintained of [Simplified Chinese Version](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode-zh-CN).

## Old Versions

**Note: The latest version is based on `11.0.0`**, you can still download other old versions:

| Version | Download |
|---------|----------|
| `10.x` | [10.0.3](https://raw.githubusercontent.com/ng-alain/ng-zorro-vscode/master/cipchk.ng-zorro-vscode-en-US-10.0.3.vsix) |
| `9.x` | [9.2.0](https://raw.githubusercontent.com/ng-alain/ng-zorro-vscode/master/cipchk.ng-zorro-vscode-en-US-9.2.0.vsix) |
| `8.x` | [8.3.3](https://raw.githubusercontent.com/ng-alain/ng-zorro-vscode/master/cipchk.ng-zorro-vscode-8.3.3.vsix) |
| `7.x` | [7.3.4](https://raw.githubusercontent.com/ng-alain/ng-zorro-vscode/master/cipchk.ng-zorro-vscode-7.3.4.vsix) |

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

## Support Language Versions

Support language list: English, 简体中文, will automatically switch according to the current the display language of VSCode.

> Abort how to changing the display language, pls refer to [Changing the Display Language](https://code.visualstudio.com/docs/getstarted/locales#_changing-the-display-language).

## Links

- [issues](https://github.com/cipchk/ng-zorro-vscode/issues)
- If ng-alain users need additional installation [ng-alain-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
