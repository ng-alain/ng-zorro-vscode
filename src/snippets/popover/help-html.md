---
description:
  zh-CN: "HTML帮助示例"
  en-US: "Help demo (Include html)"
---

```html
<nz-popover [nzContent]="${1:help}Tpl">
  <ng-template #${1}Tpl>
    $0
  </ng-template>
  <i nz-popover nz-icon type="question-circle"></i>
</nz-popover>
```
