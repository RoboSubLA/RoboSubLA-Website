import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

import "./Magikarp.css";

const Magikarp = () => {
  return (
    <div className="sub-container">
      <h1 className="sub-header"> MAGIKARP 2018-2019</h1>

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

          <Carousel className="carousel-container" fade>
            <Carousel.Item>
              <img
                className="carousel-images"
                src={
                  process.env.PUBLIC_URL +
                  "/images/subs/magikarp/magikarpteampic.jpg"
                }
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-images"
                src={
                  process.env.PUBLIC_URL + "/images/subs/magikarp/magikarp.png"
                }
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Tab>

        <Tab className="sub-me-container" eventKey="ME" title="Mechanical">
          <Image
            className="sub-img"
            src={process.env.PUBLIC_URL + "/images/subs/magikarp/magikarp.png"}
          ></Image>
          <p className="sub-p">
            ​ Magikarp's frame was designed on a small budget. It is made of
            waterjetted polycarbonate sheets with t-slot aluminum rails for
            structure. Magikarp has two 4" acrylic waterproof enclosures: the
            bottom enclosure houses the battery and camera, while the top
            enclosure houses the electronics. The bottom enclosure features a
            clear dome endcap for the camera, and all other endcaps have
            penetrators for feeding through wires for peripherals.
          </p>
          <br />
          <Image
            className="sub-img"
            src={
              process.env.PUBLIC_URL + "/images/subs/magikarp/magikarpframe.png"
            }
          ></Image>
          <p className="sub-p">
            ​ Magikarp did not have any actuated systems, and was thus incapable
            of completing the claw, torpedo, and dropper tasks.
          </p>
          <br />
          <Image
            className="sub-img"
            src={
              process.env.PUBLIC_URL +
              "/images/subs/magikarp/magikarpframe2.jpg"
            }
          ></Image>
          <Image
            className="sub-img"
            src={
              process.env.PUBLIC_URL +
              "/images/subs/magikarp/magikarpframe3.jpg"
            }
          ></Image>
        </Tab>

        <Tab className="sub-ee-container" eventKey="EE" title="Electrical">
          <Image
            className="sub-img"
            src={
              process.env.PUBLIC_URL +
              "/images/subs/magikarp/magikarpelectricalboard.jpg"
            }
          ></Image>
          <p className="sub-p">
            ​The electrical system on Magikarp is very minimal. It consists of a
            thruster ESC board that handles the kill switch and signals/power to
            the thrusters, an arduino board running the stabilization
            controllers, a LattePanda computer for ROS and computer vision, a
            sensor suite, and a buck converter for stepping down voltage from
            the batteries for the computer and microcontroller. Its sensor suite
            included a camera, an IMU, and a barometer. The stabilization
            controller on Magikarp is a simple PID system, with a set of gains
            that apply to yaw, pitch, and roll, collectively, and a separate set
            of gains for depth control. The entire submarine is powered by a
            single 10Ah, 14.8V LiPo battery.{" "}
          </p>
        </Tab>

        <Tab className="sub-cs-container" eventKey="CS" title="Software">
          <p className="sub-p">
            Since Magikarp is only equipped with two devices that can
            communicate (the motherboard and an Arduino board), the ROS
            architecture on the motherboard consists of only 3 nodes - a
            computer vision node, a movement command node, and the Arduino node
            that outputs signals to the motors. During the competition, Magikarp
            did not have object detection capabilities, so only two nodes were
            used for movement commands.{" "}
          </p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Magikarp;
