import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Profile = () => {
  const { user } = useContext(BookContext);

  return (
    <>
      <h1>Profile</h1>
      <div className="container">
        {user && (
          <div className="item">
            <div className="card">
              <img src={user.img} alt="user" />
              <div className="detail">
                <h4>{user.name}</h4>
                <p>{user.bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
