import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import "./pageStyle.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { showBook, setShowBook, handleFavorite } = useContext(BookContext);

  const handleClick = (id) => {
    const doneItem = showBook.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          read: !item.read,
        };
      } else {
        return item;
      }
    });
    setShowBook(doneItem);
  };
  return (
    <>
      <h1>All Books</h1>
      <div className="container">
        {showBook.map((item) => {
          function handfavClick() {
            handleFavorite(item);
          }

          return (
            <div className="card" key={item.id}>
              <img src={item.image} alt="book" />
              <div className="detail">
                <h4>
                  {item.title} {`(${item.year})`}
                </h4>
                <p>Author: {item.author}</p>
                <p>Publisher: {item.publisher}</p>
                <p>Price: ${item.price}</p>
              </div>
              <div className="buttons">
                <button
                  disabled={item.read === true}
                  onClick={() => handleClick(item.id)}
                >
                  {item.read === true ? "Already Readed" : "Mark as Read"}
                </button>
                <button onClick={handfavClick}>Add to fav</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
