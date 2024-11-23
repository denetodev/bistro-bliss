import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { MessageService } from 'primeng/api';
import { Post } from '../../../interfaces/post.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  providers: [MessageService],
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  postId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      coverImage: [null],
      content: ['', Validators.required],
      tags: [[]],
    });
  }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['id']
      ? +this.route.snapshot.params['id']
      : null;
    if (this.postId) {
      this.loadPost();
    }
  }

  loadPost(): void {
    this.postService.getPosts().subscribe((posts) => {
      const post = posts.find((p) => p.id === this.postId);
      if (post) {
        this.postForm.patchValue(post);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Post não encontrado',
        });
        this.router.navigate(['/admin/posts']);
      }
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const post: Post = this.postForm.value;
      if (this.postId) {
        this.postService.updatePost(this.postId, post).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Post atualizado com sucesso',
            });
            this.router.navigate(['/admin/posts']);
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Erro ao atualizar post',
            });
          },
        });
      } else {
        this.postService.createPost(post).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Post criado com sucesso',
            });
            this.router.navigate(['/admin/posts']);
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Erro ao criar post',
            });
          },
        });
      }
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Por favor, preencha todos os campos obrigatórios',
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/admin/posts']);
  }
}
