import React, { useEffect, useState } from "react";
import { fakeFetch } from "./api";

const WeatherData = () => {
  const [showTemp, setShowTemp] = useState(null);
  const [changeTemp, setChangeTemp] = useState(true);

  const getTemp = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/weather");
      setShowTemp(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTemp();
  }, []);

  const handleClick = () => {
    setChangeTemp((prevTemp) => !prevTemp);
  };

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Weather App</h1>
      {showTemp && (
        <div className="weather">
          <p>
            Temprature:{" "}
            {changeTemp
              ? showTemp.temperature
              : (showTemp.temperature * 9) / 5 + 32}
            °{changeTemp ? "c" : "f"}
          </p>
          <p>Humidity: {showTemp.humidity}%</p>
          <p>Wind Speed: {showTemp.windSpeed}km/h</p>
        </div>
      )}
      <button
        style={{ padding: "10px", fontSize: "40px" }}
        onClick={handleClick}
      >
        {changeTemp ? "Convert to Fahrenheit" : "Convert to Celcius"}
      </button>
    </div>
  );
};

export default WeatherData;
