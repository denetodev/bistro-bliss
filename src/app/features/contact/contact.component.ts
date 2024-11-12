import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  handleSubmit() {
    // Lógica para lidar com o envio do formulário
    console.log('Formulário enviado');
  }
}
