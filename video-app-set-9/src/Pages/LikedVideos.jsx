import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";

const LikedVideos = () => {
  const { like } = useContext(VideoContext);
  return (
    <div className="like-container">
      <h1>
        Liked Videos <span>{like.length > 0 ? like.length : 0} videos</span>
      </h1>
      <div className="like">
        {like.map((item) => {
          return (
            <div className="like-list" key={item.id}>
              <div className="like-image">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="like-title">
                <h2>{item.title}</h2>
                <span>{item.channel}</span> : <span>{item.views}</span> :{" "}
                <span>8 month ago</span>
                <div className="like-info">{item.duration}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LikedVideos;
