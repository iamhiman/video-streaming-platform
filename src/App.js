import { Fragment } from "react";
import { Home } from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videoRecorder" element={<>Hello</>} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
