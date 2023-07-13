import React from "react";
import { employees } from "../data";

const EmployeeDetails = () => {
  const getTotal = () => {
    let total = 0;
    employees.map(({ salary }) => (total += salary));
    return total;
  };

  const totalSalary = getTotal();
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
          {employees.map(({ name, level, dept, designation, salary }) => (
            <li
              style={{
                padding: "40px",
                backgroundColor: level === 2 ? "orange" : null,
                border: designation === "President" ? "4px solid blue" : null,
                Height: "40px",
                marginBottom: "10px",
              }}
            >
              Name:{name},Level:{level},Dept:{dept}, Designation: {designation},
              Salary:{salary}
            </li>
          ))}
          <div
            className="totalExpenses"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <p>
              Total Salary Expenses:{" "}
              <span style={{ color: "red" }}>{totalSalary}</span>
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetails;
