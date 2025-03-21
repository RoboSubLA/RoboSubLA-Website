import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
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
          <NavLink
            to="/"
            className="navbar-logo page"
            onClick={closeMobileMenu}
          >
            RoboSub LA
            <i className="gi gi-submarine"></i>
          </NavLink>
          {/* Menu icon for mobile view */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* Navigation links */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links page"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Home Port <i className="fas fa-anchor"></i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/thefleet"
                className="nav-links page"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                The Fleet <i className="fas fa-ship"></i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/sponsors"
                className="nav-links page"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Sponsors <i className="fas fa-building"></i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/members"
                className="nav-links page"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Crew Deck <i className="fas fa-id-card"></i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/resources"
                className="nav-links page"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Resources <i className="fas fa-book"></i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/events"
                className="nav-links page"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Events <i className="fas fa-calendar-alt" />
              </NavLink>
            </li>

            {/* Mobile view "Sign Up" link */}
            <li>
              <NavLink
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
          {/* Conditionally render the "SIGN UP" button based on the button state */}
          {button && (
            <Button
              path="/sign-up"
              buttonStyle="btn--outline"
              className="sign-up"
            >
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
