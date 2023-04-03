import React from "react";
import homeCardImg from "../../assets/hom-card-img.jpg";
import { useNavigate } from "react-router-dom";
export default function ViewPostCard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/posts");
  };
  return (
    <div className="view-posts-card">
      <img src={homeCardImg} alt="view-post-card" />
      <h2>Express yourself Post whatever you like, however you like it</h2>
      <button onClick={handleClick}>Post</button>
    </div>
  );
}
