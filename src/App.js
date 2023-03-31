import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./pages/SignIn/SignIn";
import { UserContextProvider } from "./context/UserContext";
export default function App() {

  return (
    <UserContextProvider>
    <div>
      <ToastContainer autoClose={1000} />
      {/* <SignUp /> */}
      <SignIn />
    </div>
    </UserContextProvider>
  );
}
