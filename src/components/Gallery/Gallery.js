import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component";
import ScrollUpButton from "react-scroll-up-button";
import { storage } from "firebase";

import "./Gallery.css";

const Gallery = (props) => {
    const [storageRef, setStorageRef] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (props.location.state) {

            const storageRef = storage().ref(
                `${props.location.state.folderPath}`
            );

            storageRef.listAll().then((result) => {
                setStorageRef(result.items);
            });
        }
    }, [props.location.state]);

    useEffect(() => {
        if (props.location.state) {
            let promiseArr = storageRef.map(function (imageRef) {
                return imageRef.getDownloadURL().then(function (res) {
                    return res;
                });
            });

            Promise.all(promiseArr).then(function (res) {
                const { scrollPosition } = props;
                const images = res.map((path) => (
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
                setImages(images);
            });
        } else {
            setImages(<Redirect to="/" />);
        }
    }, [storageRef, props]);

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
