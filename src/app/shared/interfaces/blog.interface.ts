export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  publishDate: Date;
  author: string;
  category: string;
  tags: string[];
}
