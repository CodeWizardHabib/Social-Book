import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Posts from "../pages/posts/Posts";
export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}
