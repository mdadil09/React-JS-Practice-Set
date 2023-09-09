import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Inbox from "./Pages/Inbox";
import Sent from "./Pages/Sent";
import SingleEmail from "./Pages/SingleEmail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/singlemail/:id" element={<SingleEmail />} />
      </Routes>
    </div>
  );
}

export default App;
