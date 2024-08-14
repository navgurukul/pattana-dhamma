import React, { useState } from "react";
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
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container justify-content-between">
          <a className="navbar-brand" href="#">
            <img
              src="https://pattana.dhamma.org/images/icons/aniwheel2.gif"
              alt="Inspire Logo"
              className="navbar-logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle} 
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="basic-navbar-nav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.dhamma.org/en/schedules/schpattana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Course info & Booking
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.dhamma.org/en/about/code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code of Discipline
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutDhamma">About Dhamma Pattana</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.dhamma.org/en/about/qanda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQ's
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/photo-gallery">Photo Gallery</a>
              </li>
            </ul>
            <a className="navbar-brand" href="#">
              <img
                src="https://pattana.dhamma.org/images/icons/bodhiLeaf.gif"
                alt="Inspire Logo"
                className="navbar-logo"
              />
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`offcanvas offcanvas-end ${showOffcanvas ? "show" : ""}`} 
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        style={{ visibility: showOffcanvas ? "visible" : "hidden" }} 
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title"
            id="offcanvasNavbarLabel"
            style={{ color: 'rgb(0, 102, 0)' }}
          >
            Dhamma Pattana Vipassana Centre
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={handleClose} 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={handleClose}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.dhamma.org/en/schedules/schpattana"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
              >
                Course info & Booking
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.dhamma.org/en/about/code"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
              >
                Code of Discipline
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutDhamma" onClick={handleClose}>
                About Dhamma Pattana
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.dhamma.org/en/about/qanda"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
              >
                FAQ's
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/photo-gallery" onClick={handleClose}>
                Photo Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

