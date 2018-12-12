const JsonML = require('jsonml.js/lib/utils');

const converters = [
  [
    (node) => typeof node === 'string',
    (node) => node
  ],
  [
    () => true,
    (node) => {
      return JsonML.getChildren(node).map(toHtml).join('');
    },
  ]
];

function toHtml(markdownData) {
  const pair = converters.filter((converter) => {
    return converter[0](markdownData);
  })[0];
  const ret = pair[1](markdownData);
  return ret;
}

function genTitle(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    const node = list[i];
    if (JsonML.getTagName(node) !== 'h3') continue;
    const ret = toHtml(node);
    if (!ret.startsWith('nz-')) continue;
    return ret;
  }
  return '';
}

function genAttribute(list) {
  const tbody = list.find(node => JsonML.getTagName(node) === 'tbody');
  if (!tbody) return null;
  const result = {};
  JsonML.getChildren(tbody)
    .map(trNode => JsonML.getChildren(trNode))
    .filter(tds => tds.length >= 4)
    .forEach(tds => {
      const property = toHtml(tds[0]);
      if (!property) {
        return;
      }
      const desc = toHtml(tds[1]);
      if (result[property] && result[property].length > desc) {
        return;
      }
      result[property] = toHtml(tds[1]);
    });
  return result;
}

function genTable(list) {
  const results = [];
  for (let i = 0; i < list.length; i++) {
    const node = list[i];
    if (JsonML.getTagName(node) !== 'table') continue;
    results.push({
      title: genTitle(list.slice(0, i)),
      attributes: genAttribute(JsonML.getChildren(node))
    });
  }
  return results;
}

module.exports = function generateAttributes(markdownData) {
  const contentChildren = JsonML.getChildren(markdownData.content);
  const apiStartIndex = contentChildren.findIndex(
    node =>
    JsonML.getTagName(node) === 'h2' &&
    JsonML.getChildren(node)[0].toUpperCase() === 'API'
  );
  if (apiStartIndex === -1) {
    return [];
  }
  const api = contentChildren.slice(apiStartIndex);
  return genTable(api);
};