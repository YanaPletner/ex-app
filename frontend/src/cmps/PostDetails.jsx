export function PostDetails({ post }) {
  return (
    <li key={post._id}>
      <article className="post-card">
        <h2>{post.title}</h2>
        <h4>By {post.author}</h4>
        <span>{post.content}</span>
      </article>
    </li>
  );
}
