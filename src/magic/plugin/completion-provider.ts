import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  CompletionList,
  Position,
  ProviderResult,
  TextDocument,
  SnippetString,
} from 'vscode';
import { Tag, DirectiveProperty } from '../interfaces';
import { RESOURCES } from '../resources';
import { getTag, typingPreChart } from '../utils';

export default class implements CompletionItemProvider {
  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: CompletionContext,
  ): ProviderResult<CompletionItem[] | CompletionList> {
    const char = context.triggerCharacter || typingPreChart(document, position);
    switch (char) {
      // Component
      case '<':
        return this.genComponent();
      // Property
      case ' ':
        return this.genProperties(document, position);
      default:
        return [];
    }
  }

  private genComponent(): CompletionItem[] {
    return [...RESOURCES]
      .filter(i => i.type === 'component')
      .map(i => {
        const item = new CompletionItem(i.selector, CompletionItemKind.Snippet);
        item.documentation = i.description;
        return item;
      });
  }

  private genAttrCompletionItem(property: DirectiveProperty, kind?: CompletionItemKind): CompletionItem {
    const res = new CompletionItem(property.name, typeof kind === 'undefined' ? CompletionItemKind.Field : kind);
    res.documentation = property.description;
    let snippet = '';
    switch (property.type) {
      case 'string':
        if (property.typeDefinitionSnippetStr.length > 0) {
          snippet = `${property.name}="\${1|${property.typeDefinitionSnippetStr}|}"$0`;
        }
        break;
      case 'boolean':
        snippet = `${property.name}="\${1|true,false|}"$0`;
        break;
      case 'function':
        snippet = `[${property.name}]="\${1:${property.pureName}}"$0`;
        break;
      case 'EventEmitter':
        snippet = `${property.name}="\${1:${property.pureName}}(\${2|true,false,$event|})"$0`;
        break;
    }
    if (!snippet) {
      snippet = `${property.name}="\${1:${property.default || property.pureName}}"$0`;
    }

    res.insertText = new SnippetString(snippet);

    return res;
  }

  private genProperties(document: TextDocument, position: Position): CompletionItem[] {
    const tag = getTag(document, position);
    if (tag == null) return [];

    return [...this.genZorroproperties(tag)];
  }

  private genZorroproperties(tag: Tag): CompletionItem[] {
    let name = tag.name.startsWith('nz-') ? tag.name : null;
    if (!name) {
      const directive = tag.attributes.find(w => w.name.startsWith('nz-'));
      if (directive) {
        name = directive.name;
      }
    }
    if (!name) return [];

    const resource = RESOURCES.find(w => w.selector === name);
    if (!resource) return [];

    return resource.properties.map(i => this.genAttrCompletionItem(i));
  }
}
