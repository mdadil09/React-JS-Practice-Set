import React, { useState } from "react";

const Lives = () => {
  const [count, setCount] = useState(Math.floor(Math.random() * 10));

  return (
    <div className="container" style={{ padding: "60px" }}>
      <h1 style={{ fontSize: "50px" }}>Live's Game</h1>
      <h2 style={{ color: count > 0 ? "green" : "red", fontSize: "40px" }}>
        Current Lives: {count}
      </h2>
      <button
        style={{ padding: "10px", fontSize: "40px" }}
        disabled={count === 0}
        onClick={() => setCount(count - 1)}
      >
        Lose a Life
      </button>
      {count === 0 ? (
        <p style={{ color: "red", fontSize: "40px" }}>"Game Over"</p>
      ) : null}
    </div>
  );
};

export default Lives;
