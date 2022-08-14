---
description:
  zh-CN: "自定义图标"
  en-US: "Switch includes icon"
---

```html
<nz-switch [(ngModel)]="${1}" name="${1}" [nzCheckedChildren]="checkedTemplate" [nzUnCheckedChildren]="unCheckedTemplate">
  <ng-template #checkedTemplate><span nz-icon type="${2:check}"></span></ng-template>
  <ng-template #unCheckedTemplate><span nz-icon type="${3:close}"></span></ng-template>
</nz-switch>
$0
```
