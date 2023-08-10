import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const HabitUnarchieved = () => {
  const [showData, setShowData] = useState([]);
  const [showArchived, setShowArchieved] = useState(false);

  const getData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/habits"
      );
      if (status === 200) {
        setShowData(data.habits);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const newData = showData.filter(({ archived }) =>
    showArchived ? archived === true : archived === false
  );
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>{showArchived ? "Archived" : "Unarchived"}</h1>
      <div className="container1">
        {newData.map(({ title, desc, daysFollowed, daysSkipped, archived }) => (
          <div className="items" key={title}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>
              <b>Days Followed:</b> {daysFollowed}
            </p>
            <p>
              <b>Days Skipped:</b> {daysSkipped}
            </p>
          </div>
        ))}
      </div>
      <button
        style={{ padding: "10px", fontSize: "40px" }}
        onClick={() => setShowArchieved(!showArchived)}
      >
        Show {showArchived ? "Unarchived" : "Archived"}
      </button>
    </div>
  );
};

export default HabitUnarchieved;
