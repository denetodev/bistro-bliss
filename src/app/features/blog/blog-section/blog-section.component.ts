import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../../shared/interfaces/blog.interface';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss'],
})
export class BlogSectionComponent implements OnInit {
  posts: BlogPost[] = [
    {
      id: 1,
      title: 'A Arte da Culinária Italiana',
      description:
        'Descubra os segredos por trás dos pratos mais tradicionais da Itália.',
      content: 'Conteúdo completo do post...',
      imageUrl: '/assets/images/italian-cuisine.jpg',
      publishDate: new Date('2024-03-15'),
      author: 'Chef Maria Silva',
      category: 'Culinária Internacional',
      tags: ['Italiana', 'Massas', 'Tradicional'],
    },
    // Adicione mais posts mockados aqui
  ];

  ngOnInit(): void {
    // Aqui você pode adicionar lógica para carregar os posts de um serviço
  }
}
