import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
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
        </ul>
      </nav>
    );
  }
}

export default Nav;
