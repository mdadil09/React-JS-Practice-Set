import "./App.css";
import EmployeeCard from "./EmployeeCard/EmployeeCard";

function App() {
  return (
    <div className="App">
      <EmployeeCard
        name="Sachin Kumar Baral"
        designation="Automation Engineer"
        workExperience="5 year"
      />
    </div>
  );
}

export default App;
