import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const HabitTracker = () => {
  const [habitData, setHabitData] = useState([]);

  const getHabitData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/habits"
      );
      if (status === 200) {
        setHabitData(data.habits);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHabitData();
  }, []);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Habit's Tracker</h1>
      {habitData.map(({ title, desc, daysFollowed, daysSkipped }) => (
        <div className="data" key={title}>
          <h2>{title}:</h2>
          <p>{desc}</p>
          <p>
            <b>Days Followed:</b> {daysFollowed}
          </p>
          <p>
            <b>Days Skipped:</b> {daysSkipped}
          </p>
          <hr style={{ border: "2px solid gray" }} />
        </div>
      ))}
    </div>
  );
};

export default HabitTracker;
