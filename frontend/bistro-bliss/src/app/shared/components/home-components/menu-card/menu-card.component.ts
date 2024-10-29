import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent {
  @Input() svgPath!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() link!: string;
  @Input() buttonLabel!: string;
}
