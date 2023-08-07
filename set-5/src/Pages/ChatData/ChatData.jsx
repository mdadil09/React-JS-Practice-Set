import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const ChatData = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUserData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/userchat"
      );
      if (status === 200) {
        setUserData(data);
        setIsLoading(false);
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
      <h1>Chat Room</h1>
      <p>{isLoading && "Loading..."}</p>
      {userData &&
        userData?.map(({ name, messages }) => (
          <ul style={{ listStyle: "none" }}>
            <li key={name} style={{ padding: "10px" }}>
              <b>{name}'s Chat</b>
            </li>
            <ul key={name} style={{ listStyle: "none" }}>
              {messages.map(({ from, message }) => (
                <li>
                  <b>{from}</b>: {message}
                </li>
              ))}
            </ul>
          </ul>
        ))}
    </div>
  );
};

export default ChatData;
