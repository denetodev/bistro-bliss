import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent {
  menuItem = {
    name: '',
    price: '',
    code: '',
    sku: '',
    status: 'Draft',
    tags: [],
    category: '',
    images: [],
    inStock: true
  };

  categories = ['Entradas', 'Pratos Principais', 'Sobremesas', 'Bebidas'];

  onSave() {
    console.log('Item salvo:', this.menuItem);
  }

  onDiscard() {
    console.log('Alterações descartadas');
  }

  onImageDrop(event: any) {
    // Implementar lógica de upload de imagem
  }
} 