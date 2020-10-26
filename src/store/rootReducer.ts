import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IData {
  id: string;
}

export const fetchAuthors = createAsyncThunk<IData[]>(
  "app/fetchAuthors",
  async () => {
    const response = await axios.get<IData[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);

export const fetchPosts = createAsyncThunk<IData[]>(
  "app/fetchPosts",
  async () => {
    const response = await axios.get<IData[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
);

const appSlice = createSlice({
  name: "app",
  initialState: { authors: [] as IData[], posts: [] as IData[] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      state.authors.push(...action.payload);
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts.push(...action.payload);
    });
  },
});

export const { reducer: rootReducer } = appSlice;
