import React, { useContext } from "react";
import { useParams } from "react-router";
import { ForumContext } from "../context/ForumContext";
import { Link } from "react-router-dom";

const Answer = () => {
  const { id } = useParams();
  const { showForum } = useContext(ForumContext);

  const filteredItem = showForum.filter((item) => item.id === parseInt(id, 36));
  return (
    <div className="container" style={{ padding: "30px", fontSize: "60px" }}>
      <h3>Answer Page</h3>
      <hr />
      {filteredItem.map((item) => (
        <p>{item.answer}</p>
      ))}
      <Link to="/question">Back to Questions</Link>
    </div>
  );
};

export default Answer;
