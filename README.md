# Bistro Bliss - Site Moderno para um Restaurante Saboroso 🍴

Bem-vindo ao **Bistro Bliss**, um projeto que une gastronomia e tecnologia! Este é o desenvolvimento de um site moderno e responsivo para um restaurante fictício, projetado para criar uma presença online irresistível. O objetivo? Refletir a atmosfera acolhedora e a qualidade excepcional do Bistro Bliss, oferecendo aos clientes informações úteis, um cardápio apetitoso e a facilidade de fazer reservas com poucos cliques.

Explore o sabor da inovação e mergulhe neste projeto comigo!

---

## Índice de Conteúdos

- [Visão Geral](#visão-geral)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu Processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que Aprendi](#o-que-aprendi)
  - [Desenvolvimento Contínuo](#desenvolvimento-contínuo)
  - [Recursos Úteis](#recursos-úteis)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

---

## Visão Geral

O **Bistro Bliss** é mais do que um site — é uma experiência digital que convida os visitantes a saborear a essência do restaurante. Com um design elegante criado no Figma e uma implementação robusta em Angular, o projeto oferece navegação fluida, responsividade total e funcionalidades práticas, como reservas online e exibição de cardápio.

### Screenshot

![Screenshot do Bistro Bliss](https://raw.githubusercontent.com/seu-usuario/bistro-bliss/main/screenshots/desktop-preview.jpg)  
_Saboreie o design: uma prévia do site em desktop!_

### Links

- **URL do Repositório**: [Repositório do Github Bistro-Bliss](https://github.com/denetodev/bistro-bliss)
- **URL do Site ao Vivo**: [Veja o site ao vivo](https://bistro-bliss-amber.vercel.app/home)
- **Design no Figma**: [Figma - Bistro Bliss](https://www.figma.com/design/TIRsomLOaei5NEvSIyGUby/Projeto---Restaurante?node-id=0-1&p=f&t=tipeT4ZuneuVdwID-0)

---

## Meu Processo

### Construído com

<p align="center">
  <a href="#"><img src="https://skillicons.dev/icons?i=angular,scss,typescript,figma,prime" alt="Tecnologias Utilizadas"></a>
</p>

- **Angular 17/18**: Framework poderoso para uma aplicação dinâmica e escalável.
- **SCSS**: Estilização avançada com variáveis, mixins e nesting para um design impecável.
- **PrimeNG**: Biblioteca de componentes UI para agilizar o desenvolvimento.
- **Figma**: Ferramenta de design para criar um layout moderno e funcional.
- **TypeScript**: Tipagem segura para um código mais robusto.

### O que Aprendi

Este projeto foi uma verdadeira jornada de aprendizado com Angular! Comecei com a versão 17 e, durante o processo, atualizei para a 18, explorando as novidades da framework. Aqui estão alguns destaques:

- **Componentes Reutilizáveis**: Criei componentes modulares, como cards de cardápio e formulários de reserva, que economizam tempo e mantêm o código limpo.
- **Rotas**: Implementei navegação dinâmica entre páginas (home, cardápio, reservas, sobre) com Angular Router.
- **SCSS Avançado**: Usei variáveis e mixins para temas consistentes e responsivos.
- **PrimeNG**: Integração de componentes como botões, modais e carrosséis, otimizando a experiência do usuário.

Exemplo de código que me orgulho:

```typescript
// Componente de Cardápio
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {
  @Input() dish: { name: string, price: number, description: string, image: string };
}


// Estilização com SCSS
.menu-card {
  background: $primary-color;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}
```

### Desenvolvimento Contínuo

Quero continuar aprimorando o **Bistro Bliss**! Meus próximos passos incluem:

- Adicionar animações com Angular Animations para transições mais suaves.
- Implementar um backend simples (talvez com Node.js) para gerenciar reservas em tempo real.
- Melhorar a acessibilidade (ARIA labels, foco de teclado) para tornar o site ainda mais inclusivo.

### Recursos Úteis

- [Documentação Angular](https://angular.io/docs) - Guia essencial para dominar o framework.
- [PrimeNG Showcase](https://www.primefaces.org/primeng/) - Referência para explorar componentes prontos.
- [Sass Guidelines](https://sass-guidelin.es/) - Dicas incríveis para escrever SCSS eficiente.
- [Figma Community](https://www.figma.com/community) - Inspiração para designs modernos.

## Autor

Oi, eu sou Neto! Apaixonado por tecnologia e gastronomia, este projeto foi a minha chance de unir esses dois mundos. Quer saber mais sobre mim? Confira minhas redes:

<div align="center">
  <a href="https://github.com/seu-usuario">
    <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/seu-linkedin">
    <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
  </a>
  <a href="https://www.instagram.com/seu-instagram">
    <img src="https://skillicons.dev/icons?i=instagram" alt="Instagram" />
  </a>
</div>

## Agradecimentos

Um brinde à comunidade open-source e aos amigos que me apoiaram neste projeto! Agradeço especialmente à equipe do Angular por criar uma ferramenta tão poderosa e à PrimeNG por facilitar a vida de desenvolvedores. E, claro, a você por conferir o **Bistro Bliss** — espero que goste tanto quanto eu gostei de criá-lo!

🍽️ **Bon appétit e feliz codificação!** 🍽️
