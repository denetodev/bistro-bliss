import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../interfaces/blog.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input() post!: BlogPost;

  constructor(private router: Router) {}

  navigateToPost(id: number): void {
    this.router.navigate(['/blog', id]);
  }
}
