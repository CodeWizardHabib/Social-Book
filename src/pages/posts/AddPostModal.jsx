import React, { useState } from "react";
import PostForm from "./PostForm";
import Modal from "../../components/ui/Modal";
import { postFields } from "../../constants/postFields";
export default function AddPostModal({ user, addPost }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
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
          submitBtnTxt={"Add Post"}
        />
      </Modal>
    </>
  );
}
