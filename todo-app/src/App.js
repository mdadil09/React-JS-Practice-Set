import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import OpenPage from "./Pages/OpenPage";
import DonePage from "./Pages/DonePage";
import Individual from "./Pages/Individual";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/openpage" element={<OpenPage />} />
        <Route path="/donepage" element={<DonePage />} />
        <Route path="/individualpage/:id" element={<Individual />} />
      </Routes>
    </div>
  );
}

export default App;
