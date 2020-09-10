import React, { useEffect, useState } from "react";
import "../App.css";

function DestinationResorts({ match }, props) {
  useEffect(() => {
    getResorts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [resorts, setResorts] = useState({});

  const getResorts = async () => {
    try {
      const url = new URL("https://5sx1m.sse.codesandbox.io/api/resorts");
      const params = { destinationId: match.params.id };
      url.search = new URLSearchParams(params).toString();
      const response = await fetch(url);
      const resorts = await response.json();
      setResorts(resorts);
      console.log(resorts);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="destination-resorts">
      <h1 className="page-title">Resorts</h1>
    </div>
  );
}

export default DestinationResorts;
