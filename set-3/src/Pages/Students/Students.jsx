import React from "react";

const Students = ({ studentData }) => {
  const getMean = studentData.reduce((acc, { marks }) => {
    return (acc += marks);
  }, 0);
  const mean = getMean / studentData.length;
  console.log(mean);
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Certification Status</h1>
      {mean > 80 ? (
        <p>
          <span
            style={{
              backgroundColor: "darkgray",
              marginRight: "10px",
              borderRadius: "15px",
            }}
          >
            Status:{" "}
          </span>
          <span style={{ color: "green" }}>Certification Approved</span>
        </p>
      ) : (
        <p>
          {" "}
          <span
            style={{
              backgroundColor: "darkgray",
              marginRight: "10px",
              borderRadius: "15px",
            }}
          >
            Status:{" "}
          </span>
          <span style={{ color: "red" }}>Certification Not Approved</span>
        </p>
      )}
    </div>
  );
};

export default Students;
