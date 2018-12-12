---
description:
  zh-CN: "单选框按钮风格"
  en-US: "Radio button style"
---

```html
<nz-radio-group [(ngModel)]="$1">
  <label nz-radio-button nzValue="A">A</label>
  <label *ngFor="let ${3:item} of ${2:list}" nz-radio-button [nzValue]="$3">{{${3}.text}}</label>
</nz-radio-group>
$0
```
