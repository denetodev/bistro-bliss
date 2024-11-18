import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../../interfaces/menu.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuApiService {
  private apiUrl = `${environment.apiUrl}/menu`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl);
  }

  getById(id: string): Observable<MenuItem> {
    return this.http.get<MenuItem>(`${this.apiUrl}/${id}`);
  }

  create(item: MenuItem): Observable<MenuItem> {
    return this.http.post<MenuItem>(this.apiUrl, item);
  }

  update(id: string, item: MenuItem): Observable<MenuItem> {
    return this.http.put<MenuItem>(`${this.apiUrl}/${id}`, item);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
