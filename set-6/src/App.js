import "./App.css";
import ProductCart from "./Pages/ProductCart/ProductCart";
import Todo from "./Pages/Todo/Todo";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "50px" }}>React Set 6</h1>
      <hr />
      <ProductCart />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
