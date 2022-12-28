import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingPost, tapped } from "../features/postSlice";

const Post = ({ id }) => {
  const post = useSelector((state) => getSingPost(state, id));
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(tapped(id))}
      style={{
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
        margin: "1em",
        padding: "1em",
        fontSize: "1.3em",
      }}
    >
      <div>{post.title}</div>
      {post.taps}
    </div>
  );
};

export default React.memo(Post);
