import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Videos from "./Pages/Videos";
import LikedVideos from "./Pages/LikedVideos";
import WatchLater from "./Pages/WatchLater";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Routes>
    </div>
  );
}

export default App;
