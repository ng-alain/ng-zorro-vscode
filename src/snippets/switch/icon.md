---
description:
  zh-CN: "自定义图标"
  en-US: "Switch includes icon"
---

```html
<nz-switch [(ngModel)]="${1}" name="${1}" [nzCheckedChildren]="checkedTemplate" [nzUnCheckedChildren]="unCheckedTemplate">
  <ng-template #checkedTemplate><i nz-icon type="${2:check}"></i></ng-template>
  <ng-template #unCheckedTemplate><i nz-icon type="${3:close}"></i></ng-template>
</nz-switch>
$0
```
