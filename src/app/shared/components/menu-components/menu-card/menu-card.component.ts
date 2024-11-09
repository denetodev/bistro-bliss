import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent {
  @Input() imageUrl!: string;
  @Input() price!: number;
  @Input() title!: string;
  @Input() description!: string;
}
