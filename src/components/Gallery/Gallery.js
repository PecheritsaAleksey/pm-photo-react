import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";
import ScrollUpButton from "react-scroll-up-button";

import { loadImages } from "../../utils";

import "./Gallery.css";

const Gallery = props => {
  const folder = `${props.location.pathname.substr(1)}`;

  const { scrollPosition } = props;

  console.log(folder);

  const imagesPath = loadImages(folder);

  const images = imagesPath.map(path => (
    <LazyLoadImage
      className="image"
      effect="blur"
      key={path}
      scrollPosition={scrollPosition}
      src={path}
      width={1300}
      height={1300}
    />
  ));

  window.scrollTo(0, 0);

  return (
    <div>
      {images}
      <div>
        <ScrollUpButton />
      </div>
    </div>
  );
};

export default trackWindowScroll(Gallery);
