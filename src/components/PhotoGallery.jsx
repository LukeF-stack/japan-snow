import React, { useEffect, useState } from "react";
import "../App.css";

function PhotoGallery(props) {
  const [gallery, setGallery] = useState([]);
  //const [destination, setDestination] = useState({});
  useEffect(() => {
    getPhotos(props);
  }, [props]);

  const getPhotos = async (props) => {
    //console.log("id is", props.id);
    try {
      const response = await fetch(
        `https://dsbn3.sse.codesandbox.io/api/${props.db}/${props.id}`
      );
      const destination = await response.json();
      //setDestination(destination);
      //console.log(destination);
      const images = [];
      destination.photos.forEach((photo) => {
        images.push(
          <li key={photo}>
            <div
              className="photo-result"
              style={{ backgroundImage: `url(${photo})` }}
            ></div>
          </li>
        );
      });
      setGallery(images);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="grid-container">
      <ul className="photo-grid">{gallery}</ul>
    </div>
  );
}

export default PhotoGallery;
