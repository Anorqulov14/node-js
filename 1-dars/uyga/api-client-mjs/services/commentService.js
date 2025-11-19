import { API_URL } from "../config.mjs";
import fetchData from "../utils/fetcher.mjs";
import { validateId } from "../utils/validator.mjs";

export async function getCommentsByPost(postId) {
  try {
    validateId(postId);
    const data = await fetchData(`${API_URL}/comments?postId=${postId}`);
    return data;
  } catch (err) {
    console.error("getCommentsByPost error:", err.message);
    return [];
  }
}

export default { getCommentsByPost };
