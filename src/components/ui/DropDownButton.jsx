import React from "react";
import './DropDownButton.css'
export default function DropDownButton({ children, btnText }) {
  return (
    <div class="dropdown">
      <button class="dropbtn">{btnText}</button>
      <div class="dropdown-content">{children}</div>
    </div>
  );
}
