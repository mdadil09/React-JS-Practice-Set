import React, { useEffect, useState } from "react";
import { fakeFetch } from "./api";

const Movies = () => {
  const [showMovies, setShowMovies] = useState([]);
  const [isOpen, setIsOpen] = useState("");

  const getMoviesData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/movies");
      setShowMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  const years = [2005, 2006, 2007, 2008, 2009, 2010];

  const handleYear = (year) => {
    setIsOpen(year);
  };

  const handleChange = (e) => {
    handleYear(parseInt(e.target.value));
  };

  const filteredMovies = isOpen
    ? showMovies.filter((movie) => movie.year === isOpen)
    : showMovies;

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Movies</h1>
      <label>Filter By Year:</label>
      <select
        style={{ padding: "5px", fontSize: "40px" }}
        onChange={handleChange}
      >
        <option value="">All</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      {filteredMovies.map(({ title, year, rating }) => (
        <ul>
          <li key={title}>
            <p>
              <b>Title:</b> {title}
            </p>
            <p>
              <b>Year:</b> {year}
            </p>
            <p>
              <b>rating:</b> {rating}
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Movies;
