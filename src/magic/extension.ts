import { ExtensionContext, languages } from 'vscode';
import NAAutoCompletionItemProvider from './plugin/completion-provider';
import NAHoverProvider from './plugin/hover-provider';
import { INIT, CONFIG } from './resources';
import { Notifier } from './notifier';

const notifier = new Notifier();

export async function activate(context: ExtensionContext) {
  await INIT(notifier);

  if (!CONFIG.isAntd && !CONFIG.isAntd) {
    notifier.notify('Not found ng-zorro-antd lib.');
    return;
  }

  const hoverProvider = new NAHoverProvider();

  const htmlScheme = { scheme: 'file', language: 'html' };

  const providers = [languages.registerCompletionItemProvider(htmlScheme, new NAAutoCompletionItemProvider(), '<', ' ', '[', '(', '"')];

  if (CONFIG.hover) {
    providers.push(languages.registerHoverProvider([htmlScheme], hoverProvider));
  }

  context.subscriptions.push(...providers);
}

export function deactivate() {}
