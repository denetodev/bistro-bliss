import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostManagementComponent } from './pages/post-management/post-management.component';
import { PostFormComponent } from './pages/post-management/post-form/post-form.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { MenuFormComponent } from './pages/menu-management/menu-form/menu-form.component';
import { ReservationManagementComponent } from './pages/reservation-management/reservation-management.component';
import { ContactManagementComponent } from './pages/contact-management/contact-management.component';
import { AdminComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostManagementComponent,
    MenuManagementComponent,
    PostFormComponent,
    MenuFormComponent,
    ReservationManagementComponent,
    ContactManagementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    AdminComponentsModule,
  ],
})
export class AdminModule {}
