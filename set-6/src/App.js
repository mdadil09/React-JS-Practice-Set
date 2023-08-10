import "./App.css";
import HabitTracker from "./Pages/HabitTracker/HabitTracker";
import ProductCart from "./Pages/ProductCart/ProductCart";
import Todo from "./Pages/Todo/Todo";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "50px", marginLeft: "60px" }}>React Set 6</h1>
      <hr />
      <ProductCart />
      <hr />
      <Todo />
      <HabitTracker />
    </div>
  );
}

export default App;
