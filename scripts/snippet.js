const path = require('path');
const fs = require('fs');
const vscodeGen = require('vscode-snippet-generator/src/generator');

const root = path.join(__dirname, '..');

function genData(lang) {
  return vscodeGen.generator({
    i18n: lang,
    i18nTpl: '',
    sourceRoot: path.join(root, 'src/snippets'),
    outFile: null,
    prefix: 'nzs',
    separator: '-',
    ingoreDefaultMd: true,
  });
}

const EN_DATA = genData('en-US');
const ZH_DATA = genData('zh-CN');

Object.keys(EN_DATA).forEach((key) => {
  if (ZH_DATA[key]) {
    EN_DATA[key].description += `\n\n${ZH_DATA[key].description}`;
  }
});

const snippetsJsonPath = path.join(root, 'snippets.json');
if (fs.existsSync(snippetsJsonPath)) {
  fs.unlinkSync(snippetsJsonPath);
}
fs.writeFileSync(snippetsJsonPath, JSON.stringify(EN_DATA, null, 2));
