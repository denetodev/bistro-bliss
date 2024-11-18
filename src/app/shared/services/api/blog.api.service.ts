import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiResponse, PaginatedResponse } from '../../interfaces/api.interface';
import { BlogPost } from '../../interfaces/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogApiService {
  private apiUrl = `${environment.apiUrl}/posts`;

  constructor(private http: HttpClient) {}

  getPosts(page = 0, size = 10): Observable<PaginatedResponse<BlogPost>> {
    return this.http.get<PaginatedResponse<BlogPost>>(
      `${this.apiUrl}?page=${page}&size=${size}`
    );
  }

  createPost(post: BlogPost): Observable<ApiResponse<BlogPost>> {
    return this.http.post<ApiResponse<BlogPost>>(this.apiUrl, post);
  }

  updatePost(id: number, post: BlogPost): Observable<ApiResponse<BlogPost>> {
    return this.http.put<ApiResponse<BlogPost>>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
