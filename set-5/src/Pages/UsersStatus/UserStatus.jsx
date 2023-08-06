import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const UserStatus = () => {
  const [isOnline, setIsOnline] = useState([]);

  const getUsers = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/users/status"
      );
      if (status === 200) {
        setIsOnline(data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Online Status</h1>
      <ul style={{ listStyle: "none" }}>
        {isOnline &&
          isOnline?.map(({ name, status }) => (
            <li
              key={name}
              style={{ color: status === "Online" ? "green" : "red" }}
            >
              {name} - {status}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserStatus;
