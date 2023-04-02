import { useState, useEffect } from "react";
import fetchPosts from "../api/getPosts";
import { toast } from "react-toastify";
import getLocalStorage from "../utils/getFromLocalStorage";
import setLocalStorage from "../utils/setToLocalStorage";
function usePostsGet() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const addPost = (post) => {
    setData([{ ...post }, ...data]);
    toast.success("post added successfully");
    setLocalStorage("posts", JSON.stringify([{ ...post }, ...data]));

  };
  const deletePost = (deletePostId) => {
    const updatedPosts = data.filter((post) => post.id !== deletePostId);
    setData([...updatedPosts]);
    toast.success("post deleted successfully");
    setLocalStorage("posts", JSON.stringify(updatedPosts));

  };
  const editPost = ({ title, body, editPostId }) => {
    const index = data.findIndex(({ id }) => id === editPostId);
    if (index === -1) {
      return; // ID not found, return the original array
    }
    const updatedObj = { ...data[index], title, body };
    const newArray = [...data];
    newArray[index] = updatedObj;
    toast.success("post updated successfully");

    setData([...newArray]);
    setLocalStorage("posts", JSON.stringify(newArray));

  };
  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = getLocalStorage("posts");
        if (posts) {
          setData(JSON.parse(posts));
          return;
        }
        const response = await fetchPosts();
        setData(response);
        setLocalStorage("posts", JSON.stringify(response));
      } catch (error) {
        setError(error);
      }
    };
    getPosts();
  }, []);

  return { data, error, addPost, editPost, deletePost };
}
export default usePostsGet;
