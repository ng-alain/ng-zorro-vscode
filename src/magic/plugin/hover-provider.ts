import { CancellationToken, Hover, HoverProvider, Position, ProviderResult, TextDocument } from 'vscode';
import { Directive, DirectiveProperty } from '../interfaces';
import { first, getDirective as getDirectives } from '../resources';
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
      const directives = getDirectives(tag);
      if (directives.length === 0) return null;

      const { property } = this.findProperty(directives, tag.word);
      return property ? new Hover(property._doc) : null;
    }

    // when is property value
    if (tag.isOnAttrValue) {
      const attr = tag.attributes[tag.attrName];
      // when is complex type
      if (attr.value && attr.value.startsWith('{')) {
        const directives = getDirectives(tag);
        if (directives.length === 0) return null;
        const { property, directive } = this.findProperty(directives, attr.name);
        if (property == null || !property.complexType || property.complexType.length === 0) return null;
        const complexTypeProperties = directive.types[property.complexType];
        const complexDirective = complexTypeProperties.find((w) => w.name === tag.word);
        return complexDirective ? new Hover(complexDirective._doc) : null;
      }
    }
    return null; // todo: asdf
  }

  private findProperty(directives: Directive[], propertyName: string): { directive: Directive; property: DirectiveProperty } | null {
    for (const directive of directives) {
      const property = directive.properties.find((w) => w.name === propertyName);
      if (property) {
        return { directive, property };
      }
    }
    return null;
  }
}
