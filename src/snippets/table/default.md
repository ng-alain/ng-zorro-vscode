## zh-CN

表格

```html
<nz-table #nzTable [nzData]="${1}" [nzPageSize]="${2:10}">
  <thead>
    <tr>
      <th>标题</th>
      $3
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let i of nzTable.data">
      <td>{{i.title}}</td>
      $4
      <td>
        <a href="#" (click)="edit(i)">编辑</a>
        <nz-divider nzType="vertical"></nz-divider>
        <a href="#" (click)="del(i)">删除</a>${5:
        <nz-divider nzType="vertical"></nz-divider>
        <nz-dropdown>
          <a class="ant-dropdown-link" nz-dropdown>
            更多 <span nz-icon type="${6|down,ellipsis|}"></span>
          </a>
          <ul nz-menu>
            <li nz-menu-item>
              <a (click)="">active</a>
            </li>
          </ul>
        </nz-dropdown>
        }
      </td>
    </tr>
  </tbody>
</nz-table>
```

## en-US

Table

```html
<nz-table #nzTable [nzData]="${1}" [nzPageSize]="${2:10}">
  <thead>
    <tr>
      <th>Title</th>
      $3
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let i of nzTable.data">
      <td>{{i.title}}</td>
      $4
      <td>
        <a href="#" (click)="edit(i)">Edit</a>
        <nz-divider nzType="vertical"></nz-divider>
        <a href="#" (click)="del(i)">Remove</a>${5:
        <nz-divider nzType="vertical"></nz-divider>
        <nz-dropdown>
          <a class="ant-dropdown-link" nz-dropdown>
            More <span nz-icon type="${6|down,ellipsis|}"></span>
          </a>
          <ul nz-menu>
            <li nz-menu-item>
              <a (click)="">active</a>
            </li>
          </ul>
        </nz-dropdown>
        }
      </td>
    </tr>
  </tbody>
</nz-table>
```
