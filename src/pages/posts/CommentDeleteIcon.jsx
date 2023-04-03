import React, { useState } from "react";
import deleteCommentIcon from "../../assets/icons8-delete-30.png";
import Modal from "../../components/ui/Modal";
export default function CommnentDeleteIcon({ commentId, deleteComment }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    deleteComment(commentId);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <img
        onClick={handleClick}
        src={deleteCommentIcon}
        alt="delete-icon-commnent"
      />
      <Modal
        btnText=""
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <h1 className="add-post-heading">Delete Comment</h1>
        <div className="handle-delete-action">
          <p>Are you sure you want to delete this Comment?</p>
          <div className="cofirm-modal-icons">
            <button className="yes-button-modal" onClick={handleDelete}>
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
