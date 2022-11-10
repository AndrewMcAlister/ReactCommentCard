import Comment from "./Comment";
import CommentCard from "./CommentCard";
import User from "./User";

const CommentsSection = (props: {
  comments: Comment[];
  user: User;
  updateCommentData: () => void;
}) => {
  console.log("CommentsSection: " + props.comments.length);
  return (
    <>
      <h1 className="page-heading">Comments Page</h1>
      <br />
      <ul>
        {props.comments.map((item) => (
          <li key={item.id}>
            <CommentCard comment={item} user={props.user} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentsSection;
