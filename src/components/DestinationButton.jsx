import React from "react";
import "../App.css";

class DestinationButton extends React.Component {
  render() {
    return <button>{this.props.destination}</button>;
  }
}

export default DestinationButton;
