import React from "react";
import "../App.css";

class Map extends React.Component {
  cityBio = () => {
    alert("city 1");
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
              <button>city 2</button>
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
