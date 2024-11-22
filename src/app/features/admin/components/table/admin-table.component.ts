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
            <p-button
              icon="pi pi-pencil"
              (onClick)="edit.emit(item)"
              class="p-button-rounded p-button-success mr-2"
            >
            </p-button>
            <p-button
              icon="pi pi-trash"
              (onClick)="delete.emit(item)"
              class="p-button-rounded p-button-danger"
            >
            </p-button>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styles: [
    `
      :host ::ng-deep {
        .p-button {
          margin-right: 0.5rem;
        }
      }
    `,
  ],
})
export class AdminTableComponent {
  @Input() data: any[] = [];
  @Input() columns: { field: string; header: string }[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
}
