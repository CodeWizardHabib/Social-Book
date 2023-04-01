import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplicationRoutes from "./routes/ApplicationRoutes";
import { UserContextProvider } from "./context/UserContext";
import NavBar from "./layouts/navbar/NavBar";
export default function App() {
  return (
    <UserContextProvider>
      <NavBar />
      <ToastContainer autoClose={1000} />
      <ApplicationRoutes />
    </UserContextProvider>
  );
}
