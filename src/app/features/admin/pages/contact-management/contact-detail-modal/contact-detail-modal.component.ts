import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

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
  selector: 'app-contact-detail-modal',
  templateUrl: './contact-detail-modal.component.html',
  styleUrl: './contact-detail-modal.component.scss',
  providers: [MessageService]
})
export class ContactDetailModalComponent implements OnInit {
  contact!: Contact;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.contact = this.config.data;
  }

  updateStatus(newStatus: 'Positivo' | 'Negativo') {
    this.contact.status = newStatus;
    // Aqui você implementará a lógica para atualizar o status no backend
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: `Status atualizado para ${newStatus}`
    });
    this.ref.close(this.contact);
  }
}
