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
              <DestinationButton
                destination="Niseko"
                destinationId="5f51ee44a99a94584080dc10"
              />
            </li>
            <li>
              <DestinationButton
                destination="Hakuba Valley"
                destinationId="5f4f0c4d6dc6a63a00dfd95a"
              />
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Map;
