import React from "react";

const StudentsDetails = ({ student }) => {
  const { name, english, maths, computers } = student;

  const totalMarks = english + maths + computers;

  const display =
    totalMarks >= 225
      ? "A"
      : totalMarks >= 180
      ? "B"
      : totalMarks >= 150
      ? "C"
      : "D";

  return (
    <div className="container">
      <h1>Student Detail</h1>
      <div className="details" style={{ textAlign: "center" }}>
        <h3>Name: {name}</h3>
        <p>English: {english}</p>
        <p>Math: {maths}</p>
        <p>Computer: {computers}</p>
        <p>Total Marks's: {totalMarks}</p>
        <p>
          Grade: <span style={{ color: "green" }}>{display}</span>
        </p>
      </div>
    </div>
  );
};

export default StudentsDetails;
