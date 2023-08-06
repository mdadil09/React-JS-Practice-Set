import "./App.css";
import Products from "./Pages/Products/Products";
import UserStatus from "./Pages/UsersStatus/UserStatus";

function App() {
  return (
    <div className="App">
      <h1 style={{ padding: "10px", fontSize: "50px" }}>React Set 5</h1>
      <hr />
      <UserStatus />
      <hr />
      <Products />
    </div>
  );
}

export default App;
