import React, { useEffect } from "react";
import "../App.css";

function DestinationInfo(props) {
  const { description, island } = props;

  useEffect(() => {
    getWeatherInfo();
  });

  const getWeatherInfo = async () => {
    try {
      const settings = {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "23486abf9amsh0e62ec82af84999p138781jsn74da7f1f870a"
        }
      };
      const url = new URL(
        "https://community-open-weather-map.p.rapidapi.com/weather"
      );
      const params = { q: "nagano,jp" };
      url.search = new URLSearchParams(params).toString();
      const response = await fetch(url, settings);
      const currentWeather = await response.json();
      console.log(currentWeather);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="destination-info">
      <p>{description}</p>
      <h6>
        <strong>{island}</strong>
      </h6>
    </div>
  );
}

export default DestinationInfo;
