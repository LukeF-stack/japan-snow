import React from "react";
import "../App.css";
import DestinationChild from "./DestinationChild.jsx";
import { Link } from "react-router-dom";

class DestinationParent extends React.Component {
  state = {
    destinationTitle: "Select a destination"
  };
  getInfo = async (value) => {
    const response = await fetch(
      "https://omt3u.sse.codesandbox.io/api/destinations/" + value
    );
    const data = await response.json();
    this.setState({
      destinationTitle: data.title,
      destinationDescription: data.description,
      destinationId: data._id,
      buttonTitle: "View " + data.title,
      island: data.island
    });
    //console.log(data.title);
  };
  render() {
    return (
      <div>
        <h1>{this.state.destinationTitle}</h1>
        <p>{this.state.destinationDescription}</p>
        <Link to={`/destinations/${this.state.destinationId}`}>
          <h5>{this.state.buttonTitle}</h5>
        </Link>
        <h6>
          <strong>{this.state.island}</strong>
        </h6>
        <DestinationChild
          destination="Hakuba Valley"
          destinationId="5f4f0c4d6dc6a63a00dfd95a"
          displayInfo={this.getInfo}
        />
        <DestinationChild
          destination="Niseko"
          destinationId="5f51ee44a99a94584080dc10"
          displayInfo={this.getInfo}
        />
      </div>
    );
  }
}

export default DestinationParent;
