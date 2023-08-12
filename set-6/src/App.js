import "./App.css";
import HabitTracker from "./Pages/HabitTracker/HabitTracker";
import HabitUnarchieved from "./Pages/HabitUnarchieved/HabitUnarchieved";
import ProductCart from "./Pages/ProductCart/ProductCart";
import Projects from "./Pages/Projects/Projects";
import SocialMedia from "./Pages/SocialMedia/SocialMedia";
import Todo from "./Pages/Todo/Todo";
import UserProfile from "./Pages/UserProfile/UserProfile";
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
    </div>
  );
}

export default App;
