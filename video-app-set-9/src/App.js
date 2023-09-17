import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Videos from "./Pages/Videos";
import LikedVideos from "./Pages/LikedVideos";
import WatchLater from "./Pages/WatchLater";
import Navbar from "./components/Navbar";
import SingleVideo from "./Pages/SingleVideo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/singlevideo/:id" element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
