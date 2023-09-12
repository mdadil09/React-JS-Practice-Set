import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import "./pageStyle.css";

const Favorite = () => {
  const { favorite, removeFromFav } = useContext(BookContext);

  return (
    <>
      <h1>Favorite</h1>
      <div className="container">
        {favorite.map((item) => {
          return (
            <div className="item">
              <div className="card">
                <img src={item.image} alt="book" />
                <div className="detail">
                  <h4>
                    {item.title} {`(${item.year})`}
                  </h4>
                  <p>Author: {item.author}</p>
                  <p>Publisher: {item.publisher}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <div className="reButton">
                  <button onClick={() => removeFromFav(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favorite;
