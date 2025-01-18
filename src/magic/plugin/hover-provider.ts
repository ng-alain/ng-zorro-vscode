import {
  CancellationToken,
  Hover,
  HoverProvider,
  Position,
  ProviderResult,
  TextDocument,
} from "vscode";
import { Directive, DirectiveProperty } from "../interfaces";
import { first, getDirective as getDirectives } from "../resources";
import { getTag } from "../utils";

export default class implements HoverProvider {
  provideHover(
    doc: TextDocument,
    pos: Position,
    token: CancellationToken
  ): ProviderResult<Hover> {
    const tag = getTag(doc, pos);
    if (tag == null) return null;

    // when is component
    if (tag.isOnTagName) {
      const component = first(tag.word);
      if (component) {
        const directive = first(tag.word);
        if (!directive || directive._doc == null) return null;
        return new Hover(directive._doc);
      }
      return null;
    }

    // when is property name
    if (tag.isOnAttrName) {
      const directives = getDirectives(tag);
      if (directives.length === 0) return null;

      const p = this.findProperty(directives, tag.word)?.property;
      return p && p._doc != null ? new Hover(p._doc) : null;
    }

    // when is property value
    if (tag.isOnAttrValue) {
      const attr = tag.attributes[tag.attrName];
      // when is complex type
      if (attr.value && attr.value.startsWith("{")) {
        const directives = getDirectives(tag);
        if (directives.length === 0 || attr.name == null) return null;
        const p = this.findProperty(directives, attr.name);
        if (
          p?.property == null ||
          !p?.property.complexType ||
          p?.property.complexType.length === 0
        )
          return null;
        const complexTypeProperties =
          p?.directive.types[p?.property.complexType];
        const complexDirective = complexTypeProperties.find(
          (w) => w.name === tag.word
        );
        return complexDirective && complexDirective._doc != null
          ? new Hover(complexDirective._doc)
          : null;
      }
    }
    return null; // todo: asdf
  }

  private findProperty(
    directives: Directive[],
    propertyName: string
  ): { directive: Directive; property: DirectiveProperty } | null {
    for (const directive of directives) {
      const property = directive.properties.find(
        (w) => w.name === propertyName
      );
      if (property) {
        return { directive, property };
      }
    }
    return null;
  }
}
