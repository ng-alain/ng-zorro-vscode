## zh-CN

对话框

```html
<nz-modal
  [(nzVisible)]="isVisible"
  [nzTitle]="'标题'"
  [nzClosable]="false|true"
  [nzWidth]="520"
  [nzContent]="modalContent"
  [nzOkText]="'确定'"
  [nzCancelText]="'取消'"
  [nzMaskClosable]="false|true"
  [nzWrapClassName]="''"
  (nzOnCancel)="handleCancel($event)"
  (nzOnOk)="handleOk($event)">
  <ng-template #modalContent>对话框的内容</ng-template>
</nz-modal>
$0
```

## en-US

Modal

```html
<nz-modal
  [(nzVisible)]="isVisible"
  [nzTitle]="'Title'"
  [nzClosable]="false|true"
  [nzWidth]="520"
  [nzContent]="modalContent"
  [nzOkText]="'OK'"
  [nzCancelText]="'Cancel'"
  [nzMaskClosable]="false|true"
  [nzWrapClassName]="''"
  (nzOnCancel)="handleCancel($event)"
  (nzOnOk)="handleOk($event)">
  <ng-template #modalContent>Conent of modal</ng-template>
</nz-modal>
$0
```
