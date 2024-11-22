export interface Reservation {
  id: number;
  customerName: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  numberOfPeople: number;
  status: ReservationStatus;
  specialRequests?: string;
  createdAt: Date;
}

export enum ReservationStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
}
