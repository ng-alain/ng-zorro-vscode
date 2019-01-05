import * as vscode from 'vscode';
import { NAME } from './interfaces';

class Notifier {
  public statusBarItem: vscode.StatusBarItem;
  private timeoutId: NodeJS.Timer;

  constructor(alignment?: vscode.StatusBarAlignment, priority?: number) {
    this.statusBarItem = vscode.window.createStatusBarItem(alignment, priority);
    this.statusBarItem.show();
  }

  public notify(text: string, autoHide: boolean = true, icon: string = ''): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (!icon) {
      icon = 'alert';
    }

    this.statusBarItem.text = `$(${icon}) ${text}`;
    this.statusBarItem.tooltip = null;

    if (autoHide) {
      this.timeoutId = setTimeout(() => {
        this.statusBarItem.text = `$(${icon})`;
        this.statusBarItem.tooltip = `${NAME}: ${text}`;
      }, 5000);
    }
  }
}

export default Notifier;
