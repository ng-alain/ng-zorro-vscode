import { Position, Range, TextDocument } from 'vscode';
import { Tag, TagAttr, InputAttrType, TagAttrValueType } from './interfaces';
import { isComponent } from './resources';

function getOffsetText(document: TextDocument, position: Position): { start: number; end: number; cursor: number; text: string } {
  const text = document.getText();
  const offset = document.offsetAt(position);
  const maxEnd = text.length;
  let start = offset - 1;
  let end = offset;
  let enterCount = 0;
  while (start >= 0 && text[start] !== '<') {
    if (text[start] === '\n') ++enterCount;
    start--;
  }
  while (end <= maxEnd && text[end] !== '>') {
    end++;
  }

  const cursor = offset - start - enterCount;

  return {
    start,
    end,
    cursor,
    text: text.slice(start, end).replace(/\n/g, ''),
  };
}

export function getTag(doc: TextDocument, pos: Position, includeAttr = true): Tag {
  const offsetText = getOffsetText(doc, pos); // doc.lineAt(pos.line).text;
  const replacer = (char: string) => (raw: string) => char.repeat(raw.length);
  const pureLine = offsetText.text.replace(/\{\{[^\}]*?\}\}/g, replacer('^'));
  const attrFlagLine = pureLine.replace(/("[^"]*"|'[^']*')/g, replacer('%'));
  let tag: Tag;
  let attrstr = '';

  pureLine.replace(/<([\-\w]+)(\s+[^>]*)?/g, (raw: string, name: string, attr: string, index: number) => {
    attrstr = offsetText.text.substr(index + raw.indexOf(attr));

    if (!tag && index <= offsetText.cursor && index + raw.length >= offsetText.cursor) {
      let range = doc.getWordRangeAtPosition(pos, /\b[\w-:.]+\b/);
      let posWord = '';
      let attrName = '';
      if (range) {
        posWord = doc.getText(range);
      }
      let isOnTagName = offsetText.cursor <= index + name.length + 1;
      // fix directive
      if (!isOnTagName && isComponent(posWord)) {
        isOnTagName = true;
      }
      let isOnAttrValue = attrFlagLine[offsetText.cursor] === '%';
      if (isOnAttrValue) {
        attrName = getAttrName(attrFlagLine.substring(0, offsetText.cursor));
      }
      let isOnAttrName = !isOnTagName && !isOnAttrValue && !!posWord;
      tag = {
        name,
        word: posWord,
        isOnTagName,
        isOnAttrName,
        isOnAttrValue,
        attrName,
      };
    }
    return raw;
  });

  if (tag && includeAttr) {
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
  if (/\s([\[\]\(\)\-\w]+)=%*$/.test(str)) {
    return pureAttrName(RegExp.$1 || '').name;
  }
  return '';
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

  return { ...pureAttrName(name), value, valueType };
}

export function pureAttrName(name: string): { type: InputAttrType; name: string } {
  let type: InputAttrType;
  if (~name.indexOf('[(')) {
    type = InputAttrType.InputOutput;
    name = name.substr(2, name.length - 4);
  } else if (~name.indexOf('[')) {
    name = name.substr(1, name.length - 2);
  } else if (~name.indexOf('(')) {
    type = InputAttrType.Output;
    name = name.substr(1, name.length - 2);
  } else if (~name.indexOf('#')) {
    type = InputAttrType.Template;
    name = name.substr(1);
  }
  return { type, name };
}

/**
 * Get pre-character in current line
 */
export function typingPreChart(document: TextDocument, position: Position, count = 1): string {
  return document.getText(new Range(new Position(position.line, position.character - count), position));
}
