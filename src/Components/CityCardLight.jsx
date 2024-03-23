import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

class CityCardLight extends Component {
  state = {
    localWeather: null,
    isLoading: true,
    isError: false,
  };

  fetchLocalWeather = () => {
    const { searchTerm } = this.props;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm},IT&appid=da7216bb20cb0d37c988f17028f82c8b&lang=it`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore durante il recupero dei dati meteo.");
        }
      })
      .then((weatherFromCity) => {
        this.setState({
          localWeather: weatherFromCity,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("Errore durante il recupero dei dati meteo:", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    this.fetchLocalWeather();
  }

  render() {
    const { searchTerm } = this.props;
    const { localWeather, isLoading, isError } = this.state;

    let iconUrl = "";
    if (localWeather && localWeather.weather && localWeather.weather.length > 0) {
      const iconCode = localWeather.weather[0].icon;
      iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    }

    return (
      <Col>
        {isLoading && (
          <Row className="justify-content-center mt-3">
            <Spinner animation="border" variant="danger" />
            <p>Caricamento...</p>
          </Row>
        )}

        {isError && (
          <Row className="justify-content-center mt-3">
            <Alert variant="danger">Si è verificato un errore durante il recupero dei dati meteo.</Alert>
          </Row>
        )}

        {localWeather && (
          <Card>
            <Link to={`/weather/${searchTerm}`}>
              <Card.Body>
                <div className="d-flex align-items-center">
                  {iconUrl && (
                    <img
                      src={iconUrl}
                      alt="Weather Icon"
                      style={{ width: "50px", height: "50px", marginRight: "10px" }}
                    />
                  )}
                  <div>
                    <Card.Title>{searchTerm}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {localWeather.sys && localWeather.sys.country}
                    </Card.Subtitle>
                    <Card.Text>
                      Temperature: {(localWeather.main.temp - 273.15).toFixed(2)}°C
                      <br />
                      Humidity: {localWeather.main.humidity}%
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Link>
          </Card>
        )}

        {!isLoading && !isError && !localWeather && (
          <Row className="justify-content-center mt-3">
            <Alert variant="warning">Al momento non ci sono dati disponibili.</Alert>
          </Row>
        )}
      </Col>
    );
  }
}

export default CityCardLight;
