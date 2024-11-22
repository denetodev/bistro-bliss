export type ProductCategory =
  | 'Café da Manhã'
  | 'Prato Principal'
  | 'Bebidas'
  | 'Sobremesas';

export interface Product {
  id: number;
  name: string;
  price: number;
  code: string;
  sku: string;
  image: string;
  description: string;
  category: ProductCategory;
  availability: boolean;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
  // Outros campos conforme necessário
}

export type MenuCategory = ProductCategory;
