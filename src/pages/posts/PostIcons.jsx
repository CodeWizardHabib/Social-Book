import React from "react";
import PostEditIcon from "./PostEditIcon";
import PostDeleteIcon from "./PostDeleteIcon";
export default function PostIcons({ postDetails, editPost, deletePost }) {
  return (
    <div className="post-icons">
      <PostEditIcon postDetails={postDetails} editPost={editPost} />
      <PostDeleteIcon onDeletePost={deletePost} postDetails={postDetails} />
    </div>
  );
}
