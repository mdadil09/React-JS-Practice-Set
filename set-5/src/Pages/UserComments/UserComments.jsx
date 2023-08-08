import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const UserComments = () => {
  const [comments, setComments] = useState();

  const getComments = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/comments"
      );
      if (status === 200) {
        setComments(data.comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Comments's</h1>
      {comments &&
        comments?.map(({ name, text }) => (
          <div className="comment" key={name}>
            <h2>{name}</h2>
            <p>{text}</p>
            <button
              onClick={() =>
                setComments(comments.filter((comment) => comment.name !== name))
              }
              style={{ padding: "10px", fontSize: "40px" }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default UserComments;
