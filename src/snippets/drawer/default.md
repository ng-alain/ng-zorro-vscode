---
description:
  zh-CN: "下拉菜单"
  en-US: "抽屉"
---

```html
<nz-drawer
      [nzBodyStyle]="{}"
      [nzMaskClosable]="${2|true,false|}"
      [nzWidth]="720"
      [nzVisible]="true"
      nzTitle="Create Drawer"
      (nzOnClose)="close()"
      [nzPlacement] = "${3|'top','right','bottom','left'|}" >
      ${1}
</nz-drawer>
```
