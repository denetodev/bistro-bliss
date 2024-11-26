import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactManagementComponent } from './contact-management.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [ContactManagementComponent, ContactListComponent],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  exports: [ContactManagementComponent],
})
export class ContactManagementModule {}
