import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  menuItems: MenuItem[] = [
    {
      label: 'DASHBOARDS',
      icon: 'dashboard',
      children: [
        { label: 'Gestão de Posts', icon: 'article', route: '/admin/posts' },
        { label: 'Gestão de Menu', icon: 'restaurant_menu', route: '/admin/menu' },
        { label: 'Reservas', icon: 'event', route: '/admin/reservations' },
        { label: 'Contatos', icon: 'contacts', route: '/admin/contacts' }
      ]
    },
    {
      label: 'CONFIGURAÇÕES',
      icon: 'settings',
      children: [
        { label: 'Perfil', icon: 'person', route: '/admin/profile' },
        { label: 'Configurações', icon: 'settings', route: '/admin/settings' }
      ]
    }
  ];
}
