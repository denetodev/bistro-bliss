import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../../interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private mockProducts: Product[] = [
    {
      id: 1,
      name: 'Café Expresso',
      price: 5.9,
      code: 'CAF001',
      sku: 'EXP-001',
      image: 'assets/images/menu/cafe-expresso.jpg',
      description: 'Café expresso tradicional',
      category: 'Bebidas',
      availability: true,
    },
    // Adicione mais produtos mock aqui
  ];

  getProducts(): Observable<Product[]> {
    return of(this.mockProducts).pipe(delay(500));
  }

  createProduct(product: Omit<Product, 'id'>): Observable<Product> {
    const newProduct = {
      ...product,
      id: this.mockProducts.length + 1,
    };
    this.mockProducts.push(newProduct);
    return of(newProduct).pipe(delay(500));
  }

  updateProduct(id: number, product: Partial<Product>): Observable<Product> {
    const index = this.mockProducts.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.mockProducts[index] = { ...this.mockProducts[index], ...product };
      return of(this.mockProducts[index]).pipe(delay(500));
    }
    throw new Error('Produto não encontrado');
  }

  deleteProduct(id: number): Observable<void> {
    const index = this.mockProducts.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.mockProducts.splice(index, 1);
      return of(void 0).pipe(delay(500));
    }
    throw new Error('Produto não encontrado');
  }

  deleteAllProducts(): Observable<void> {
    this.mockProducts = [];
    return of(void 0).pipe(delay(500));
  }

  toggleAvailability(id: number): Observable<Product> {
    const product = this.mockProducts.find((p) => p.id === id);
    if (product) {
      product.availability = !product.availability;
      return of(product).pipe(delay(500));
    }
    throw new Error('Produto não encontrado');
  }
}
