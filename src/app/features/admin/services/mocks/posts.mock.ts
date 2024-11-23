import { Post } from '../../interfaces/post.interface';

export const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: 'Pratos Típicos da Culinária Italiana',
    author: 'Chef Maria Silva',
    content: `<p>A culinária italiana é conhecida mundialmente por seus sabores únicos...</p>
              <p>Alguns pratos típicos incluem:</p>
              <ul>
                <li>Pasta alla Carbonara</li>
                <li>Risotto al Funghi</li>
                <li>Pizza Margherita</li>
              </ul>`,
    tags: ['italiana', 'massas', 'tradicional'],
    coverImage: 'assets/images/posts/italian-cuisine.jpg',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    title: 'Técnicas de Preparo de Carnes',
    author: 'Chef João Santos',
    content: `<p>O preparo correto da carne pode fazer toda a diferença...</p>`,
    tags: ['carnes', 'técnicas', 'culinária'],
    coverImage: 'assets/images/posts/meat-preparation.jpg',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
  },
  {
    id: 3,
    title: 'Sobremesas Francesas Clássicas',
    author: 'Chef Ana Oliveira',
    content: `<p>A confeitaria francesa é reconhecida por sua elegância...</p>`,
    tags: ['sobremesas', 'francesa', 'confeitaria'],
    coverImage: 'assets/images/posts/french-desserts.jpg',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15'),
  },
];
