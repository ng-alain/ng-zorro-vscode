import { CancellationToken, Hover, HoverProvider, Position, ProviderResult, TextDocument } from 'vscode';
import { first, getDirective } from '../resources';
import { getTag } from '../utils';

export default class implements HoverProvider {
  provideHover(doc: TextDocument, pos: Position, token: CancellationToken): ProviderResult<Hover> {
    const tag = getTag(doc, pos);
    if (!tag) return null;

    // when is component
    if (tag.isOnTagName) {
      const component = first(tag.word);
      if (component) {
        const directive = first(tag.word);
        if (!directive) return null;
        return new Hover(directive._doc);
      }
      return null;
    }

    // when is property name
    if (tag.isOnAttrName) {
      const directive = getDirective(tag);
      if (directive == null) return null;

      const property = directive.properties.find(w => w.name === tag.word);
      return property ? new Hover(property._doc) : null;
    }

    // when is property value
    if (tag.isOnAttrValue) {
      const attr = tag.attributes[tag.attrName];
      // when is complex type
      if (attr.value && attr.value.startsWith('{')) {
        const directive = getDirective(tag);
        if (directive == null) return null;
        const property = directive.properties.find(w => w.name === attr.name);
        if (property == null || !property.complexType || property.complexType.length === 0) return null;
        const complexTypeProperties = directive.types[property.complexType];
        const complexDirective = complexTypeProperties.find(w => w.name === tag.word);
        return complexDirective ? new Hover(complexDirective._doc) : null;
      }
    }
  }
}
