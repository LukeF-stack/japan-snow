import React, { useEffect } from "react";
import "../App.css";

function PhotoGallery(props) {
  useEffect(() => {
    console.log(props.photos);
  }, [props]);

  return <div></div>;
}

export default PhotoGallery;
