import { createSlice } from "@reduxjs/toolkit";
import { videoUrls } from "../../constants";

const initialState = {
  videoUrls: [...videoUrls],
  currentVideo: {
    id: videoUrls[0].id,
    url: videoUrls[0].url,
  },
  clickedVideo: {
    id: "",
    url: "",
  },
};

export const streamingSlice = createSlice({
  name: "streaming",
  initialState,
  reducers: {
    setClickedVideo: (state, action) => {
      state.clickedVideo = { ...action.payload };
    },
    setCurrentVideo: (state, action) => {
      state.currentVideo = { ...action.payload };
    },
    setVideoUrls: (state, action) => {
      console.log(action);
      state.videoUrls = [...action.payload];
    },
  },
});

export const { setClickedVideo, setCurrentVideo, setVideoUrls } = streamingSlice.actions;

export default streamingSlice.reducer;
