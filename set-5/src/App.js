import "./App.css";
import ChatData from "./Pages/ChatData/ChatData";
import Products from "./Pages/Products/Products";
import UserComments from "./Pages/UserComments/UserComments";
import UserFeed from "./Pages/UserFeed/UserFeed";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UserStatus from "./Pages/UsersStatus/UserStatus";

function App() {
  return (
    <div className="App">
      <h1 style={{ padding: "10px", fontSize: "50px" }}>React Set 5</h1>
      <hr />
      <UserStatus />
      <hr />
      <Products />
      <hr />
      <UserProfile heading="User Profile" height={400} width={600} />
      <hr />
      <UserFeed />
      <hr />
      <ChatData />
      <hr />
      <UserComments />
    </div>
  );
}

export default App;
