import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { data, setData } = useContext(UserContext);
  const handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <div className="container">
      <select>
        {data.map((item) => (
          <option value={item.name} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <div className="card"></div>
    </div>
  );
};

export default Home;
