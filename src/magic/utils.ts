import { Position, Range, TextDocument } from 'vscode';
import { Tag, TagAttr, TagAttrType, TagAttrValueType } from './interfaces';

export function getTag(document: TextDocument, position: Position, includeAttr = true): Tag {
  const line = document.lineAt(position.line).text;
  const match = /<([\-\w]+)(\s+[^>]*)?/g.exec(line);
  if (match == null) return null;

  return {
    name: match[1],
    attributes: includeAttr && match.length > 2 ? getAttrs(match[2]) : [],
    raw: line,
  };
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

export function getAttrs(text: string): TagAttr[] {
  const re = /((?:\[|\(|\[\(|#)?[\-\w]+(?:\)\]|\]|\))?)(?:="([^"]+)")?/g;
  const res: TagAttr[] = [];
  let match: RegExpExecArray;
  while ((match = re.exec(text))) {
    res.push(pureAttr(match[1], match[2] || ''));
  }
  return res;
}

/**
 * Get pre-character in current line
 */
export function typingPreChart(document: TextDocument, position: Position, count = 1): string {
  return document.getText(new Range(new Position(position.line, position.character - count), position));
}
