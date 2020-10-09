import React, { useEffect, useState } from "react";
import "../App.css";

function DestinationInfo(props) {
  const { description, island } = props;

  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeatherInfo();
  }, []);

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
      const savedWeather = {};
      //ßconsole.log(currentWeather);
      currentWeather.weather.forEach((result) => {
        savedWeather["id"] = result.id;
        savedWeather["main"] = result.main;
        savedWeather["description"] = result.description;
        savedWeather["icon"] = result.icon;
        //console.log(savedWeather);
      });
      savedWeather["temp"] = currentWeather.main.temp - 273.15;
      setWeather(savedWeather);
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
      <pre>{JSON.stringify(weather)}</pre>
    </div>
  );
}

export default DestinationInfo;
