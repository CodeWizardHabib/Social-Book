import React from 'react';
import './Card.css'
function Card({ title, body, className }) {
  return (
    <div className={className?className:"card"}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-body">{body}</p>
      </div>
    </div>
  );
}

export default Card;
