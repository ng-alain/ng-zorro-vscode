import { CancellationToken, Hover, HoverProvider, Position, ProviderResult, TextDocument } from 'vscode';
import { getTag } from '../utils';

export default class implements HoverProvider {
  provideHover(doc: TextDocument, pos: Position, token: CancellationToken): ProviderResult<Hover> {
    const tag = getTag(doc, pos);
    if (!tag) return null;
    return null;
  }
}
