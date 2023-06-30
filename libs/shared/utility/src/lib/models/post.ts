export interface PostInterface {
  id: number | string;
  title: string;
  content: string;
  imageUrl: string | null;
  categoryName: string;
  writer: string;
  date: string;
}
