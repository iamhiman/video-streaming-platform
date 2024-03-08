import { configureStore } from "@reduxjs/toolkit";
import streamingSlice from "../features/streaming/streamingSlice";

export const store = configureStore({
  reducer: {
    streaming: streamingSlice,
  },
});
