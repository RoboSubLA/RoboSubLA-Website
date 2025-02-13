import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../../components/Footer/Footer";

import "./Lanturn.css";

const Lanturn2020 = () => {
  return (
    <div className="sub-container">
      <h1 className="sub-header">LANTURN 2019-2020 </h1>

      <Tabs
        className="sub-tabs"
        defaultActiveKey="team"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="team" title="Team">
          <Table responsive striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Major</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Team Captian / President</td>
                <td>J.Diego Santillan</td>
                <td>Electrical Engineer</td>
              </tr>

              <tr>
                <td>Frame and Motion</td>
                <td> Kevin Tran </td>
                <td>Mechanical Engineer</td>
              </tr>

              <tr>
                <td>Torpedo System Lead</td>
                <td>Andrew Lopez</td>
                <td>Mechanical Engineer</td>
              </tr>

              <tr>
                <td>Frame Design Lead</td>
                <td>Alan Truong</td>
                <td>Mechanical Engineer</td>
              </tr>

              <tr>
                <td>Hull Design Lead</td>
                <td>David Garcia</td>
                <td>Mechanical Engineer</td>
              </tr>

              <tr>
                <td>Communications Lead</td>
                <td>Albert Le</td>
                <td>Electrical Engineer</td>
              </tr>

              <tr>
                <td>Hydrophones</td>
                <td>Aldo Madrid</td>
                <td>Electrical Engineer</td>
              </tr>

              <tr>
                <td>Apprentice</td>
                <td>Sidra Gibeault </td>
                <td>Electrical Engineer</td>
              </tr>

              <tr>
                <td>CS Lead </td>
                <td>Olin Alvarez</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td> Jonathan Song </td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td> Danny Padilla </td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td> Henry Ho </td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>Ethan Cha </td>
                <td>Computer Science</td>
              </tr>
            </tbody>
          </Table>

        </Tab>

        <Tab className="sub-me-container" eventKey="ME" title="Mechanical">
          <Image
            className="sub-img"
            src={process.env.PUBLIC_URL + "/images/subs/lanturn/2019lanturninsidehaul.png"}
          ></Image>
          <p className="sub-p">
            The mechanical design for CSULA’s Lanturn submarine was focused on ease of manufacture 
            and maintenance. Key design features are a box-shaped hull with a removable electronics 
            shelving unit and a frame with slotted mounting points for modular mounting of 
            subassemblies. Lanturn’s hull primary structure is formed by TIG welded sheets of AL 6061-T6. 
            The lid is made of transparent acrylic, and seals to the hull primary structure through a 
            peripheral nitrile gasket compressed by latches. Lanturn is outfitted with forward and downward 
            facing cameras and features a rear connector plate populated with a standardized set of Seacon 
            connectors. The electronics shelving unit is made of acrylic sheets laser cut to shape/size with
            equally spaced mounting holes that span each sheet. An internal connector plate and connectorized 
            electronics allow the shelving unit to be unplugged and removed from the hull. 90 degree snapping 
            latches allow the shelves to be laid flat outside of the sub for easy maintenance and troubleshooting.
          </p>
          <br />
          <Image
            className="sub-img"
            src={
              process.env.PUBLIC_URL + "/images/subs/lanturn/2019lanturnframe.jpg"
            }
          ></Image>
          <p className="sub-p">
            One design criteria requires that components such as sensors and thrusters be easily added and removed 
            in few steps to minimize time spent on maintenance, in return allocating more time to underwater testing.
            This requirement was met by creating a modular frame that acts as a hub for mounting components, as shown 
            in the frame image. The design uses a combination of 6061-t6 aluminum t-slot extrusions and flat bars to avoid
            complex machining, which contributes to ease of scaling if more mounting surfaces are needed. Components are 
            slid into the t-slot fixture brackets then held in place by tightening one or more set screws.
          </p>
          <br />
          <p className="sub-p">
            In addition to the frame and hull, lanturn features a claw, pneumatic torpedo system, and a DC motor controlled 
            dropper. The claw uses a servo motor to rotate the gears, which are used to open and close the grippers. The grippers
            hold the objects in place after picking them up. The torpedo system uses a CO2 bucket changer for easy replacement of 
            CO2 cartridges, an ASA regulator to decrease the CO2 pressure to the desired value, a solenoid valve to release the CO2
            to launch the torpedo, and the 3D printed torpedoes themselves. The dropper uses a DC motor to rotate the platform 90 
            degrees at a time to release 3 markers one at a time. The lid is used to replace the markers after each run.
          </p>
          <Image
            className="sub-img-s"
            src={
              process.env.PUBLIC_URL + "/images/subs/lanturn/2019lanturnclaw.png"
            }
          ></Image>
          <Image
            className="sub-img-s"
            src={
              process.env.PUBLIC_URL + "/images/subs/lanturn/2019lanturndropper.png"
            }
          ></Image>
          

        </Tab>

        <Tab className="sub-ee-container" eventKey="EE" title="Electrical">
            <p className="sub-p">
                The electrical system on Lanturn consists of a motherboard, a thruster signal routing board, a power distribution board,
                several microcontrollers, and a sensor suite, all powered by a single 14.8V, 20Ah LiPo battery. Its sensor suite includes
                an IMU, a barometer, hydrophones, an active sonar module, a DVL, and cameras. 
            </p>
            <Image
                className="sub-img"
                src={
                process.env.PUBLIC_URL + "/images/subs/lanturn/2019lanturnelectrical1.png"
            }
            ></Image>
            <p className="sub-p">
                To reduce the amount of processing required for the detection of obstacles, the team experimented with the use of a sonar
                module. The sonar module data was processed on a microcontroller external to the motherboard, allowing more CPU usage for
                computer vision and hydrophones signal processing. In addition, the team was successful in developing a cross-correlation 
                based sound localization system using a widely spaced, triangular array of 3 hydrophones. Data for this system is collected 
                using an oscilloscope module, which was significantly cheaper and more open-source than commercial data acquisition systems. 
                The hardware block diagram is shown below.
            </p>
            <Image
                className="sub-img"
                src={
                process.env.PUBLIC_URL + "/images/subs/lanturn/2019lanturnelectrical2.png"
            }
            ></Image>
        </Tab>

        <Tab className="sub-cs-container" eventKey="CS" title="Software">
            <p className="sub-p">
                Lanturn’s software consists of a stabilization controller, several intermediate data acquisition/ processing programs,
                 a computer vision system, and a main “mission planning” module for decision making. The software architecture is 
                 shown below. 
            </p>
            <Image
                className="sub-img"
                src={
                process.env.PUBLIC_URL + "/images/subs/lanturn/2019lanturncs1.png"
            }
            ></Image>
            <p className="sub-p">
                A Python API sends information from the sensor hardware to the submarine motherboard, where the mission planning software
                is running. The mission planning software contains several state machines for each competition task. Data is transferred 
                among these state machines through ROS publishers and subscribers, and the mission planning module's output is sent to the
                submarine's controls module. The controls module computes the necessary stabilization motor commands, and then sends both 
                the computed stabilization commands and the movement commands from mission planning to the motors to both stabilize and 
                move the submarine. The decision-making process is based on previous states and current sensor information. Each state has 
                several subscribers. To increase the efficiency of message passing, the team created custom message types to send larger 
                packets of information in one message. Computer vision collects data from an image stream using OpenCV, where the data is 
                then processed by YOLO. The detected objects are then published to mission planning by the computer vision module.
            </p>
            <Image
                className="sub-img-s"
                src={
                process.env.PUBLIC_URL + "/images/subs/lanturn/2019lanturncs2.png"
            }
            ></Image>
            <Image
                className="sub-img-s"
                src={
                process.env.PUBLIC_URL + "/images/subs/lanturn/2019lanturncs3.png"
            }
            ></Image>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Lanturn2020;
