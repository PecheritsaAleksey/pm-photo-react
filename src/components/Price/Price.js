import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { Container, Row, Col } from "react-bootstrap";

import "./Price.css";

const Price = () => {
  return (
    <Auxiliary>
      <Container className="price">
        <Row>
          <Col md={3}>
            <p className="heading">Свадебная съемка</p>
            <p className="text">
              - Стоимость свадебной съемки в пятницу и субботу - 3500р/час
            </p>
            <p className="text">
              - Стоимость свадебной съемки в остальные дни - 3000р/час
            </p>
            <p className="text">- Количество часов в пятницу и субботу начинается от 5</p>
            <p className="text">
              - Все фотографии подвергаются цветокоррекции, средние и крупные портреты -
              ретуши
            </p>
            <p className="text">
              - Личная встреча, консультация, помощь в выборе локаций для съемки
            </p>
            <p className="text">
              - При бронировании свыше 8 часов - предсвадебная фотосессия в подарок
            </p>
            <p className="text">- Сроки отдачи материала - до 2-х месяцев</p>
            <p className="text">
              - Превью (15-20 фотографий) на следующий день после свадьбы
            </p>
            <p className="text">
              - Для бронирования необходимо подписать договор и оставить предоплату (3
              тыс.руб.)
            </p>
          </Col>
          <Col md={3}>
            <p className="heading">Индивидуальная съемка / Love story</p>
            <p className="text">- Стоимость съемки - 3500р/час</p>
            <p className="text">- Консультация и помощь в подборе образов и локации</p>
            <p className="text">
              - Все фотографии подвергаются цветокоррекции, средние и крупные портреты -
              ретуши
            </p>
            <p className="text">- Сроки отдачи материала - до 3-х недель</p>
            <p className="text">- В стоимость не входит аренда студии</p>
          </Col>
          <Col md={3}>
            <p className="heading">Семейная съемка</p>
            <p className="text"> - Стоимость съемки - 4000р/час</p>
            <p className="text">- Консультация и помощь в подборе образов и локации</p>
            <p className="text">
              - Все фотографии подвергаются цветокоррекции, средние и крупные портреты -
              ретуши
            </p>
            <p className="text">- Сроки отдачи материала - до 3-х недель</p>
            <p className="text">- В стоимость не входит аренда студии</p>
          </Col>
          <Col md={3}>
            <p className="heading">Съемка контента</p>
            <p className="text"> - Стоимость съемки - 3500р/час</p>
            <p className="text">- Минимум 2 съемочных часа</p>
            <p className="text">- Совместное составление ТЗ (проекта съемки)</p>
            <p className="text">- Консультация и помощь в подборе образов и локации</p>
            <p className="text">
              - Все фотографии подвергаются цветокоррекции, средние и крупные портреты -
              ретуши
            </p>
            <p className="text">- Сроки отдачи материала - до 3-х недель</p>
            <p className="text">- В стоимость не входит аренда студии</p>
          </Col>
        </Row>
      </Container>
    </Auxiliary>
  );
};

export default Price;
