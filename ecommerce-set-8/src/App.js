import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontWeight: isActive ? "600" : "200",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "red" : "",
  });
  return (
    <div className="App">
      <nav className="nav">
        <NavLink style={getActiveStyle} to="/">
          Home
        </NavLink>
        <NavLink style={getActiveStyle} to="/category">
          Category
        </NavLink>
        <NavLink style={getActiveStyle} to="/cart">
          Cart
        </NavLink>
        <NavLink style={getActiveStyle} to="/wishlist">
          Wishlist
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
