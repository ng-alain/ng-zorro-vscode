const fs = require('fs');
const path = require('path');

const NAME = 'ng-zorro-vscode';
const DEFAULT_LANG = 'en-US';

const root = path.join(__dirname, '../..');

function getJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath).toString('utf8'));
}

const lang = process.argv[2] || 'zh-CN';
const i18n = getJson(path.join(__dirname, 'i18n.json'))[lang];

const rootPackagePath = path.join(root, 'package.json');
const rootPackage = getJson(rootPackagePath);

if (lang === DEFAULT_LANG) {
  rootPackage.name = `${NAME}`;
} else {
  rootPackage.name = `${NAME}-${lang}`;
}
rootPackage.displayName = i18n.displayName;
rootPackage.description = i18n.description;
const langItem = rootPackage.contributes.configuration.properties['ng-zorro-vscode.language'];
langItem.default = lang;
langItem.description = langItem.description.replace(/default: '[^']+'/g, `default: '${lang}'`);

fs.writeFileSync(rootPackagePath, JSON.stringify(rootPackage, null, 2));