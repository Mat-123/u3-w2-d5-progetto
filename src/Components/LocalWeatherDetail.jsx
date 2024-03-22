import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LocalWeatherDetail = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},IT&appid=da7216bb20cb0d37c988f17028f82c8b&lang=it`
        );
        if (!response.ok) {
          throw new Error("Riscontrato problema nella chiamata API.");
        }
        const data = await response.json();
        setWeatherData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("ERRORE", error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherIconUrl = () => {
    if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
      const iconCode = weatherData.weather[0].icon;
      return `https://openweathermap.org/img/wn/${iconCode}.png`;
    }
    return "";
  };

  const getWeatherDescription = () => {
    return weatherData && weatherData.weather && weatherData.weather.length > 0
      ? weatherData.weather[0].description
      : "";
  };

  const getWindDescription = () => {
    if (weatherData && weatherData.wind && weatherData.wind.speed) {
      const windSpeed = weatherData.wind.speed;
      if (windSpeed <= 1) {
        return "Assente";
      } else if (windSpeed <= 11) {
        return "Brezza";
      } else if (windSpeed <= 39) {
        return "Moderato";
      } else {
        return "Tempesta";
      }
    }
    return "";
  };

  return (
    <div className="mt-4">
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" variant="danger" />
        </div>
      )}

      {isError && (
        <div className="text-center mt-3">
          <Alert variant="danger">Qualcosa è andato storto.</Alert>
        </div>
      )}

      {weatherData && (
        <Card className="mx-auto mt-3" style={{ maxWidth: "500px" }}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>{city}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">IT</Card.Subtitle>
              </Col>
              <Col xs="auto" className="ml-auto">
                <img src={getWeatherIconUrl()} alt="Weather Icon" style={{ width: "100px", height: "100px" }} />
              </Col>
            </Row>
            <hr className="my-3" />
            <Row>
              <Col>
                <Card.Text>
                  <strong>Dettagli</strong>
                  <br />
                  Weather: {getWeatherDescription()}
                  <br />
                  Temperatura: {(weatherData.main.temp - 273.15).toFixed(2)}°C
                  <br />
                  Temperatura Percepita: {(weatherData.main.feels_like - 273.15).toFixed(2)}°C
                  <br />
                  Temperatura Min: {(weatherData.main.temp_min - 273.15).toFixed(2)}°C
                  <br />
                  Temperatura Max: {(weatherData.main.temp_max - 273.15).toFixed(2)}°C
                  <br />
                  Umidità: {weatherData.main.humidity}%
                  <br />
                  Vento: {getWindDescription()}
                </Card.Text>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Link to="/" className="btn btn-primary">
                  Torna alla Home
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default LocalWeatherDetail;
