import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CityCardLight from "./CityCardLight";
import SearchWeather from "./SearchWeather";

const HomeCard = function () {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={10} md={8} className="mx-auto">
          <Row>
            <Col className="text-center">
              <h1>Le città più ricercate:</h1>
            </Col>
          </Row>
          <Row>
            <CityCardLight searchTerm="Rome" />
            <CityCardLight searchTerm="Milan" />
            <CityCardLight searchTerm="Naples" />
          </Row>
          <Row>
            <Col>
              <SearchWeather />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeCard;
