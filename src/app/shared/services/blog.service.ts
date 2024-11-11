import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPost } from '../interfaces/blog.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      id: 1,
      title: 'Como preparar um delicioso sushi sem glúten',
      description:
        'Aprenda a fazer sushi com alternativas sem glúten que mantêm todo o sabor tradicional.',
      content: '', // Será carregado dinamicamente
      contentUrl: '/assets/posts/post1.html',
      imageUrl: '/assets/images/blog/sushi.jpg',
      publishDate: new Date('2024-01-03'),
      author: 'Chef Maria Silva',
      category: 'Culinária Japonesa',
      tags: ['Sem Glúten', 'Sushi', 'Japonesa'],
    },
    {
      id: 2,
      title: 'Pratos típicos da culinária mineira',
      description:
        'Explore os sabores autênticos das receitas tradicionais de Minas Gerais.',
      content: '',
      contentUrl: '/assets/posts/post2.html',
      imageUrl: '/assets/images/blog/mineira.jpg',
      publishDate: new Date('2024-01-15'),
      author: 'Chef João Santos',
      category: 'Culinária Brasileira',
      tags: ['Mineira', 'Tradicional', 'Brasil'],
    },
    {
      id: 3,
      title: 'Sobremesas veganas para o verão',
      description: 'Receitas refrescantes e saudáveis para os dias quentes.',
      content: '',
      contentUrl: '/assets/posts/post3.html',
      imageUrl: '/assets/images/blog/vegana.jpg',
      publishDate: new Date('2024-02-01'),
      author: 'Chef Ana Oliveira',
      category: 'Sobremesas',
      tags: ['Vegano', 'Sobremesas', 'Verão'],
    },
    {
      id: 4,
      title: 'Técnicas avançadas de churrasco',
      description:
        'Dicas profissionais para elevar seu churrasco ao próximo nível.',
      content: '',
      contentUrl: '/assets/posts/post4.html',
      imageUrl: '/assets/images/blog/churrasco.jpg',
      publishDate: new Date('2024-02-15'),
      author: 'Chef Pedro Almeida',
      category: 'Carnes',
      tags: ['Churrasco', 'Carnes', 'Técnicas'],
    },
    {
      id: 5,
      title: 'Café da manhã fit e nutritivo',
      description: 'Receitas práticas e saudáveis para começar bem o dia.',
      content: '',
      contentUrl: '/assets/posts/post5.html',
      imageUrl: '/assets/images/blog/cafe-manha.jpg',
      publishDate: new Date('2024-03-01'),
      author: 'Nutricionista Laura Costa',
      category: 'Alimentação Saudável',
      tags: ['Fit', 'Café da Manhã', 'Saudável'],
    },
    {
      id: 6,
      title: 'Drinks sem álcool para festas',
      description: 'Mocktails criativos e refrescantes para todas as ocasiões.',
      content: '',
      contentUrl: '/assets/posts/post6.html',
      imageUrl: '/assets/images/blog/drinks.jpg',
      publishDate: new Date('2024-03-15'),
      author: 'Mixologista Carlos Lima',
      category: 'Bebidas',
      tags: ['Drinks', 'Sem Álcool', 'Festas'],
    },
    {
      id: 7,
      title: 'Guia completo de fermentação natural',
      description:
        'Aprenda a fazer pães, kombucha e outros alimentos fermentados em casa.',
      content: '',
      contentUrl: '/assets/posts/post7.html',
      imageUrl: '/assets/images/blog/fermentacao.jpg',
      publishDate: new Date('2024-03-20'),
      author: 'Chef Paula Ferreira',
      category: 'Técnicas Culinárias',
      tags: ['Fermentação', 'Pães', 'Kombucha', 'Artesanal'],
    },
    {
      id: 8,
      title: 'Pratos típicos da Páscoa ao redor do mundo',
      description:
        'Descubra como diferentes culturas celebram a Páscoa através da gastronomia.',
      content: '',
      contentUrl: '/assets/posts/post8.html',
      imageUrl: '/assets/images/blog/pascoa.jpg',
      publishDate: new Date('2024-03-25'),
      author: 'Chef Ricardo Santos',
      category: 'Culinária Internacional',
      tags: ['Páscoa', 'Internacional', 'Tradições', 'Festas'],
    },
  ];

  constructor(private http: HttpClient) {}

  getPosts(): Observable<BlogPost[]> {
    return of(this.posts);
  }

  getPostById(id: number): Observable<BlogPost | undefined> {
    return of(this.posts.find((post) => post.id === id));
  }

  getPostContent(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}
