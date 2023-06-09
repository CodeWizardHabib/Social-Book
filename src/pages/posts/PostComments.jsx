import React, { useState } from "react";
import useFetchComments from "../../hooks/useFetchComments";
import { v4 as uuid4 } from "uuid";
import CommentCard from "./CommentCard";
import AddCommentForm from "./AddCommentForm";
import CommentIcons from "./CommentIcons";
export default function PostComments({ postId, user }) {
  const { comments, addComment, editComment, deleteComment } =
    useFetchComments(postId);
  const [showAllComments, setShowAllComments] = useState(false);

  const handleShowMoreClick = () => {
    setShowAllComments(true);
  };

  const handleShowLessClick = () => {
    setShowAllComments(false);
  };

  const renderedComments = showAllComments ? comments : comments.slice(0, 2);

  return (
    <div className="post-comment">
      {user && (
        <AddCommentForm user={user} postId={postId} addComment={addComment} />
      )}
      {!showAllComments && comments.length > 2 && (
        <button onClick={handleShowMoreClick} className="show-comments-toggle">
          Show More
        </button>
      )}
      {showAllComments && (
        <button onClick={handleShowLessClick} className="show-comments-toggle">
          Show Less
        </button>
      )}
      {renderedComments &&
        renderedComments.map((comment) => {
          return (
            <div key={uuid4()}>
              <CommentCard comment={comment} />
              {comment.email === user.email && (
                <CommentIcons
                  comment={comment}
                  editComment={editComment}
                  deleteComment={deleteComment}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}
