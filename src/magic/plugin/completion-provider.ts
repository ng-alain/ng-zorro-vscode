import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  CompletionList,
  Position,
  ProviderResult,
  SnippetString,
  TextDocument,
  Range,
} from 'vscode';
import { DirectiveProperty } from '../interfaces';
import { query, getDirective } from '../resources';
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
      case '"':
      case ' ':
        return this.genProperties(document, position)
      default:
        return [];
    }
  }

  private genComponent(): CompletionItem[] {
    return query('component').map(i => {
      const item = new CompletionItem(i.selector, CompletionItemKind.Snippet);
      item.documentation = i.description;
      return item;
    });
  }

  private genDirective(): CompletionItem[] {
    return query('directive').map(i => {
      const item = new CompletionItem(i.selector, CompletionItemKind.Snippet);
      item.documentation = i.description;
      return item;
    });
  }

  private genProperties(document: TextDocument, position: Position): CompletionItem[] {
    const tag = getTag(document, position);
    if (tag == null) return [];

    const directive = getDirective(tag);
    if (directive == null) {
      // Show all directives when not fond component
      return this.genDirective();
    }

    if (tag.isOnAttrValue) {
      const attr = tag.attributes[tag.attrName];
      if (attr.value.trim() === '') {
        const property = directive.properties.find(w => w.name === attr.name);
        if (property && property.typeDefinition.length > 0) {
          let range = document.getWordRangeAtPosition(position, /['"]\s*['"]/);
          if (range) {
            range = new Range(
              new Position(range.start.line, range.start.character + 1),
              new Position(range.end.line, range.end.character - 1)
            );
          };
          return property.typeDefinition.map(i => {
            const item = new CompletionItem(i.value, CompletionItemKind.Value);
            item.documentation = i.label;
            item.range = range;
            return item;
          });
        }
      }
      return [];
    }

    return directive.properties.map(i => this.genAttrCompletionItem(i));
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
}
