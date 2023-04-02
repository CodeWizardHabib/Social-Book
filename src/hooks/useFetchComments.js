import { useState, useEffect } from "react";
import setLocalStorage from "../utils/setToLocalStorage";
import getLocalStorage from "../utils/getFromLocalStorage";
import getComments from "../api/getComments";
const useFetchComments = (postId) => {
  const [comments, setComments] = useState([]);
  const addComment = (comment) => {
    const newComments = [{ ...comment }, ...comments];
    setComments([...newComments]);
    setLocalStorage(`posts${postId}`, JSON.stringify([...newComments]));
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

  return { comments, setComments, addComment };
};

export default useFetchComments;
