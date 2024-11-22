import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Reservation,
  ReservationStatus,
} from '../interfaces/reservation.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = `${environment.apiUrl}/reservations`;

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl);
  }

  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/${id}`);
  }

  createReservation(
    reservation: Omit<Reservation, 'id'>
  ): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation);
  }

  updateReservation(
    id: number,
    reservation: Partial<Reservation>
  ): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/${id}`, reservation);
  }

  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateStatus(id: number, status: ReservationStatus): Observable<Reservation> {
    return this.http.patch<Reservation>(`${this.apiUrl}/${id}/status`, {
      status,
    });
  }

  getReservationsByDate(date: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/date/${date}`);
  }

  getReservationsByStatus(
    status: ReservationStatus
  ): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/status/${status}`);
  }
}
