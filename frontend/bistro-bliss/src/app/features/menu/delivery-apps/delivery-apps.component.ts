import { Component } from '@angular/core';
import { DeliveryApp } from '../../../shared/interfaces/delivery-apps.interface';

@Component({
  selector: 'app-delivery-apps',
  templateUrl: './delivery-apps.component.html',
  styleUrls: ['./delivery-apps.component.scss'],
})
export class DeliveryAppsComponent {
  deliveryApps: DeliveryApp[] = [
    {
      name: 'iFood',
      logoUrl: '../../../../assets/images/menu/ifood-logo.png',
      altText: 'Logo iFood',
    },
    {
      name: 'UberEats',
      logoUrl: '../../../../assets/images/menu/ubereats-logo.png',
      altText: 'Logo Uber Eats',
    },
    {
      name: 'Rappi',
      logoUrl: '../../../../assets/images/menu/rappi-logo.png',
      altText: 'Logo Rappi',
    },
    {
      name: 'AiQFome',
      logoUrl: '../../../../assets/images/menu/aiqfome-logo.png',
      altText: 'Logo AiQFome',
    },
    {
      name: 'Glovo',
      logoUrl: '../../../../assets/images/menu/glovo-logo.png',
      altText: 'Logo Glovo',
    },
  ];
}
