import React, { useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import SetUserContext from "./User";

function Nav() {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  });
  return (
    <nav>
      <SetUserContext />
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
        {user.authenticated ? (
          <Link to="/account">
            <li>Account</li>
          </Link>
        ) : null}
      </ul>
    </nav>
  );
}

export default Nav;
