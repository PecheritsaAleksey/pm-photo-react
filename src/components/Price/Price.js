import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { Container, Row, Col } from "react-bootstrap";

import "./Price.css";

const Price = () => {
  return (
    <Auxiliary>
      <Container className="price">
        <Row>
          <Col xs={6} md={4}>
            <p className="heading">Свадебная съемка</p>
            <p className="text">- Стоимость свадебной съемки - 3000р/час</p>
            <p className="text">- Количество часов в пятницу и субботу начинается от 5</p>
            <p className="text">- Все фотогафии подвергаются цветокоррекции, средние и крупные портреты - ретуши</p>
            <p className="text">- Личная встреча, полная консультация и помощь в подборе других подрядчиков</p>
            <p className="text">- При бронировании свыше 8 часов - предсвадебная фотосессия в подарок</p>
            <p className="text">- Сроки отдачи материала - до 2-х месяцев</p>
          </Col>
          <Col xs={6} md={4}>
            <p className="heading">Индивидуальная съемка / Love story</p>
            <p className="text">- Стоимость съемки - 2500р/час</p>
            <p className="text">- Консультация и помощь в подборе образов и локации</p>
            <p className="text">- Все фотогафии подвергаются цветокоррекции, средние и крупные портреты - ретуши</p>
            <p className="text">- Сроки отдачи материала - до 3-х недель</p>
            <p className="text">- В стоимость не входит аренда студии</p>
          </Col>
          <Col xs={6} md={4}>
            <p className="heading">Семейная съемка</p>
            <p className="text"> - Стоимость съемки - 3000р/час</p>
            <p className="text">- Консультация и помощь в подборе образов и локации</p>
            <p className="text">- Все фотогафии подвергаются цветокоррекции, средние и крупные портреты - ретуши</p>
            <p className="text">- Сроки отдачи материала - до 3-х недель</p>
            <p className="text">- В стоимость не входит аренда студии</p>
          </Col>
        </Row>
      </Container>
    </Auxiliary>
  );
};

export default Price;
