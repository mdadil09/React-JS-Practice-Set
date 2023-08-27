import React, { useEffect, useState } from "react";
import { fakeFetch } from "./api";

const Quotes = () => {
  const [showQuote, setShowQuote] = useState({ content: "", author: "" });

  const getQuotes = async () => {
    try {
      const res = await fakeFetch();
      setShowQuote(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Quote's</h1>
      <p>"{showQuote.content}"</p>
      <p>-{showQuote.author}</p>
      <button style={{ padding: "5px", fontSize: "40px" }} onClick={getQuotes}>
        {showQuote ? "New Quote" : "Show Quote"}
      </button>
    </div>
  );
};

export default Quotes;
