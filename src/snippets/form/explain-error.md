---
description:
  zh-CN: "表单提示信息带响应式表单错误判断，只能显示一个"
  en-US: "A error message and only one"
---

```html
<nz-form-explain *ngIf="(${1:name}.dirty || ${1:name}.touched) && ${1:name}.errors?.${2|required,pattern,email,maxlength,minlength,min,max|}">$3</nz-form-explain>
$0
```
