import * as Yup from "yup";

const PostSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  body: Yup.string()
    .trim()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
});
export default PostSchema;
