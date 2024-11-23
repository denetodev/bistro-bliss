// post-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  selectedPosts: Post[] = [];

  constructor(
    private postService: PostService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao carregar posts',
        });
      },
    });
  }

  onEdit(post: Post): void {
    this.router.navigate(['/admin/posts/edit', post.id]);
  }

  onDelete(post: Post): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este post?',
      accept: () => {
        this.postService.deletePost(post.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Post excluído com sucesso',
            });
            this.loadPosts();
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Erro ao excluir post',
            });
          },
        });
      },
    });
  }

  deleteSelectedPosts(): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir os posts selecionados?',
      accept: () => {
        this.postService.deleteAllPosts().subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Posts excluídos com sucesso',
            });
            this.selectedPosts = [];
            this.loadPosts();
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Erro ao excluir posts',
            });
          },
        });
      },
    });
  }
}
