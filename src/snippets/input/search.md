## zh-CN

搜索示例

```html
<nz-input-group nzSearch nzSize="${1|small,middle,large,default|}" [nzSuffix]="${2}Tpl">
  <input nz-input [(ngModel)]="${2:name}" name="${2}"${3: placeholder="${4}"}>
  <ng-template #${2}Tpl>
    <button nz-button nzType="primary" nzSize="${1}" nzSearch>${5|查询,搜索,保存,确认|}</button>
  </ng-template>
</nz-input-group>
```

## en-US

Input includes search

```html
<nz-input-group nzSearch nzSize="${1|small,middle,large,default|}" [nzSuffix]="${2}Tpl">
  <input nz-input [(ngModel)]="${2:name}" name="${2}"${3: placeholder="${4}"}>
  <ng-template #${2}Tpl>
    <button nz-button nzType="primary" nzSize="${1}" nzSearch>${5|Search,Save,Confirm|}</button>
  </ng-template>
</nz-input-group>
```
