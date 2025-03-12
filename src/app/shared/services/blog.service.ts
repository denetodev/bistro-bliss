import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlogPost } from '../interfaces/blog.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'sua-api-url/posts'; // Será usado posteriormente

  // Dados mockados para desenvolvimento
  private posts: BlogPost[] = [
    {
      id: '1',
      title: 'Como fazer um churrasco perfeito',
      content: 'Conteúdo sobre churrasco...',
      status: 'Published',
      category: 'Culinária',
      imageUrl: '/assets/images/blog/churrasco.jpg',
      tags: ['churrasco', 'carne', 'dicas'],
      author: 'Chef João Silva',
      publishDate: new Date('2024-01-15'),
      meta: {
        title: 'Guia definitivo para um churrasco perfeito',
        description: 'Aprenda todas as técnicas...',
      },
      visibility: 'Public',
    },
    {
      id: '2',
      title: 'Drinks para o verão',
      content:
        'aquiiiiiiiiiiiii vaiiiiiiiiii o conteuuuuuuuuuuuuuudooooooooooo doooooooo pooooooooooooosssssssssssttttttttttttt',
      status: 'Published',
      category: 'Bebidas',
      imageUrl: '/assets/images/blog/drinks.jpg',
      tags: ['drinks', 'verão', 'cocktails'],
      author: 'Bartender Maria Santos',
      publishDate: new Date('2024-01-20'),
      meta: {
        title: 'Os melhores drinks para o verão',
        description: 'Receitas refrescantes...',
      },
      visibility: 'Public',
    },
    // Adicione mais posts conforme necessário
  ];

  constructor(private http: HttpClient) {}

  // Métodos temporários usando dados mockados
  getPosts(): Observable<BlogPost[]> {
    return of(this.posts); // Retorna os dados mockados
  }

  getPostById(id: string | number): Observable<BlogPost> {
    const post = this.posts.find((p) => p.id?.toString() === id.toString());
    if (post) {
      return of(post);
    }
    return throwError(() => new Error('Post não encontrado'));
  }

  createPost(post: BlogPost): Observable<BlogPost> {
    const newPost = { ...post, id: (this.posts.length + 1).toString() };
    this.posts.push(newPost);
    return of(newPost);
  }

  updatePost(post: BlogPost): Observable<BlogPost> {
    const index = this.posts.findIndex((p) => p.id === post.id);
    if (index !== -1) {
      this.posts[index] = post;
      return of(post);
    }
    return throwError(() => new Error('Post não encontrado'));
  }

  deletePost(id: string | number): Observable<void> {
    const index = this.posts.findIndex(
      (p) => p.id?.toString() === id.toString()
    );
    if (index !== -1) {
      this.posts.splice(index, 1);
      return of(void 0);
    }
    return throwError(() => new Error('Post não encontrado'));
  }

  getPostContent(url: string): Observable<string> {
    // Simula o carregamento do conteúdo
    return of(`
      <h1>Conteúdo do Post</h1>
      <p>Este é um conteúdo de exemplo para o post.</p>
      <p>Em um ambiente real, este conteúdo seria carregado da API ou de um arquivo.</p>
    `);
  }

  // Mantenha o método handleError para uso futuro com a API real
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro na operação.';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Código: ${error.status}, Mensagem: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
