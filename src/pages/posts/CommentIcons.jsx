import React from "react";
import CommnentDeleteIcon from "./CommentDeleteIcon";
import CommnentEditIcon from "./CommentEditIcon";
import "./Comments.css";
export default function CommentIcons({ comment, editComment, deleteComment }) {
  return (
    <div className="comment-icons-container">
      <CommnentEditIcon comment={comment} onEdit={editComment} />
      <CommnentDeleteIcon commentId={comment.id} deleteComment={deleteComment} />
    </div>
  );
}
