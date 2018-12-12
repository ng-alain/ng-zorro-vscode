---
description:
  zh-CN: "多选框组布局"
  en-US: "Checkbox use with Grid"
---

```html
<nz-checkbox-wrapper style="width: 100%;" (nzOnChange)="${1:change}($event)">
  <nz-row>
    <nz-col nzSpan="8">
      <label nz-checkbox nzValue="A" [ngModel]="true">A</label>
    </nz-col>
    <nz-col nzSpan="8">
      <label nz-checkbox nzValue="B">B</label>
    </nz-col>
  </nz-row>
</nz-checkbox-wrapper>
```
