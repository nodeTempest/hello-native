import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IFetchAuthor {
  id: number;
  fullName: string;
  email: string;
}

export type IAuthor = Omit<IFetchAuthor, "id"> & { id: string };

export interface IPost {
  userId: string;
  id: string;
  title: string;
  content: string;
}

export const fetchAuthors = createAsyncThunk<IAuthor[]>(
  "app/fetchAuthors",
  async () => {
    const response = await axios.get<IFetchAuthor[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data.map(author => ({
      ...author,
      id: author.id.toString(),
    }));
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
