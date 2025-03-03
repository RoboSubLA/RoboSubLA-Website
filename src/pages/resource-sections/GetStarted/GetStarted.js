import React, { useState, Suspense, lazy } from "react";
import { Figure, Container, Accordion, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faFileAlt,
  faBook,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import "./GetStarted.css";

// Lazy load the sections
const LazySections = lazy(() => import("./LazySections"));

const GetStarted = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <>
      <Container className="holder">
        <section className="header-one">
          <h1 className="resources-section-h1 first-header">
            Welcome Members & RoboSub Teams
          </h1>
          <p className="resources-section-p text-one">
            Here at <span className="accent-color">RoboSub LA </span> we are
            passionate about Robotics and we want to share what we know with our
            community of Robotic enthusiast.
          </p>
        </section>

        <Suspense fallback={<div>Loading...</div>}>
          <LazySections activeKey={activeKey} handleToggle={handleToggle} />
        </Suspense>
      </Container>
    </>
  );
};

export default GetStarted;
