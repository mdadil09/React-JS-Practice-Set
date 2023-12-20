import { Route, Routes } from "react-router";
import "./App.css";
import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
