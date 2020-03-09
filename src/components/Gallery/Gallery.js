import React from "react";
import { Image } from "react-bootstrap";

import { loadImages } from "../../utils";

import "./Gallery.css";

const Gallery = props => {
  const folder = `${props.location.pathname.substr(1)}`;  

  console.log(folder);
  
  const imagesPath = loadImages(folder);

  const images = imagesPath.map(path => (
    <Image className="image" key={path} src={path} fluid />
  ));

  window.scrollTo(0, 0);

  return <div>{images}</div>;
};

export default Gallery;
