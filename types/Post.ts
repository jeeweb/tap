export interface IPost {
  id: number;
  author: string;
  created_at: Date;
  content: string;
  isLike: boolean;
  likes: number;
}
