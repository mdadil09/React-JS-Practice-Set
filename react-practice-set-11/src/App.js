import "./App.css";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import { data } from "./data/data";

function App() {
  console.log(data);
  return (
    <div className="App">
      <h1>Reactjs-Practice-set-11</h1>
      <TopBar />
      <Home />
    </div>
  );
}

export default App;
