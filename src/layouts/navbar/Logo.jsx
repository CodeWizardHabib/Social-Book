import React from "react";
import logo from "../../assets/favicon.png";

export default function Logo() {
  return (
    <div className="logo-img">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}
