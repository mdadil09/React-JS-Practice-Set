import "./App.css";
import WeatherData from "./components/WeatherData/WeatherData";

function App() {
  return (
    <div className="App">
      <h1 style={{ padding: "60px", fontSize: "40px" }}>
        Reactjs Practice Set - 7
      </h1>
      <hr />
      <WeatherData />
    </div>
  );
}

export default App;
