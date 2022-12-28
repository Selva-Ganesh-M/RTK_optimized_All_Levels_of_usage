import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../features/postSlice";
import AddForm from "./AddForm";
import Post from "./Post";

const PostsList = ({ children }) => {
  const posts = useSelector(getPosts);
  const content = posts.map((post) => <Post id={post.id} key={post.id} />);
  return (
    <>
      {children}
      {content}
    </>
  );
};

export default PostsList;
