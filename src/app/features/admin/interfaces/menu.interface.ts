export interface MenuItem {
  id: number;
  name: string;
  price: number;
  productCode: string;
  sku: string;
  coverImage: string;
  description: string;
  category: MenuCategory;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum MenuCategory {
  BREAKFAST = 'BREAKFAST',
  MAIN_COURSE = 'MAIN_COURSE',
  DRINKS = 'DRINKS',
  DESSERTS = 'DESSERTS',
}
