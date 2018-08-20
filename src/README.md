# ng-zorro-antd VSCode Snippets

![Plugin in action](help.gif)

[中文](README.zh-CN.md)

## Links

- [issues](https://github.com/cipchk/ng-zorro-vscode/issues)
- If ng-alain users need additional installation [ng-alain-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

## Usage

Typing the beginning of `nz-` will automatically appear in the intellisense list; no more!

- `nz-` prefix is complete fragment
- `nz` (not `-`) prefix is attribute fragment

> To ensure ng-zorro-antd snippets suggestions are always on top in the suggestion list, add the following settings `"editor.snippetSuggestions": "top"`.

## Document

{{#each @global.i18n}}

### {{ title }}

Trigger | Description
--- | ---
{{#each list}}
{{@key}} | {{@this}}
{{/each}}
{{/each}}

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
