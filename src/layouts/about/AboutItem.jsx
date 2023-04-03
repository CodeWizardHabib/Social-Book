import React from "react";

export default function AboutItem({ img, itemDescription }) {
  return (
    <div className="about-item">
      <img src={img} alt="about-icon" />
      <h4>{itemDescription}</h4>
    </div>
  );
}
