import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchWeather = () => {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Form className="my-5">
      <Form.Control
        className="mb-3"
        type="text"
        placeholder="Inserisci il nome della città che stai cercando..."
        value={city}
        onChange={handleChange}
      />
      <Link to={`/weather/${city}`}>
        <Button variant="primary">Cerca</Button>
      </Link>
    </Form>
  );
};

export default SearchWeather;
