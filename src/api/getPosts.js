import axios from "axios";

async function fetchPosts() {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + process.env.REACT_APP_POSTS_URL
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchPosts;
