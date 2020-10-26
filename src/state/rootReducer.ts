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

interface IState {
  authors: IData[];
  posts: IData[];
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
