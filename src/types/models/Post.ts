import { User } from './User';

export interface Post {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  user: User;
}
