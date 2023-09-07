import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  CompletionList,
  MarkdownString,
  Position,
  ProviderResult,
  Range,
  SnippetString,
  TextDocument,
} from 'vscode';
import { Directive, DirectiveProperty, DirectiveTypeDefinition, DirectiveTypeDefinitionComplex, InputAttrType, Tag } from '../interfaces';
import { CONFIG, getDirective, RESOURCES } from '../resources';
import { getTag, inTemplate } from '../utils';

export default class implements CompletionItemProvider {
  provideCompletionItems(
    document: TextDocument,
    position: Position,
    _token: CancellationToken,
    context: CompletionContext,
  ): ProviderResult<CompletionItem[] | CompletionList> {
    if (!inTemplate(document, position)) return [];
    const char = context.triggerCharacter;
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
    return RESOURCES.filter((w) => w.type !== 'pipe').map((i) => this.renderCompletionItem(char, i, false));
  }

  private genDirective(): CompletionItem[] {
    return RESOURCES.filter((w) => w.type === 'directive').map((i) => this.renderCompletionItem('', i, true));
  }

  private renderCompletionItem(char: string, i: Directive, isClean: boolean): CompletionItem {
    const item = new CompletionItem(i.selector, CompletionItemKind.Property);
    item.command = this.triggerHideSuggestCommand;
    item.documentation = i._doc;
    if (isClean) {
      if (i.directiveNameIsOutput) {
        item.insertText = new SnippetString(`[${i.selector}]="$0"`);
      }
      return item;
    }
    // `<` 非单词部分需要提前移除触发词
    if (char === '<') {
      item.insertText = new SnippetString(i.snippet.substring(1));
    } else {
      item.insertText = new SnippetString(i.snippet);
    }
    return item;
  }

  private genProperties(document: TextDocument, position: Position, triggerCharacter: string): CompletionItem[] {
    const tag = getTag(document, position);
    if (tag == null) return this.genDirective();

    const directives = getDirective(tag);
    if (directives.length === 0) return this.genDirective();

    if (directives.length === 1) {
      return this.genPropertiesByDirective(document, position, triggerCharacter, tag, directives[0]);
    }

    const res: CompletionItem[] = [];
    directives.forEach((directive) => {
      const list = this.genPropertiesByDirective(document, position, triggerCharacter, tag, directive).map((i) => {
        i.label = `${directive.selector}.${i.label}`;
        return i;
      });
      res.push(...list);
    });
    return res;
  }

  private genPropertiesByDirective(
    document: TextDocument,
    position: Position,
    triggerCharacter: string,
    tag: Tag,
    directive: Directive,
  ): CompletionItem[] {
    if (tag.isOnAttrValue) {
      const attr = tag.attributes[tag.attrName];
      if (attr.value.trim() === '') {
        const property = directive.properties.find((w) => w.name === attr.name);
        if (property && property.typeDefinition) {
          let range = document.getWordRangeAtPosition(position, /["]\s*["]/);
          if (range) {
            range = new Range(
              new Position(range.start.line, range.start.character + 1),
              new Position(range.end.line, range.end.character - 1),
            );
          }
          let definitionList = property.typeDefinition;
          if (property.inputType === InputAttrType.Complex) {
            definitionList = this.getComplexDefinition(tag, definitionList as DirectiveTypeDefinitionComplex);
          }
          return definitionList.map((i: DirectiveTypeDefinition) => {
            const item = new CompletionItem(i.value, CompletionItemKind.EnumMember);
            item.documentation = new MarkdownString(i.label);
            item.range = range;
            return item;
          });
        }
      } else if (attr.value.startsWith('{')) {
        // 复杂类型
        const property = directive.properties.find((w) => w.name === attr.name);
        if (property && property.complexType) {
          return directive.types[property.complexType].map((i) => {
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
        .filter((w) => existsAttrList.indexOf(w.name) === -1)
        .filter((w) => w.inputType === InputAttrType.Input || w.inputType === InputAttrType.InputOutput)
        .map((i) => this.renderAttrCompletionItem(tag, i, 'property', range));
    }
    if (triggerCharacter === '(') {
      let range = document.getWordRangeAtPosition(position, /\(\s*\)/);
      if (range) {
        range = new Range(new Position(range.start.line, range.start.character + 1), new Position(range.end.line, range.end.character));
      }
      return directive.properties
        .filter((w) => existsAttrList.indexOf(w.name) === -1)
        .filter((w) => w.inputType === InputAttrType.Output || w.inputType === InputAttrType.InputOutput)
        .map((i) => this.renderAttrCompletionItem(tag, i, 'event', range));
    }
    return directive.properties
      .filter((w) => existsAttrList.indexOf(w.name) === -1)
      .map((i) => this.renderAttrCompletionItem(tag, i, '', null));
  }

  private renderAttrCompletionItem(tag: Tag, property: DirectiveProperty, ngBindingType: string, range: Range): CompletionItem {
    const item = new CompletionItem(property.name, CompletionItemKind.Field);
    item.documentation = property._doc;
    if (range) {
      item.range = range;
    }
    // 优化复杂类型
    if (property.inputType === InputAttrType.Complex) {
      const complexDefinitionList = this.getComplexDefinition(tag, property.typeDefinition as DirectiveTypeDefinitionComplex)
        .map((i) => i.value)
        .join(',');
      item.insertText = new SnippetString(`${property.name}="\${1|${complexDefinitionList}|}"$0`);
      return item;
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
          if (
            property.type === 'boolean' &&
            !['disabled', 'loading'].some((key) => property.pureName.toLowerCase().includes(key)) &&
            property.pureDefault === 'false'
          ) {
            snippet = `${property.name}`;
          } else {
            snippet = this.genDefaultPropertySnippet(property);
          }
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
    // 对于指定强制性类型，不再给予任何建议，始终认为属于需要绑定变量名
    if (property.forceInputType != null) {
      switch (property.forceInputType) {
        case InputAttrType.InputOutput:
          return `[(${property.name})]="\${1:${property.pureName}}"$0`;
        case InputAttrType.Input:
          return `[${property.name}]="\${1:${property.pureName}}"$0`;
        case InputAttrType.Output:
          return `(${property.name})="\${1:${property.pureName}}(\${2:\\$event})"$0`;
      }
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
        return `"\${1|false,true,loading,disabled${CONFIG.isAlain ? ',http.loading' : ''}|}"$0`;
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

  private getComplexDefinition(tag: Tag, definitionComplex: DirectiveTypeDefinitionComplex): DirectiveTypeDefinition[] {
    const expectAttr = tag.attributes[definitionComplex.conditionField];
    const expectValue = expectAttr ? expectAttr.value : '';
    const expectIndex = definitionComplex.list.findIndex((w) => w.conditionValue === expectValue);
    return definitionComplex.list[expectIndex < 0 ? 0 : expectIndex].values;
  }

  private get triggerShowSuggestCommand() {
    return {
      command: 'editor.action.triggerSuggest',
      title: 'showSuggestWidget',
    };
  }

  private get triggerHideSuggestCommand() {
    return {
      command: 'hideSuggestWidget',
      title: 'hideSuggestWidget',
    };
  }
}
