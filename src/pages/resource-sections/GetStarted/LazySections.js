import React from "react";
import { Figure, Accordion, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faFileAlt,
  faBook,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

const LazySections = ({ activeKey, handleToggle }) => (
  <>
    <section className="header-background">
      <h1 className="resources-section-h1 second-header ">
        <span className="robosub-accent-color second-sub-header outline">
          RoboSub International Competition
        </span>
      </h1>
    </section>

    <section className="header-two">
      <h3 className="resources-section-h3 sub-header">What is RoboSub?</h3>
      <p className="resources-section-p">
        RoboSub is an international student competition. Student teams from
        around the world design and build robotic submarines, otherwise known as
        Autonomous Underwater Vehicles (AUV). The behaviors demonstrated by
        these experimental AUVs mimics those of real-world systems, currently
        deployed around the world for underwater exploration, seafloor mapping,
        and sonar localization, amongst many others.
      </p>
      <h3 className="resources-section-h3 sub-header">The Competition</h3>
      <p className="resources-section-p">
        Assemble your team and get busy designing, building and testing the
        sub-systems of your AUV. Now put it all together and demonstrate your
        vehicles autonomy by completing a series of tasks through a pre-defined
        mission.
      </p>
    </section>

    <section className="header accordian-holder">
      <h3 className="resources-section-h3 sub-header">Rules and Task</h3>
      <div className="row row-holder">
        <div className="col col-sm rowOneColOne">
          <a
            className="getstarted-a"
            href="https://robonation.org/app/uploads/sites/4/2021/03/Skills-Video_RoboSub21-Online_V1.pdf"
          >
            <FontAwesomeIcon icon={faVideo} size="6x" />
            <Figure.Caption className="getstarted-cap">
              <br></br>
              RoboSub 2021 Skills Video
            </Figure.Caption>
          </a>
        </div>
        <div className="col col-sm rowOneColTwo">
          <a
            className="getstarted-a"
            href="https://robonation.org/app/uploads/sites/4/2021/03/Technical-Design-Report_RoboSub21-Online_V1.pdf"
          >
            <FontAwesomeIcon icon={faFileLines} size="6x" />
            <Figure.Caption className="getstarted-cap">
              <br></br>
              Design Report
            </Figure.Caption>
          </a>
        </div>
        <div className="col col-sm rowOneColThree">
          <a
            className="getstarted-a"
            href="https://robonation.org/app/uploads/sites/4/2022/01/2022-RoboSub_Team-Handbook_v1.0.pdf"
          >
            <FontAwesomeIcon icon={faBook} size="6x" />
            <Figure.Caption className="getstarted-cap">
              <br></br>
              2022 RoboSub Handbook
            </Figure.Caption>
          </a>
        </div>
        <div className="col col-sm rowOneColFour">
          <a
            className="getstarted-a"
            href="https://robonation.org/app/uploads/sites/4/2021/03/Technical-Design-Report_RoboSub21-Online_V1.pdf"
          >
            <FontAwesomeIcon icon={faFileAlt} size="6x" />
            <Figure.Caption className="getstarted-cap">
              <br></br>
              Technical Design Report
            </Figure.Caption>
          </a>
        </div>
      </div>
    </section>

    <section className="header header-three">
      <h1 className="resources-section-h1 third-header">
        <span className="accent-color third-sub-header">RoboSub LA Team</span>
      </h1>
      <p className="resources-section-p">
        Our team consists of two project groups: the student organization and
        the senior design team. The senior design team builds one vehicle, while
        club members build another, mentored by senior design members. Both
        vehicles are used in competitions, with strategies tailored to their
        capabilities. Members gain experience in advanced robotics and
        interdisciplinary teamwork. Check the progress tab for current projects
        and tasks.
      </p>
    </section>

    <section className="header header-four">
      <h3 className="resources-section-h3">Team Breakdown Subteams:</h3>
      <div className="card-holder">
        <div className="row row-holder accordion-row-holder">
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Accordion activeKey={activeKey}>
              <Card className="getstarted-card">
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="0"
                    className="button"
                    onClick={() => handleToggle("0")}
                  >
                    Frame and Hull
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="getstarted-card-p">
                    The Frame and Hull team is responsible for making the actual
                    design of the AUV itself. The hull and frame of the sub are
                    the physical components of the AUV, which the mechanical
                    engineering team will be responsbile for making.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Accordion activeKey={activeKey}>
              <Card className="getstarted-card">
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="1"
                    className="button"
                    onClick={() => handleToggle("1")}
                  >
                    Actuated Systems
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="getstarted-card-p">
                    The Actuated Systems team is responsible for designing and
                    manufacturing the claw, ball dropper, and torpedo systems.
                    Students focus on kinematics, finite element analysis, and
                    computational fluid dynamics.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Accordion activeKey={activeKey}>
              <Card className="getstarted-card">
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="2"
                    className="button"
                    onClick={() => handleToggle("2")}
                  >
                    Electronics
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="getstarted-card-p">
                    The Electronics or Power subteam manages internal current
                    conversion from the battery to other electronic parts. They
                    create schematics for buck converters, which efficiently
                    lower high voltage to extend battery life and reduce heat,
                    enabling everyday use of smaller appliances.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Accordion activeKey={activeKey}>
              <Card className="getstarted-card">
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="3"
                    className="button"
                    onClick={() => handleToggle("3")}
                  >
                    Controls
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body className="getstarted-card-p">
                    The Controls Team ensures the AUV responds to movement
                    instructions autonomously. They often create a GUI to debug
                    and test the controls.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Accordion activeKey={activeKey}>
              <Card className="getstarted-card">
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="4"
                    className="button"
                    onClick={() => handleToggle("4")}
                  >
                    Autonomy
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body className="getstarted-card-p">
                    The Autonomy team’s state machine directs the AUV's actions
                    and state transitions. When the AUV finishes a task, the
                    state machine triggers the next action based on competition
                    requirements.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Accordion activeKey={activeKey}>
              <Card className="getstarted-card">
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="5"
                    className="button"
                    onClick={() => handleToggle("5")}
                  >
                    Computer Vision
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body className="getstarted-card-p">
                    The Computer Vision team enables the AUV to recognize
                    objects using its camera. This year, they'll use the YOLO
                    (You Only Look Once) deep learning algorithm for object
                    detection.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default LazySections;
