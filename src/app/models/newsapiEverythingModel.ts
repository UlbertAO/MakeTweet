export interface NewsApiEverythingModel {
  status: string;
  totalResults: number;
  articles: Array<ArticleItems>;
}
export interface ArticleItems {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
