import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../../components/Footer/Footer";

import "./Donphan.css";

const Donphan = () => {
  return (
    <div className="sub-container">
      <h1 className="sub-header"> DONPHAN 2019-2020 </h1>

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
            src={process.env.PUBLIC_URL + "/images/subs/donphan/donphan1.png"}
          ></Image>
          <p className="sub-p">
            Donphan consists of a single 8-inch diameter acrylic tube, which houses all electrical components; two machined aluminum side plates, 
            for mounting the majority of external components; an additional base plate for mounting the downward facing camera and other equipment; 
            two side mounts for the vertical thrusters; and a rear mount for the back-facing thrusters.
          </p>
          <br />
          <Image
            className="sub-img"
            src={
              process.env.PUBLIC_URL + "/images/subs/donphan/donphan3.png"
            }
          ></Image>
          <p className="sub-p">
            The objectives of this design include 
            modularity and reduction of drag in the water. To ensure easy access to all of the sub's internals, six nuts on the half-inch 
            diameter threaded rods can be removed to quickly access all of the internal electrical components. The screws at the bottom 
            have their threads filed off at the end so that they can slot into the base plate as pegs, while still being easily replaceable.
            In addition, the surface area perpendicular to forward motion was minimized to achieve minimal drag.
            During the prototyping phase, several of Donphan's mechanical components were 3D printed at a smaller scale and test fitted to 
            ensure that the manufactured version would be modular as intended. 
          </p>
          <br />


        </Tab>

        <Tab className="sub-ee-container" eventKey="EE" title="Electrical">
          <p className="sub-p">
            The electrical system on Donphan consists of a Raspberry Pi, a thruster signal routing board, a buck converter, and a sensor suite, 
            all powered by a single 14.8V, 10Ah LiPo battery. Its sensor suite includes an IMU, a barometer, and cameras. Donphan's electrical 
            system is extremely compact, as all of its data acquisition, processing, and decision making is done on a single Raspberry Pi, as 
            compared to most systems which use intermediate microcontrollers for data collection. The movement controls system is a standard 
            multi-PID control system, with separate PID gains for yaw, pitch, depth, and forward/backward distance. 
          </p>
          <br />
        </Tab>

        <Tab className="sub-cs-container" eventKey="CS" title="Software">
          <p className="sub-p">
            DONPHAN’s software architecture is split into modules. The mission planning module is responsible for monitoring data from 
            all of the sensors as well as the computer vision module. It then decides the actions the submarine will take, depending on 
            what objects it has seen as well as what tasks it has yet to complete, and sends the appropriate commands to the controls 
            system. 
          </p>
          <p className="sub-p">
            The state machine is responsible for the monitoring of sensors, tracking of specified tasks, and execution of task related 
            activities. It is based on a loop of searching for an uncompleted task, approaching the task, executing the task, and 
            disengaging/tracking completed tasks. Each state is responsible for obtaining relevant data from the sensor modules, as well
            as controlling the submarine. Each approach and execution state is unique to the task, allowing the programming and testing of
            a specific task without the need to have the entire state machine running. It also allows for setting a time limit on tasks, 
            allowing the submarine to move on if the task takes too long to complete. The modularity of this system will allow for greater 
            reuse of code, as well as faster modifications without disturbing the function of other task states.
          </p>
          <p className="sub-p">
            The computer vision system on Donphan is a simple OpenCV Haar Cascade system. It was trained on several photos taken of the 
            competition objects and can successfully classify several of the objects. 
          </p>
          <Image
            className="sub-img-s"
            src={
              process.env.PUBLIC_URL + "/images/subs/donphan/donphan4.png"
            }
          ></Image>
          <Image
            className="sub-img-s"
            src={
              process.env.PUBLIC_URL + "/images/subs/donphan/donphan5.png"
            }
          ></Image>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Donphan;
