import React from "react";
import {
  Row,
  Figure,
  Container,
  Jumbotron,
  Accordion,
  Button,
  Card,
} from "react-bootstrap";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <>
      <Container className="holder">
        <section className="header header-one">
          <h1 className="resources-section-h1 first-header">
            Welcome Members & RoboSub Teams
          </h1>

          <p className="resources-section-p text-one">
            Here at <span className="accent-color">RoboSub LA </span> we are
            passionate about Robotics and we want to share what we know with our
            community of Robotic enthusiast.
          </p>
        </section>

        <section className="header">
          <h1 className="resources-section-h1 second-header">
            <span className="robosub-accent-color second-sub-header">
              RoboSub International Competition
            </span>
          </h1>
        </section>

        <section className="header-two">
          <h3 className="resources-section-h3 sub-header">What is RoboSub?</h3>
          <p className="resources-section-p">
            RoboSub is an international student competition. Student teams from
            around the world design and build robotic submarines, otherwise
            known as Autonomous Underwater Vehicles (AUV). The behaviors
            demonstrated by these experimental AUVs mimics those of real-world
            systems, currently deployed around the world for underwater
            exploration, seafloor mapping, and sonar localization, amongst many
            others.
          </p>

          <h3 className="resources-section-h3 sub-header">The Competition</h3>
          <p className="resources-section-p">
            Assemble your team and get busy designing, building and testing the
            sub-systems of your AUV. Now put it all together and demonstrate
            your vehicles autonomy by completing a series of tasks through a
            pre-defined mission.
          </p>
        </section>

        <section className="header">
          <h3 className="resources-section-h3 sub-header">Rules and Task</h3>
          <div className="row row-holder">
            <div className=" col col-sm rowOneColOne">
              <a
                className="getstarted-a"
                href="https://robonation.org/app/uploads/sites/4/2021/03/Skills-Video_RoboSub21-Online_V1.pdf"
              >
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://robonation.org/app/uploads/sites/4/2019/10/robosub-logo_vert.png"
                />
                <Figure.Caption className="getstarted-cap">
                  <br></br>
                  <br></br>
                  RoboSub 2021 Skills Video
                </Figure.Caption>
              </a>
            </div>

            <div className=" col col-sm rowOneColTwo">
              <a
                className="getstarted-a"
                href="https://robonation.org/app/uploads/sites/4/2021/03/Technical-Design-Report_RoboSub21-Online_V1.pdf"
              >
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://robonation.org/app/uploads/sites/4/2021/03/tdr-icon_RS21.svg"
                />
                <Figure.Caption className="getstarted-cap">
                  <br></br>
                  <br></br>
                  Design Report
                </Figure.Caption>
              </a>
            </div>

            <div className="col col-sm rowOneColThree">
              <Figure className="getstarted-figure">
                <a
                  className=""
                  href="https://robonation.org/app/uploads/sites/4/2022/01/2022-RoboSub_Team-Handbook_v1.0.pdf"
                >
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://robonation.org/app/uploads/sites/4/2019/10/robosub-logo_vert.png"
                  />
                  <Figure.Caption className="getstarted-cap">
                    <br></br>
                    <br></br>
                    2022 RoboSub Handbook
                  </Figure.Caption>
                </a>
              </Figure>
            </div>

            <div className="col col-sm rowOneColFour">
              <Figure className="getstarted-figure">
                <a
                  className="getstarted-a"
                  href="https://robonation.org/app/uploads/sites/4/2021/03/Technical-Design-Report_RoboSub21-Online_V1.pdf"
                >
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://robonation.org/app/uploads/sites/4/2021/03/tdr-icon_RS21.svg"
                  />
                  <Figure.Caption className="getstarted-cap">
                    Technical Design Report
                  </Figure.Caption>
                </a>
              </Figure>
            </div>
          </div>
        </section>

        {/* <h3 className="resources-section-h3 sub-header">Rules and Task</h3>

          <Row id="figure-getstarted">
            <Figure className="getstarted-figure">
              <a
                className=""
                href="https://robonation.org/app/uploads/sites/4/2022/01/2022-RoboSub_Team-Handbook_v1.0.pdf"
              >
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://robonation.org/app/uploads/sites/4/2019/10/robosub-logo_vert.png"
                />
                <Figure.Caption className="getstarted-cap">
                  <br></br>
                  <br></br>
                  2022 RoboSub Handbook
                </Figure.Caption>
              </a>
            </Figure>

            <Figure className="getstarted-figure">
              <a
                className="getstarted-a"
                href="https://robonation.org/app/uploads/sites/4/2021/03/Skills-Video_RoboSub21-Online_V1.pdf"
              >
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://robonation.org/app/uploads/sites/4/2021/03/video-icon_RS21.svg"
                />
                <Figure.Caption className="getstarted-cap">
                  Skills Video
                </Figure.Caption>
              </a>
            </Figure>

            <Figure className="getstarted-figure">
              <a
                className="getstarted-a"
                href="https://robonation.org/app/uploads/sites/4/2021/03/Technical-Design-Report_RoboSub21-Online_V1.pdf"
              >
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://robonation.org/app/uploads/sites/4/2021/03/tdr-icon_RS21.svg"
                />
                <Figure.Caption className="getstarted-cap">
                  Technical Design Report
                </Figure.Caption>
              </a>
            </Figure>
          </Row>
        </Container>
        <Container> */}

        <section className="header header-three">
          <h1 className="resources-section-h1 third-header">
            <span className="accent-color third-sub-header">
              RoboSub LA Team
            </span>
          </h1>
          <p className="resources-section-p">
            Our team is split up into two project teams, the student
            organization and the senior design team. The senior design team
            builds one vehicle, and the club members build a separate vehicle
            while being mentored by senior design members. Both vehicles are
            intended for use in the competition and strategies will be carefully
            considered based on the capabilities of both vehicles. Members have
            the opportunity to design advanced robotics systems and work on an
            interdisciplinary project to gain experience working with a team.
            Please see the progress tab for a better idea of what our members
            are working on and what tasks and projects are available to new
            members
          </p>
        </section>

        <section className="header header-four">
          <h3 className="resources-section-h3">Team Breakdown Subteams:</h3>
          <div className="row row-holder">
            <div className=" col col-sm rowOneColOne">
              <Accordion>
                <Card className="getstarted-card">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Frame and Hull
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="getstarted-card-p">
                      The Frame and Hull team is responsible for making the
                      actual design of the AUV itself. The hull and frame of the
                      sub are the physical components of the AUV, which the
                      mechanical engineering team will be responsbile for
                      making.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>

            <div className=" col col-sm rowOneColTwo">
              <Accordion>
                <Card className="getstarted-card">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
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

            <div className="col col-sm rowOneColThree">
              <Accordion>
                <Card className="getstarted-card">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Electronics
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body className="getstarted-card-p">
                      The Electronics or Power subteam is responsible primarily
                      on the management of internal current conversion from the
                      battery to all of the other electronic parts in the
                      robotic submarine. The team creates schematics for the
                      functionality of buck converters (converters that are able
                      to efficiently let high voltage convert into low voltages
                      in order to extend battery life and reduce heat. In turn,
                      this has allowed many smaller appliances to spring into
                      everyday use.)
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>

            <div className="col col-sm rowOneColFour">
              <Accordion>
                <Card className="getstarted-card">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                      Controls
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body className="getstarted-card-p">
                      The Controls Team is responsible for making the AUV
                      respond to movement instructions. Because the AUV is
                      autonomous, the controls won't be manually operated by any
                      person, but there will usually still be a GUI that either
                      the Controls subteam or another computer science subteam
                      must make, in order to debug the code and test the
                      controls.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>

            <div className="col col-sm rowOneColFive">
              <Accordion>
                <Card className="getstarted-card">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                      Autonomy
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body className="getstarted-card-p">
                      The Autonomy team is responsible for writing the state
                      machine of the AUV. The state machine determines what the
                      AUV is doing at any time, and it's very important when
                      deciding what to do next. For example, an AUV might have a
                      state that tells it to follow a path. In this state, the
                      AUV will continue to follow this path until the state is
                      changed. Basically, the state machine determines when the
                      AUV should transition to this state, when it should stick
                      to this state, and when it should transition to another
                      state. If the AUV has reached the end of a path, then
                      something has to be called by the state machine to tell
                      the AUV to transition to the next state, which might tell
                      the AUV to stop or do another task, depending on what the
                      competition wants the AUV to do.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="col col-sm rowOneColSix">
              <Accordion>
                <Card className="getstarted-card">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                      Computer Vision
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body className="getstarted-card-p">
                      The Computer Vision team is responsible for making the AUV
                      recognize objects with its camera. So, one of the most
                      important tasks of the CV team is object detection, which
                      can be done with software. This year YOLO (You only look
                      once) will be used for the CV software. YOLO is a machine
                      learning (deep learning) algorithm that is used in object
                      detection.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default GetStarted;
