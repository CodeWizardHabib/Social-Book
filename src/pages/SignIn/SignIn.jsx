import React from "react";
import SignInForm from "./SignInForm";
import "./SignIn.css";
export default function SignIn() {
  return (
    <div className="sign-in-container">
      <h1 className="sign-in-heading">SignIn</h1>
      <SignInForm />
    </div>
  );
}
