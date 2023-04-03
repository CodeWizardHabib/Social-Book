import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().trim().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password cannot be longer than 32 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]+$/,
      "Password must contain at least one letter and one number"
    ),
});
export default SignupSchema