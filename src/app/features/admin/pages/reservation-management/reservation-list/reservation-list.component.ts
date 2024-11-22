import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../services/reservations/reservation.service';
import { Reservation } from '../../../interfaces/reservation.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss'],
  providers: [MessageService],
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];
  loading: boolean = true;

  constructor(
    private reservationService: ReservationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.loading = true;
    this.reservationService.getReservations().subscribe({
      next: (data) => {
        this.reservations = data;
        this.loading = false;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao carregar reservas',
        });
        this.loading = false;
      },
    });
  }

  updateStatus(id: number, status: 'Confirmada' | 'Cancelada'): void {
    this.reservationService.updateReservationStatus(id, status).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: `Reserva ${status.toLowerCase()} com sucesso`,
        });
        this.loadReservations();
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao atualizar status',
        });
      },
    });
  }

  getStatusSeverity(status: string): 'success' | 'danger' | 'warning' {
    switch (status) {
      case 'Confirmada':
        return 'success';
      case 'Cancelada':
        return 'danger';
      default:
        return 'warning';
    }
  }
}
