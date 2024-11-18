import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../../../shared/interfaces/blog.interface';
import { BlogService } from '../../../../shared/services/blog.service';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.scss'],
})
export class PostManagementComponent implements OnInit {
  showForm = false;
  blogPosts: BlogPost[] = [];
  isLoading = false;
  errorMessage = '';
  selectedPost?: BlogPost;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.isLoading = true;
    this.errorMessage = '';

    this.blogService.getPosts().subscribe(
      (posts) => {
        this.blogPosts = posts;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage =
          'Erro ao carregar os posts. Tente novamente mais tarde.';
        console.error('Erro:', error);
        this.isLoading = false;
      }
    );
  }

  onCreateNew() {
    this.selectedPost = undefined;
    this.showForm = true;
  }

  onEdit(post: BlogPost) {
    this.selectedPost = { ...post };
    this.showForm = true;
  }

  onDelete(post: BlogPost) {
    if (confirm(`Deseja realmente excluir o post "${post.title}"?`)) {
      this.isLoading = true;
      this.errorMessage = '';

      this.blogService.deletePost(post.id!).subscribe({
        next: () => {
          this.loadPosts();
          // Opcional: Adicionar mensagem de sucesso
        },
        error: (error) => {
          this.errorMessage = 'Erro ao excluir o post.';
          console.error('Erro:', error);
          this.isLoading = false;
        },
      });
    }
  }

  onSavePost(post: BlogPost) {
    this.isLoading = true;
    this.errorMessage = '';

    const operation = post.id
      ? this.blogService.updatePost(post)
      : this.blogService.createPost(post);

    operation.subscribe({
      next: () => {
        this.showForm = false;
        this.loadPosts();
        // Opcional: Adicionar mensagem de sucesso
      },
      error: (error) => {
        this.errorMessage = 'Erro ao salvar o post.';
        console.error('Erro:', error);
        this.isLoading = false;
      },
    });
  }

  onCancelForm() {
    this.showForm = false;
    this.selectedPost = undefined;
  }
}
