import React from "react";
import FormikField from "../../components/form/FormikField";

export default function PostFields({ errors, touched }) {
  return (
    <>
      <FormikField
        name="title"
        placeholder="Title"
        type="text"
        className="sign-up-field"
        errors={errors}
        touched={touched}
      />
      <FormikField
        name="body"
        placeholder="Body"
        type="text"
        className="sign-up-field"
        errors={errors}
        touched={touched}
      />
    </>
  );
}
