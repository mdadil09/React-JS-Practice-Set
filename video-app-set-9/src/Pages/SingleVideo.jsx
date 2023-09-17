import React, { useContext } from "react";
import { useParams } from "react-router";
import { VideoContext } from "../context/VideoContext";

const SingleVideo = () => {
  const { id } = useParams();
  const { video, handleLike } = useContext(VideoContext);

  const filteredVideo = video.find((item) => item.id === parseInt(id, 36));

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
                    onClick={() => handleLike(filteredVideo)}
                  >
                    Like
                  </button>
                  <button
                    style={{
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",
                    }}
                  >
                    Dislike
                  </button>
                  <button
                    style={{
                      width: "300px",
                      marginLeft: "20px",
                      borderRadius: "50px",
                    }}
                  >
                    Add to watch later
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
