import "./App.css";
import { products, userData } from "./data";
import DisplayName from "./Pages/DisplayName/DisplayName";
import GadgetsData from "./Pages/GadgetsData/GadgetsData";
import ProductCard from "./Pages/ProductCard/ProductCard";
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <DisplayName name="Mohammad Adil" />
      <hr />
      <ProductCard name="Hard Disk" price="1000" />
      <hr />
      <UserProfile userData={userData} />
      <hr />
      <GadgetsData products={products} />
    </div>
  );
}

export default App;
