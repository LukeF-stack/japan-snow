import React from "react";
import "../App.css";
import DestinationButton from "./DestinationButton.jsx";

class Map extends React.Component {
  cityBio = () => {
    let id = "5f4f0c4d6dc6a63a00dfd95a";
    fetch("https://omt3u.sse.codesandbox.io/api/destinations/" + id)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div>
        <section className="homePage-map">
          <ul>
            <li>
              <button onClick={this.cityBio}>city 1</button>
            </li>
            <li>
              <DestinationButton destination="city 2" />
            </li>
            <li>
              <button>city 3</button>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Map;
