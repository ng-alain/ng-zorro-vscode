const fs = require('fs-extra');
const path = require('path');
const MT = require('mark-twain');
const generateAttributes = require('./utils/generate-attributes');

const target = process.argv[2] || 'all';
const rootPath = path.resolve(__dirname, '..');
const componentsPath = path.join(rootPath, 'ng-zorro-antd/components');
const components = fs
  .readdirSync(componentsPath)
  .filter(name => fs.statSync(path.join(componentsPath, name)).isDirectory());
const ignore = {
  attributes: [ 'ngModel', 'ngModelChange' ]
};

function parseMarkdown(filePath) {
  if (!fs.existsSync(filePath)) return null;

  let mt = null;
  try {
    mt = MT(fs.readFileSync(filePath).toString());
  } catch (err) {
    console.error(`>>> Invalid conversion markdown`, err);
    return null;
  }
  return mt;
}

function mergeLangs(name, zhList, enList) {
  const results = {
    name,
    group = []
  };
  for (let i = 0; i < zhList.length; i++) {
    const group = zhList[i];
    const groupName = group.title || name;
    const groupZhAttributes = group.attributes;
    const groupEnAttributes = enList[i] && enList[i].title === group.title ? enList[i].attributes : {};
    results.group.push({
      name: groupName,
      prefix: '',
      body: ''
    });
  }
  for(const group of zhList) {
    const groupName = group.title || name;
    const groupList = Object.keys(group.attributes || {}).map(key => {

    });
  }
  return results;
}

function generate(name) {
  console.log(`>> Generate '${name}'`);
  const docPath = path.join(componentsPath, name, 'doc');
  const zhMT = parseMarkdown(path.join(docPath, 'index.zh-CN.md'));
  const enMT = parseMarkdown(path.join(docPath, 'index.en-US.md'));
  const zhAttributes = generateAttributes(zhMT);
  const enAttributes = enMT ? generateAttributes(enMT) : null;
  const attributes = mergeLangs(name, zhAttributes, enAttributes);
  console.log(JSON.stringify(attributes));
}

if (target === 'all') {
  for (const name of components) {
    generate(name);
  }
} else {
  generate(target);
}