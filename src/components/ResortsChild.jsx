import React, { useEffect } from "react";
import "../App.css";

function ResortsChild(props) {
  useEffect(() => {
    console.log(array);
    //displayResorts();
  });
  const { array } = props;
  const displayResorts = () => {
    //console.log(array);
    /*array.forEach((resort) => {
      console.log(resort);
    });*/
  };
  return (
    <div>
      <h6>resorts</h6>
    </div>
  );
}

export default ResortsChild;
