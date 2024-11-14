import { NgModule } from '@angular/core';
import { ButtonComponent } from './home-components/button/button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent,
    // ... outros componentes
  ],
  imports: [
    CommonModule, // Para ngClass
    RouterModule, // Para routerLink
  ],
  exports: [
    ButtonComponent,
    CommonModule,
    RouterModule,
    // ... outros componentes
  ],
})
export class SharedModule {}
