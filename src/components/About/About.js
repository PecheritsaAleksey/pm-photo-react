import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import "./About.css";

const About = () => {
  return (
    <Container className="about">
      <Row>
        <Col md={5} className="about-image">
          <Image src={require("../../static/about.jpg")} fluid />
        </Col>
        <Col md={5}>
          <p className="text">
            Привет! Меня зовут Мария, и я свадебный фотограф в г. Красноярск.
          </p>
          <p className="text">
            Если вам понравились мои работы, значит, вы также как и я любите
            легкие, стильные и элегантные фотографии. Вместе мы проработаем
            стиль и настроение вашей свадебной съёмки, подберём оптимальные
            тайминг и локации.
          </p>
          <p className="text">
            Я с душой подхожу ко всем свадебным съёмкам: помогу вам в
            позировании и сохраню в кадре ваши настоящие чувства!
          </p>
          <p className="text">
            Вы можете задать мне любые вопросы, позвонив по номеру телефона
            89135097588.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
