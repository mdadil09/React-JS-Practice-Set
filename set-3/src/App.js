import "./App.css";
import Cartoon from "./Pages/Cartoon/Cartoon";
import DisplayCartoon from "./Pages/DisplayCartoon/DisplayCartoon";
import DisplayImage from "./Pages/DisplayImage/DisplayImage";
import DisplayName from "./Pages/DisplayName/DisplayName";
import { cartoons } from "./data";

function App() {
  return (
    <div className="App">
      <DisplayImage
        image="https://picsum.photos/200"
        height="400px"
        width="400px"
      />
      <hr />
      <Cartoon cartoons={cartoons} />
      <hr />
      <DisplayName cartoons={cartoons} />
      <hr />
      <DisplayCartoon cartoons={cartoons} />
      <hr />
    </div>
  );
}

export default App;
