import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CityCardLight from "./CityCardLight";
import { useParams } from "react-router-dom";

const ZoneForecast = () => {
  const { zone } = useParams();

  const getCapoluoghiZona = (zona) => {
    switch (zona) {
      case "nord-italia":
        return ["Milano", "Torino", "Genova", "Venezia", "Bologna"];
      case "centro-italia":
        return ["Roma", "Firenze", "Ancona", "Campobasso", "Perugia"];
      case "sud-italia":
        return ["Palermo", "Catania", "Reggio Calabria", "Bari", "Napoli"];
      default:
        return [];
    }
  };

  const capoluoghi = getCapoluoghiZona(zone);

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={10} md={8} className="mx-auto">
          <Row className="text-center">
            <h2>Previsioni per la zona: {zone.replace("-", " ")}</h2>
          </Row>
          {capoluoghi.map((capoluogo, index) => (
            <Row key={index} className="mb-3">
              <Col className="mx-auto">
                <CityCardLight searchTerm={capoluogo} />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ZoneForecast;
