import React from "react";
import FormikField from "../../components/form/FormikField";

export default function SignUpFields({ errors, touched }) {
  return (
    <>
      <FormikField
        name="name"
        placeholder="Name"
        type="text"
        className="sign-up-field"
        errors={errors}
        touched={touched}
      />
      <FormikField
        name="email"
        placeholder="email"
        type="email"
        className="sign-up-field"
        errors={errors}
        touched={touched}
      />
      <FormikField
        name="password"
        placeholder="Password"
        type="password"
        className="sign-up-field"
        errors={errors}
        touched={touched}
      />
    </>
  );
}
