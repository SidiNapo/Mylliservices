
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  publishedDate: string;
  readTime: number;
  author: string;
}

// We'll add a helper type to work with article categories
export type ArticleCategory = {
  name: string;
  value: string;
  count: number;
}

// Social sharing functionality types
export interface ShareData {
  url: string;
  title: string;
  text?: string;
  image?: string;
}
