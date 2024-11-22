import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private mockContacts: Contact[] = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      subject: 'Reserva para Evento',
      message: 'Gostaria de fazer uma reserva para 20 pessoas...',
      status: null,
    },
    // Adicione mais contatos mock aqui
  ];

  getContacts(): Observable<Contact[]> {
    return of(this.mockContacts);
  }

  updateContactStatus(
    id: number,
    status: 'positive' | 'negative'
  ): Observable<void> {
    const contact = this.mockContacts.find((c) => c.id === id);
    if (contact) {
      contact.status = status;
    }
    return of(void 0);
  }
}
