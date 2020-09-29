---
description:
  zh-CN: "下拉菜单"
  en-US: "抽屉"
---

```html
<nz-drawer
  [(nzVisible)]="${1:visible}"
  [nzTitle]="${2:Title}"
  nzPlacement="${3|top,right,bottom,left|}"
  (nzOnClose)="close()">
  $0
</nz-drawer>
```
