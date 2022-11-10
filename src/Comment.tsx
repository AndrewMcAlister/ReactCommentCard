import User from "./User";

export default class Comment {
  id: number = 0;
  content: string = "";
  createdAt: Date = new Date();
  score: number = 0;
  user: User = new User();
  avatarSrc: string = "";
  userName: string = "";
  replies: Comment[] = [];
}
