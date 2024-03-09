import { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setRecordedVideos } from "../features/streaming/streamingSlice";
import { Navbar } from "../components/Navbar/Navbar";

export const VideoRecorderLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recordedVideos = useSelector(state => state.streaming.recordedVideos);
  const [mediaStream, setMediaStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const videoRef = useRef(null);
  const mediaRecorder = useRef(null);
  const chunks = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      setMediaStream(stream);
      videoRef.current.srcObject = stream;
      mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.ondataavailable = event => {
        chunks.current.push(event.data);
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: "video/m3u8" });
        const url = URL.createObjectURL(blob);
        dispatch(setRecordedVideos([...recordedVideos, { id: uuidv4(), url }]));
        chunks.current = [];
      };

      mediaRecorder.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorder.current.stop();
    mediaStream.getTracks().forEach(track => track.stop());
    setRecording(false);
  };

  return (
    <Fragment>
      <Navbar
        buttonText="Watch Videos"
        onNavButtonClick={() => {
          navigate("/");
        }}
      />
      <section className="videoRecorderBox">
        <div className="videoRecorderBoxLeft">
          <video ref={videoRef} autoPlay={true} className="videoFrame" />
          <button
            onClick={recording ? () => stopRecording() : () => startRecording()}
            className="recordButton"
          >
            {recording ? "Stop Recording" : "Start Recording"}
          </button>
        </div>
        <div className="videoRecorderBoxRight">
          <div className="recordedVideoCard">
            {recordedVideos?.map(video => (
              <video key={video.id} controls={true} src={video?.url} controlsList="nodownload" />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
