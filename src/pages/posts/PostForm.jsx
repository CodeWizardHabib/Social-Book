import React from "react";
import FormikContainer from "../../components/form/FormikContainer";
import PostSchema from "../../schemas/postSchema";
import { toast } from "react-toastify";
import PostFields from "./PostFields";
import { v4 as uuidv4 } from "uuid";

export default function PostForm({
  postIntialValues,
  addPost,
  setIsModalOpen,
  userId,
}) {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    addPost({ ...values, id: uuidv4(), userId});
    setIsModalOpen(false);
    toast.success("successfully submitted"); // handle form submission
  };
  return (
    <FormikContainer
      initialValues={postIntialValues}
      validationSchema={PostSchema}
      onSubmit={handleSubmit}
      submitBtnText="Add Post"
      className="add-post-form"
    >
      <PostFields />
    </FormikContainer>
  );
}
