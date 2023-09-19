import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { VideoContext } from "../context/VideoContext";
import likeico from "../assests/likeico.png";
import dislikeico from "../assests/dislikeico.png";
import plus from "../assests/plus.png";

const SingleVideo = () => {
  const { id } = useParams();
  const { video, handleLike, like, handleDislike, handleWatchLater } =
    useContext(VideoContext);

  const [disliked, setDisliked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [countLike, setCountLike] = useState("");
  const [countDislike, setCountDislike] = useState("");

  const filteredVideo = video.find((item) => item.id === parseInt(id, 36));

  useEffect(() => {
    // Load like and dislike counts from local storage
    const savedLikedCount = parseInt(localStorage.getItem("countLike")) || "";
    const savedDislikedCount =
      parseInt(localStorage.getItem("countDislike")) || "";

    setCountLike(savedLikedCount);
    setCountDislike(savedDislikedCount);
  }, []);

  const handleLikeClick = () => {
    handleLike(filteredVideo);
    if (!liked) {
      setLiked(true);
      setCountLike(parseInt(countLike + 1));
      if (disliked) {
        setDisliked(false);
        setCountDislike(parseInt(countDislike - 1));
        localStorage.removeItem("disliked");
        localStorage.removeItem("countDislike");
      }
      localStorage.setItem("countLike", "true");
      localStorage.setItem("countLike", parseInt(countLike + 1));
    }
  };

  const handleDisLikeClick = () => {
    handleDislike(filteredVideo.id);
    if (!disliked) {
      setDisliked(true);
      setCountDislike(parseInt(countDislike + 1));
      if (liked) {
        setLiked(false);
        setCountLike(parseInt(countLike - 1));
        localStorage.removeItem("liked");
        localStorage.removeItem("countLike");
      }

      localStorage.setItem("disliked", "true");
      localStorage.setItem("countDislike", parseInt(countDislike + 1));
    }
  };

  console.log(localStorage);
  return (
    <div className="single-container">
      <div className="single-video-container">
        {filteredVideo && (
          <div className="single-video-card" key={filteredVideo.id}>
            <div className="single-thumb">
              {" "}
              <img src={filteredVideo.thumbnail} alt="thumbnail" />
            </div>
            <div className="single-one-title">
              <h2>{filteredVideo.title}</h2>
            </div>
            <div className="single-info">
              <div className="single-channel">
                <img src={filteredVideo.logo} alt="thumbnail" />
              </div>
              <div className="single-details">
                <div className="single-title">
                  <h3>{filteredVideo.channel}</h3>
                </div>
                <div className="buttons">
                  <button
                    style={{
                      borderTopLeftRadius: "50px",
                      borderBottomLeftRadius: "50px",
                    }}
                    disabled={liked === true}
                    onClick={handleLikeClick}
                  >
                    <img src={likeico} alt="like" />{" "}
                    {like.length > 0 ? countLike : ""}
                  </button>
                  <button
                    style={{
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                    disabled={disliked === true}
                    onClick={handleDisLikeClick}
                  >
                    <img src={dislikeico} alt="dislike" /> {countDislike}
                  </button>
                  <button
                    style={{
                      width: "300px",
                      marginLeft: "30px",
                      borderRadius: "50px",
                      textAlign: "center",
                    }}
                    onClick={() => handleWatchLater(filteredVideo)}
                  >
                    <img src={plus} alt="plus" style={{ marginRight: "5px" }} />{" "}
                    Watch later
                  </button>
                </div>
              </div>
            </div>
            <div className="single-desc">
              <div className="single-views">
                <span>{filteredVideo.views} views</span> :{" "}
                <span>8 month ago</span> : <span>{filteredVideo.duration}</span>
              </div>
              <div className="single-one-desc">
                <p>{filteredVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleVideo;
