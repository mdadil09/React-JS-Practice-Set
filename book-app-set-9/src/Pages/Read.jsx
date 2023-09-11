import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Read = () => {
  const { showBook } = useContext(BookContext);

  const filteredItem = showBook.filter((book) => book.read === true);
  return (
    <div className="container">
      {filteredItem.map((item) => (
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
        </div>
      ))}
    </div>
  );
};

export default Read;
