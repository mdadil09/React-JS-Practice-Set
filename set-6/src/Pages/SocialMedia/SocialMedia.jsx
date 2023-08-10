import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const SocialMedia = () => {
  const [showPosts, setShowPosts] = useState([]);

  const getPosts = async () => {
    try {
      const { data, status } = await fakeFetch("https://example.com/api/posts");
      if (status === 200) {
        setShowPosts(data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleClick = () => {
    const filteredData = showPosts.filter((item) => item.category === "Bakery");
    setShowPosts(filteredData);
  };

  return (
    <div className="container" style={{ padding: "60px", fontSize: "30px" }}>
      <h1>Social Media</h1>
      <div className="container1" style={{ display: "flex", flexWrap: "wrap" }}>
        {showPosts?.map(({ caption, src, views, likes, category }) => (
          <div className="items" key={caption} style={{ marginRight: "20px" }}>
            <img src={src} alt={caption} height={400} width={700} />
            <h3>{caption}</h3>
            <p>{category}</p>
            <p>Likes: {likes}</p>
            <p>Views: {views}</p>
          </div>
        ))}
      </div>
      <button
        style={{ padding: "5px", fontSize: "30px" }}
        onClick={handleClick}
      >
        Show Bakery
      </button>
    </div>
  );
};

export default SocialMedia;
