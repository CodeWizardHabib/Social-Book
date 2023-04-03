import React, { useState } from "react";
import addCommentIcon from "../../assets/icons8-comments-64.png";
import {toast} from "react-toastify"
import { v4 as uuid4 } from "uuid";
export default function AddCommentForm({user:{name,email},addComment,postId}) {
  const [commentValue, setCommentValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= 300) {
      setCommentValue(value);
    }
  };
  const handleSubmit = () => {
    if(commentValue.trim()===""){
        toast.warn("Comment can not be empty");
        return;
    }
    addComment({postId,id:uuid4(),name,email,body:commentValue.trim()})
    toast.success("Comment added successfully");
    setCommentValue("");

  };
  return (
    <div className="add-commnet-outer-container">
      <input
        type="text"
        id="input-comment"
        name="inputComment"
        value={commentValue}
        onChange={handleInputChange}
        maxLength={300}
        placeholder="Add a comment"
      />
      <div onClick={handleSubmit}>
        <img src={addCommentIcon} alt="add comment" />
        <h4>Comment</h4>
      </div>
    </div>
  );
}
