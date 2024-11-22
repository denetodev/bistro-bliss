import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-table',
  template: `
    <p-table [value]="data" [columns]="columns">
      <ng-template pTemplate="header">
        <tr>
          <th *ngFor="let col of columns">{{ col.header }}</th>
          <th>Ações</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-item>
        <tr>
          <td *ngFor="let col of columns">{{ item[col.field] }}</td>
          <td>
            <p-button icon="pi pi-pencil" (click)="edit.emit(item)"></p-button>
            <p-button icon="pi pi-trash" (click)="delete.emit(item)"></p-button>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
}
