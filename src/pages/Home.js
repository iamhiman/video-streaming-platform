import { useDispatch, useSelector } from "react-redux";
import { setClickedVideo, setCurrentVideo, setVideoUrls } from "../features/streaming/streamingSlice";
import { HLSWrapper } from "../components/HLSWrapper/HLSWrapper";

export const Home = () => {
  const videoUrls = useSelector((state) => state.streaming.videoUrls);
  const currentVideo = useSelector((state) => state.streaming.currentVideo);
  const clickedVideo = useSelector((state) => state.streaming.clickedVideo);
  const dispatch = useDispatch();

  const onPlayNewVideo = (url) => {
    let urls = [...videoUrls];
    dispatch(setClickedVideo(currentVideo));

    if (currentVideo.id !== clickedVideo.id) {
      let currentVideoIndex = urls.findIndex((u) => u.id === currentVideo.id);
      let clickedVideoIndex = urls.findIndex((u) => u.id === url.id);

      let temp = urls[clickedVideoIndex];
      urls[clickedVideoIndex] = urls[currentVideoIndex];
      urls[currentVideoIndex] = temp;
      dispatch(setCurrentVideo(url));
      dispatch(setVideoUrls(urls));
    }
  };

  return (
    <section className="videoBox">
      <div className="videoBoxLeft">
        <HLSWrapper clickedVideoId={clickedVideo.id} controls={true} videoUrl={videoUrls[0].url} />
      </div>
      <div className="videoBoxRight">
        {videoUrls.slice(1).map((url) => (
          <div key={url.id} id={`videoCard-${url}`} className="videoCard">
            <HLSWrapper controls={true} videoUrl={url.url} onPlay={() => onPlayNewVideo(url)} />
          </div>
        ))}
      </div>
    </section>
  );
};
