---
description:
  zh-CN: "自定义点"
  en-US: "Custom dot"
---

```html
<nz-steps [(nzCurrent)]="${1:current}" [nzProgressDot]="${2:progressTemplate}">
  <nz-step nzTitle="Finished" nzDescription="You can hover on the dot."></nz-step>
  $0
</nz-steps>
<ng-template #${2} let-dot let-status="status" let-index="index">
</ng-template>
```
