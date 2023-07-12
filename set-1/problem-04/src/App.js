import "./App.css";
import DisplayImage from "./DisplayImage/DisplayImage";

export const imageLink =
  "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
export const caption = "Spring Flowers";

function App() {
  return (
    <div className="App">
      <DisplayImage captions={caption} />
    </div>
  );
}

export default App;
