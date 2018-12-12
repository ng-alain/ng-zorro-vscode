---
description:
  zh-CN: "提及"
  en-US: "Mention"
---

```html
<nz-mention [nzSuggestions]="$1" (nzOnSelect)="$2($event)">
  <input [(ngModel)]="$3" (ngModelChange)="$4($event)" placeholder="$5" nzMentionTrigger nz-input>
</nz-mention>
$0
```
