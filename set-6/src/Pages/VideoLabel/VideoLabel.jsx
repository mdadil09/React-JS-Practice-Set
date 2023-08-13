import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const VideoLabel = () => {
  const [videoData, setVideoData] = useState({});
  const [showLabel, setShowLabel] = useState(false);

  const getVideoData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/getvideo"
      );
      if (status === 200) {
        setVideoData(data.videos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideoData();
  }, []);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Video</h1>
      {videoData && (
        <div className="items" key={videoData.title}>
          <img src={videoData.thumbnail} alt="" height={700} width={1200} />
          <p>
            <b>Title:</b>
            {videoData.title}
          </p>
          <p>
            <b>Views:</b>
            {videoData.views}
          </p>
          <p>
            <b>Likes:</b>
            {videoData.likes}
          </p>
          {showLabel && (
            <p>
              <b>Label:</b> Self Motivation
            </p>
          )}
        </div>
      )}
      <button
        style={{ padding: "10px", fontSize: "40px" }}
        onClick={() => setShowLabel(true)}
      >
        Add a label
      </button>
    </div>
  );
};

export default VideoLabel;
