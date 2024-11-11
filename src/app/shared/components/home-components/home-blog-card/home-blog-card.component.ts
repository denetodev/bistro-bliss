import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-blog-card',
  templateUrl: './home-blog-card.component.html',
  styleUrls: ['./home-blog-card.component.scss'],
})
export class HomeBlogCardComponent {
  @Input() imageSrc: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() showContent: boolean = true;
}
