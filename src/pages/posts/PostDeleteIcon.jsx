import React, { useState } from "react";
import deleteIcon from "../../assets/remove.png";
import Modal from "../../components/ui/Modal";
export default function PostDeleteIcon({
  onDeletePost,
  postDetails: { editPostId: deletePostId},
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deletePost = () => {
    onDeletePost(deletePostId);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    // onDeletePost(deletePostId);
  };
  const handleClick = () => {
    setIsModalOpen(true);
    // onDeletePost(deletePostId);
  };
  return (
    <>
      <img
        src={deleteIcon}
        alt="post-delete-icon"
        onClick={handleClick}
        className="delete-post-icon"
      />
      <Modal
        btnText=""
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <h1 className="add-post-heading">Delete Post</h1>
        <div className="handle-delete-action">
          <p>Are you sure you want to delete this post?</p>
          <div className="cofirm-modal-icons">
            <button className="yes-button-modal" onClick={deletePost}>
              Yes
            </button>
            <button className="no-button-modal" onClick={closeModal}>
              No
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
