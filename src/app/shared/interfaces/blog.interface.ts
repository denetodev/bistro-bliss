export interface BlogPost {
  id?: string | number;
  title: string;
  content: string;
  contentUrl?: string;
  status: 'Draft' | 'Published';
  category: string;
  imageUrl: string;
  tags: string[];
  author: string;
  publishDate: Date;
  featuredImage?: string;
  meta: {
    title: string;
    description: string;
    keywords?: string[];
  };
  slug?: string;
  visibility: 'Public' | 'Private';
}
