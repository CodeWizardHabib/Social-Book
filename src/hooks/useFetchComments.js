import { useState, useEffect } from "react";
import setLocalStorage from "../utils/setToLocalStorage";
import getLocalStorage from "../utils/getFromLocalStorage";
import getComments from "../api/getComments";
import { toast } from "react-toastify";
const useFetchComments = (postId) => {
  const [comments, setComments] = useState([]);
  const addComment = (comment) => {
    const newComments = [{ ...comment }, ...comments];
    setComments([...newComments]);
    setLocalStorage(`posts${postId}`, JSON.stringify([...newComments]));
  };
  const editComment = (commentId, body) => {
    const index = comments.findIndex(({ id }) => id === commentId);
    if (index === -1) {
      return; // ID not found, return the original array
    }
    const updatedObj = { ...comments[index], body };
    const newArray = [...comments];
    newArray[index] = updatedObj;
    toast.success("Comment updated successfully");
    setComments([...newArray]);
    setLocalStorage(`posts${postId}`, JSON.stringify(newArray));
  };
  const deleteComment = (commentId) => {
    const updatedComments = comments.filter(({ id }) => id !== commentId);
    setComments([...updatedComments]);
    toast.success("Comment deleted successfully");
    setLocalStorage(`posts${postId}`, JSON.stringify(updatedComments));
  };
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentExistInLocalStorage = getLocalStorage(`posts${postId}`);
        if (commentExistInLocalStorage) {
          setComments(JSON.parse(commentExistInLocalStorage));
          return;
        }
        const data = await getComments(postId);
        setLocalStorage(`posts${postId}`, JSON.stringify(data));
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, [postId]);

  return { comments, setComments, addComment, editComment, deleteComment };
};

export default useFetchComments;
