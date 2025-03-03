import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // State to manage the click event for the mobile menu
  const [click, setClick] = useState(false);
  // State to manage the visibility of the "SIGN UP" button
  const [button, setButton] = useState(true);

  // Toggle the click state to open/close the mobile menu
  const handleClick = () => setClick(!click);
  // Close the mobile menu
  const closeMobileMenu = () => setClick(false);

  // Show or hide the "SIGN UP" button based on the window width
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Run showButton once when the component mounts
  useEffect(() => {
    showButton();
  }, []);

  // Add an event listener to handle window resize
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar navbar--fixed-top">
        <div className="navbar-container">
          {/* Logo and home link */}
          <Link to="/" className="navbar-logo page" onClick={closeMobileMenu}>
            RoboSub LA
            <i className="gi gi-submarine"></i>
          </Link>
          {/* Menu icon for mobile view */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/* Navigation links */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links page" onClick={closeMobileMenu}>
                Home Port <i className="fas fa-anchor"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/thefleet"
                className="nav-links page"
                onClick={closeMobileMenu}
              >
                The Fleet <i className="fas fa-ship"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/sponsors"
                className="nav-links page"
                onClick={closeMobileMenu}
              >
                Sponsors <i className="fas fa-building"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/members"
                className="nav-links page"
                onClick={closeMobileMenu}
              >
                Crew Deck <i className="fas fa-id-card"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/resources"
                className="nav-links page"
                onClick={closeMobileMenu}
              >
                Resources <i className="fas fa-book"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/events"
                className="nav-links page"
                onClick={closeMobileMenu}
              >
                Events <i className="fas fa-calendar-alt" />
              </Link>
            </li>

            {/* Mobile view "Sign Up" link */}
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
          {/* Conditionally render the "SIGN UP" button based on the button state */}
          {button && (
            <Button path="/sign-up" buttonStyle="btn--outline" className="sign-up">
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;