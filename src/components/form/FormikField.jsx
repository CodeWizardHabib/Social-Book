import React from "react";
import { Field } from "formik";
import "./FormikField.css";
export default function FormikField({
  type,
  name,
  placeholder,
  className,
  errors,
  touched,
}) {
  return (
    <>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
      />
      {touched[name] && errors[name] && (
        <div className="error">{errors[name]}</div>
      )}
    </>
  );
}
