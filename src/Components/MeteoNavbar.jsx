import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function MeteoNavbar() {
  const location = useLocation();

  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="p-0">
      <Navbar.Brand href="#home" className="p-0 ms-2 d-flex align-items-center">
        <img src={logo} alt="logo" height="70" className="align-top me-2" />
        <span className="navbar-brand-text">Meteo Station</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto fw-bold">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
          <NavDropdown title="Previsioni" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/previsioni/nord-italia">
              Previsioni Nord Italia
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/previsioni/centro-italia">
              Previsioni Centro Italia
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/previsioni/sud-italia">
              Previsioni Sud Italia
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Previsioni dal mondo" id="world-nav-dropdown">
            <NavDropdown.Item as={Link} to="/previsioni/africa">
              Africa
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/previsioni/america">
              America
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/previsioni/asia">
              Asia
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/previsioni/europa">
              Europa
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/previsioni/oceania">
              Oceania
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contatti">
            Contatti
          </Nav.Link>
        </Nav>
        <Nav className="align-items-center">
          <BsSearch className="icons me-2" />
          <Nav.Link href="">My Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MeteoNavbar;
