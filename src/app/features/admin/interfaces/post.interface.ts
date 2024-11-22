export interface Post {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
