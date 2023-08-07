import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const UserFeed = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getUserData = async () => {
    try {
      const { data, status } = await fakeFetch("https://example.com/api/users");
      if (status === 200) {
        setUserData(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(setError(error.message));
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>User Feed</h1>
      <p>{isLoading && "Loading..."}</p>
      <ul style={{ listStyle: "none" }}>
        {userData &&
          userData?.map(({ name, image, likes, comments }) => (
            <li key={name}>
              <img src={image} alt={name} height={400} width={600} />
              <h2>Name: {name}</h2>
              <p>Likes: {likes}</p>
              <p>Comments: {comments}</p>
            </li>
          ))}
      </ul>
      <p>{error}</p>
    </div>
  );
};

export default UserFeed;
