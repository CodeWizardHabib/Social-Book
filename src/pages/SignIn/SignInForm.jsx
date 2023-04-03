import React, { useContext } from "react";
import FormikContainer from "../../components/form/FormikContainer";
import { userSignInFields } from "../../constants/user";
import SignInSchema from "../../schemas/signInSchema";
import getLocalStorage from "../../utils/getFromLocalStorage";
import { toast } from "react-toastify";
import userExist from "../../utils/isUserExistWithEmail";
import SignInFields from "./SignInFields";
import validUser from "../../middlewares/validUser";
import { userContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
export default function SignInForm() {
  const navigate = useNavigate();

  const { setUser } = useContext(userContext);

  const handleSubmit = (values, { resetForm }) => {
    const users = JSON.parse(getLocalStorage("users"));
    if (users) {
      const user = userExist(values.email, users);
      if (!validUser(user, values.password)) {
        toast.error("Invalid credentials");
        return;
      }
      setUser(user);
      toast.success("signed in");
      navigate("/posts");
    } else {
      toast.warn("Please First Signed Up!");
    }
    resetForm();
    // handle form submission
  };

  return (
    <FormikContainer
      initialValues={userSignInFields}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
      submitBtnText="SignIn"
      className="sign-in"
    >
      <SignInFields />
    </FormikContainer>
  );
}
