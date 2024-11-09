export interface Dish {
  imageUrl: string;
  price: number;
  title: string;
  description: string;
  category: string; // categoria para filtro (ex: 'Café da Manhã', 'Prato Principal', etc.)
}
