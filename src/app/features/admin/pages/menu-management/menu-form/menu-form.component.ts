import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      code: ['', Validators.required],
      sku: ['', Validators.required],
      image: [null],
      description: [''],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      // Lógica para salvar o produto
      console.log(this.productForm.value);
    } else {
      // Lógica para exibir erros de validação
    }
  }

  onCancel() {
    this.router.navigate(['/admin/menu']); // Navega de volta para a lista de menus
  }
}
