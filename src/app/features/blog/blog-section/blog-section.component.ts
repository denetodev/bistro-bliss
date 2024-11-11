import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../../shared/interfaces/blog.interface';
import { BlogService } from '../../../shared/services/blog.service';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss'],
})
export class BlogSectionComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.blogService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (error) => {
        console.error('Erro ao carregar posts:', error);
        // Aqui você pode adicionar uma lógica de tratamento de erro
      },
    });
  }
}
