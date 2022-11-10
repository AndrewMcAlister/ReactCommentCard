import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Comment from "./Comment";
import User from "./User";

function getMinutesDifferenceToNow(time: Date): number {
  return Math.floor((new Date().valueOf() - time.valueOf()) / 60000); //minutes
}

function getTimeSincePostAsMessage(posted: Date): string {
  var mins = getMinutesDifferenceToNow(posted);
  if (mins < 1) return "Less than a minute ago";
  if (mins < 60) return `${mins} minutes ago`;
  if (mins < 1440) return `${Math.floor(mins / 60)} hours ago`;
  return `${Math.floor(mins / 1440)} days ago`;
}

const CommentCard = (props: { comment: Comment; user: User }) => {
  console.log(props.comment.content);
  return (
    <div>
      <div>Rendering CommentCard</div>
      <table>
        <tr>
          <td rowSpan={2}>{props.comment.score}</td>
          <td>
            <Avatar
              style={{ border: "2px solid gray", margin: 10 }}
              alt="User Avatar"
              src="{props.avatarSrc}"
            />
          </td>
          <td>{props.comment.userName}</td>
          <td>{props.user.userName === props.comment.userName ? "YOU" : ""}</td>
          <td>{getTimeSincePostAsMessage(props.comment.createdAt)}</td>
          <td>Action Icon</td>
        </tr>
        <tr>
          <td colSpan={5}>{props.comment.content}</td>
        </tr>
      </table>
    </div>
  );
};

export default CommentCard;
