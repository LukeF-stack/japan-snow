import React from "react";
import "../App.css";
import Nav from "./Nav";
import HomePage from "../page-controllers/homePage";
import DestinationsPage from "../page-controllers/destinationsPage";
import DestinationPage from "../page-controllers/destinationPage";
import AboutPage from "../page-controllers/aboutPage";
import ContactPage from "../page-controllers/contactPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/destinations" exact component={DestinationsPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/destinations/:id" exact component={DestinationPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
