import { createSlice } from "@reduxjs/toolkit";
import { videoUrlsList } from "../../constants";

const initialState = {
  videoUrls: [...videoUrlsList],
  currentVideo: {
    id: videoUrlsList[0].id,
    url: videoUrlsList[0].url,
  },
  clickedVideo: {
    id: "",
    url: "",
  },
  recordedVideos: [],
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
      state.videoUrls = [...action.payload];
    },
    setRecordedVideos: (state, action) => {
      state.recordedVideos = [...action.payload];
    },
  },
});

export const { setClickedVideo, setCurrentVideo, setVideoUrls, setRecordedVideos } =
  streamingSlice.actions;

export default streamingSlice.reducer;
