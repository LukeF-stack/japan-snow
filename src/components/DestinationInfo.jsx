import React from "react";
import "../App.css";

function DestinationInfo(props) {
  const { description, island } = props;
  return (
    <div>
      <p>{description}</p>
      <h6>
        <strong>{island}</strong>
      </h6>
    </div>
  );
}

export default DestinationInfo;
