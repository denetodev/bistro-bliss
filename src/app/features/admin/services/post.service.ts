import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Post } from '../interfaces/post.interface';
import { environment } from '../../../../environments/environment';
import { MOCK_POSTS } from './mocks/posts.mock';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = `${environment.apiUrl}/posts`;
  private posts: Post[] = [...MOCK_POSTS];
  private mockDelay = 500; // Simula delay de rede

  constructor(private http: HttpClient) {}

  // GET: Buscar todos os posts
  getPosts(): Observable<Post[]> {
    // Implementação real
    // return this.http.get<Post[]>(this.apiUrl);

    // Mock implementation
    return of([...this.posts]).pipe(
      delay(this.mockDelay),
      tap((posts) => console.log('Posts carregados:', posts))
    );
  }

  // GET: Buscar post por ID
  getPostById(id: number): Observable<Post> {
    // Implementação real
    // return this.http.get<Post>(`${this.apiUrl}/${id}`);

    // Mock implementation
    const post = this.posts.find((p) => p.id === id);
    if (!post) {
      return throwError(() => new Error('Post não encontrado'));
    }
    return of(post).pipe(delay(this.mockDelay));
  }

  // POST: Criar novo post
  createPost(post: Post): Observable<Post> {
    // Implementação real
    // return this.http.post<Post>(this.apiUrl, post);

    // Mock implementation
    const newPost: Post = {
      ...post,
      id: Math.max(...this.posts.map((p) => p.id ?? 0)) + 1,
      createdAt: new Date(),
    };
    this.posts.push(newPost);
    return of(newPost).pipe(
      delay(this.mockDelay),
      tap((p) => console.log('Post criado:', p))
    );
  }

  // PUT: Atualizar post existente
  updatePost(id: number, post: Post): Observable<Post> {
    // Implementação real
    // return this.http.put<Post>(`${this.apiUrl}/${id}`, post);

    // Mock implementation
    const index = this.posts.findIndex((p) => p.id === id);
    if (index === -1) {
      return throwError(() => new Error('Post não encontrado'));
    }
    const updatedPost: Post = {
      ...post,
      id,
      createdAt: this.posts[index].createdAt,
    };
    this.posts[index] = updatedPost;
    return of(updatedPost).pipe(
      delay(this.mockDelay),
      tap((p) => console.log('Post atualizado:', p))
    );
  }

  // DELETE: Excluir post
  deletePost(id: number): Observable<void> {
    // Implementação real
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);

    // Mock implementation
    const index = this.posts.findIndex((p) => p.id === id);
    if (index === -1) {
      return throwError(() => new Error('Post não encontrado'));
    }
    this.posts.splice(index, 1);
    return of(void 0).pipe(
      delay(this.mockDelay),
      tap(() => console.log('Post excluído:', id))
    );
  }

  // DELETE: Excluir todos os posts
  deleteAllPosts(): Observable<void> {
    // Implementação real
    // return this.http.delete<void>(`${this.apiUrl}/all`);

    // Mock implementation
    this.posts = [];
    return of(void 0).pipe(
      delay(this.mockDelay),
      tap(() => console.log('Todos os posts foram excluídos'))
    );
  }

  // POST: Upload de imagem
  uploadImage(file: File): Observable<string> {
    // Implementação real usando FormData
    // const formData = new FormData();
    // formData.append('file', file);
    // return this.http.post<{url: string}>(`${this.apiUrl}/upload`, formData)
    //   .pipe(map(response => response.url));

    // Mock implementation
    return of(`assets/images/posts/${file.name}`).pipe(
      delay(this.mockDelay),
      tap((url) => console.log('Imagem enviada:', url))
    );
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      // Adicione outros headers necessários (ex: Authorization)
    });
  }

  private handleError(error: any) {
    console.error('Erro na operação:', error);
    return throwError(() => new Error('Ocorreu um erro na operação. Por favor, tente novamente.'));
  }
}
