## zh-CN

拖拽风格

```html
<nz-upload nzType="drag"
  nzAction="${1:/upload}"
  (nzChange)="handleChange($event)"
  [nzMultiple]="true"
  [nzLimit]="${2:5}">
  <p class="ant-upload-drag-icon">
    <nz-icon type="inbox" />
  </p>
  <p class="ant-upload-text">点击或拖动要上传文件至该区域</p>
  <p class="ant-upload-hint">支持单个或批量上传，严格禁止上传公司数据或其他频段文件</p>
</nz-upload>
$0
```

## en-US

Upload of drag

```html
<nz-upload nzType="drag"
  nzAction="${1:/upload}"
  (nzChange)="handleChange($event)"
  [nzMultiple]="true"
  [nzLimit]="${2:5}">
  <p class="ant-upload-drag-icon">
    <nz-icon type="inbox" />
  </p>
  <p class="ant-upload-text">Click or drag file to this area to upload</p>
  <p class="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
</nz-upload>
$0
```
