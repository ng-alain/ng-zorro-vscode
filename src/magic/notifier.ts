import * as vscode from 'vscode';
import { NAME } from './interfaces';

export class Notifier {
  private statusBarItem: vscode.StatusBarItem;
  private timeoutId: NodeJS.Timer;

  constructor(alignment?: vscode.StatusBarAlignment, priority?: number) {
    this.statusBarItem = vscode.window.createStatusBarItem(alignment, priority);
    this.statusBarItem.show();
  }

  notify(text: string, autoHide = true, icon = 'alert'): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.statusBarItem.text = `$(${icon})`;
    this.statusBarItem.tooltip = `${NAME}: ${text}`;

    if (autoHide) {
      this.timeoutId = setTimeout(() => this.statusBarItem.hide(), 1000 * 60);
    }
  }
}
