import { useEffect, useState } from "react";
import { AppHeader } from "./AppHeader.jsx";
import { PostDetails } from "./PostDetails.jsx";
import { PostForm } from "./PostForm.jsx";

import { usePostsContext } from "../hooks/usePostsContext.jsx";

export function Posts() {
  // const [posts, setPosts] = useState(null);
  const [isPostFormOpen, setIsPostFormOpen] = useState(false);

  const { posts, dispatch } = usePostsContext();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const response = await fetch("http://localhost:3030/api/posts");
    const json = await response.json();
    if (response.ok) {
      // setPosts(json);
      dispatch({ type: "SET_POSTS", payload: json });
    }
  }

  return (
    <section>
      <button onClick={() => setIsPostFormOpen(!isPostFormOpen)}>
        Add New Post
      </button>

      {isPostFormOpen && <PostForm setIsPostFormOpen={setIsPostFormOpen} />}

      {posts ? (
        <ul className="post-cards-list">
          {/* <h1>Posts</h1> */}
          {posts.map((post) => (
            <PostDetails post={post} key={post._id} />
          ))}
        </ul>
      ) : (
        <h1>No posts</h1>
      )}
    </section>
  );
}
