export interface MenuItem {
  id?: string;
  name: string;
  category: string;
  price: number;
  status: 'Draft' | 'Published';
  description?: string;
  code?: string;
  sku?: string;
  images?: string[];
  inStock?: boolean;
}
