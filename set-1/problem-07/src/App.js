import "./App.css";
import StudentsDetails from "./StudentsDetails/StudentsDetails";

export const student = {
  name: "John Doe",
  english: 90,
  maths: 80,
  computers: 70,
};

function App() {
  return (
    <div className="App">
      <StudentsDetails student={student} />
    </div>
  );
}

export default App;
