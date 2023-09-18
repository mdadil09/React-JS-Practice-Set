import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { fakeFetch } from "../api/api";

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [video, setVideo] = useState([]);
  const [like, setLike] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

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

  const handleLike = (data) => {
    setLike((video) => [...video, data]);
  };

  const handleWatchLater = (data) => {
    setWatchLater((video) => [...video, data]);
  };

  const handleDislike = (id) => {
    const dislike = like.filter((item) => item.id !== id);
    setLike(dislike);
  };

  const removeWatch = (id) => {
    const remove = watchLater.filter((item) => item.id !== id);
    setWatchLater(remove);
  };

  return (
    <VideoContext.Provider
      value={{
        video,
        setVideo,
        like,
        handleLike,
        handleDislike,
        watchLater,
        handleWatchLater,
        removeWatch,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}
