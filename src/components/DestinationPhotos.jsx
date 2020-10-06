import React from "react";
import "../App.css";
import PhotoGallery from "./PhotoGallery";
//import PhotoGallery from "./PhotoGallery";
//import PhotoGallery from "./PhotoGallery";

function DestinationPhotos(props) {
  return (
    <div className="destination-photos">
      <h1 className="section-title">Photos</h1>
      <PhotoGallery photos={props.photos} />
    </div>
  );
}

export default DestinationPhotos;
