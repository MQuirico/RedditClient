import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubredditState {
  name: string;
  posts: string[];
}

const initialState: SubredditState = {
  name: "reactjs",
  posts: [],
};

const subredditSlice = createSlice({
  name: "subreddit",
  initialState,
  reducers: {
    setSubreddit: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPosts: (state, action: PayloadAction<string[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setSubreddit, setPosts } = subredditSlice.actions;
export default subredditSlice.reducer;

