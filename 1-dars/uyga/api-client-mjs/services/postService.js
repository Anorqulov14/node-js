import { API_URL } from "../config.mjs";
import fetchData from "../utils/fetcher.mjs";
import { validateId } from "../utils/validator.mjs";

export async function getPostsByUser(userId) {
  try {
    validateId(userId);
    const data = await fetchData(`${API_URL}/posts?userId=${userId}`);
    return data;
  } catch (err) {
    console.error("getPostsByUser error:", err.message);
    return [];
  }
}

export default { getPostsByUser };
