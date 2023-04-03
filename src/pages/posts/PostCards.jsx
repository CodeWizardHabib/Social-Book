import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../../components/ui/Card";
import PostIcons from "./PostIcons";
import PostComments from "./PostComments";
export default function PostCards({ data, user, editPost, deletePost }) {
  return (
    <div className="posts-cards">
      {data &&
        data.map(({ title, body, id, userId }) => {
          return (
            <div className="outer-container-post-card" key={uuidv4()}>
              <Card title={title} body={body} />
              {user.userId === userId && (
                <PostIcons
                  postDetails={{
                    title,
                    body,
                    editPostId: id,
                    userId: user.userId,
                  }}
                  editPost={editPost}
                  deletePost={deletePost}
                />
              )}
              <PostComments postId={id} user={user} />
            </div>
          );
        })}
    </div>
  );
}
