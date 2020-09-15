import React from "react";
import "../App.css";
import Nav from "./Nav";
import HomePage from "../page-controllers/homePage";
import DestinationsPage from "../page-controllers/destinationsPage";
import DestinationPage from "../page-controllers/destinationPage";
import AboutPage from "../page-controllers/aboutPage";
import ContactPage from "../page-controllers/contactPage";
import ResortPage from "../page-controllers/resortPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import SignUpPage from "../page-controllers/signupPage";
import SignInPage from "../page-controllers/signinPage";
//import DestinationInfo from "./DestinationInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <UserContext.Provider value="hello from context">
            <Route path="/" exact component={HomePage} />
            <Route path="/destinations" exact component={DestinationsPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/destinations/:id" component={DestinationPage} />
            <Route path="/resorts/:id" component={ResortPage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/signin" exact component={SignInPage} />
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
