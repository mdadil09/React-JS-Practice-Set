import React, { useState } from "react";

const Books = ({ books }) => {
  const [showBook, setShowBook] = useState(null);

  const filteredItem = showBook
    ? books.filter((book) => book.genre === showBook)
    : books;
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Book's List</h1>
      <div className="buttons">
        <button
          style={{
            padding: "10px",
            fontSize: "40px",
            width: "300px",
            marginRight: "10px",
          }}
          onClick={() => setShowBook(null)}
        >
          All Genres
        </button>
        <button
          style={{
            padding: "10px",
            fontSize: "40px",
            width: "300px",
            marginRight: "10px",
          }}
          onClick={() => setShowBook("Classic")}
        >
          Classic
        </button>
        <button
          style={{
            padding: "10px",
            fontSize: "40px",
            width: "300px",
            marginRight: "10px",
          }}
          onClick={() => setShowBook("Dystopian")}
        >
          Dystopian
        </button>
        <button
          style={{
            padding: "10px",
            fontSize: "40px",
            width: "300px",
            marginRight: "10px",
          }}
          onClick={() => setShowBook("Young Adult")}
        >
          Young Adult
        </button>
      </div>
      <ul style={{ listStyle: "none" }}>
        {filteredItem.map(({ id, title, author }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
