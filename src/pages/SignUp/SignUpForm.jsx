import React from "react";
import FormikField from "../../components/form/FormikField";
import FormikContainer from "../../components/form/FormikContainer";
import { userInputDetails } from "../../constants/user";
import SignupSchema from "../../schemas/signUpSchema";
import setLocalStorage from "../../utils/setToLocalStorage";
import getLocalStorage from "../../utils/getFromLocalStorage";
import { toast } from "react-toastify";
import userExist from "../../utils/isUserExistWithEmail";
import SignUpFields from "./SignUpFields";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
export default function SignUpForm() {
  const navigate = useNavigate()
  const handleSubmit = (values, { resetForm }) => {
    const users = JSON.parse(getLocalStorage("users"));
    if (users) {
      userExist(values.email, users)
        ? toast.warn("user already exist with email")
        : setLocalStorage(
            "users",
            JSON.stringify([...users, { ...values, userId: uuidv4() }])
          );
    } else {
      setLocalStorage(
        "users",
        JSON.stringify([{ ...values, userId: uuidv4() }])
      );
      toast.success("You Signed Up successfully!");
      navigate('/signIn')
    }
    resetForm();
    // handle form submission
  };
  return (
    <FormikContainer
      initialValues={userInputDetails}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
      submitBtnText="SignUp"
      className="sign-up"
    >
      <SignUpFields />
    </FormikContainer>
  );
}
