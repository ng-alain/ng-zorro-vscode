---
description:
  zh-CN: "自定义内容风格"
  en-US: "Tooltip curstom template"
---

```html
<nz-tooltip>
  <span nz-tooltip>${1}</span>
  <ng-template #nzTemplate>
    <span nz-icon type="file"></span>
    <span>$0</span>
  </ng-template>
</nz-tooltip>

```
