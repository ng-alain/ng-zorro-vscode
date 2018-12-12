---
description:
  zh-CN: "时间轴"
  en-US: "Timeline"
---

```html
<nz-timeline>
  <nz-timeline-item${1: [nzColor]="${2|green,red,blue|}"}>
    ${3:<ng-template #custom></ng-template>}
  </nz-timeline-item>${4:
  <ng-template #pending></ng-template>}
  $0
</nz-timeline>
```
