import React from "react";
import {Tabs, Tab, Table, Image, Carousel }from "react-bootstrap";

import "./Gyarados.css";

const Gyarados = () => {
  return (
    <div className="sub-container">
      {/* <Image src={process.env.PUBLIC_URL + '/images/subs/gyarados/gyarados.png'}></Image> */}
      <h1 className="sub-header"> GYARADOS 2018-2019</h1>

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
                  "/images/subs/gyarados/gyaradosteampic.jpg"
                }
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-images"
                src={
                  process.env.PUBLIC_URL + "/images/subs/gyarados/gyarados.png"
                }
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-images"
                src={
                  process.env.PUBLIC_URL +
                  "/images/subs/gyarados/gyaradosframe.png"
                }
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-images"
                src={
                  process.env.PUBLIC_URL +
                  "/images/subs/gyarados/gyaradoscadhull.png"
                }
                alt="Fourth slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-images"
                src={
                  process.env.PUBLIC_URL +
                  "/images/subs/gyarados/gyaradoscrane.jpg"
                }
                alt="Fifth slide"
              />
            </Carousel.Item>
          </Carousel>
        </Tab>

        <Tab className="sub-me-container-gyarados" eventKey="ME" title="Mechanical">
          <Image
            className="sub-img-gyarados"
            src={process.env.PUBLIC_URL + "/images/subs/gyarados/gyarados.png"}
          ></Image>
          <p className="sub-p">
            ​ Gyarados consists of a mechanical frame and hull, as well as a
            servo controlled mechanical arm, torpedoes, and dropper
            mechanism.The frame consists of waterjet and anodized aluminum,
            along with 3D printed brackets for mounting waterproof enclosures,
            thrusters, and the DVL. The frame includes 4 aluminum t-slot rails
            that are used as corner brackets for mounting together the
            baseplates and the sides. The rails duly function as a mounting
            point for the other sub-systems.
          </p>
          <br />
          <Image
            className="sub-img-gyarados"
            src={
              process.env.PUBLIC_URL + "/images/subs/gyarados/gyaradosframe.png"
            }
          ></Image>
          <p className="sub-p">
            ​ The waterproof hull was manufactured in 2018 and consists of two
            8" diameter acrylic tubes connected to a custom machined aluminum
            bulkhead. The bulkhead contains 18 SEACON connectors for electrical
            interfacing. On each end are aluminum endcaps, and several 3D
            printed parts are used on the hull for mounting latches. The latches
            serve as an extra degree of leakage protection, in addition to the
            double o-ring seals on either side of the bulkhead. The tubes on
            each end of the sub can be removed from the bulkhead, leaving the
            electronics stack exposed. Gyarados hull: ​Two 4" diameter acrylic
            tubes are also present on either end of the submarine to serve as
            the waterproof enclosures for the cameras and batteries.
          </p>
          <br />
          <Image
            className="sub-img-gyarados"
            src={
              process.env.PUBLIC_URL +
              "/images/subs/gyarados/gyaradosinsidehull.png"
            }
          ></Image>
          <Image
            className="sub-img-gyarados"
            src={
              process.env.PUBLIC_URL +
              "/images/subs/gyarados/gyaradosinside.png"
            }
          ></Image>
          <p className="sub-p">
            In 2018, the electronics shelving was a simple acrylic shelving
            system held together by nuts and bolts. In 2019, this shelving
            system was redesigned to consist of a custom manufactured aluminum
            flange for the inside of the bulkhead and 6061 t-slot aluminum to
            hold acrylic sheets in place to serve as shelves. These shelves
            utilized more of the available space inside the hull, allowing the
            addition of extra electronic components for Gyarados' second year
            competing. The updated shelving is shown below.
          </p>
          <br />

          <p className="sub-p">
            ​Gyarados did not feature a working claw or dropper, but its torpedo
            system was functional.The torpedo system was a servo mechanism that
            would launch the torpedo on command. The team waterproofed its own
            servo motors using several commercially available products.
          </p>
          <Image
            className="sub-img-gyarados"
            src={
              process.env.PUBLIC_URL + "/images/subs/gyarados/gyaradosclaw.png"
            }
          ></Image>
          <br />
          <p className="sub-p">
            ​While it was unsuccessful, the 2019 team worked on the development
            of a mechanical claw with a small waterproof enclosure for a linear
            actuator and a dynamic o-ring seal. The waterproofing of this system
            failed, but the system was functional outside of water. Future
            systems opted to waterproof the servos/actuators themselves rather
            than creating enclosures, since waterproofing a shaft opening is
            difficult and prone to failure. The team is still investigating ways
            to create waterproof enclosures for servo motors and actuators.
          </p>
        </Tab>

        <Tab className="sub-ee-container-gyarados" eventKey="EE" title="Electrical">
          <Image
            className="sub-img-gyarados"
            src={
              process.env.PUBLIC_URL +
              "/images/subs/gyarados/gyaradoselectricaldiagram.png"
            }
          ></Image>
          <p className="sub-p">
            ​The electrical system on the 2019 version of Gyarados features more
            custom electronics than on Eagle I, allowing for more efficient use
            of hull space. Custom PCBs include a thruster ESC board, a power
            distribution board, a battery shutoff board, and a servo control
            board. In addition, the 2018 vehicle featured a low pass filter
            circuit for hydrophones noise reduction and a custom control board.
            These were later removed from the design. Below is the
            communications network on the submarine. The sensors shown include
            an IMU, barometer, hydrophones, DVL, and cameras.
          </p>

          <br />

          <Image
            className="sub-img-gyarados"
            src={
              process.env.PUBLIC_URL +
              "/images/subs/gyarados/gyaradospowerboard.jpg"
            }
          ></Image>
          <p className="sub-p">
            ​The thruster control board, shown to the top, has relays, fuses and
            ESCs, and serves to provide power and PWM signals to the thrusters
            after the controllers have provided the proper PWM signals to the
            thruster board. The thruster board uses fuses to protect individual
            thrusters from overcurrent, provides easily accessible connectors
            for signal/power connections on each thruster, and has a kill switch
            relay, allowing us to power the motors off at any time.
          </p>

          <br />

          <p className="sub-p">
            The custom control board (shown below) incorporates custom circuits
            that are capable of adding different functions to the AUV without
            compromising space within the hull. Control boardThe servo board
            connects to the control board via one of its expansion slots. The
            servo expansion card (shown below) can control and power up to 16
            servo motors and 5 actuators simultaneously. The reasoning behind
            this board is because we intended to have several actuated systems,
            such as a claw, dropper, and torpedoes, that all function off of
            servos and actuators.
          </p>
          <Image
            className="sub-img-gyarados"
            src={
              process.env.PUBLIC_URL +
              "/images/subs/gyarados/gyaradoscustomboard.png"
            }
          ></Image>
          <br />

          <p className="sub-p">
            ​Within the AUV, there are several electronics that need regulated
            power from the batteries; hence the need for a power distribution
            board. The power board is coupled with a low voltage automatic
            shutdown board, which means that if the battery goes below a certain
            voltage, the board will stop providing power to the electronics
            automatically. The board also features short circuit protection.
            Below, the automatic shutoff board is seen on the left, and the
            power distribution board is depicted on the right.
          </p>
          <Image
            className="sub-img-gyarados"
            src={
              process.env.PUBLIC_URL +
              "/images/subs/gyarados/gyaradosblockdiagram.png"
            }
          ></Image>
          <Image
            className="sub-img-gyarados"
            src={
              process.env.PUBLIC_URL + "/images/subs/gyarados/gyaradosboard.png"
            }
          ></Image>
          <br />
        </Tab>

        <Tab className="sub-cs-container" eventKey="CS" title="Software">
          <Image
            className="sub-img-gyarados"
            src={
              process.env.PUBLIC_URL +
              "/images/subs/gyarados/gyaradossoftwarediagram.png"
            }
          ></Image>
          <p className="sub-p">
            ​In the ROS architecture running on the Gyarados motherboard,
            different nodes are used to control different parts of the vehicle.
            These nodes communicate with each other through ROS; each node can
            have several publishers and subscribers based on the function of the
            node. Each Arduino board on the sub is a node that interfaces with
            the hardware. The computer vision node is isolated for modularity.{" "}
          </p>
          <br />

          <p className="sub-p">
            Object detection is handled by the computer vision node, which uses
            OpenCV for preprocessing and detection. First, the images are
            labelled, then features are extracted using HOG. These images are
            then used for training the real-time object detection system.
            Real-time detection is based on image frames from a video feed that
            are preprocessed, ROI determined, then classified. These
            classifications are used to decide which movements the submarine
            should take.{" "}
          </p>
          <br />
          <Carousel fade>
            <Carousel.Item>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/subs/gyarados/gyaradoscv1.png"
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Filtering Out Color</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/subs/gyarados/gyaradoscv2.png"
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Finding Contours</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/subs/gyarados/gyaradoscv3.png"
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Before Machine Learning</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/subs/gyarados/gyaradoscv4.png"
                }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>After Applying ML</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Gyarados;
