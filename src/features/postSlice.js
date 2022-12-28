import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter({
  // sortComparer: (a, b) => b.date.localeCompare(a.date)
  //   selectId: (post) => post.id,
});

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: "",
});
console.log("initial state created ");
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
    addPost: (state, action) => {
      const post = action.payload;
      post.taps = 0;
      console.log("inside addpost:", post);
      postsAdapter.addOne(state, post);
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

// export const getPosts = (state) => {
//   return state.posts;
// };
// export const getSingPost = (state, postId) => {
//   const post = state.posts.find((post) => post.id === postId);
//   return post;
// };

export const { selectAll: getPosts, selectById: getSingPost } =
  postsAdapter.getSelectors((state) => state.posts);

export const { addPost, tapped, removePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
