---
description:
  zh-CN: "自定义选项"
  en-US: "Autocomplete includes custom label"
---

```html
<nz-input-group nzSize="large" [nzSuffix]="suffixIcon">
  <input [(ngModel)]="$1" (input)="$2($event.target?.value)" placeholder="$3" nz-input [nzAutocomplete]="${4:auto}" />
  <ng-template #suffixIcon>
    <nz-icon type="search" />
  </ng-template>
</nz-input-group>
<nz-autocomplete nzBackfill #$4>
  <nz-auto-optgroup *ngFor="let group of optionGroups" [nzLabel]="groupTitle">
    <ng-template #groupTitle>
      <span>
        {{group.title}}
        <a class="more-link" href="https://www.google.com/search?q=ng+zorro" target="_blank">More</a>
      </span>
    </ng-template>
    <nz-auto-option *ngFor="let option of group.children" [nzValue]="option.title">
      {{option.title}}
      <span class="certain-search-item-count">{{option.count}}</span>
    </nz-auto-option>
  </nz-auto-optgroup>
</nz-autocomplete>
```
