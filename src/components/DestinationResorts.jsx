import React, { useEffect } from "react";
import "../App.css";

class DestinationResorts extends React.Component {
  getResorts = async (props) => {
    try {
      const url = new URL("https://5sx1m.sse.codesandbox.io/api/resorts");
      const params = { destinationId: this.props.match.params.id };
      url.search = new URLSearchParams(params).toString();
      const response = await fetch(url);
      const resorts = await response.json();
      //console.log(resorts);
      this.setState({ results: resorts });
      console.log(this.state.results);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div className="destination-resorts">
        <h1 className="page-title">Resorts</h1>
        <ResortsChild displayResorts={this.getResorts} />
      </div>
    );
  }
}

function ResortsChild(props) {
  const { displayResorts } = props;
  useEffect(() => {
    displayResorts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h6>results</h6>
    </div>
  );
}

export default DestinationResorts;
