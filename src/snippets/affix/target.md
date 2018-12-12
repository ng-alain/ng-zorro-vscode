---
description:
  zh-CN: "指定滚动容器"
  en-US: "Affix includes target"
---

```html
<div class="scrollable-container" #target>
  <nz-affix [nzTarget]="target"${1: [nzOffsetTop]="${2}"}${3: (nzChange)="onChange($event)"}>
    $0
  </nz-affix>
</div>
```
