import React from "react";
import usePostsGet from "../../hooks/usePosts";
import { v4 as uuidv4 } from "uuid";
import Card from "../../components/ui/Card";
import './Posts.css'
export default function Posts() {
  const { data, error } = usePostsGet();
  return (
    <div className="posts-cards">
      {data && data.map(({ title, body }) => {
        return <Card key={uuidv4()} title={title} body={body} />;
      })}
    </div>
  );
}
