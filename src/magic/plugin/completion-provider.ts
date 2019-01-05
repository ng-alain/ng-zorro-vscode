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
import { DirectiveProperty, Directive, DirectiveTypeDefinition, InputAttrType } from '../interfaces';
import { getDirective, CONFIG, RESOURCES } from '../resources';
import { getTag } from '../utils';

export default class implements CompletionItemProvider {
  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: CompletionContext,
  ): ProviderResult<CompletionItem[] | CompletionList> {
    let char = context.triggerCharacter;
    switch (char) {
      // Component
      case '<':
        return this.genComponent(char);
      // Property
      case '"':
      case ' ':
      case '(':
      case '[':
        return this.genProperties(document, position, char);
      default:
        return [];
    }
  }

  private genComponent(char: string): CompletionItem[] {
    return RESOURCES.map(i => this.renderCompletionItem(char, i, false));
  }

  private genDirective(): CompletionItem[] {
    return RESOURCES.filter(w => w.type === 'directive').map(i => this.renderCompletionItem('', i, true));
  }

  private renderCompletionItem(char: string, i: Directive, isClean: boolean): CompletionItem {
    const item = new CompletionItem(i.selector, CompletionItemKind.Property);
    item.command = this.triggerHideSuggestCommand;
    item.documentation = i._doc;
    if (isClean) {
      return item;
    }
    // `<` 非单词部分需要提前移除触发词
    if (char === '<') {
      item.insertText = new SnippetString(i.snippet.substr(1));
    } else {
      item.insertText = new SnippetString(i.snippet);
    }
    return item;
  }

  private genProperties(document: TextDocument, position: Position, triggerCharacter: string): CompletionItem[] {
    const tag = getTag(document, position);
    if (tag == null) return this.genDirective();

    const directive = getDirective(tag);
    if (directive == null) return this.genDirective();

    if (tag.isOnAttrValue) {
      const attr = tag.attributes[tag.attrName];
      if (attr.value.trim() === '') {
        const property = directive.properties.find(w => w.name === attr.name);
        if (property && property.typeDefinition.length > 0) {
          let range = document.getWordRangeAtPosition(position, /["]\s*["]/);
          if (range) {
            range = new Range(
              new Position(range.start.line, range.start.character + 1),
              new Position(range.end.line, range.end.character - 1),
            );
          }
          return property.typeDefinition.map((i: DirectiveTypeDefinition) => {
            const item = new CompletionItem(i.value, CompletionItemKind.EnumMember);
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
            item.documentation = i._doc;
            return item;
          });
        }
      }
      return [];
    }

    const existsAttrList = Object.keys(tag.attributes);
    if (triggerCharacter === '[') {
      let range = document.getWordRangeAtPosition(position, /\[\s*\]/);
      if (range) {
        range = new Range(new Position(range.start.line, range.start.character + 1), new Position(range.end.line, range.end.character));
      }
      return directive.properties
        .filter(w => existsAttrList.indexOf(w.name) === -1)
        .filter(w => w.inputType === InputAttrType.Input || w.inputType === InputAttrType.InputOutput)
        .map(i => this.renderAttrCompletionItem(i, 'property', range));
    }
    if (triggerCharacter === '(') {
      let range = document.getWordRangeAtPosition(position, /\(\s*\)/);
      if (range) {
        range = new Range(new Position(range.start.line, range.start.character + 1), new Position(range.end.line, range.end.character));
      }
      return directive.properties
        .filter(w => existsAttrList.indexOf(w.name) === -1)
        .filter(w => w.inputType === InputAttrType.Output || w.inputType === InputAttrType.InputOutput)
        .map(i => this.renderAttrCompletionItem(i, 'event', range));
    }
    return directive.properties.filter(w => existsAttrList.indexOf(w.name) === -1).map(i => this.renderAttrCompletionItem(i, '', null));
  }

  private renderAttrCompletionItem(property: DirectiveProperty, ngBindingType: string, range: Range): CompletionItem {
    const item = new CompletionItem(property.name, CompletionItemKind.Field);
    item.documentation = property._doc;
    if (range) {
      item.range = range;
    }
    let snippet = '';
    if (property.snippet) {
      snippet = property.snippet;
    } else {
      switch (ngBindingType) {
        // 属性绑定
        case 'property':
          snippet = `${property.name}]=${this.genDefaultPropertyValueSnippet(property)}`;
          break;
        // 事件绑定
        case 'event':
          snippet = `${property.name})=${this.genDefaultPropertyValueSnippet(property)}`;
          break;
        // 默认绑定
        default:
          snippet = this.genDefaultPropertySnippet(property);
          break;
      }
    }
    if (!snippet) {
      snippet = `${property.name}="\${1:${property.pureDefault ? property.pureDefault : property.pureName}}"$0`;
    }

    item.insertText = new SnippetString(snippet);

    return item;
  }

  private genDefaultPropertySnippet(property: DirectiveProperty): string {
    if (property.inputType === InputAttrType.InputOutput) {
      return `[(${property.name})]=${this.genDefaultPropertyValueSnippet(property)}`;
    }
    switch (property.type) {
      case 'string':
      case 'Enum':
        if (property.typeDefinitionSnippetStr.length > 0) {
          return `${property.name}=${this.genDefaultPropertyValueSnippet(property)}`;
        }
        break;
      case 'boolean':
        return `${property.name}=${this.genDefaultPropertyValueSnippet(property)}`;
      case 'any':
      case 'object':
      case 'Date':
      case 'Array':
      case 'function':
      case 'TemplateRef':
        return `[${property.name}]=${this.genDefaultPropertyValueSnippet(property)}`;
      case 'EventEmitter':
        return `(${property.name})=${this.genDefaultPropertyValueSnippet(property)}`;
    }
  }

  private genDefaultPropertyValueSnippet(property: DirectiveProperty): string {
    switch (property.type) {
      case 'boolean':
        return `"\${1|true,false${CONFIG.isAlain ? ',http.loading' : ''}|}"$0`;
      case 'TemplateRef':
        return property.default ? `"\${1:${property.default}}"$0` : `"\${1:${property.pureName}}Tpl"$0`;
      case 'Array':
      case 'function':
        return `"\${1:${property.pureName}}"$0`;
      case 'EventEmitter':
        if (~property.typeRaw.indexOf('boolean')) {
          return `"\${1:${property.pureName}}(\${2|$event,true,false|})"$0`;
        }
        return `"\${1:${property.pureName}}(\${2:\\$event})"$0`;
      default:
        if (property.typeDefinitionSnippetStr.length > 0) {
          return `"\${1|${property.typeDefinitionSnippetStr}|}"$0`;
        } else {
          return `"\${1:${property.pureName}}"$0`;
        }
    }
  }

  private get triggerHideSuggestCommand() {
    return {
      command: 'hideSuggestWidget',
      title: 'hideSuggestWidget',
    };
  }
}
