import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import Button from "react-bootstrap/Button";
import "./MissionPlanning.css";

const MissionPlanning = () => {
  return (
    <Container className="mission-planning-container">
      <section className="header">
        <h1 className="resources-section-h1">Mission Planning</h1>
        <p className="resources-section-p">
          The <span className="inner-top">Mission Planning</span> team is
          responsible for strategizing and planning the tasks that the AUV will
          perform during the competition.
        </p>
      </section>

      <section className="content-section">
        <div className="content-item">
          <h2 className="content-title">Task Planning</h2>
          <p className="content-text">
            The Mission Planning team outlines the tasks that the AUV needs to
            complete during the competition, ensuring that each task is executed
            efficiently.
          </p>
        </div>

        <p className="resource-text">
          Refer to the following link for a guide on Smach, which is used for
          state machines.
        </p>
        <p className="resource-text">
          Note that SMACH requires ROS, which must be installed on Ubuntu. Refer
          to the Ros tutorial for instructions on how to use Ubuntu on your
          operating system.
        </p>
        <Button
          className="resource-button"
          href="http://wiki.ros.org/smach/Tutorials/Getting%20Started"
          variant="primary"
        >
          <FontAwesomeIcon icon={faReadme} /> Smach Tutorial
        </Button>
      </section>

      <section className="tutorial-section">
        <h2 className="resources-section-h2">Introduction to State Machines</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/U_QN28T_ypU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="tutorial-section">
        <h2 className="resources-section-h2">Intermediate State Machines</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/pP0Z-qmkWUk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </Container>
  );
};

export default MissionPlanning;
