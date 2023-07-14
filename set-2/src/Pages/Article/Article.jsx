import React, { useState } from "react";

const Article = ({ title, content }) => {
  const [showContent, setShowContent] = useState();
  const handleClick = () => setShowContent(true);
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>{title}</h1>
      <button
        style={{ fontSize: "40px", borderRadius: "15px" }}
        type="submit"
        onClick={handleClick}
      >
        Know More
      </button>
      {showContent ? <p style={{ color: "Red" }}>{content}</p> : null}
    </div>
  );
};

export default Article;
