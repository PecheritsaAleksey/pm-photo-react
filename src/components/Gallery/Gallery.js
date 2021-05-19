import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component";
import ScrollUpButton from "react-scroll-up-button";
import firebaseApp from "../../firebaseApp";

import "./Gallery.css";

const Gallery = (props) => {
  const [storageRef, setStorageRef] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (props.location.state) {
      const storageRef = firebaseApp.storage().ref(`${props.location.state.folderPath}`);

      storageRef.listAll().then((result) => {
        setStorageRef(result.items);
      });
    }
  }, [props.location.state]);

  useEffect(() => {
    if (props.location.state) {
      let imageUrlList = storageRef.map((imageRef) => {
        return `https://firebasestorage.googleapis.com/v0/b/${
          imageRef.location.bucket
        }/o/${encodeURIComponent(imageRef.location.path_)}?alt=media`;
      });

      const { scrollPosition } = props;
      const images = imageUrlList.map((url) => (
        <LazyLoadImage
          key={url}
          scrollPosition={scrollPosition}
          src={url}
          width={1300}
          height={1300}
        />
      ));
      setImages(images);
    } else {
      setImages(<Redirect to="/" />);
    }
  }, [storageRef, props]);

  window.scrollTo(0, 0);

  return (
    <div className="images">
      {images}
      <div>
        <ScrollUpButton />
      </div>
    </div>
  );
};

export default trackWindowScroll(Gallery);
