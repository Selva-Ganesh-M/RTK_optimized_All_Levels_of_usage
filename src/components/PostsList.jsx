import React from "react";
import { useSelector } from "react-redux";
// import { getPosts } from "../features/posts/postSlice";
import Post from "./Post";

const PostsList = ({ children }) => {
  console.log("postsList-s");
  let posts = "";
  // const posts = useSelector(getPosts);
  console.log("postsList-e");
  // console.log(posts);
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
