import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "./Logo";
import NavBarDropDown from "./NavBarDropDown";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-bar">
        <div className="nav-bar-links">
          <Logo />
          <h1>
            <Link to="/">Home</Link>
          </h1>
          <h1>
            <Link to="/posts">Posts</Link>
          </h1>
          <NavBarDropDown />
        </div>
      </div>
    </nav>
  );
}
