---
description:
  zh-CN: "自定义点"
  en-US: "Custom dot of item"
---

```html
<nz-timeline-item [nzDot]="${1:dotTpl}"${2: [nzColor]="${3|green,red,blue|}"}>
  <ng-template #${1}>
    $4
  </ng-template>
  $0
</nz-timeline-item>
```
