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
    try {
      const response = await fetch(
        `https://5sx1m.sse.codesandbox.io/api/destinations/${match.params.id}`
      );
      const destination = await response.json();
      setDestination(destination);
      console.log(destination);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Router>
      <div>
        <h1 className="page-title">{destination.title}</h1>
        <NavTabs match={match} />
        <Switch>
          <Route path="/destinations/:id/info">
            <DestinationInfo
              description={destination.description}
              island={destination.island}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default DestinationPage;
