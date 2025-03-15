import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "./subredditSlice";

export const store = configureStore({
  reducer: {
    subreddit: subredditReducer,
  },
});

// Inferimos los tipos de RootState y AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

