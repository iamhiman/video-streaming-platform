import ReactHlsPlayer from "react-hls-player/dist";

export const HLSWrapper = ({ clickedVideoId, controls, videoUrl, onPlay = () => {} }) => {
  return <ReactHlsPlayer autoPlay={clickedVideoId ? true : false} controls={controls} src={videoUrl} onPlay={onPlay} />;
};
