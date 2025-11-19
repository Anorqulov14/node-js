import { API_URL } from "../config.mjs";
import fetchData from "../utils/fetcher.mjs";
import { validateId } from "../utils/validator.mjs";

export async function getUser(id) {
  try {
    validateId(id);
    const data = await fetchData(`${API_URL}/users/${id}`);
    return data;
  } catch (err) {
    console.error("getUser error:", err.message);
    return null;
  }
}

export async function getAllUsers() {
  try {
    const data = await fetchData(`${API_URL}/users`);
    return data;
  } catch (err) {
    console.error("getAllUsers error:", err.message);
    return [];
  }
}

export default { getUser, getAllUsers };
