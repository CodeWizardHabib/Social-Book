import React from "react";
import FormikField from "../../components/form/FormikField";

export default function SignInFields({ errors, touched }) {
  return (
    <>
      <FormikField
        name="email"
        placeholder="email"
        type="email"
        className="sign-in-field"
        errors={errors}
        touched={touched}
      />
      <FormikField
        name="password"
        placeholder="Password"
        type="password"
        className="sign-in-field"
        errors={errors}
        touched={touched}
      />
    </>
  );
}
