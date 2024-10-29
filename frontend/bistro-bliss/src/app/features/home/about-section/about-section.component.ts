import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  phoneNumber = '(99) 9999 - 9999';
  email = 'info@restaurant.com';
  address = '827 N Marshall Lane MetalRittem, IL 62563 Los Angeles';
}
