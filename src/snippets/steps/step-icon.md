---
description:
  zh-CN: "项带图标"
  en-US: "Steps inlcudes step and icon"
---

```html
<nz-step [nzIcon]="nzIconTpl" [nzTitle]="'${1}'" [nzDescription]="'${2}'"${3: [nzStatus]="'${4|wait,process,finish,error|}'"}>
  <ng-template #nzIconTpl>$0</ng-template>
</nz-step>
```
