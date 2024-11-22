export interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: ContactStatus;
  createdAt: Date;
  readAt?: Date;
}

export enum ContactStatus {
  NEW = 'NEW',
  POSITIVE = 'POSITIVE',
  NEGATIVE = 'NEGATIVE',
}
