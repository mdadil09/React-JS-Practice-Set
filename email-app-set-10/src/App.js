import "./App.css";
import { Routes, Route } from "react-router-dom";
import Inbox from "./Pages/Inbox";
import Spam from "./Pages/Spam";
import Trash from "./Pages/Trash";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
