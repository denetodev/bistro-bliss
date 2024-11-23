import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PostFormComponent } from './pages/post-management/post-form/post-form.component';
import { MenuListComponent } from './pages/menu-management/menu-list/menu-list.component';
import { ReservationListComponent } from './pages/reservation-management/reservation-list/reservation-list.component';
import { ContactListComponent } from './pages/contact-management/contact-list/contact-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostListComponent } from './pages/post-management/post-list/post-list.component';
import { MenuFormComponent } from './pages/menu-management/menu-form/menu-form.component';
import { MenuEditComponent } from './pages/menu-management/menu-edit/menu-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostListComponent },
      { path: 'menu', component: MenuListComponent },
      { path: 'reservations', component: ReservationListComponent },
      { path: 'contacts', component: ContactListComponent },
      {
        path: 'posts/new',
        component: PostFormComponent,
      },
      {
        path: 'posts/edit/:id',
        component: PostFormComponent,
      },
      {
        path: 'menu/new',
        component: MenuFormComponent,
      },
      {
        path: 'menu/edit/:id',
        component: MenuEditComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
