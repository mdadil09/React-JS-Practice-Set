import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const UserProfile = () => {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/profile"
      );
      if (status === 200) {
        setUserData(data.profiles);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>User Profile</h1>
      {userData && (
        <div className="item" key={userData.name}>
          <p>
            <b>Name:</b> {userData.name}
          </p>
          <p>
            <b>Age:</b> {userData.age}
          </p>
          <p>
            <b>Gender:</b> {userData.gender}
          </p>
          <p>
            <b>Email:</b> {userData.email}
          </p>
          <p>
            <b>Occupation:</b> {userData.occupation}
          </p>
        </div>
      )}
      <button
        style={{ padding: "10px", fontSize: "40px" }}
        onClick={() => setUserData({ ...userData, name: "Jake" })}
      >
        Update Name
      </button>
    </div>
  );
};

export default UserProfile;
