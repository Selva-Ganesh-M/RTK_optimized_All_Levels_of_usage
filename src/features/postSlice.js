import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [
    {
      title: "selva",
      id: 1,
      taps: 0,
    },
    {
      title: "ganesh",
      id: 2,
      taps: 0,
    },
  ],
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (post) => {
        const editedPost = { ...post, taps: 0 };
        return { payload: editedPost };
      },
    },
    tapped: (state, action) => {
      console.log(action);
      const post = state.find((post) => post.id === action.payload);
      post.taps = post.taps + 1;
    },
  },
});

export const getPosts = (state) => {
  return state.posts;
};
export const getSingPost = (state, postId) => {
  const post = state.posts.find((post) => post.id === postId);
  return post;
};

export const { addPost, tapped } = postSlice.actions;
export default postSlice.reducer;
