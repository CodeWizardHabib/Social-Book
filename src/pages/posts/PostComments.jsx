import React, { useState } from "react";
import useFetchComments from "../../hooks/useFetchComments";
import addCommentIcon from "../../assets/icons8-comments-64.png";
import { v4 as uuid4 } from "uuid";
import CommentCard from "./CommentCard";
export default function PostComments({postId}) {
  const { comments, setComments } = useFetchComments(postId);
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
      <hr />
      <div>
        <img src={addCommentIcon} alt="add comment" />
        <h3>Comment</h3>
      </div>
      <hr />
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
            <CommentCard key={uuid4()} comment={comment}/>
          );
        })}
    </div>
  );
}
