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

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, thunkApi) => {
    try {
      const res = await fetch(`${baseUrl}/posts`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(post),
      });
      const rpost = await res.json();
      if (!rpost) throw { message: "rpost adding failed." };
      return thunkApi.fulfillWithValue(rpost);
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (post, thunkApi) => {
    // console.log(post, id);
    try {
      const res = await fetch(`${baseUrl}/posts/${post.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(post),
      });
      const rpost = await res.json();
      if (!rpost) throw { message: "update failed." };
      return thunkApi.fulfillWithValue(rpost);
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ id, post }, thunkApi) => {
    console.log(id, post);
    try {
      const res = await fetch(`${baseUrl}/posts/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      return thunkApi.fulfillWithValue(post);
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
