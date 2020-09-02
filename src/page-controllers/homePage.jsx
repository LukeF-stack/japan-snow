import React from "react";
import "../App.css";
import HomePageHero from "../components/HomePageHero.jsx";
import Map from "../components/Map.jsx";

class homePage extends React.Component {
  render() {
    return (
      <div className="home">
        <HomePageHero />
        <h1>MAP</h1>
        <Map />
      </div>
    );
  }
}

export default homePage;
