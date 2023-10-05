import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { arr, filterItems, handleChange } = useContext(UserContext);
  console.log(handleChange);
  return (
    <div className="container">
      <select onChange={handleChange}>
        <option value="">All Mentor's</option>
        {arr.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="card">
        {filterItems.map(({ id, name, email, role }) => (
          <div className="details" key={id}>
            <h1>{name}</h1>
            <h3>Email: {email}</h3>
            <p>Role: {role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
