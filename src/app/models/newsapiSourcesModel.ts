export interface NewsApiSourcesModel {
  status: string;
  sources: Array<SourceItems>;
}
interface SourceItems {
  id: string;
  name: string;
  description: string;
  url: string;
  language: string;
  country: string;
  category: string;
}
