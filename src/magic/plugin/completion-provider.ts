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
  MarkdownString,
} from 'vscode';
import { DirectiveProperty, Directive, DirectiveTypeDefinition } from '../interfaces';
import { getDirective, CONFIG, RESOURCES } from '../resources';
import { getTag, typingPreChart } from '../utils';

export default class implements CompletionItemProvider {
  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: CompletionContext,
  ): ProviderResult<CompletionItem[] | CompletionList> {
    const char = context.triggerCharacter || typingPreChart(document, position);
    // 97-122
    switch (char) {
      // Component
      case '<':
      case 'n': // ng-zorro-antd：所有组件都以 `nz-` 开头，因此使用键入 'n' 来触发
        return this.genComponent(char);
      // Property
      case '"':
      case ' ':
        return this.genProperties(document, position)
      default:
        return [];
    }
  }

  private genComponent(char: string): CompletionItem[] {
    return RESOURCES.map(i => this.renderCompletionItem(char, i));
  }

  private renderCompletionItem(char: string, i: Directive): CompletionItem {
    const item = new CompletionItem(i.selector, CompletionItemKind.Snippet);
    item.command = this.triggerHideSuggestCommand;
    item.documentation = new MarkdownString(i.description);
    // `<` 非单词一部分故需要提前移除触发词
    if (char === '<') {
      item.insertText = new SnippetString(i.snippet.substr(1));
    } else {
      item.insertText = new SnippetString(i.snippet);
    }

    return item;
  }

  private genProperties(document: TextDocument, position: Position): CompletionItem[] {
    const tag = getTag(document, position);
    if (tag == null) return [];

    const directive = getDirective(tag);
    if (directive == null) return [];

    if (tag.isOnAttrValue) {
      const attr = tag.attributes[tag.attrName];
      if (attr.value.trim() === '') {
        const property = directive.properties.find(w => w.name === attr.name);
        if (property && property.typeDefinition.length > 0) {
          let range = document.getWordRangeAtPosition(position, /["]\s*["]/);
          if (range) {
            range = new Range(
              new Position(range.start.line, range.start.character + 1),
              new Position(range.end.line, range.end.character - 1)
            );
          };
          return property.typeDefinition.map((i: DirectiveTypeDefinition) => {
            const item = new CompletionItem(i.value, CompletionItemKind.Value);
            item.documentation = new MarkdownString(i.label);
            item.range = range;
            return item;
          });
        }
      } else if (attr.value.startsWith('{')) {
        // 复杂类型
        const property = directive.properties.find(w => w.name === attr.name);
        if (property && property.complexType) {
          return directive.types[property.complexType].map(i => {
            const item = new CompletionItem(i.name, CompletionItemKind.Value);
            item.documentation = new MarkdownString(i.description);
            return item;
          });
        }
      }
      return [];
    }

    return directive.properties.map(i => this.renderAttrCompletionItem(i));
  }

  private renderAttrCompletionItem(property: DirectiveProperty, kind?: CompletionItemKind): CompletionItem {
    const item = new CompletionItem(property.name, typeof kind === 'undefined' ? CompletionItemKind.Field : kind);
    item.documentation = new MarkdownString(property.description);
    let snippet = '';
    switch (property.type) {
      case 'string':
      case 'Enum':
        if (property.typeDefinitionSnippetStr.length > 0) {
          snippet = `${property.name}="\${1|${property.typeDefinitionSnippetStr}|}"$0`;
        }
        break;
      case 'boolean':
        snippet = `${property.name}="\${1|true,false${CONFIG.isAlain ? ',http.loading' : ''}|}"$0`;
        break;
      case 'TemplateRef':
        snippet = `[${property.name}]="\${1:${property.pureName}}Tpl"$0`;
        break;
      case 'Array':
      case 'function':
        snippet = `[${property.name}]="\${1:${property.pureName}}"$0`;
        break;
      case 'EventEmitter':
        snippet = `${property.name}="\${1:${property.pureName}}(\${2|true,false,$event|})"$0`;
        break;
    }
    if (!snippet) {
      snippet = `${property.name}="\${1:${property.default.length > 0 ? property.default : property.pureName}}"$0`;
    }

    item.insertText = new SnippetString(snippet);

    return item;
  }

  private get triggerHideSuggestCommand() {
    return {
      command: 'hideSuggestWidget',
      title: 'hideSuggestWidget'
    }
  }
}
