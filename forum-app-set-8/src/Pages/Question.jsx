import React, { useContext } from "react";
import { ForumContext } from "../context/ForumContext";
import { Link } from "react-router-dom";

const Question = () => {
  const { showForum, setShowForum } = useContext(ForumContext);

  const handleUpvote = (postId) => {
    const updatedPosts = showForum.map((post) =>
      post.id === postId ? { ...post, upvotes: post.upvotes + 1 } : post
    );
    setShowForum(updatedPosts);
  };

  const handleDownvote = (postId) => {
    const updatedPosts = showForum.map((post) =>
      post.id === postId ? { ...post, upvotes: post.upvotes - 1 } : post
    );
    setShowForum(updatedPosts);
  };

  return (
    <div className="container" style={{ padding: "30px", fontSize: "40px" }}>
      <h3>Question Page</h3>
      <hr />
      {showForum.map(({ id, question, upvotes }) => (
        <div className="forum" key={id}>
          <h3>{question}</h3>
          <p>{upvotes}</p>
          <div className="links">
            <button
              style={{
                color: "blue",
                padding: "10px",
                fontSize: "40px",
                marginRight: "10px",
              }}
              onClick={() => handleUpvote(id)}
            >
              Upvote
            </button>
            <button
              style={{
                color: "blue",
                padding: "10px",
                fontSize: "40px",
                marginRight: "10px",
              }}
              onClick={() => handleDownvote(id)}
            >
              Downvote
            </button>
            <Link
              to={`/answer/${id}`}
              style={{
                padding: "10px",
                fontSize: "40px",
                textDecoration: "none",
                border: "1px solid black",
                marginRight: "10px",
                backgroundColor: "#f0f0f0",
              }}
            >
              Answer
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
