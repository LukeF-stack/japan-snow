import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
//import SetUserContext from "./User";

function Nav() {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/destinations">
          <li>Destinations</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/signup">
          <li>Sign Up</li>
        </Link>
        <Link to="/signin">
          <li>Sign In</li>
        </Link>
        <Link to="/account">
          <li>Account</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
