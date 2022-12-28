import React from "react";
import { useSelector } from "react-redux";
import { selectAll } from "../features/posts/postSlice";

const Test = () => {
  const posts = useSelector(selectAll);
  return (
    <>
      {"hello"} {JSON.stringify(posts)}
    </>
  );
};

export default Test;
