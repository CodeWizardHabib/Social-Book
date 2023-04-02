import { useState, useEffect } from "react";
import getComments from "../api/getComments";
const useFetchComments = (postId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComments(postId);
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, [postId]);

  return { comments, setComments };
};

export default useFetchComments;
