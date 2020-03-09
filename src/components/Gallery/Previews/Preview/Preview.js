import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Preview.css";

const Preview = props => {
  return (
    <Col xs={6} md={4}>
      <Link to={props.link} className="preview-link">
        <Image src={props.imgSrc} fluid />
        <p className="names"> {props.name}</p>
      </Link>
    </Col>
  );
};

export default Preview;
