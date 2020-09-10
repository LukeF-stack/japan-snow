import React from "react";
import "../App.css";

class DestinationResorts extends React.Component {
  list = [];
  componentDidMount() {
    this.getResorts();
  }
  getResorts = async (props) => {
    try {
      const url = new URL("https://5sx1m.sse.codesandbox.io/api/resorts");
      const params = { destinationId: this.props.match.params.id };
      url.search = new URLSearchParams(params).toString();
      const response = await fetch(url);
      const resorts = await response.json();
      //console.log(resorts);
      this.setState({ results: resorts });
      //console.log(this.state.results);
      this.state.results.forEach((resort) => {
        this.list.push(
          <li key={resort._id}>
            <div className="resort-result">
              <h5>{resort.title}</h5>
              <img src={resort.cover_img} alt={resort.title}></img>
            </div>
          </li>
        );
        this.setState({ list: this.list });
      });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div className="destination-resorts">
        <h1 className="page-title">Resorts</h1>
        <ul>{this.list}</ul>
      </div>
    );
  }
}

export default DestinationResorts;
