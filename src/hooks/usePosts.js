import { useState, useEffect } from "react";
import fetchPosts from "../api/getPosts";
import { toast } from "react-toastify";
function usePostsGet() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const addPost = (post) => {
    setData([{ ...post }, ...data]);
    toast.success("post added successfully")
  };
  const deletePost = (deletePostId) => {
    const updatedPosts = data.filter((post) => post.id !== deletePostId);
    setData([...updatedPosts]);
    toast.success("post deleted successfully");
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
  };
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchPosts();
      response ? setData(response) : setError("error");
    };
    getPosts();
  }, []);

  return { data, error, addPost, editPost, deletePost };
}
export default usePostsGet;
