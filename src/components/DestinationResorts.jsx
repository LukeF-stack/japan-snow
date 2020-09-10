import React, { useEffect, useState } from "react";
import "../App.css";
import ResortsChild from "./ResortsChild.jsx";

function DestinationResorts({ match }, props) {
  useEffect(() => {
    //console.log(match.params.id);
    getResorts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [resorts, setResorts] = useState({});

  const getResorts = async () => {
    //console.log();
    try {
      const url = new URL("https://5sx1m.sse.codesandbox.io/api/resorts");
      const params = { destinationId: match.params.id };
      url.search = new URLSearchParams(params).toString();
      const response = await fetch(url);
      const resorts = await response.json();
      //console.log(resorts);
      setResorts(resorts);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="destination-resorts">
      <h1 className="page-title">Resorts</h1>
      <ResortsChild array={resorts} />
    </div>
  );
}

export default DestinationResorts;
