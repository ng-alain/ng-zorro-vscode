---
description:
  zh-CN: "带右上角的操作区域"
  en-US: "Card includes extra"
---

```html
<nz-card nzTitle="${1:Title}" [nzExtra]="${2:extraTpl}">
  <ng-template #$2>
    <a>More</a>
  </ng-template>
  $0
</nz-card>
```
