---
description:
  zh-CN: "列表，向下为项"
  en-US: "List"
---

```html
<nz-list [nzDataSource]="$1" [nzRenderItem]="item">
  <ng-template #item let-${2:i}>
    <nz-list-item>
      <nz-list-item-meta
        [nzTitle]="$2.title"
        [nzAvatar]="$2.avatar"
        [nzDescription]="$2.description">
        <ng-template #itemTitle>
          <a>{{$2.title}}</a>
        </ng-template>
      </nz-list-item-meta>
    </nz-list-item>
  </ng-template>
</nz-list>
```
