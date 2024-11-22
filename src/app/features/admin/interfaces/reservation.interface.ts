export type ReservationStatus = 'Pendente' | 'Confirmada' | 'Cancelada';

export interface Reservation {
  id: number;
  date: string;
  time: string;
  name: string;
  contact: string;
  people: number;
  status: ReservationStatus;
}
