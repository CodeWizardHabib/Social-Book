import React from 'react'
import Card from '../../components/ui/Card'
export default function CommentCard({comment:{body,name,email}}) {
  return (
    <div>
        <Card title={name} body={body} className={"comment-card"}/>
    </div>
  )
}
