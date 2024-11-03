import { Component, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about-restaurant-ambience',
  templateUrl: './about-restaurant-ambience.component.html',
  styleUrls: ['./about-restaurant-ambience.component.scss'],
})
export class AboutRestaurantAmbienceComponent implements AfterViewInit {
  features = [
    {
      icon: '../../../../assets/images/about/cozinha.svg',
      title: 'Multi Cozinha',
      description:
        'Sabores do mundo todo em um só lugar, para surpreender seu paladar a cada prato!',
    },
    {
      icon: '../../../../assets/images/about/forno.svg',
      title: 'Fácil de encomendar',
      description:
        'Peça seu prato favorito com apenas alguns cliques e sem complicações!',
    },
    {
      icon: '../../../../assets/images/about/cronometro.svg',
      title: 'Entrega rápida',
      description:
        'Receba sua refeição quentinha em tempo recorde, direto na sua porta!',
    },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit() {
    const video = this.document.querySelector(
      'video.background-video'
    ) as HTMLVideoElement;
    if (video) {
      video.muted = true;
    }
  }
}
