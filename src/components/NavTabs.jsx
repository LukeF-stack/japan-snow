import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class NavTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchId: this.props.match.params.id,
      infoTab: `/destinations/${this.state.matchId}/info`,
      resortsTab: `/destinations/${this.state.matchId}/resorts`,
      photosTab: `/destinations/${this.state.matchId}/photos`,
      reviewsTab: `/destinations/${this.state.matchId}/reviews`,
      flightsTab: `/destinations/${this.state.matchId}/flights`
    };
  }
  render() {
    return (
      <nav>
        <ul className="nav-tabs">
          <Link to={this.state.infoTab}>
            <li>Info</li>
          </Link>
          <Link to={this.state.resortsTab}>
            <li>Resorts</li>
          </Link>
          <Link to={this.state.photosTab}>
            <li>Photos</li>
          </Link>
          <Link to={this.state.reviewsTab}>
            <li>Reviews</li>
          </Link>
          <Link to={this.state.flightsTab}>
            <li>Flights</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default NavTabs;
