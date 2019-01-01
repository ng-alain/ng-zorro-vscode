import { ExtensionContext, languages } from 'vscode';
import NAAutoCompletionItemProvider from './plugin/completion-provider';
import NAHoverProvider from './plugin/hover-provider';
import { INIT } from './resources';

export function activate(context: ExtensionContext) {
  INIT();

  const hoverProvider = new NAHoverProvider();

  const htmlScheme = { scheme: 'file', language: 'html' };
  const tsScheme = { scheme: 'file', language: 'typescript' };

  context.subscriptions.push(
    languages.registerHoverProvider([htmlScheme], hoverProvider),
    // Auto complietion
    languages.registerCompletionItemProvider(htmlScheme, new NAAutoCompletionItemProvider(), '<', ' ', '[', '(', '"'),
  );
}

export function deactivate() { }
