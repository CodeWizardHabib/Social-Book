import React, { useState, useEffect } from "react";
import editCommentIcon from "../../assets/icons8-edit-comment-53.png";
import Modal from "../../components/ui/Modal";
export default function CommnentEditIcon({ comment, onEdit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formBody, setFormBody] = useState("");
  const handleClick = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    setFormBody(comment.body);
  }, [comment]);

  const onFormSubmit = () => {
    onEdit(comment.id, formBody);
    setIsModalOpen(false);
    setFormBody("");
  }; //

  const updateFormBody = (event) => {
    const body = event.target.value;
    setFormBody(body);
  };

  return (
    <>
      <img
        onClick={handleClick}
        src={editCommentIcon}
        alt="edit-icon-comment"
      />
      <Modal
        btnText=""
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <h1 className="edit-comment-heading">Edit Comment</h1>
        <input
          value={formBody}
          onChange={updateFormBody}
          className="edit-comment-input"
        />
        <button className="edit-comment-btn" onClick={onFormSubmit}>
          Edit
        </button>
      </Modal>
    </>
  );
}
