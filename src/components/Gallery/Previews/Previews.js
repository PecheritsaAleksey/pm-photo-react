import React from "react";
import { Container, Row } from "react-bootstrap";

import Preview from "./Preview/Preview";

const Previews = () => {
  return (
    <Container>
      <Row>
        <Preview imgSrc={require("../../../images/first/main.jpg")} name="B A L E T" link="/balet"/>
        <Preview imgSrc={require("../../../images/second/main.jpg")} name="W E D D I N G (V + D)" link="/VandD"/>
        <Preview imgSrc={require("../../../images/third/main.jpg")} name="W E D D I N G ( D + M )" link="/DandM"/>
      </Row>
      <Row>
        <Preview imgSrc={require("../../../images/fourth/main.jpg")} name="W E D D I N G (T + S)" link="/TandS"/>
        <Preview imgSrc={require("../../../images/fifth/main.jpg")} name="W E D D I N G (A + V )" link="/AandV"/>
        <Preview imgSrc={require("../../../images/sixth/main.jpg")} name="W E D D I N G (O + E)" link="/OandE"/>
      </Row>
    </Container>
  );
};

export default Previews;
