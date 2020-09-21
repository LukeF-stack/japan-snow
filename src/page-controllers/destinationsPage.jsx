import React from "react";
import "../App.css";
import Map from "../components/Map";

class DestinationsPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-title">Destinations</h1>
        <Map />
      </div>
    );
  }
}

export default DestinationsPage;
