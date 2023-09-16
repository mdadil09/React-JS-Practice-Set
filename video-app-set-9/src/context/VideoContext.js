import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { fakeFetch } from "../api/api";

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [video, setVideo] = useState([]);

  const getVideos = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/videos");
      setVideo(res.data.videos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <VideoContext.Provider value={{ video, setVideo }}>
      {children}
    </VideoContext.Provider>
  );
}
