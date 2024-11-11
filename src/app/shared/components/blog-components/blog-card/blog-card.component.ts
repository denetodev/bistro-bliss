import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  constructor(private router: Router) {}

  navigateToPost(postId: string) {
    this.router.navigate(['/blog', postId]); // Navega para o post específico
  }

  @Input() post: any;
}
