import { CancellationToken, Hover, HoverProvider, Position, ProviderResult, TextDocument } from 'vscode';
import { first, genComponentMarkdown, genPropertyMarkdown, getDirective } from '../resources';
import { getTag } from '../utils';

function fixHover(text: string) {
  if (text == null || text.length === 0) return null;
  return new Hover(text);
}

export default class implements HoverProvider {
  provideHover(doc: TextDocument, pos: Position, token: CancellationToken): ProviderResult<Hover> {
    const tag = getTag(doc, pos);
    if (!tag) return null;

    // when is component
    if (tag.isOnTagName) {
      const component = first(tag.word);
      if (component) {
        return fixHover(genComponentMarkdown(tag.word));
      }
      return null;
    }

    // when is property
    if (tag.isOnAttrName) {
      const directive = getDirective(tag);
      if (directive == null) return null;

      return fixHover(genPropertyMarkdown(directive, tag.word));
    }
  }
}
