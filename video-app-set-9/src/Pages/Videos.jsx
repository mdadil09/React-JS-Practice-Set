import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import { Link } from "react-router-dom";
import "./pageStyle.css";

const Videos = () => {
  const { video } = useContext(VideoContext);
  return (
    <div className="video-container">
      <h1>All Videos</h1>
      <div className="video-item">
        {video.map((item) => {
          return (
            <div className="video-card" key={item.id}>
              <div className="thumb">
                <Link to={`/singlevideo/${item.id}`}>
                  {" "}
                  <img src={item.thumbnail} alt="thumbnail" />
                </Link>
              </div>
              <div className="details">
                <div className="channel">
                  <img src={item.logo} alt="logo" />
                </div>
                <div className="info">
                  <div className="title">
                    <Link to={`/singlevideo/${item.id}`}>{item.title}</Link>
                  </div>
                  <div className="views">
                    <span id="views">{item.views} views</span> :{" "}
                    <span>8 month ago</span> : <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
