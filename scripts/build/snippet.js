const path = require('path');
const vscodeGen = require('vscode-snippet-generator/src/generator');

const i18n = process.argv[2] || 'zh-CN';
const root = path.join(__dirname, '../..');

vscodeGen.generator({
  i18n,
  i18nTpl: '',
  sourceRoot: path.join(root, 'src/snippets'),
  outFile: path.join(root, `snippets/html-${i18n}.json`),
  prefix: 'nz',
  separator: '-',
  ingoreDefaultMd: true,
}, {
  itemFinished: (item) => {
    // remove nz-attr-
    if (item.prefix.startsWith('nz-attr-nz')) {
      item.prefix = item.prefix.substr('nz-attr-'.length);
    }
    return item;
  }
});