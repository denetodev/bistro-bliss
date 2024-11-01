import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss'],
})
export class BlogSectionComponent {
  blogPosts = [
    {
      imageSrc: '../../../../assets/images/home/batata-frita.jpg',
      date: 'Setembro, 2023',
      title: 'Como preparar as batatas fritas perfeitas em uma fritadeira',
    },
    {
      imageSrc: '../../../../assets/images/home/frango-frito.jpg',
      date: 'Dezembro, 2023',
      title: 'Como preparar deliciosas empanadas de frango',
    },
    {
      imageSrc: '../../../../assets/images/home/cupcake.jpg',
      date: 'Junho, 2023',
      title: '7 deliciosas receitas de cheesecake que você pode preparar',
    },
    {
      imageSrc: '../../../../assets/images/home/pizza.jpg',
      date: 'Outubro, 2023',
      title: '5 ótimas pizzarias que você deve visitar nesta cidade',
    },
  ];
}
