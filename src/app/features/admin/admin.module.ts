import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { InputSwitchModule } from 'primeng/inputswitch';

// Components
import { PostListComponent } from './pages/post-management/post-list/post-list.component';
import { MenuListComponent } from './pages/menu-management/menu-list/menu-list.component';
import { MenuFormComponent } from './pages/menu-management/menu-form/menu-form.component';
import { ReservationListComponent } from './pages/reservation-management/reservation-list/reservation-list.component';
import { ContactDetailModalComponent } from './pages/contact-management/contact-detail-modal/contact-detail-modal.component';

// Services
import { PostService } from './services/post.service';
import { MenuService } from './services/menu/menu.service';
import { ReservationService } from './services/reservations/reservation.service';
import { ContactService } from './services/contact.service';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminTableModule } from './components/table/admin-table.module';
import { ContactManagementModule } from './pages/contact-management/contact-management.module';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AdminComponent,
    PostListComponent,
    MenuListComponent,
    MenuFormComponent,
    ReservationListComponent,
    ContactDetailModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    AdminTableModule,
    ContactManagementModule,
    TooltipModule,
    // PrimeNG Modules
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
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
    InputSwitchModule,
  ],
  providers: [
    PostService,
    MenuService,
    ReservationService,
    ContactService,
    ConfirmationService,
  ],
})
export class AdminModule {}
