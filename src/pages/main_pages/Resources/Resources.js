import React, { useState } from "react";

import "./Resources.css";

// import resource sections
import Arduino from "../../resource-sections/Arduino/Arduino";
import ComputerVision from "../../resource-sections/ComputerVision/ComputerVision";
import ROS from "../../resource-sections/ROS/ROS";
import Linux from "../../resource-sections/Linux/Linux";
import FrameHull from "../../resource-sections/Frame&Hull/FrameHull";
import GetStarted from "../../resource-sections/GetStarted/GetStarted";
import Github from "../../resource-sections/GitHub/GitHub";
import MissionPlanning from "../../resource-sections/MissionPlanning/MissionPlanning";
import Electronics from "../../resource-sections/Electronics/Electronics";
import Sidebar from "../../../components/Sidebar/Sidebar";

const Resources = () => {
  const [activeSection, setActiveSection] = useState("getstarted");

  return (
    <div>
      {/* Sidebar and content area */}
      <div className="d-flex sidebar-content-container">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* This section is to retreive the content of the imported components */}
        <div className="content p-3 wrapper">
          {activeSection === "getstarted" && <GetStarted />}
          {activeSection === "mechanical" && <FrameHull />}
          {activeSection === "electronics" && <Electronics />}
          {activeSection === "missionplanning" && <MissionPlanning />}
          {activeSection === "arduino" && <Arduino />}
          {activeSection === "linux" && <Linux />}
          {activeSection === "github" && <Github />}
          {activeSection === "ros" && <ROS />}
          {activeSection === "cv" && <ComputerVision />}
        </div>
      </div>

      {/* <h1 className="resource-title">Resources</h1> */}
      {/* <Tab.Container id="left-tabs-example" defaultActiveKey="getstarted">
        <Row className="resource-row">
          <Col className="resource-left-col" sm={3}>
            <Nav
              className="resource-item-container flex-column"
              variant="pills"
            >
              <Nav.Item className="resource-item">
                <Nav.Link className="resource-tab" eventKey="getstarted">
                  Get Started
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="resource-item">
                <Nav.Item className="resource-item">
                  <Nav.Link eventKey="mechanical">Frame &amp; Hull</Nav.Link>
                </Nav.Item>

                <Nav.Item className="resource-item">
                  <Nav.Link eventKey="electronics">Electronics</Nav.Link>
                </Nav.Item>

                <Nav.Item className="resource-item">
                  <Nav.Link eventKey="mission">Mission Planning</Nav.Link>
                </Nav.Item>

                <Nav.Link className="resource-tab" eventKey="arduino">
                  Arduino
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="resource-item">
                <Nav.Link eventKey="linux">Linux</Nav.Link>
              </Nav.Item>

              <Nav.Item className="resource-item">
                <Nav.Link eventKey="github">Git &amp; GitHub</Nav.Link>
              </Nav.Item>

              <Nav.Item className="resource-item">
                <Nav.Link eventKey="ros">Robot OS</Nav.Link>
              </Nav.Item>

              <Nav.Item className="resource-item">
                <Nav.Link eventKey="cv">Computer Vision</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9} className="resource-container">
            <Tab.Content>
              <Tab.Pane eventKey="getstarted">
                <GetStarted />
              </Tab.Pane>

              <Tab.Pane eventKey="arduino">
                <h1 className="resource-text-title">Arduino</h1>
                <Arduino />
              </Tab.Pane>

              <Tab.Pane eventKey="cv">
                <h1 className="resource-text-title">Computer Vision</h1>
                <ComputerVision />
              </Tab.Pane>

              <Tab.Pane eventKey="electronics">
                <h2 className="resource-text-title">Electronics</h2>
                <Electronics />
              </Tab.Pane>

              <Tab.Pane eventKey="mission">
                <h2 className="resource-text-title">Mission Planning</h2>
                <MissionPlanning />
              </Tab.Pane>

              <Tab.Pane eventKey="github">
                <Github />
              </Tab.Pane>

              <Tab.Pane eventKey="linux">
                <Linux />
              </Tab.Pane>

              <Tab.Pane eventKey="mechanical">
                <h2 className="resource-text-title">Frame &amp; Hull</h2>
                <FrameHull />
              </Tab.Pane>

              <Tab.Pane eventKey="ros">
                <ROS />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container> */}
    </div>
  );
};

export default Resources;
