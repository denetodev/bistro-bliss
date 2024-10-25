import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { MenuComponent } from './features/menu/menu.component';
import { BlogComponent } from './features/blog/blog.component';
import { ContactComponent } from './features/contact/contact.component';
import { ReservationComponent } from './features/reservation/reservation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'reserva', component: ReservationComponent },
  { path: '**', redirectTo: '' }, // Redireciona para home em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
