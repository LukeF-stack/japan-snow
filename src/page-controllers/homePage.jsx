import React from "react";
import "../App.css";

class homePage extends React.Component {
  render() {
    return (
      <div className="snow">
        <section className="homePage-hero">
          <h1 className="homePage-hero-title">Homepage</h1>
        </section>
        <section className="homePage-map">
          <ul>
            <li>
              <button>city 1</button>
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

export default homePage;
