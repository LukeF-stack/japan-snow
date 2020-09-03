import React from "react";
import "../App.css";
import DestinationButton from "./DestinationButton.jsx";

class Map extends React.Component {
  render() {
    return (
      <div>
        <section className="homePage-map">
          <ul>
            <li>
              <button>city 1</button>
            </li>
            <li>
              <DestinationButton
                destination="Hakuba Valley"
                destinationId="5f4f0c4d6dc6a63a00dfd95a"
              />
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
