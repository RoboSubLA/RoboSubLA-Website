import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`d-flex flex-column p-3 bg-light side-tab ${
        isFixed ? "fixed-sidebar" : ""
      }`}
    >
      <Nav className="flex-column">
        <Nav.Link
          className="tab first-tab"
          active={activeSection === "getstarted"}
          onClick={() => setActiveSection("getstarted")}
        >
          Get Started
        </Nav.Link>
        <Nav.Link
          className="tab second-tab"
          active={activeSection === "mechanical"}
          onClick={() => setActiveSection("mechanical")}
        >
          Frame & Hull
        </Nav.Link>
        <Nav.Link
          className="tab third-tab"
          active={activeSection === "electronics"}
          onClick={() => setActiveSection("electronics")}
        >
          Electronics
        </Nav.Link>
        <Nav.Link
          className="tab fourth-tab"
          active={activeSection === "missionplanning"}
          onClick={() => setActiveSection("missionplanning")}
        >
          Mission
        </Nav.Link>
        <Nav.Link
          className="tab fifth-tab"
          active={activeSection === "arduino"}
          onClick={() => setActiveSection("arduino")}
        >
          Arduino
        </Nav.Link>
        <Nav.Link
          className="tab sixth-tab"
          active={activeSection === "linux"}
          onClick={() => setActiveSection("linux")}
        >
          Linux
        </Nav.Link>
        <Nav.Link
          className="tab seventh-tab"
          active={activeSection === "github"}
          onClick={() => setActiveSection("github")}
        >
          GitHub
        </Nav.Link>
        <Nav.Link
          className="tab eighth-tab"
          active={activeSection === "ros"}
          onClick={() => setActiveSection("ros")}
        >
          ROS
        </Nav.Link>
        <Nav.Link
          className="tab nineth-tab"
          active={activeSection === "cv"}
          onClick={() => setActiveSection("cv")}
        >
          Computer Vision
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
