import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../interfaces/contact.interface';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  selectedContact: Contact | null = null;
  displayModal: boolean = false;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  showContactDetails(contact: Contact): void {
    this.selectedContact = contact;
    this.displayModal = true;
  }

  updateStatus(contact: Contact, status: 'positive' | 'negative'): void {
    this.contactService
      .updateContactStatus(contact.id, status)
      .subscribe(() => {
        this.loadContacts();
      });
  }
}
