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

        {/* This section is to retrieve the content of the imported components */}
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
    </div>
  );
};

export default Resources;