import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar navbar--fixed-top">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            RoboSub LA
            <i className="gi gi-submarine"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home Port <i className="fas fa-anchor"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/thefleet"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                The Fleet <i className="fas fa-ship"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/sponsors"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sponsors <i class="fas fa-building"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/members"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Crew Deck <i className="fas fa-id-card"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/resources"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resources <i className="fas fa-book"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events <i className="fas fa-calendar-alt" />
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button path="/sign-up" buttonStyle="btn--outline">
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
