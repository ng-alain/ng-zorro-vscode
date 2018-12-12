---
description:
  zh-CN: "加载更多示例"
  en-US: "List includes loadmore"
---

```html
<nz-list [nzDataSource]="data" [nzLoading]="loading" [nzRenderItem]="item" [nzLoadMore]="loadMore">
  <ng-template #item let-item>
    <nz-list-item [nzContent]="'content'" [nzActions]="[editAction,moreAction]">
      <ng-template #editAction>
        <a (click)="edit(item)">edit</a>
      </ng-template>
      <ng-template #moreAction>
        <a (click)="edit(item)">more</a>
      </ng-template>
      <nz-list-item-meta [nzTitle]="nzTitle" nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" nzDescription="Ant Design, a design language for background applications, is refined by Ant UED Team">
        <ng-template #nzTitle>
          <a href="https://ng.ant.design">{{item.name.last}}</a>
        </ng-template>
      </nz-list-item-meta>
    </nz-list-item>
  </ng-template>
  <ng-template #loadMore>
    <div *ngIf="showLoadingMore" class="loadmore">
      <button nz-button *ngIf="!loadingMore" (click)="onLoadMore()">loading more</button>
      <nz-spin *ngIf="loadingMore" [nzSpinning]="loadingMore"></nz-spin>
    </div>
  </ng-template>
</nz-list>
```
