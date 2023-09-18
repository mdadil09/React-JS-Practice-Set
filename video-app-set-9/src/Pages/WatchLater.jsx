import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import "./pageStyle.css";
import remove from "../assests/remove.png";

const WatchLater = () => {
  const { watchLater, removeWatch } = useContext(VideoContext);
  return (
    <div className="like-container">
      <h1>
        Watch Later{" "}
        <span>{watchLater.length > 0 ? watchLater.length : 0} videos</span>
      </h1>
      <div className="like">
        {watchLater.map((item) => {
          return (
            <div className="like-list">
              <div className="like-image">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="like-title">
                <h2>{item.title}</h2>
                <span>{item.channel}</span> : <span>{item.views}</span> :{" "}
                <span>8 month ago</span>
                <div className="like-info">{item.duration}</div>
              </div>
              <div className="remove-button">
                <button onClick={() => removeWatch(item.id)}>
                  {" "}
                  <img src={remove} alt="remove" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchLater;
