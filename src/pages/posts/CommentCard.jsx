import React from "react";
import Card from "../../components/ui/Card";
export default function CommentCard({ comment: { body, name } }) {
  return (
    <div>
      <Card title={name} body={body} className={"comment-card"} />
    </div>
  );
}
