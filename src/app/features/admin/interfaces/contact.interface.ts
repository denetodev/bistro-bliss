export interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status?: 'positive' | 'negative' | null;
}
