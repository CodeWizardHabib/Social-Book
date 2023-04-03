import * as Yup from "yup";

const PostSchema = Yup.object().shape({
  title: Yup.string().trim().min(2, "Too Short!").required("Required"),
  body: Yup.string().trim().min(2, "Too Short!").required("Required"),
});
export default PostSchema;
