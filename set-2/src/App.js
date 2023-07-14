import "./App.css";
import {
  content,
  heading,
  learning,
  name,
  products,
  title,
  userData,
} from "./data";
import About from "./Pages/About/About";
import Article from "./Pages/Article/Article";
import DisplayName from "./Pages/DisplayName/DisplayName";
import GadgetsData from "./Pages/GadgetsData/GadgetsData";
import MyGadgets from "./Pages/MyGadgets/MyGadgets";
import Phones from "./Pages/Phones/Phones";
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
      <hr />
      <Phones products={products} />
      <hr />
      <Article title={title} content={content} />
      <hr />
      <About heading={heading} name={name} learning={learning} />
      <hr />
      <MyGadgets products={products} />
      <hr />
    </div>
  );
}

export default App;
