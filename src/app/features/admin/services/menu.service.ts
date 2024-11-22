import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem, MenuCategory } from '../interfaces/menu.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl = `${environment.apiUrl}/menu`;

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl);
  }

  getMenuItem(id: number): Observable<MenuItem> {
    return this.http.get<MenuItem>(`${this.apiUrl}/${id}`);
  }

  createMenuItem(menuItem: Omit<MenuItem, 'id'>): Observable<MenuItem> {
    return this.http.post<MenuItem>(this.apiUrl, menuItem);
  }

  updateMenuItem(
    id: number,
    menuItem: Partial<MenuItem>
  ): Observable<MenuItem> {
    return this.http.put<MenuItem>(`${this.apiUrl}/${id}`, menuItem);
  }

  deleteMenuItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  deleteMultipleMenuItems(ids: number[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/delete-multiple`, { ids });
  }

  updateAvailability(id: number, isAvailable: boolean): Observable<MenuItem> {
    return this.http.patch<MenuItem>(`${this.apiUrl}/${id}/availability`, {
      isAvailable,
    });
  }

  getCategories(): MenuCategory[] {
    return Object.values(MenuCategory);
  }

  getMenuItemsByCategory(category: MenuCategory): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${this.apiUrl}/category/${category}`);
  }
}
