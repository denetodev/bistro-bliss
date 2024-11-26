import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ContactDetailModalComponent } from '../contact-detail-modal/contact-detail-modal.component';

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status?: 'Pendente' | 'Positivo' | 'Negativo';
  createdAt: Date;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [DialogService],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      subject: 'Contato sobre evento',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti quaerat magni? Consequatur ad magni natus quia! Voluptatibus explicabo vitaehic aliquid a! Nam dolorum, doloribus repudiandae aperiam maxime quis?',
      status: 'Pendente',
      createdAt: new Date(),
    },
    // Adicione mais contatos conforme necessário
  ];

  constructor(private dialogService: DialogService) {}

  ngOnInit() {}

  showDetails(contact: Contact) {
    this.dialogService.open(ContactDetailModalComponent, {
      data: contact,
      header: 'Detalhes do Contato',
      width: '50rem',
      modal: true,
      dismissableMask: true,
      closeOnEscape: true,
    });
  }

  updateStatus(contactId: number, newStatus: 'Positivo' | 'Negativo') {
    const contact = this.contacts.find((c) => c.id === contactId);
    if (contact) {
      contact.status = newStatus;
      // Aqui você pode adicionar a chamada para o seu serviço
      // this.contactService.updateStatus(contactId, newStatus).subscribe(...);
    }
  }
}
