import { Component, Input } from '@angular/core';
import { Testimonial } from '../../../shared/interfaces/testimonial.interface';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: '"Comida deliciosa"',
      text: 'Adoro pedir aqui! A comida sempre chega quente e bem embalada. O atendimento é super rápido e atencioso. Recomendo muito!',
      author: {
        name: 'Sofia Araújo',
        location: 'Brasília, DF',
        image: '../../../../assets/images/home/sofia-araujo.jpg',
      },
    },
    {
      quote: '"Melhor restaurante da cidade!"',
      text: 'Já fui várias vezes e nunca me decepcionei. O ambiente é agradável, o cardápio variado e o sabor é incrível. Vale cada visita!',
      author: {
        name: 'Mateus Caio',
        location: 'Gama, DF',
        image: '../../../../assets/images/home/mateus-caio.jpg',
      },
    },
    {
      quote: '"Entrega rápida e pratos incríveis!"',
      text: 'Fiquei impressionada com a agilidade na entrega. Além disso, os pratos são bem servidos e muito saborosos. Com certeza virei cliente fiel!',
      author: {
        name: 'Andreia Silva',
        location: 'Taguatinga, DF',
        image: '../../../../assets/images/home/andreia-silva.jpg',
      },
    },
  ];
}
