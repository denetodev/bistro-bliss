import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-and-card',
  templateUrl: './image-and-card.component.html',
  styleUrls: ['./image-and-card.component.scss'],
})
export class ImageAndCardComponent {
  @Input() contactInfo = {
    phone: 'number default',
    email: 'email default',
    address: 'Address default',
  };

  @Input() imageUrl: string = '../../../../../assets';
}
