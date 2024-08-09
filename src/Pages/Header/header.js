import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import "./header.css";


const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleClose = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container className="justify-content-between">
          <Navbar.Brand href="#">
            <img
              src="https://pattana.dhamma.org/images/icons/aniwheel2.gif"
              alt="Inspire Logo"
              className="navbar-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link
                href="https://www.dhamma.org/en/schedules/schpattana"
                target="_blank"
                rel="noopener noreferrer"
              >
                Course info & Booking
              </Nav.Link>
              <Nav.Link
                href="https://www.dhamma.org/en/about/code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code of Discipline
              </Nav.Link>
              <Nav.Link href="/aboutDhamma">About Dhamma Pattana</Nav.Link>
              <Nav.Link
                href="https://www.dhamma.org/en/about/qanda"
                target="_blank"
                rel="noopener noreferrer"
              >
                FAQ's
              </Nav.Link>
              <Nav.Link href="./photoGallery">Photo Gallery</Nav.Link>
            </Nav>
            <Navbar.Brand href="#">
              <img
                src="https://pattana.dhamma.org/images/icons/bodhiLeaf.gif"
                alt="Inspire Logo"
                className="navbar-logo"
              />
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dhamma Pattana Vipassana Centre</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link
              href="https://www.dhamma.org/en/schedules/schpattana"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
            >
              Course info & Booking
            </Nav.Link>
            <Nav.Link
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
            >
              Code of Discipline
            </Nav.Link>
            <Nav.Link href="#aboutDhamma" onClick={handleClose}>
              About Dhamma Pattana
            </Nav.Link>
            <Nav.Link
              href="https://www.dhamma.org/en/about/qanda"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
            >
              FAQ's
            </Nav.Link>
            <Nav.Link href="#contacts" onClick={handleClose}>
              Photo Gallery
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
