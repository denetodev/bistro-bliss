export interface BlogPost {
  id: number;
  title: string;
  description: string; // Propriedade obrigatória
  content: string; // Propriedade obrigatória
  author: string;
  publishDate: Date;
  imageUrl: string;
  contentUrl: string;
  category: string; // Propriedade obrigatória
  tags: string[];
}
