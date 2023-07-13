import React from "react";
import { employees } from "../data";

const EmployeeDetails = () => {
  return (
    <div className="container">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          fontSize: "40px",
        }}
      >
        Employee's Details
      </h1>
      <div className="details" style={{ fontSize: "24px", fontWeight: "bold" }}>
        <ul>
          {employees.map((employee) => (
            <li style={{ padding: "10px" }}>
              Name:{employee.name},Level:{employee.level},Dept:{employee.dept},
              Designation: {employee.designation}, Salary:{employee.salary}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetails;
