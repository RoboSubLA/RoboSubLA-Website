import React from "react";

const Arduino = () => {
  return (
    //Install arduino IDE
    <div>
      <h3 className="resource-text">Install Arduino IDE</h3>
      <p className="resource-text">Instructions to install IDE here</p>
      <div className="links-container">
        <a
          className="resource-links"
          href="https://www.arduino.cc/en/Guide/Windows"
        >
          <i class="fab fa-windows"> Windows</i>
        </a>
        <a
          className="resource-links"
          href="https://www.arduino.cc/en/Guide/MacOSX"
        >
          <i class="fab fa-apple"> Mac OS</i>
        </a>
        <a
          className="resource-links"
          href="https://www.arduino.cc/en/Guide/Linux"
        >
          <i class="fab fa-linux"></i> Linux
        </a>
      </div>

      <br />
      <h3 className="resource-text">Arduino Basics</h3>
      <p className="iframe-align">
        <iframe
          className="resource-iframe"
          src="https://www.youtube.com/embed/mC1vs9UUAzM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>
      <h4 className="resource-text">Breadboard, LEDs, and Buttons</h4>
      <br></br>

      <h3 className="resource-text">Arduino Basics</h3>
      <p className="iframe-align">
        <iframe
          className="resource-iframe"
          src="https://www.youtube.com/embed/C3ybDK6UlaE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>
      <h4 className="resource-text">Servo, Potentiometer, and DC Motor</h4>
    </div>
  );
};

export default Arduino;
