import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';

// Components
import { PostListComponent } from './pages/post-management/post-list/post-list.component';
import { MenuListComponent } from './pages/menu-menagement/menu-list/menu-list.component';
import { MenuFormComponent } from './pages/menu-menagement/menu-form/menu-form.component';
import { ReservationListComponent } from './pages/reservation-menagement/reservation-list/reservation-list.component';
import { ContactListComponent } from './pages/contact-menagement/contact-list/contact-list.component';
import { ContactDetailModalComponent } from './pages/contact-menagement/contact-detail-modal/contact-detail-modal.component';

// Services
import { PostService } from './services/post.service';
import { MenuService } from './services/menu.service';
import { ReservationService } from './services/reservation.service';
import { ContactService } from './services/contact.service';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminTableModule } from './components/table/admin-table.module';

@NgModule({
  declarations: [
    AdminComponent,
    PostListComponent,
    MenuListComponent,
    MenuFormComponent,
    ReservationListComponent,
    ContactListComponent,
    ContactDetailModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminTableModule,
    // PrimeNG Modules
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    FileUploadModule,
    ToastModule,
    ConfirmDialogModule,
    ChipModule,
    TagModule,
    CardModule,
    AdminRoutingModule,
  ],
  providers: [PostService, MenuService, ReservationService, ContactService],
})
export class AdminModule {}
