import React from "react";
import "./DropDownButton.css";
export default function DropDownButton({ children, btnText }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">{btnText}</button>
      <div className="dropdown-content">{children}</div>
    </div>
  );
}
