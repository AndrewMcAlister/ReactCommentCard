import Comment from "./Comment";
import User from "./User";

export default class CommentsData {
  currentUser: User = new User();
  comments: Comment[] = [];
}
