import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const UserProfile = ({ heading, width, height }) => {
  const [showImage, getShowImage] = useState();

  const getUserInformation = async () => {
    try {
      const { data, status } = await fakeFetch("https://example.com/api/user");
      if (status === 200) {
        getShowImage(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const name = showImage?.name;
  const image = showImage?.image;
  const likes = showImage?.likes;
  const comments = showImage?.comments;

  useEffect(() => {
    getUserInformation();
  }, []);
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>{heading}</h1>
      <div>
        <img src={image} height={height} width={width} alt={name} />
      </div>
      <h3>Name : {name}</h3>
      <h3>Likes : {likes}</h3>
      <h3>Comments : {comments}</h3>
    </div>
  );
};

export default UserProfile;
