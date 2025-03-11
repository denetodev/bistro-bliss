import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Módulos do PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';

// Módulos do Projeto
import { SharedModule } from '../../shared/components/shared.module';
import { BlogModule } from '../../features/blog/blog.module';
import { AuthModule } from '../../features/auth/auth.module';

// Componentes Exclusivos do Admin (se houver)
import { DashboardComponent } from './pages/dashboard/dashboard.component'; // Exemplo

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

    // Módulos do PrimeNG
    ButtonModule,
    CardModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    InputTextareaModule,

    // Módulos do Projeto
    SharedModule,
    BlogModule,
    AuthModule,
  ],
  providers: [provideHttpClient(withFetch())],
})
export class AdminModule {}
