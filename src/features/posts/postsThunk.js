import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkApi) => {
    try {
      const response = await fetch(`${baseUrl}/posts`);
      const posts = await response.json();
      if (!posts) throw { message: "posts fetching failed" };
      return thunkApi.fulfillWithValue(posts);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
