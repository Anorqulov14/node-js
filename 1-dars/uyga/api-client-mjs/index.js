import { getUser } from "./services/userService.mjs";
import config, { API_URL } from "./config.mjs";

console.log("API URL:", API_URL);
console.log("Config timeout:", config.timeout);

const { getPostsByUser } = await import("./services/postService.mjs");
const { getCommentsByPost } = await import("./services/commentService.mjs");

try {
  const user = await getUser(1);
  console.log("User:", user);

  const posts = await getPostsByUser(user.id);
  console.log("Posts:", posts.slice(0, 2));

  if (posts.length) {
    const comments = await getCommentsByPost(posts[0].id);
    console.log("Comments on first post:", comments.slice(0, 2));
  }
} catch (err) {
  console.error("Main error:", err.message);
}
