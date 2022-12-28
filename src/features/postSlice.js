import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [
    {
      title: "selva",
      id: "1",
      taps: 0,
    },
    {
      title: "ganesh",
      id: "2",
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
    removePost: (state, action) => {
      console.log(action);
      const { id } = action.payload;
      const updatedState = state.filter((post) => {
        console.log(post.id, id);
        return post.id !== id;
      });
      console.log(updatedState);
      return updatedState;
    },
    updatePost: (state, action) => {
      const post = action.payload;
      const posts = state.filter((item) => item.id !== post.id);
      return [...posts, { ...post, taps: 0 }];
    },
    tapped: (state, action) => {
      console.log(action);
      const post = state.find((post) => post.id === action.payload);
      if (!post) return state;
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

export const { addPost, tapped, removePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
