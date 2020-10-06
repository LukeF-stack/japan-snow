import React, { useEffect, useState } from "react";
import "../App.css";

function PhotoGallery(props) {
  const [gallery, setGallery] = useState([]);
  //const [destination, setDestination] = useState({});
  useEffect(() => {
    //console.log(props.id);
    getPhotos(props);
    /*props.photos.forEach((photo) => {
      const results = [];
      results.push(
        <li>
          <div className="resort-result">
            <img src={photo} alt={photo}></img>
          </div>
        </li>
      );
      setGallery(results);
    });*/
  }, [props]);

  const getPhotos = async (props) => {
    //console.log("id is", props.id);
    try {
      const response = await fetch(
        `https://dsbn3.sse.codesandbox.io/api/destinations/${props.id}`
      );
      const destination = await response.json();
      //setDestination(destination);
      console.log(destination.photos);
      const images = [];
      destination.photos.forEach((photo) => {
        images.push(
          <li key={photo}>
            <div className="resort-result">
              <img src={photo} alt={photo}></img>
            </div>
          </li>
        );
      });
      setGallery(images);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <ul>{gallery}</ul>
    </div>
  );
}

export default PhotoGallery;
