import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const VideoLibrary = () => {
  const [videoData, setVideoData] = useState([]);

  const getVideos = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/videos"
      );
      if (status === 200) {
        setVideoData(data.videos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const handleClick = () => {
    if (videoData.length > 0) {
      const updatedVideoData = [...videoData];
      updatedVideoData.shift();
      setVideoData(updatedVideoData);
    } else {
      console.log("No more videos.");
    }
  };

  return (
    <div className="container" style={{ padding: "60px", fontSize: "30px" }}>
      <h1>Playlist</h1>
      <div className="container1" style={{ display: "flex", flexWrap: "wrap" }}>
        {videoData?.map(({ title, thumbnail, views, likes }) => (
          <div className="playlist" key={title} style={{ marginRight: "20px" }}>
            <img src={thumbnail} alt="" height={400} width={600} />
            <h3>{title}</h3>
            <p>Views: {views}</p>
            <p>Likes: {likes}</p>
          </div>
        ))}
      </div>
      <button
        style={{ padding: "5px", fontSize: "30px" }}
        onClick={handleClick}
      >
        Delete Video
      </button>
    </div>
  );
};

export default VideoLibrary;
