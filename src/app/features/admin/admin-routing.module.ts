import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostManagementComponent } from './pages/post-management/post-management.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { ReservationManagementComponent } from './pages/reservation-management/reservation-management.component';
import { ContactManagementComponent } from './pages/contact-management/contact-management.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostManagementComponent },
      { path: 'menu', component: MenuManagementComponent },
      { path: 'reservations', component: ReservationManagementComponent },
      { path: 'contacts', component: ContactManagementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
