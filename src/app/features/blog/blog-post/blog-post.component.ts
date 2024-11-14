import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../../../shared/interfaces/blog.interface';
import { BlogService } from '../../../shared/services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  post?: BlogPost;
  content: string = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.blogService.getPostById(id).subscribe({
        next: (post) => {
          if (post) {
            this.post = post;
            if (post.contentUrl) {
              this.loadPostContent(post.contentUrl);
            }
          }
        },
        error: (error: Error) => {
          console.error('Erro ao carregar post:', error);
        },
      });
    }
  }

  private loadPostContent(url: string): void {
    this.blogService.getPostContent(url).subscribe({
      next: (content: string) => {
        this.content = content;
      },
      error: (error: Error) => {
        console.error('Erro ao carregar conteúdo HTML:', error);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }
}
