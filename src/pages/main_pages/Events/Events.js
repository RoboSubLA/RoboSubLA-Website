import React from "react";
import Sky from "react-sky";
import "./Events.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Typical from "react-typical";

const Events = () => {
  return (
    <div className="event-container">
      <div className="bg" align="center"></div>
      <div className="bg bg2" align="center"></div>
      <div className="bg bg3" align="center"></div>
      <div className="content" align="center">
        <div className="centerCalendar">
          <iframe
            title="Calander"
            src="https://calendar.google.com/calendar/embed?src=auvcalstatela%40gmail.com&ctz=America%2FLos_Angeles"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Events;
