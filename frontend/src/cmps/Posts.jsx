import { useEffect, useState } from "react";
import { PostDetails } from "./PostDetails.jsx";
// import axios from "axios";

export function Posts() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const response = await fetch("http://localhost:3030/api/posts");
    const json = await response.json();
    if (response.ok) {
      setPosts(json);
    }
  }

  return (
    <section>
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
