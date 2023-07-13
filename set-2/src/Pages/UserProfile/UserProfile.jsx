import React from "react";

const UserProfile = ({ userData }) => {
  const { name, age, email } = userData;
  return (
    <div
      className="container"
      style={{ textAlign: "center", fontSize: "40px", padding: "60px" }}
    >
      <h1>User Profile</h1>
      <p>
        Name: <span style={{ color: "green" }}>{name}</span>
      </p>
      <p>
        Age: <span style={{ color: "green" }}>{age}</span>
      </p>
      <p>
        Email: <span style={{ color: "green" }}>{email}</span>
      </p>
    </div>
  );
};

export default UserProfile;
