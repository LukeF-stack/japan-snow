import React, { useState, useEffect } from "react";
import "../App.css";

function DestinationPage({ match }) {
  useEffect(() => {
    generatePageContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [destination, setDestination] = useState({});

  const generatePageContent = async () => {
    const response = await fetch(
      `https://omt3u.sse.codesandbox.io/api/destinations/${match.params.id}`
    );
    const destination = await response.json();
    setDestination(destination);
    console.log(destination);
  };
  return (
    <div>
      <h1 className="page-title">{destination.title}</h1>
      <p>{destination.description}</p>
    </div>
  );
}

export default DestinationPage;
