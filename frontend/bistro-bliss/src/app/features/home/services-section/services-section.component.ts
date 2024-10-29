import { Component, OnInit } from '@angular/core';

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent {
  services: ServiceCard[] = [
    {
      title: 'Aniversários',
      description:
        'Celebre seu aniversário conosco! Oferecemos um ambiente acolhedor, menu personalizado e todo o suporte para momentos inesquecíveis.',
      image: '../../../../assets/images/home/aniversario.jpg',
    },
    {
      title: 'Eventos',
      description:
        'Organize seu evento conosco! Garantimos um serviço impecável, tempo versátil e cardápios adaptados às suas necessidades.',
      image: '../../../../assets/images/home/evento.jpg',
    },
    {
      title: 'Casamentos',
      description:
        'Torne seu casamento inesquecível! Nossa equipe cuida de cada detalhe, oferecendo gastronomia refinada e um cenário perfeito para seu grande dia.',
      image: '../../../../assets/images/home/casamento.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
