import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getPosts, addPost, updatePost, deletePost } from "./postsThunk";

const postsAdapter = createEntityAdapter({});
const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: "",
});
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "success";
        postsAdapter.upsertMany(state, action.payload);
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload.message;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        postsAdapter.addOne(state, action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        console.log(action.payload);
        postsAdapter.removeOne(state, action.payload.id);
      });
  },
});

export const { selectAll, selectById } = postsAdapter.getSelectors(
  (state) => state.posts
);

export default postsSlice.reducer;
