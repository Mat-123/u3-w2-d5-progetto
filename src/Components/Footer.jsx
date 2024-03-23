import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <Navbar bg="primary" variant="dark" className="fixed-bottom">
      <Container className="d-flex justify-content-between align-items-center align-content-center">
        <div>
          <Navbar.Brand href="/" className="p-0 ms-2 my-1 d-flex align-items-center">
            <img src={logo} alt="logo" height="40" className="align-top me-2" />
            <span className="navbar-brand-text">Meteo Station</span>
          </Navbar.Brand>
        </div>
        <div>
          <p className="mb-0 text-white">MMD &copy; {new Date().getFullYear()}</p>
        </div>
        <div>
          <a href="/contatti" className="text-light me-3">
            Contact us
          </a>
          <a href="/buymeacoffee" className="text-light">
            Buy me a coffee
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;
