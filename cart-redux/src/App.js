import { Route, Routes } from "react-router";
import "./App.css";
import Cart from "./components/Cart";
import Product from "./Pages/Product";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
