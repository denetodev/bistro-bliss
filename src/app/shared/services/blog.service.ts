import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlogPost } from '../interfaces/blog.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'sua-api-url/posts'; // Será usado posteriormente

  // Dados mockados para desenvolvimento
  private posts: BlogPost[] = [
    {
      id: '1',
      title: 'Como fazer um churrasco perfeito',
      content: `
        <h1>Como fazer um churrasco perfeito</h1>

        <p>O churrasco é uma tradição que reúne amigos e família ao redor do fogo, mas para que tudo saia perfeito, alguns detalhes fazem toda a diferença.</p>

        <h2>1. Escolha da carne</h2>
        <p>O primeiro passo para um churrasco perfeito é escolher boas carnes. Algumas das melhores opções são:</p>
        <ul>
          <li><strong>Picanha:</strong> Clássica e suculenta, deve ter uma capa de gordura uniforme.</li>
          <li><strong>Costela:</strong> Requer paciência, pois deve assar lentamente para ficar macia.</li>
          <li><strong>Fraldinha:</strong> Muito saborosa e rápida no preparo.</li>
        </ul>

        <h2>2. O tempero ideal</h2>
        <p>Menos é mais! O sal grosso é o principal tempero para carnes de churrasco. Para cortes mais finos, pode-se usar uma mistura de ervas e alho para um sabor extra.</p>

        <h2>3. Controle da brasa</h2>
        <p>O segredo do churrasco perfeito está no fogo. Use carvão de boa qualidade e espere até que as brasas fiquem no ponto certo, sem chamas altas.</p>

        <h2>4. O tempo certo para cada carne</h2>
        <p>Nem todas as carnes devem ficar o mesmo tempo na grelha. Aqui estão algumas orientações:</p>
        <ul>
          <li><strong>Picanha:</strong> 6 a 8 minutos de cada lado para um ponto médio.</li>
          <li><strong>Costela:</strong> De 4 a 6 horas no fogo baixo.</li>
          <li><strong>Frango:</strong> Cerca de 30 minutos, virando sempre.</li>
        </ul>

        <h2>5. Acompanhamentos</h2>
        <p>Para completar o churrasco, aposte em acompanhamentos como vinagrete, pão de alho e uma boa farofa.</p>

        <h2>Conclusão</h2>
        <p>Agora que você conhece os segredos do churrasco perfeito, chame os amigos, acenda a churrasqueira e aproveite!</p>
        `,
      status: 'Published',
      category: 'Culinária',
      imageUrl: '/assets/images/blog/churrasco.jpg',
      tags: ['churrasco', 'carne', 'dicas'],
      author: 'Chef João Silva',
      publishDate: new Date('2024-01-15'),
      meta: {
        title: 'Guia definitivo para um churrasco perfeito',
        description: 'Aprenda todas as técnicas...',
      },
      visibility: 'Public',
    },
    {
      id: '2',
      title: 'Drinks para o verão',
      content: `
      <h1>Drinks para o verão</h1>

      <p>O verão pede bebidas refrescantes! Separamos algumas receitas fáceis e deliciosas para você preparar em casa e se refrescar nos dias quentes.</p>

      <h2>1. Caipirinha Clássica</h2>
      <p>A caipirinha é o drink brasileiro mais famoso no mundo e perfeito para o verão.</p>
      <strong>Ingredientes:</strong>
      <ul>
        <li>1 limão</li>
        <li>2 colheres de sopa de açúcar</li>
        <li>50ml de cachaça</li>
        <li>Gelo a gosto</li>
      </ul>
      <strong>Modo de preparo:</strong>
      <p>Corte o limão em pedaços, macere com açúcar, adicione gelo e complete com cachaça. Mexa bem e sirva!</p>

      <h2>2. Mojito</h2>
      <p>Esse drink cubano é leve e refrescante, perfeito para o calor.</p>
      <strong>Ingredientes:</strong>
      <ul>
        <li>1 limão</li>
        <li>10 folhas de hortelã</li>
        <li>2 colheres de sopa de açúcar</li>
        <li>50ml de rum branco</li>
        <li>Água com gás</li>
        <li>Gelo a gosto</li>
      </ul>
      <strong>Modo de preparo:</strong>
      <p>Macere o limão com açúcar e hortelã, adicione gelo e rum, complete com água com gás e mexa.</p>

      <h2>3. Piña Colada</h2>
      <p>Um clássico tropical com abacaxi e coco.</p>
      <strong>Ingredientes:</strong>
      <ul>
        <li>100ml de suco de abacaxi</li>
        <li>50ml de leite de coco</li>
        <li>50ml de rum branco</li>
        <li>Gelo a gosto</li>
      </ul>
      <strong>Modo de preparo:</strong>
      <p>Bata tudo no liquidificador até ficar cremoso e sirva com uma fatia de abacaxi na borda do copo.</p>

      <h2>Conclusão</h2>
      <p>Agora você já tem três opções de drinks fáceis e refrescantes para curtir o verão. Aproveite com moderação e divirta-se!</p>

      `,
      status: 'Published',
      category: 'Bebidas',
      imageUrl: '/assets/images/blog/drinks.jpg',
      tags: ['drinks', 'verão', 'cocktails'],
      author: 'Bartender Maria Santos',
      publishDate: new Date('2024-01-20'),
      meta: {
        title: 'Os melhores drinks para o verão',
        description: 'Receitas refrescantes...',
      },
      visibility: 'Public',
    },
    {
      id: '3',
      title: 'O Nosso Café da Manhã Perfeito',
      content: `
    <h1>O Café da Manhã Perfeito no Bistro Bliss</h1>

    <p>Comece o dia com energia e sabor no Bistro Bliss! Nosso café da manhã combina opções clássicas e inovadoras para todos os gostos.</p>

    <h2>1. Pão na chapa com requeijão</h2>
    <p>Uma versão elevada do tradicional, com pão artesanal e requeijão cremoso da casa.</p>

    <h2>2. Omelete de forno</h2>
    <p>Leve e fofinho, recheado com queijo, ervas frescas e um toque especial do chef.</p>

    <h2>3. Combo matinal</h2>
    <p>Acompanhe com suco natural, café fresco e frutas da estação para uma experiência completa.</p>

    <h2>Conclusão</h2>
    <p>Nosso café da manhã é a maneira perfeita de despertar seus sentidos. Venha experimentar!</p>
  `,
      status: 'Published',
      category: 'Café da Manhã',
      imageUrl: '../../../assets/images/blog/cafe-manha.jpg',
      tags: ['café da manhã', 'culinária', 'bistro bliss'],
      author: 'Chef João Silva',
      publishDate: new Date('2025-03-01'),
      meta: {
        title: 'Café da Manhã no Bistro Bliss',
        description: 'Descubra as delícias do nosso café da manhã...',
      },
      visibility: 'Public',
    },
    {
      id: '4',
      title: 'Por Trás das Panelas: O Chef do Bistro Bliss',
      content: `
    <h1>Por Trás das Panelas: O Chef do Bistro Bliss</h1>

    <p>Conheça o talento que transforma ingredientes em arte no Bistro Bliss. Nosso chef compartilha sua paixão pela cozinha.</p>

    <h2>1. Inspiração diária</h2>
    <p>Cada prato começa com ingredientes frescos e ideias que misturam tradição e inovação.</p>

    <h2>2. Técnicas em ação</h2>
    <p>Do fogo alto ao mise en place, veja como o chef cria pratos que encantam os sentidos.</p>

    <h2>3. Segredo do sabor</h2>
    <p>“Cozinhar é contar uma história em cada garfada”, diz o chef. Experimente e sinta!</p>

    <h2>Conclusão</h2>
    <p>Visite-nos e veja o chef em ação, trazendo vida à culinária do Bistro Bliss.</p>
  `,
      status: 'Published',
      category: 'Culinária',
      imageUrl: '../../../assets/images/blog/chef-preparing-food.jpg',
      tags: ['chef', 'culinária', 'bistro bliss'],
      author: 'Equipe Bistro Bliss',
      publishDate: new Date('2025-03-03'),
      meta: {
        title: 'Conheça o Chef do Bistro Bliss',
        description: 'A arte por trás dos pratos do nosso restaurante...',
      },
      visibility: 'Public',
    },
    {
      id: '5',
      title: 'A Magia da Fermentação',
      content: `
    <h1>A Magia da Fermentação no Bistro Bliss</h1>

    <p>A fermentação é um processo ancestral que eleva sabores e texturas. No Bistro Bliss, exploramos essa arte com maestria.</p>

    <h2>1. Pão de fermentação natural</h2>
    <p>Casca crocante e miolo macio, feito com nosso levain cultivado por dias.</p>

    <h2>2. Kombucha da casa</h2>
    <p>Refrescante e probiótica, disponível em sabores como hibisco e gengibre.</p>

    <h2>3. Queijos fermentados</h2>
    <p>Uma seleção especial que harmoniza perfeitamente com nossos pratos.</p>

    <h2>Conclusão</h2>
    <p>A fermentação traz vida à mesa. Venha provar essa experiência única!</p>
  `,
      status: 'Published',
      category: 'Culinária',
      imageUrl: '../../../assets/images/blog/fermentacao.jpg',
      tags: ['fermentação', 'culinária', 'artesanal'],
      author: 'Chef Mariana Lopes',
      publishDate: new Date('2025-03-05'),
      meta: {
        title: 'Fermentação no Bistro Bliss',
        description: 'Explore os sabores da fermentação artesanal...',
      },
      visibility: 'Public',
    },
    {
      id: '6',
      title: 'Sabores de Minas',
      content: `
    <h1>Sabores de Minas no Bistro Bliss</h1>

    <p>A culinária mineira é sinônimo de conforto e tradição. No Bistro Bliss, celebramos esses sabores com um toque especial.</p>

    <h2>1. Feijão tropeiro</h2>
    <p>Feijão, farinha, linguiça e torresmo, preparados com o tempero da casa.</p>

    <h2>2. Frango com quiabo</h2>
    <p>Suculento e acompanhado de angu cremoso, como manda a tradição.</p>

    <h2>3. Doce de leite artesanal</h2>
    <p>Final perfeito para uma refeição cheia de alma mineira.</p>

    <h2>Conclusão</h2>
    <p>Venha sentir o gostinho de Minas no coração do Bistro Bliss!</p>
  `,
      status: 'Published',
      category: 'Culinária',
      imageUrl: '../../../assets/images/blog/mineira.jpg',
      tags: ['comida mineira', 'culinária', 'tradição'],
      author: 'Chef Ana Oliveira',
      publishDate: new Date('2025-03-07'),
      meta: {
        title: 'Comida Mineira no Bistro Bliss',
        description: 'Os melhores sabores de Minas em nosso cardápio...',
      },
      visibility: 'Public',
    },
    {
      id: '7',
      title: 'Celebre a Páscoa no Bistro Bliss',
      content: `
    <h1>Celebre a Páscoa no Bistro Bliss</h1>

    <p>A Páscoa está chegando, e no Bistro Bliss preparamos um menu especial para tornar sua celebração inesquecível.</p>

    <h2>1. Bacalhau à Gomes de Sá</h2>
    <p>Tradicional e saboroso, com batatas, azeite e ervas frescas.</p>

    <h2>2. Colomba Pascal</h2>
    <p>Feita artesanalmente, com frutas cristalizadas ou gotas de chocolate.</p>

    <h2>3. Harmonização especial</h2>
    <p>Vinhos selecionados para acompanhar cada prato da nossa Páscoa.</p>

    <h2>Conclusão</h2>
    <p>Reúna a família e venha celebrar a Páscoa com os sabores do Bistro Bliss!</p>
  `,
      status: 'Published',
      category: 'Eventos',
      imageUrl: '../../../assets/images/blog/pascoa.jpg',
      tags: ['páscoa', 'culinária', 'bistro bliss'],
      author: 'Chef Bruno Mendes',
      publishDate: new Date('2025-03-09'),
      meta: {
        title: 'Páscoa no Bistro Bliss',
        description: 'Menu especial para a Páscoa 2025...',
      },
      visibility: 'Public',
    },
    {
      id: '8',
      title: 'Nossos Pratos Principais',
      content: `
    <h1>Pratos Principais do Bistro Bliss</h1>

    <p>Nossos pratos principais são o coração do Bistro Bliss, criados para agradar todos os paladares.</p>

    <h2>1. Filé ao molho madeira</h2>
    <p>Carne suculenta acompanhada de risoto de parmesão.</p>

    <h2>2. Salmão grelhado</h2>
    <p>Servido com purê de batata-doce e legumes salteados.</p>

    <h2>3. Opção da semana</h2>
    <p>Um prato especial que muda semanalmente, sempre surpreendente.</p>

    <h2>Conclusão</h2>
    <p>Venha descobrir por que nossos pratos principais são inesquecíveis!</p>
  `,
      status: 'Published',
      category: 'Culinária',
      imageUrl: '../../../assets/images/blog/prato-about-principal.jpg',
      tags: ['prato principal', 'culinária', 'bistro bliss'],
      author: 'Chef Mariana Lopes',
      publishDate: new Date('2025-03-12'),
      meta: {
        title: 'Pratos Principais do Bistro Bliss',
        description: 'Conheça os destaques do nosso cardápio...',
      },
      visibility: 'Public',
    },
  ];

  constructor(private http: HttpClient) {}

  // Métodos temporários usando dados mockados
  getPosts(): Observable<BlogPost[]> {
    return of(this.posts); // Retorna os dados mockados
  }

  getPostById(id: string | number): Observable<BlogPost> {
    const post = this.posts.find((p) => p.id?.toString() === id.toString());
    if (post) {
      return of(post);
    }
    return throwError(() => new Error('Post não encontrado'));
  }

  createPost(post: BlogPost): Observable<BlogPost> {
    const newPost = { ...post, id: (this.posts.length + 1).toString() };
    this.posts.push(newPost);
    return of(newPost);
  }

  updatePost(post: BlogPost): Observable<BlogPost> {
    const index = this.posts.findIndex((p) => p.id === post.id);
    if (index !== -1) {
      this.posts[index] = post;
      return of(post);
    }
    return throwError(() => new Error('Post não encontrado'));
  }

  deletePost(id: string | number): Observable<void> {
    const index = this.posts.findIndex(
      (p) => p.id?.toString() === id.toString()
    );
    if (index !== -1) {
      this.posts.splice(index, 1);
      return of(void 0);
    }
    return throwError(() => new Error('Post não encontrado'));
  }

  getPostContent(url: string): Observable<string> {
    // Simula o carregamento do conteúdo
    return of(`
      <h1>Conteúdo do Post</h1>
      <p>Este é um conteúdo de exemplo para o post.</p>
      <p>Em um ambiente real, este conteúdo seria carregado da API ou de um arquivo.</p>
    `);
  }

  // Mantenha o método handleError para uso futuro com a API real
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro na operação.';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Código: ${error.status}, Mensagem: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
