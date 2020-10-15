import React, { useState, useEffect } from "react";
import "../App.css";
import DestinationNavTabs from "../components/DestinationNavTab.jsx";
import { Switch, Route } from "react-router-dom";
import DestinationInfo from "../components/DestinationInfo";
import DestinationResorts from "../components/DestinationResorts";
import DestinationPhotos from "../components/DestinationPhotos";
import DestinationReviews from "../components/DestinationReviews";
import DestinationFlights from "../components/DestinationFlights";

function DestinationPage({ match }) {
  const [weather, setWeather] = useState({});
  const [theDestination, setDestination] = useState({});

  useEffect(() => {
    generatePageContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getWeatherInfo();
  }, [theDestination]);

  const generatePageContent = async () => {
    try {
      const response = await fetch(
        `https://dsbn3.sse.codesandbox.io/api/destinations/${match.params.id}`
      );
      const destination = await response.json();
      setDestination(destination);
      //getWeatherInfo();
    } catch (e) {
      console.log(e);
    }
  };
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
      //const query = destination.open_weather_location_id;
      //console.log("destination is", theDestination);
      const params = { q: theDestination.open_weather_location_id };
      url.search = new URLSearchParams(params).toString();
      const response = await fetch(url, settings);
      const currentWeather = await response.json();
      //console.log(currentWeather);
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
  return (
    <div>
      <h1 className="page-title">{theDestination.title}</h1>
      <DestinationNavTabs match={match} />
      <Switch>
        <Route path="/destinations/:id/info">
          <DestinationInfo
            description={theDestination.description}
            island={theDestination.island}
            //open_weather_id={destination.open_weather_location_id}
            currentWeather={weather}
          />
        </Route>
        <Route exact path="/destinations/:id/resorts">
          <DestinationResorts match={match} />
        </Route>
        <Route exact path="/destinations/:id/photos">
          <DestinationPhotos match={match} />
        </Route>
        <Route exact path="/destinations/:id/reviews">
          <DestinationReviews />
        </Route>
        <Route exact path="/destinations/:id/flights">
          <DestinationFlights />
        </Route>
      </Switch>
    </div>
  );
}

export default DestinationPage;
