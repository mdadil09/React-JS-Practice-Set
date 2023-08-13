import "./App.css";
import HabitTracker from "./Pages/HabitTracker/HabitTracker";
import HabitUnarchieved from "./Pages/HabitUnarchieved/HabitUnarchieved";
import ProductCart from "./Pages/ProductCart/ProductCart";
import Projects from "./Pages/Projects/Projects";
import SocialMedia from "./Pages/SocialMedia/SocialMedia";
import Todo from "./Pages/Todo/Todo";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";
import UserProfile from "./Pages/UserProfile/UserProfile";
import VideoLabel from "./Pages/VideoLabel/VideoLabel";
import VideoLibrary from "./Pages/VideoLibrary/VideoLibrary";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "50px", marginLeft: "60px" }}>React Set 6</h1>
      <hr />
      <ProductCart />
      <hr />
      <Todo />
      <HabitTracker />
      <hr />
      <VideoLibrary />
      <hr />
      <SocialMedia />
      <hr />
      <HabitUnarchieved />
      <hr />
      <Projects />
      <hr />
      <UserProfile />
      <hr />
      <VideoLabel />
      <hr />
      <UpdateProfile />
    </div>
  );
}

export default App;
