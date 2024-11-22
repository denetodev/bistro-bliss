import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.apiUrl}/posts`, post);
  }

  // ... outros métodos
}
