import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input() imageSrc: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() showContent: boolean = true;
}
