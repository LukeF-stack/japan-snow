import React from "react";
import "../App.css";

class DestinationButton extends React.Component {
  //destinationId = "5f4f0c4d6dc6a63a00dfd95a";
  displayInfo = () => {
    fetch(
      "https://omt3u.sse.codesandbox.io/api/destinations/" +
        this.props.destinationId
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  render() {
    return <button onClick={this.displayInfo}>{this.props.destination}</button>;
  }
}

export default DestinationButton;
