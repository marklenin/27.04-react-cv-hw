import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Container } from "react-bootstrap";
import "./AboutMe.css";

function CollapsibleExample() {
  let style = {
    "text-decoration": "none",
    "z-index": "50",
    "text-decoration": "none",
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={style}
    >
      <Container>
        <Navbar.Brand href="#">
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
              <Link to="/about-me">About me</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/education">Education</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/my-works">My Works</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <Link to="/hire-me">Contact Me</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
