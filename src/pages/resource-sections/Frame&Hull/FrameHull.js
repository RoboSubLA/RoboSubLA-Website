import React from "react";
import "../Linux/Linux.css";
import { Jumbotron, Col, Row, Container, Card, Image } from "react-bootstrap";
import "./FrameHull.css";

function FrameHull() {
  return (
    <div className="top-holder">
      <div className="header-container">
        <h1 className="linux- header-top">Introductory SolidWorks Tutorials</h1>
      </div>

      <p className="linux-p">
        The <span className="inner-top">Frame and Hull Subteam</span> primarily
        utilizes SolidWorks for building our 3D model of the robotic submarine.
        To ensure everyone can contribute to building the model, we host
        introductory SolidWorks workshops - where we go over the basics of the
        3D-modeling software. Linked below are some videos to watch if you are
        unable to come to our workshops.
      </p>

      <div className="container">
        <div className="section section-one">
          <h1 className="linux-h1"> SolidWorks Beginner Tutorials</h1>
          <div className="iframe-align">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/qtgmGkEPXs8?start=110"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="section section-two">
          <h1 className="linux-h1">SolidWorks Basics and Parts</h1>
          <div className="iframe-align">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/CII_iPwVLUg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="section section-three">
          <h1 className="linux-h1">SolidWorks Engine Assembly and Animation</h1>
          <div className="iframe-align">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/5KVSuNt1UX8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrameHull;
