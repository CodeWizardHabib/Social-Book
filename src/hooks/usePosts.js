import { useState, useEffect } from "react";
import fetchPosts from "../api/getPosts";
function usePostsGet() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchPosts();
      response ? setData(response) : setError("error");
    };
    getPosts()
    
  }, []);

  return { data, error };
}
export default usePostsGet;
