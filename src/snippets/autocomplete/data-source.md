---
description:
  zh-CN: "指定数据源"
  en-US: "Autocomplete includes data source"
---

```html
<input nz-input [(ngModel)]="$1" [nzAutocomplete]="${2:auto}">
<nz-autocomplete [nzDataSource]="${3:['12345', '23456', '34567']}" #$2></nz-autocomplete>
```
