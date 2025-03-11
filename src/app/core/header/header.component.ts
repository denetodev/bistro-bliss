import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  menuOpen = false;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Sobre', icon: 'pi pi-info-circle', routerLink: '/sobre' },
      { label: 'Menu', icon: 'pi pi-book', routerLink: '/menu' },
      { label: 'Blog', icon: 'pi pi-pencil', routerLink: '/blog' },
      { label: 'Contato', icon: 'pi pi-envelope', routerLink: '/contato' },
      {
        label: 'Reserva',
        icon: 'pi pi-calendar',
        routerLink: '/reserva',
        styleClass: 'special-item',
      },
    ];

    // Sempre rola para o topo quando a navegação termina
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]); // Leva para o topo
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
