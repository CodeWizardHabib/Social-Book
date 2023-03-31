import React from "react";
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <div>
      <ToastContainer autoClose={1000} />
      <SignUp />
    </div>
  );
}
