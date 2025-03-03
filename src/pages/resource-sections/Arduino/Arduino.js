import React from "react";
import { Container, Card } from "react-bootstrap";
import "./Arduino.css";

const Arduino = () => {
  return (
    <Container className="arduino-container">
      <section className="header">
        <h1 className="resources-section-h1">Arduino Resources</h1>
        <p className="resources-section-p">
          Here you will find resources to help you get started with Arduino,
          including installation guides and basic tutorials.
        </p>
      </section>

      <section className="link-content-section">
        <div className="content-item">
          <h2 className="content-title">Install Arduino IDE</h2>
          <p className="content-text">Instructions to install IDE here</p>
          <div className="row row-holder">
            <div className="col col-sm">
              <a
                className="resource-links"
                href="https://www.arduino.cc/en/Guide/Windows"
              >
                <i className="fab fa-windows"> Windows</i>
              </a>
            </div>

            <div className="col col-sm">
              <a
                className="resource-links"
                href="https://www.arduino.cc/en/Guide/MacOSX"
              >
                <i className="fab fa-apple"> Mac OS</i>
              </a>
            </div>

            <div className="col col-sm">
              <a
                className="resource-links"
                href="https://www.arduino.cc/en/Guide/Linux"
              >
                <i className="fab fa-linux"></i> Linux
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="tutorial-section">
        <div className="video-content-item">
          <h2 className="content-title">
            Arduino Basics: Breadboard, LEDs, and Buttons
          </h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/mC1vs9UUAzM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="video-content-item">
          <h2 className="content-title">
            Arduino Basics: Servo, Potentiometer, and DC Motor
          </h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/C3ybDK6UlaE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* <div className="video-content-item">
          <h2 className="content-title">Arduino Basics</h2>
          <p className="iframe-align">
            <iframe
              className="resource-iframe"
              src="https://www.youtube.com/embed/mC1vs9UUAzM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </p>
          <h4 className="resource-text">Breadboard, LEDs, and Buttons</h4>
        </div>

        <div className="video-content-item">
          <h2 className="content-title">Arduino Basics</h2>
          <p className="iframe-align">
            <iframe
              className="resource-iframe"
              src="https://www.youtube.com/embed/C3ybDK6UlaE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </p>
          <h4 className="resource-text">Servo, Potentiometer, and DC Motor</h4>
        </div> */}
    </Container>
  );
};

export default Arduino;
