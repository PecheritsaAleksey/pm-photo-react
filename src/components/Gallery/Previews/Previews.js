import React from "react";
import { Container, Row } from "react-bootstrap";

import Preview from "./Preview/Preview";

import "./Previews.css";

const Previews = () => {
  return (
    <Container className="previews">
      <Row>
        <Preview imgSrc={require("../../../images/first/main.jpg")} name="Anna & Yuriy" link="/AandY"/>
        <Preview imgSrc={require("../../../images/second/main.jpg")} name="Daria & Michael" link="/DandM"/>
        <Preview imgSrc={require("../../../images/third/main.jpg")} name="Ekaterina & Sergey" link="/EandS"/>
        <Preview imgSrc={require("../../../images/fourth/main.jpg")} name="Polina & Sergey" link="/PandS"/>
        <Preview imgSrc={require("../../../images/fifth/main.jpg")} name="Sofia & Anatoly" link="/SandA"/>
        <Preview imgSrc={require("../../../images/sixth/main.jpg")} name="Vilena & Danil" link="/VandD"/>
      </Row>
    </Container>
  );
};

export default Previews;
