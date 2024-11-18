import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <form (ngSubmit)="onSubmit()">
        <h2>Login Administrativo</h2>
        <div class="form-group">
          <input type="text" [(ngModel)]="username" name="username" placeholder="Usuário">
        </div>
        <div class="form-group">
          <input type="password" [(ngModel)]="password" name="password" placeholder="Senha">
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    form {
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 15px;
    }
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
    }
  `]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Erro no login:', error);
        // Adicione tratamento de erro aqui
      }
    });
  }
} 