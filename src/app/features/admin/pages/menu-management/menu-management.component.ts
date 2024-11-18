import { Component } from '@angular/core';
import { MenuItem } from '../../../../shared/interfaces/menu.interface';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.scss']
})
export class MenuManagementComponent {
  showForm = false;
  menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Picanha na Brasa',
      category: 'Pratos Principais',
      price: 89.90,
      status: 'Published',
      description: 'Picanha grelhada com arroz, farofa e vinagrete',
      inStock: true
    },
    {
      id: '2',
      name: 'Pudim de Leite',
      category: 'Sobremesas',
      price: 15.90,
      status: 'Draft',
      description: 'Pudim de leite condensado tradicional',
      inStock: true
    }
    // Adicione mais itens conforme necessário
  ];

  onCreateNew() {
    this.showForm = true;
  }

  onEdit(item: MenuItem) {
    this.showForm = true;
    // Lógica para editar item existente
  }

  onDelete(item: MenuItem) {
    // Lógica para deletar item
    if (confirm(`Deseja realmente excluir o item "${item.name}"?`)) {
      // Implemente a lógica de exclusão
      console.log('Item deletado:', item);
    }
  }
}
