import React from "react";
import { Formik, Form } from "formik";
import SubmitButton from "../ui/SubmitButton";
import './FormikContainer.css';
const FormikContainer = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  submitBtnText,
  className

}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={true}
    >
      {({ errors, touched }) => (
        <Form className={className  }>
          {React.Children.map(children, (child) => (
            <div>
              {React.cloneElement(child, { errors, touched })}
              {/* error message for field */}
              {touched[child.props.name] && errors[child.props.name] && (
                <div className="error">{errors[child.props.name]}</div>
              )}
            </div>
          ))}
         <SubmitButton submitText={submitBtnText}/>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
