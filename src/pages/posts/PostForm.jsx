import React from "react";
import FormikContainer from "../../components/form/FormikContainer";
import PostSchema from "../../schemas/postSchema";
import PostFields from "./PostFields";
import { v4 as uuidv4 } from "uuid";

export default function PostForm({
  postIntialValues,
  addPost,
  setIsModalOpen,
  userId,
  editPostId,
  editPost,
  submitBtnTxt
}) {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    addPost && (addPost({ ...values, id: uuidv4(), userId}));
    editPost && (editPost({ ...values,editPostId}));
    setIsModalOpen(false);
  };
  return (
    <FormikContainer
      initialValues={postIntialValues}
      validationSchema={PostSchema}
      onSubmit={handleSubmit}
      submitBtnText={submitBtnTxt}
      className="add-post-form"
    >
      <PostFields />
    </FormikContainer>
  );
}
