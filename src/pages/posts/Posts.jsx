import React, { useContext, useState } from "react";
import usePostsGet from "../../hooks/usePosts";
import { v4 as uuidv4 } from "uuid";
import Card from "../../components/ui/Card";
import { userContext } from "../../context/UserContext";
import Modal from "../../components/ui/Modal";
import PostForm from "./PostForm";
import PostFields from "./PostFields";
import "./Posts.css";
import { postFields } from "../../constants/postFields";
export default function Posts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, setUser } = useContext(userContext);
  const { data, error, addPost } = usePostsGet();
  return (
    <div className="posts-cards">
      {data &&
        data.map(({ title, body }) => {
          return <Card key={uuidv4()} title={title} body={body} />;
        })}
      {user !== "" && (
        <Modal
          className="floating-button"
          btnText="Add Post"
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        >
          <h1 className="add-post-heading">Add Post</h1>
          <PostForm
            postIntialValues={postFields}
            addPost={addPost}
            setIsModalOpen={setIsModalOpen}
            userId={user.userId}
          />
        </Modal>
      )}
    </div>
  );
}
