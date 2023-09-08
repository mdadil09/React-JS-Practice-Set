import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Question from "./Pages/Question";
import Answer from "./Pages/Answer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "60px" }}>React Forum App</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/answer/:id" element={<Answer />} />
      </Routes>
    </div>
  );
}

export default App;
