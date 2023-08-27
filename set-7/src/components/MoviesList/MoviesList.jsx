import React, { useEffect, useState } from "react";
import { fakeFetch } from "./api";

const MoviesList = () => {
  const [showMovies, setShowMovies] = useState([]);
  const [moviesInfo, setMoviesInfo] = useState("");

  const getMovies = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/movies");
      setShowMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const arr = showMovies.map(({ genre }) => genre);

  const genreArr = [...new Set(arr)];

  const handleGenre = (genreName) => {
    setMoviesInfo(genreName);
  };

  const handleChange = (e) => {
    handleGenre(e.target.value);
  };

  const filterItems = moviesInfo
    ? showMovies.filter(({ genre }) => genre === moviesInfo)
    : showMovies;

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Movies List</h1>
      <label>Filter By Genre: </label>
      <select
        style={{ padding: "5px", fontSize: "40px" }}
        onChange={handleChange}
      >
        <option value="">All Genre</option>
        {genreArr.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <ul>
        {filterItems.map(({ title, year, genre }) => (
          <li key={title}>
            <p>
              <b>Title:</b> {title}
            </p>
            <p>
              <b>Year:</b> {year}
            </p>
            <p>
              <b>Genre:</b> {genre}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
