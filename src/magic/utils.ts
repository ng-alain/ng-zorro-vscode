import { Position, Range, TextDocument } from 'vscode';
import { Tag, TagAttr, TagAttrType, TagAttrValueType } from './interfaces';
import { isComponent } from './resources';

/**
 * License https://github.com/wx-minapp/minapp-vscode
 */
export function getTag(doc: TextDocument, pos: Position, includeAttr = true): Tag {
  const line = doc.lineAt(pos.line).text;
  const replacer = (char: string) => (raw: string) => char.repeat(raw.length);
  const pureLine = line.replace(/\{\{[^\}]*?\}\}/g, replacer('^'));
  const attrFlagLine = pureLine.replace(/("[^"]*"|'[^']*')/g, replacer('%'));
  let tag: Tag;
  let attrstr = '';

  pureLine.replace(/<([\-\w]+)(\s+[^>]*)?/g, (raw: string, name: string, attr: string, index: number) => {
    attrstr = line.substr(index + raw.indexOf(attr));

    if (!tag && index <= pos.character && index + raw.length >= pos.character) {
      let range = doc.getWordRangeAtPosition(pos, /\b[\w-:.]+\b/);
      let posWord = '';
      let attrName = '';
      if (range) {
        posWord = doc.getText(range);
      }
      let isOnTagName = pos.character <= index + name.length + 1;
      // fix directive
      if (!isOnTagName && isComponent(posWord)) {
        isOnTagName = true;
      }
      let isOnAttrValue = attrFlagLine[pos.character] === '%';
      if (isOnAttrValue) {
        attrName = getAttrName(attrFlagLine.substring(0, pos.character));
      }
      let isOnAttrName = !isOnTagName && !isOnAttrValue && !!posWord;
      tag = {
        name,
        word: posWord,
        isOnTagName,
        isOnAttrName,
        isOnAttrValue,
        attrName
      };
    }
    return raw;
  });

  if (includeAttr) {
    tag.attributes = getAttrs(attrstr);
  }

  return tag;
}

export function getAttrs(text: string): { [key: string]: TagAttr } {
  const re = /((?:\[|\(|\[\(|#)?[\-\w]+(?:\)\]|\]|\))?)(?:="([^"]+)")?/g;
  const res: { [key: string]: TagAttr } = {};
  let match: RegExpExecArray;
  while ((match = re.exec(text))) {
    const item = pureAttr(match[1], match[2] || '');
    res[item.name] = item;
  }
  return res;
}

export function getAttrName(str: string) {
  if (/\s([\w-:.]+)=%*$/.test(str)) {
    return RegExp.$1
  }
  return ''
}

export function pureAttr(name: string, value: string): TagAttr {
  let valueType: TagAttrValueType = TagAttrValueType.String;
  if (~value.indexOf(`'`) && ~name.indexOf('[')) {
    valueType = TagAttrValueType.PropertyBinding;
  } else if (value === 'true' || value === 'false') {
    valueType = TagAttrValueType.Boolean;
  } else if (/^[.0-9]+$/g.test(value)) {
    valueType = TagAttrValueType.Number;
  }

  let type: TagAttrType = TagAttrType.Input;
  if (~name.indexOf('[(')) {
    type = TagAttrType.InputOutput;
    name = name.substr(2, name.length - 4);
  } else if (~name.indexOf('[')) {
    name = name.substr(1, name.length - 2);
  } else if (~name.indexOf('(')) {
    type = TagAttrType.Output;
    name = name.substr(1, name.length - 2);
  } else if (~name.indexOf('#')) {
    type = TagAttrType.Template;
    name = name.substr(1);
  }

  return { type, name, value, valueType };
}

/**
 * Get pre-character in current line
 */
export function typingPreChart(document: TextDocument, position: Position, count = 1): string {
  return document.getText(new Range(new Position(position.line, position.character - count), position));
}
