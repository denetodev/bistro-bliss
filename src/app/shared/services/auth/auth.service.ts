import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../../environments/environment';

interface AuthResponse {
  token: string;
  user: {
    id: number;
    username: string;
    role: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private tokenKey = 'auth_token';
  private userSubject = new BehaviorSubject<any>(null);
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.checkToken();
    }
  }

  login(username: string, password: string): Observable<any> {
    // Simulação temporária de login
    if (username === 'admin' && password === 'admin123') {
      const mockResponse = {
        token: 'fake-jwt-token',
        user: {
          id: 1,
          username: 'admin',
          role: 'admin'
        }
      };
      
      if (this.isBrowser) {
        localStorage.setItem(this.tokenKey, mockResponse.token);
        this.userSubject.next(mockResponse.user);
      }
      
      return of(mockResponse);
    }
    
    return throwError(() => new Error('Credenciais inválidas'));
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.tokenKey);
      this.userSubject.next(null);
    }
  }

  isAuthenticated(): boolean {
    return this.isBrowser ? !!this.getToken() : false;
  }

  getToken(): string | null {
    return this.isBrowser ? localStorage.getItem(this.tokenKey) : null;
  }

  private checkToken(): void {
    if (this.isBrowser) {
      const token = this.getToken();
      if (token) {
        // Opcional: Validar token com o backend
        // this.validateToken(token).subscribe();
      }
    }
  }

  // Getter para o usuário atual
  getCurrentUser(): Observable<any> {
    return this.userSubject.asObservable();
  }
}
