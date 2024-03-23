import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab, Tabs } from "react-bootstrap";

const CurrentWeatherTab = ({ weatherData }) => (
  <div>
    <h5>Meteo Attuale</h5>
    <Row>
      <Col md={2} className="text-right">
        <img src={getWeatherIconUrl(weatherData)} alt="Weather Icon" style={{ width: "150px", height: "150px" }} />
      </Col>
      <Col md={10}>
        <p>Descrizione: {weatherData?.weather[0]?.description}</p>
        <p>Temperatura: {weatherData?.main?.temp}&deg;C</p>
        <p>Temperatura Minima: {weatherData?.main?.temp_min}&deg;C</p>
        <p>Temperatura Massima: {weatherData?.main?.temp_max}&deg;C</p>
        <p>Umidità: {weatherData?.main?.humidity}%</p>
        <p>Vento: {getWindDescription(weatherData)}</p>
      </Col>
    </Row>
  </div>
);

const TomorrowWeatherTab = ({ weatherData }) => (
  <div>
    <h5>Meteo di Domani</h5>
    <Row>
      <Col md={2} className="text-right">
        <img src={getWeatherIconUrl(weatherData)} alt="Weather Icon" style={{ width: "150px", height: "150px" }} />
      </Col>
      <Col md={10}>
        <p>Descrizione: {weatherData?.weather[0]?.description}</p>
        <p>Temperatura: {weatherData?.main?.temp}&deg;C</p>
        <p>Temperatura Minima: {weatherData?.main?.temp_min}&deg;C</p>
        <p>Temperatura Massima: {weatherData?.main?.temp_max}&deg;C</p>
        <p>Umidità: {weatherData?.main?.humidity}%</p>
        <p>Vento: {getWindDescription(weatherData)}</p>
      </Col>
    </Row>
  </div>
);

const DayAfterTomorrowWeatherTab = ({ weatherData }) => (
  <div>
    <h5>Meteo di Dopodomani</h5>
    <Row>
      <Col md={2} className="text-right">
        <img src={getWeatherIconUrl(weatherData)} alt="Weather Icon" style={{ width: "150px", height: "150px" }} />
      </Col>
      <Col md={10}>
        <p>Descrizione: {weatherData?.weather[0]?.description}</p>
        <p>Temperatura: {weatherData?.main?.temp}&deg;C</p>
        <p>Temperatura Minima: {weatherData?.main?.temp_min}&deg;C</p>
        <p>Temperatura Massima: {weatherData?.main?.temp_max}&deg;C</p>
        <p>Umidità: {weatherData?.main?.humidity}%</p>
        <p>Vento: {getWindDescription(weatherData)}</p>
      </Col>
    </Row>
  </div>
);

const getWeatherIconUrl = (weatherData) => {
  if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
    const iconCode = weatherData.weather[0].icon;
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  }
  return "";
};

const getWindDescription = (weatherData) => {
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

const LocalWeatherDetail = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city},IT&appid=da7216bb20cb0d37c988f17028f82c8b&lang=it&units=metric`
        );
        if (!response.ok) {
          throw new Error("Errore durante il recupero dei dati meteo.");
        }
        const data = await response.json();
        setWeatherData(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Errore durante il recupero dei dati meteo:", error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div className="mt-4">
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" variant="danger" />
          <p>Caricamento...</p>
        </div>
      )}

      {isError && (
        <div className="text-center mt-3">
          <Alert variant="danger">Si è verificato un errore durante il recupero dei dati meteo.</Alert>
        </div>
      )}

      {weatherData && (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>{city}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">IT</Card.Subtitle>
                <hr className="my-3" />
                <Tabs defaultActiveKey="current" id="weather-tabs" className="mb-3">
                  <Tab eventKey="current" title="Meteo Attuale">
                    <CurrentWeatherTab weatherData={weatherData.list[0]} />
                  </Tab>
                  <Tab eventKey="tomorrow" title="Meteo di Domani">
                    <TomorrowWeatherTab weatherData={weatherData.list[8]} />
                  </Tab>
                  <Tab eventKey="dayAfterTomorrow" title="Meteo di Dopodomani">
                    <DayAfterTomorrowWeatherTab weatherData={weatherData.list[16]} />
                  </Tab>
                </Tabs>
                <Link to="/" className="btn btn-primary">
                  Torna alla Home
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default LocalWeatherDetail;
