const fs = require('fs');
const path = require('path');
const klaw = require('klaw-sync');

const root = path.join(__dirname, '..');
const source = path.join(root, 'src/resources');
const target = path.join(root, 'src/snippets');

function getJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath).toString('utf8'));
}

let en = getJson(path.join(root, 'src/i18n/en.json'));
let zh = getJson(path.join(root, 'src/i18n/zh-CN.json'));

function platI18n(data) {
  return Object.keys(data).reduce((p, c) => ({ ...p,
    ...data[c].list
  }), {});
}

en = platI18n(en);
zh = platI18n(zh);

function getI18n(lang, relativePath) {
  let key = 'nz-' + relativePath
                      .split(path.sep)
                      .map(p => p.endsWith('.html') ? p.substr(0, p.length - 5) : p)
                      .map(p => p.endsWith('default') ? null : p)
                      .filter(p => !!p)
                      .join('.');
  if (key.startsWith(`nz-attr.`)) {
    key = key.slice(8);
  }
  if (/\.nz[A-Z]{1}/.test(key)) {
    key = key.split('.').pop();
  }
  let res = (lang === 'en-US' ? en : zh)[key];
  if (!res) {
    console.log('err', key, lang, relativePath);
  }
  const enSeqIdx = res.indexOf(': ');
  if (enSeqIdx !== -1) {
    res = res.substr(enSeqIdx + 1);
  }
  const zhSeqIdx = res.indexOf('：');
  if (zhSeqIdx !== -1) {
    res = res.substr(zhSeqIdx + 1);
  }
  return `"${res}"`;
}

function parse(filePath) {
  const relativePath = path.relative(source, filePath).split(path.sep).slice(1).join(path.sep);
  const savePath = path.join(root, 'src/snippets', relativePath.substr(0, relativePath.length - '.html'.length) + '.md');
  if (!fs.existsSync(path.dirname(savePath))) {
    fs.mkdirSync(path.dirname(savePath));
  }
  const content = `---
description:
  zh-CN: ${getI18n('zh-CN', relativePath)}
  en-US: ${getI18n('en-US', relativePath)}
---

\`\`\`html
${fs.readFileSync(filePath).toString('utf8')}
\`\`\`
`;

  fs.writeFileSync(savePath, content);
}

klaw(source, {
    nodir: true,
    traverseAll: true
  })
  .forEach(p => parse(p.path));