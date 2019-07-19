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
  const languageSchemes = [{ scheme: 'file', language: 'html' }, { scheme: 'file', language: 'typescript' }];

  const providers = languageSchemes.map(scheme => {
    return languages.registerCompletionItemProvider(scheme, new NAAutoCompletionItemProvider(), '<', ' ', '[', '(', '"');
  });

  if (CONFIG.hover) {
    providers.push(languages.registerHoverProvider(languageSchemes, hoverProvider));
  }

  context.subscriptions.push(...providers);
}

export function deactivate() {}
