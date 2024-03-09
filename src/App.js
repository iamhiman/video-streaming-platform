import { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { VideoStreamingLayout } from "./pages/VideoStreamingLayout";
import { VideoRecorderLayout } from "./pages/VideoRecorderLayout";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<VideoStreamingLayout />} />
          <Route path="/videoRecorder" element={<VideoRecorderLayout />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
