import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../../services/menu/menu.service';
import { Product } from '../../../interfaces/menu.interface';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class MenuListComponent implements OnInit {
  products: Product[] = [];
  selectedProducts: Product[] = [];
  loading: boolean = true;

  constructor(
    private menuService: MenuService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.menuService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao carregar produtos',
        });
        this.loading = false;
      },
    });
  }

  onToggleAvailability(id: number): void {
    this.menuService.toggleAvailability(id).subscribe({
      next: (product) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: `Disponibilidade alterada com sucesso`,
        });
        this.loadProducts();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao alterar disponibilidade',
        });
      },
    });
  }

  confirmDelete(product: Product): void {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja excluir o produto "${product.name}"?`,
      header: 'Confirmar Exclusão',
      icon: 'pi pi-exclamation-triangle',
      accept: () => this.deleteProduct(product.id),
    });
  }

  deleteProduct(id: number): void {
    this.menuService.deleteProduct(id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Produto excluído com sucesso',
        });
        this.loadProducts();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao excluir produto',
        });
      },
    });
  }

  confirmDeleteSelected(): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir todos os produtos selecionados?',
      header: 'Confirmar Exclusão',
      icon: 'pi pi-exclamation-triangle',
      accept: () => this.deleteSelectedProducts(),
    });
  }

  deleteSelectedProducts(): void {
    // Implementar lógica para excluir múltiplos produtos
  }

  editProduct(id: number): void {
    this.router.navigate(['/admin/menu/edit', id]);
  }

  createProduct(): void {
    this.router.navigate(['/admin/menu/new']);
  }
}
