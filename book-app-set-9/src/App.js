import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Read from "./Pages/Read";
import Favorite from "./Pages/Favorite";
import Profile from "./Pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
