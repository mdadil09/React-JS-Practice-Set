import React from "react";

// Creating an array of employee objects

const EmployeeCard = ({ name, designation, workExperience }) => {
  return (
    <div className="container">
      <h3 style={{ color: "red" }}>Name: {name}</h3>
      <p style={{ color: "green", fontSize: "18px" }}>
        Designation: {designation}
      </p>
      <p style={{ color: "blue", fontSize: "18px" }}>
        Work Experience: {workExperience}
      </p>
    </div>
  );
};

export default EmployeeCard;
