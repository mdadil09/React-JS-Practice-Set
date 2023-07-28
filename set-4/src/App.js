import "./App.css";
import HeroAndVillian from "./Pages/HeroAndVillian/HeroAndVillian";
import { characters } from "./data";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "60px" }}>Reactjs Set-4</h1>
      <hr />
      <HeroAndVillian characters={characters} />
      <hr />
    </div>
  );
}

export default App;
