import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getPosts } from "./postsThunk";

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
      });
  },
});

export const { selectAll } = postsAdapter.getSelectors((state) => state.posts);

export default postsSlice.reducer;
