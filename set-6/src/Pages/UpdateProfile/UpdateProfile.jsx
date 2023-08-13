import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const UpdateProfile = () => {
  const [showUser, setShowUser] = useState({});
  const [buttonClicked, setButtonClicked] = useState(false);

  const getUserData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/profile"
      );
      if (status === 200) {
        setShowUser(data.profile);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const { name, age, gender, email, occupation, followers, followedBy } =
    showUser;

  const handleClick = () => {
    setShowUser({ ...showUser, followers: followers + 1 });
    setButtonClicked(true);
  };

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>User Profile</h1>
      {
        <div className="items" key={name}>
          <p>
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Age:</b> {age}
          </p>
          <p>
            <b>Gender:</b> {gender}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
          <p>
            <b>Occupation:</b> {occupation}
          </p>
          <p>
            <b>Followers:</b> {followers}
          </p>
          <p>
            <b>FollowedBy:</b> {followedBy}
          </p>
        </div>
      }
      <button
        style={{ padding: "10px", fontSize: "40px" }}
        onClick={handleClick}
        disabled={buttonClicked}
      >
        Follow John
      </button>
    </div>
  );
};

export default UpdateProfile;
