import "./App.css";
import DisplayVegetable from "./Pages/DisplayVegetable/DisplayVegetable";
import HeroAndVillian from "./Pages/HeroAndVillian/HeroAndVillian";
import MagnifyText from "./Pages/MagnifyText/MagnifyText";
import ToDoList from "./Pages/ToDoList/ToDoList";
import ToDoList1 from "./Pages/ToDoList/TodoListNew";
import { characters, itemList, todoItems, todoItems1 } from "./data";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "60px" }}>Reactjs Set-4</h1>
      <hr />
      <HeroAndVillian characters={characters} />
      <hr />
      <MagnifyText />
      <hr />
      <DisplayVegetable itemList={itemList} />
      <hr />
      <ToDoList todoItems={todoItems} />
      <hr />
      <ToDoList1 todoItems1={todoItems1} />
    </div>
  );
}

export default App;
