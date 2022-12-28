import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { getSingPost, removePost, tapped } from "../features/posts/postSlice";

const Post = ({ id }) => {
  const navigate = useNavigate();
  const post = useSelector((state) => getSingPost(state, id));
  const dispatch = useDispatch();
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
        margin: "1em",
        padding: "1em",
        fontSize: "1.3em",
      }}
    >
      <div onClick={() => dispatch(tapped(id))}>{post.title}</div>
      {post.taps}
      <div>
        <button
          onClick={() => navigate(`/edit/${id}`)}
          style={{ color: "blue" }}
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(removePost({ id }))}
          style={{ color: "red" }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default React.memo(Post);
