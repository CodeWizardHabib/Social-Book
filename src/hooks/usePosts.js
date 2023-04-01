import { useState, useEffect } from "react";
import fetchPosts from "../api/getPosts";
function usePostsGet() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const addPost=(post)=>{
    // alert(JSON.stringify(post));
       setData([{...post},...data])
  }
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchPosts();
      response ? setData(response) : setError("error");
    };
    getPosts()
    
  }, []);

  return { data, error,addPost };
}
export default usePostsGet;
