import React, { useState,useEffect } from "react";
import "./Modal.css";

function Modal({ className, children, btnText,isModalOpen,setIsModalOpen}) {

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    const handleWindowClick = (event) => {
      if (isModalOpen && event.target.className === "modal") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [isModalOpen]);

  return (
    <>
      <button onClick={toggleModal} className={className}>
        {btnText}
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;