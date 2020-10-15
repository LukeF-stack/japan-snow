import React, { useEffect /*useState*/ } from "react";
import "../App.css";

function DestinationInfo(props) {
  const { description, island, currentWeather } = props;

  //const [weather, setWeather] = useState({});

  useEffect(() => {
    //console.log(open_weather_id);
    //getWeatherInfo();
  }, []);

  /*const getWeatherInfo = async () => {
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
      const query = await open_weather_id;
      //console.log(query);
      const params = { q: query };
      url.search = new URLSearchParams(params).toString();
      const response = await fetch(url, settings);
      const currentWeather = await response.json();
      const savedWeather = {};
      //console.log(currentWeather);
      currentWeather.weather.forEach((result) => {
        savedWeather["id"] = result.id;
        savedWeather["main"] = result.main;
        savedWeather["description"] = result.description;
        savedWeather["icon"] = result.icon;
        //console.log(savedWeather);
      });
      const celcius = currentWeather.main.temp - 273.15;
      const roundedTemp = (Math.round(celcius * 100) / 100).toFixed(1);
      savedWeather["temp"] = roundedTemp;
      setWeather(savedWeather);
    } catch (e) {
      console.log(e.message);
    }
  };
  //console.log(weather);*/
  return (
    <div className="destination-info">
      <p>{description}</p>
      <h6>
        <strong>{island}</strong>
      </h6>
      <div className="weather">
        <h3>
          <strong>{currentWeather.main}</strong>
        </h3>
        <h5>{currentWeather.description}</h5>
        <h1>{currentWeather.temp}&deg;C</h1>
      </div>
    </div>
  );
}

export default DestinationInfo;
