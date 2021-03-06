import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface IAuthor {
  id: number;
  name: string;
  email: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchAuthors = createAsyncThunk<IAuthor[]>(
  "app/fetchAuthors",
  async () => {
    const response = await axios.get<IAuthor[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);

export const fetchPosts = createAsyncThunk<IPost[]>(
  "app/fetchPosts",
  async () => {
    const response = await axios.get<IPost[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
);

interface IState {
  authors: IAuthor[];
  posts: IPost[];
}

const initialState: IState = {
  authors: [],
  posts: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
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

export type RootStateType = ReturnType<typeof rootReducer>;
