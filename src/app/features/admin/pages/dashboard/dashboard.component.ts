import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface DashboardCard {
  title: string;
  description: string;
  route: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  dashboardCards: DashboardCard[] = [
    {
      title: 'Gestão de Posts',
      description:
        'Aqui, você pode criar, editar, organizar e visualizar posts, além de gerenciar publicações e acompanhar estatísticas. Use imagens atraentes, mantenha um calendário de publicações e revise o conteúdo antes de publicar.',
      route: '/admin/posts',
      backgroundImage: '../../../assets/images/admin/post-card.jpg',
    },
    {
      title: 'Gestão de Menu',
      description:
        'Na Gestão de Cardápio, você pode adicionar e editar pratos e bebidas, gerenciar categorias como entradas e pratos principais, atualizar preços e disponibilidade, destacar pratos especiais ou sazonais, e incluir fotos e descrições.',
      route: '/admin/menu',
      backgroundImage: '../../../assets/images/admin/menu-card.jpg',
    },
    {
      title: 'Reservas',
      description:
        'Na Gestão de Reservas, você pode confirmar ou rejeitar solicitações de reserva, visualizar a agenda de mesas, gerenciar horários disponíveis, acompanhar o status das reservas e ver o histórico de clientes.',
      route: '/admin/reservations',
      backgroundImage: '../../../assets/images/admin/reservation-card.jpg',
    },
    {
      title: 'Contatos',
      description:
        'Na Gestão de Contatos, é possível visualizar mensagens recebidas dos clientes, responder com status positivo ou negativo, acompanhar o histórico de comunicações, gerenciar solicitações e dúvidas, e priorizar atendimentos.',
      route: '/admin/contacts',
      backgroundImage: '../../../assets/images/admin/contact-card.jpg',
    },
  ];

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
