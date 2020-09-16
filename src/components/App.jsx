import React, { useState, useMemo, useEffect } from "react";
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
import AccountPage from "../page-controllers/accountPage";
import SetUserContext from "./User";
import { User } from "./User";
//import DestinationInfo from "./DestinationInfo";

function App() {
  const [hash, setHash] = useState({});
  useEffect(() => {
    setHash(window.location);
  }, []);
  useEffect(() => {
    User.validateUser();
  }, [hash, setHash]);
  const [user, setUser] = useState(User.props);

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={providerUser}>
          <Nav />
          <SetUserContext />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/destinations" exact component={DestinationsPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/destinations/:id" component={DestinationPage} />
            <Route path="/resorts/:id" component={ResortPage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/signin" exact component={SignInPage} />
            <Route path="/account" exact component={AccountPage} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
