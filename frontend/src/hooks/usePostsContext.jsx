import { PostsContext } from "../context/PostContext.jsx";
import { useContext } from "react";

export function usePostsContext() {
  const context = useContext(PostsContext);

  if (!context) {
    throw Error("ERROR");
  }
  return context;
}
