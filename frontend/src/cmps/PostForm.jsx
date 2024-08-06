import { useState } from "react";
import { usePostsContext } from "../hooks/usePostsContext";

export function PostForm({ setIsPostFormOpen }) {
  const { dispatch } = usePostsContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  async function handleSubmit(ev) {
    ev.preventDefault();

    const post = {
      title,
      content,
      author,
    };

    const response = await fetch("http://localhost:3030/api/posts", {
      method: "Post",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setTitle("");
      setContent("");
      setAuthor("");
      setError(null);
      setEmptyFields([]);
      console.log("new post added", json);
      dispatch({ type: "CREATE_POST", payload: json });
      setIsPostFormOpen(false);
    }
  }

  return (
    <section className="post-form">
      <div className="post-form-overlay fade-in"></div>

      <form onSubmit={handleSubmit}>
        <span className="close-btn" onClick={() => setIsPostFormOpen(false)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4 4 8 8m-8 0 8-8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
            ></path>
          </svg>
        </span>

        <h3>Add A New Post</h3>

        <label>Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          className={emptyFields.includes("title") ? "error" : ""}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Content: </label>
        <textarea
          id="content"
          name="content"
          rows="10"
          cols="50"
          value={content}
          className={emptyFields.includes("content") ? "error" : ""}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <label>Author: </label>
        <input
          id="author"
          name="auther"
          type="text"
          value={author}
          className={emptyFields.includes("author") ? "error" : ""}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">Post</button>

        {error && <div className="error err-msg">{error}</div>}
      </form>
    </section>
  );
}
