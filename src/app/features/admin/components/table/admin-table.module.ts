import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AdminTableComponent } from './admin-table.component';

@NgModule({
  declarations: [AdminTableComponent],
  imports: [CommonModule, TableModule, ButtonModule],
  exports: [AdminTableComponent],
})
export class AdminTableModule {}
