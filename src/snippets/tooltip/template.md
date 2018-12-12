---
description:
  zh-CN: "自定义内容风格"
  en-US: "Tooltip curstom template"
---

```html
<nz-tooltip>
  <span nz-tooltip>${1}</span>
  <ng-template #nzTemplate>
    <i nz-icon type="file"></i>
    <span>$0</span>
  </ng-template>
</nz-tooltip>

```
