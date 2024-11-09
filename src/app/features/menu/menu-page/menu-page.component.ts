import { Component } from '@angular/core';
import { Dish } from '../../../shared/interfaces/menu-page.interface';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent {
  dishes: Dish[] = [
    {
      imageUrl: '../../../../assets/images/menu/ovo-frito.jpg',
      price: 9.99,
      title: 'Ovos Fritos',
      description:
        'Clássicos ovos fritos, perfeitos para começar o dia com sabor e simplicidade.',
      category: 'Café da Manhã',
    },
    {
      imageUrl: '../../../../assets/images/menu/pizza.jpg',
      price: 15.99,
      title: 'Pizza da Casa',
      description:
        'Deliciosa pizza de calabresa, com queijo derretido e tempero especial da casa.',
      category: 'Prato Principal',
    },
    {
      imageUrl: '../../../../assets/images/menu/martinez.jpg',
      price: 7.25,
      title: 'Coquetel Martinez',
      description:
        'Elegante e equilibrado coquetel à base de gin e vermute doce.',
      category: 'Bebidas',
    },
    {
      imageUrl: '../../../../assets/images/menu/bolo-caramelo.jpg',
      price: 20.99,
      title: 'Bolo de Caramelo',
      description: 'Bolo macio com uma irresistível cobertura de caramelo.',
      category: 'Sobremesas',
    },
    {
      imageUrl: '../../../../assets/images/menu/caipirinha.jpg',
      price: 5.89,
      title: 'Caipirinha',
      description:
        'Tradicional caipirinha brasileira, com limão fresco e cachaça de qualidade.',
      category: 'Bebidas',
    },
    {
      imageUrl: '../../../../assets/images/menu/icecream.jpg',
      price: 18.05,
      title: 'Sorvete de Chocolate',
      description:
        'Sorvete cremoso de chocolate, perfeito para os amantes de doces.',
      category: 'Sobremesas',
    },
    {
      imageUrl: '../../../../assets/images/menu/cheese-burger.jpg',
      price: 12.55,
      title: 'Cheese Burger',
      description:
        'Hambúrguer suculento com queijo derretido, servido no pão macio.',
      category: 'Prato Principal',
    },
    {
      imageUrl: '../../../../assets/images/menu/waffles.jpg',
      price: 12.99,
      title: 'Waffles Clássicos',
      description:
        'Waffles dourados e crocantes, perfeitos com mel ou frutas frescas.',
      category: 'Sobremesas',
    },
  ];

  categories: string[] = [
    'Todos',
    'Café da Manhã',
    'Prato Principal',
    'Bebidas',
    'Sobremesas',
  ];
  selectedCategory: string = 'Todos';

  get filteredDishes(): Dish[] {
    if (this.selectedCategory === 'Todos') {
      return this.dishes;
    }
    return this.dishes.filter(
      (dish) => dish.category === this.selectedCategory
    );
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
