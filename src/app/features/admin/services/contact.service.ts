import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact, ContactStatus } from '../interfaces/contact.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contacts`;

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`);
  }

  createContact(contact: Omit<Contact, 'id'>): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateStatus(id: number, status: ContactStatus): Observable<Contact> {
    return this.http.patch<Contact>(`${this.apiUrl}/${id}/status`, { status });
  }

  markAsRead(id: number): Observable<Contact> {
    return this.http.patch<Contact>(`${this.apiUrl}/${id}/read`, {
      readAt: new Date(),
    });
  }

  getUnreadContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/unread`);
  }

  getContactsByStatus(status: ContactStatus): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/status/${status}`);
  }
}
