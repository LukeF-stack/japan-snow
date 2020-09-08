import React, { useState, useEffect } from "react";
import "../App.css";
import NavTabs from "../components/DestinationNavTab.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DestinationInfo from "../components/DestinationInfo";

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
      <NavTabs match={match} />
      <Router>
        <Switch>
          <DestinationInfo
            description={destination.description}
            island={destination.island}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default DestinationPage;
