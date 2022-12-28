import React from "react";
import { useSelector } from "react-redux";
import { selectAll } from "../features/posts/postSlice";
import Post from "./Post";

const PostsList = ({ children }) => {
  const posts = useSelector(selectAll);
  if (!posts) return "loading";
  const content = posts.map((post) => <Post id={post.id} key={post.id} />);
  return (
    <>
      {children}
      {content}
    </>
  );
};

export default PostsList;
