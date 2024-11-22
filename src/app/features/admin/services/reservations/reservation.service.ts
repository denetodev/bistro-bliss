import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Reservation } from '../../interfaces/reservation.interface';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private mockReservations: Reservation[] = [
    {
      id: 1,
      date: '2024-03-20',
      time: '19:00',
      name: 'João Silva',
      contact: '(11) 99999-9999',
      people: 4,
      status: 'Pendente',
    },
    // Adicione mais dados mock aqui
  ];

  getReservations(): Observable<Reservation[]> {
    return of(this.mockReservations).pipe(delay(500)); // Simula delay de rede
  }

  updateReservationStatus(
    id: number,
    status: 'Confirmada' | 'Cancelada'
  ): Observable<Reservation> {
    const reservation = this.mockReservations.find((r) => r.id === id);
    if (reservation) {
      reservation.status = status;
    }
    return of(reservation!).pipe(delay(300));
  }
}
