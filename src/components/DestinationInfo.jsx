import React from "react";
import "../App.css";

function DestinationInfo(props) {
  const { description, island } = props;
  return (
    <div>
      <h1 className="page-title">INFO</h1>
      <p>{description}</p>
      <h6>
        <strong>{island}</strong>
      </h6>
    </div>
  );
}

export default DestinationInfo;
