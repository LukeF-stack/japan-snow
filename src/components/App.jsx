import React from "react";
import "../App.css";
import Nav from "./Nav";
import homePage from "../page-controllers/homePage";
import destinationsPage from "../page-controllers/destinationsPage";
import DestinationPage from "../page-controllers/destinationPage";
import aboutPage from "../page-controllers/aboutPage";
import contactPage from "../page-controllers/contactPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={homePage} />
          <Route path="/destinations" exact component={destinationsPage} />
          <Route path="/about" exact component={aboutPage} />
          <Route path="/contact" exact component={contactPage} />
          <Route path="/destinations/:id" exact component={DestinationPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
