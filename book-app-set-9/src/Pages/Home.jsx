import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import "./pageStyle.css";

const Home = () => {
  const { showBook, setShowBook } = useContext(BookContext);

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
        {showBook.map((item) => (
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
                Mark to read
              </button>
              <button>Add to fav</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
