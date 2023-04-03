import axios from "axios";

async function getComments(postId) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_COMMENTS_PATH}?postId=${postId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getComments;
