import React, { useContext } from "react";
import "../App.css";
import HomePageHero from "../components/HomePageHero.jsx";
import Map from "../components/Map.jsx";
import { UserContext } from "../components/UserContext";

function HomePage() {
  const msg = useContext(UserContext);
  return (
    <div className="home">
      <HomePageHero />
      <h1>MAP</h1>
      <p>{msg}</p>
      <Map />
    </div>
  );
}

export default HomePage;
