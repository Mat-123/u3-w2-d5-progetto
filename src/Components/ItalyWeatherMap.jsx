import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const ItalyWeatherMap = () => {
  const [mapUrl, setMapUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherMap = async () => {
      try {
        const response = await fetch(
          "https://tile.openweathermap.org/map/clouds_new/6/0/63.png?appid=da7216bb20cb0d37c988f17028f82c8b"
        );
        if (!response.ok) {
          throw new Error("Errore durante il recupero dei dati meteo.");
        }
        setMapUrl(response.url);
        setLoading(false);
      } catch (error) {
        console.log("Errore durante il recupero dei dati meteo:", error);
        setLoading(false);
      }
    };

    fetchWeatherMap();
  }, []);

  return (
    <div>
      <h2>Previsioni Meteo Italia</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="danger" />
          <p>Caricamento...</p>
        </div>
      ) : (
        <Col xs={12} className="mx-auto mb-2">
          <Card className="mx-auto">
            <Card.Img variant="top" src={mapUrl} alt="Mappa meteo Italia" />
            <Card.Body>
              <Card.Title>Previsioni Meteo Italia</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      )}
    </div>
  );
};

export default ItalyWeatherMap;
