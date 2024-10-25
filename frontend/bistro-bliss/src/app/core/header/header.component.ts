import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Sobre',
        icon: 'pi pi-info-circle',
        routerLink: '/sobre',
      },
      {
        label: 'Menu',
        icon: 'pi pi-book',
        routerLink: '/menu',
      },
      {
        label: 'Blog',
        icon: 'pi pi-pencil',
        routerLink: '/blog',
      },
      {
        label: 'Contato',
        icon: 'pi pi-envelope',
        routerLink: '/contato',
      },
      {
        label: 'Reserva',
        icon: 'pi pi-calendar',
        routerLink: '/reserva',
        styleClass: 'special-item', // Vamos usar isso para estilizar o botão de reserva
      },
    ];
  }
}
