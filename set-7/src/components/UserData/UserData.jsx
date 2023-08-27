import React, { useEffect, useState } from "react";
import { fakeFetch } from "./api";

const UserData = () => {
  const [showUser, setShowUser] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const getUserData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/user");
      setShowUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setShowInfo((open) => !open);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>User Information</h1>
      {showUser && (
        <div className="user" key={showUser.name}>
          <p>
            <b>Name:</b> {showUser.name}
          </p>
          <p>
            <b>Email:</b> {showUser.email}
          </p>
          <p>
            <b>Phone No:</b> {showUser.phone}
          </p>
        </div>
      )}
      <button
        style={{ padding: "10px", fontSize: "40px" }}
        onClick={handleClick}
      >
        {showInfo ? "Hide Address" : "Show Address"}
      </button>
      {showInfo
        ? showUser && (
            <div className="addInfo">
              <p>
                <b>Street:</b> {showUser.address.street}
              </p>
              <p>
                <b>Suite:</b> {showUser.address.suite}
              </p>
              <p>
                <b>City: </b> {showUser.address.city}
              </p>
              <p>
                <b>Zip Code:</b> {showUser.address.zipcode}
              </p>
            </div>
          )
        : null}
    </div>
  );
};

export default UserData;
