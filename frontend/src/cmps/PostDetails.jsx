import { usePostsContext } from "../hooks/usePostsContext";
import { utilService } from "../services/util.service.js";
export function PostDetails({ post }) {
  const { dispatch } = usePostsContext();

  async function handleDeletePost() {
    const response = await fetch(
      `http://localhost:3030/api/posts/${post._id}`,
      {
        method: "DELETE",
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_POST", payload: json });
    }
  }

  return (
    <li key={post._id}>
      <article className="post-card">
        <h2>{post.title}</h2>
        <h4>By {post.author}</h4>
        <p>{utilService.formatDate(post.createdAt)}</p>
        <span>{post.content}</span>
        <button
          onClick={handleDeletePost}
          className="material-symbols-outlined"
        >
          delete
        </button>
      </article>
    </li>
  );
}
