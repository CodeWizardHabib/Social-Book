import React, { useContext, useState } from "react";
import usePostsGet from "../../hooks/usePosts";
import { userContext } from "../../context/UserContext";
import PostCards from "./PostCards";
import AddPostModal from "./AddPostModal";
import About from "../../layouts/about/About";
import "./Posts.css";

export default function Posts() {
  const { user, setUser} = useContext(userContext);
  const { data, error, addPost, editPost, deletePost } = usePostsGet();
  return (
    <>
    <div className="post-page">
      <About />
      {<PostCards data={data} user={user} editPost={editPost} deletePost={deletePost}/>}
    </div>
      {user !== "" && <AddPostModal user={user} addPost={addPost} />}
    </>
  );
}
