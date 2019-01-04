import { ExtensionContext, languages } from 'vscode';
import NAAutoCompletionItemProvider from './plugin/completion-provider';
import NAHoverProvider from './plugin/hover-provider';
import { INIT, CONFIG } from './resources';
import Notifier from './notifier';
import { NAME } from './interfaces';

const notifier = new Notifier(NAME + '.cache');

export async function activate(context: ExtensionContext) {
  await INIT(notifier);

  if (!CONFIG.isAntd && !CONFIG.isAntd) {
    notifier.notify('alert', 'Not found Ng-zorro-antd or ng-alain libaries.');
    return;
  }

  const hoverProvider = new NAHoverProvider();

  const htmlScheme = { scheme: 'file', language: 'html' };
  const tsScheme = { scheme: 'file', language: 'typescript' };

  const providers = [
    languages.registerCompletionItemProvider(
      htmlScheme,
      new NAAutoCompletionItemProvider(), '<', 'n', 'd', ' ', '[', '(', '"'
    )
  ];

  if (CONFIG.hover) {
    providers.push(languages.registerHoverProvider([htmlScheme], hoverProvider));
  }

  context.subscriptions.push(...providers);
}

export function deactivate() { }
