import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../../services/menu/menu.service';
import { Product } from '../../../interfaces/menu.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss'],
  providers: [MessageService],
})
export class MenuEditComponent implements OnInit {
  productForm: FormGroup;
  productId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private menuService: MenuService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      code: ['', Validators.required],
      sku: ['', Validators.required],
      image: [null],
      description: [''],
      category: ['', Validators.required],
      availability: [false],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = +id;
      this.loadProduct();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'ID do produto não encontrado',
      });
      this.router.navigate(['/admin/menu']);
    }
  }

  loadProduct(): void {
    this.menuService.getProducts().subscribe((products) => {
      const product = products.find((p) => p.id === this.productId);
      if (product) {
        this.productForm.patchValue(product);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Produto não encontrado',
        });
        this.router.navigate(['/admin/menu']);
      }
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.menuService
        .updateProduct(this.productId, this.productForm.value)
        .subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Produto atualizado com sucesso',
            });
            this.router.navigate(['/admin/menu']);
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Erro ao atualizar produto',
            });
          },
        });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Por favor, preencha todos os campos obrigatórios',
      });
    }
  }
}
