import React, { useState } from "react";
import editIcon from "../../assets/edit-icon.png";
import Modal from "../../components/ui/Modal";
import PostForm from "./PostForm";
export default function PostEditIcon({
  postDetails: { title, body, editPostId},
  editPost,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <img
        src={editIcon}
        className="edit-post-icon"
        onClick={handleClick}
        alt="edit-post"
      />
      <Modal
        btnText=""
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <h1 className="add-post-heading">Edit Post</h1>
        <PostForm
          postIntialValues={{ title, body }}
          editPost={editPost}
          setIsModalOpen={setIsModalOpen}
          editPostId={editPostId}
          submitBtnTxt={"Edit Post"}
        />
      </Modal>
    </>
  );
}
