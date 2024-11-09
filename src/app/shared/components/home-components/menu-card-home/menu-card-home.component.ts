import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-card-home',
  templateUrl: './menu-card-home.component.html',
  styleUrls: ['./menu-card-home.component.scss'],
})
export class MenuCardHomeComponent {
  @Input() svgPath!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() link!: string;
  @Input() buttonLabel!: string;
}
