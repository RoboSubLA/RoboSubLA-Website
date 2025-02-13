import React from "react";
import {
  Tabs,
  Tab,
  Jumbotron,
  Image,
  Carousel,
  Row,
  Figure,
  Col,
  Container,
} from "react-bootstrap";
import Typical from "react-typical";
import "./Lanturn.css";
import GroupSection from "../../../components/GroupSection";

const Lanturn = () => {
  let obj = require("../../../assets/members.json");
  let json = obj[Object.keys(obj)[0]];
  return (
    <div className="sub-outmost-container">
      <p className="sub-name"> LANTURN </p>
      <Tabs
        defaultActiveKey="team"
        className="sub-tabs"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="team" title="Team">
          <Jumbotron className="sub-team-jumbo">
            <Container>
              <GroupSection heading="The Team" list={json.seniordesign} />
              <GroupSection heading="Advisors" list={json.advisors} />
            </Container>
          </Jumbotron>
        </Tab>

        <Tab eventKey="ME" title="Mechanical">
          <Jumbotron className="sub-jumbo">
            {/* 2020-2021 */}
            <div className="sub-container">
              <p className="sub-year">
                Year:{" "}
                <Typical
                  className="sub-year-animated"
                  steps={["2020-2021", 5000, "", 2000]}
                  loop={Infinity}
                  wrapper="b"
                />
              </p>

              <Row>
                {/* Frame and Haul */}
                <Col>
                  <p className="sub-h1">FRAME & HULL</p>
                  <Row className="sub-row-imgs">
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/lanturntopview.png "
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/lanturnframe.png "
                    />
                  </Row>
                  <p className="sub-p">
                    The hull is comprised of welded 6061-T6 Aluminum sheets with latches being made of
                    300 series SS Brass and the viewports made of Acrylic. Materials were chosen by last year's team
                    for their corrosive resistance, machinability, cost, and weight. The design of the hull was also
                    carried over from last year’s team which features a box-like design to allow ease of access for the
                    electronics inside.
                    23
                    The design of the hull was verified using SolidWorks’ static-stress analysis. The deepest
                    the Robo-sub will have to go is 16 feet or 5 meters which corresponds to a pressure of 49,000
                    Pascal. 0.21 in weld beads were added to the SolidWorks model. 0.21 in were found by last year's
                    team to be the most optimal. The factor of safety found was 1.1 needed to be improved. Figure 16
                    shows the stress analysis and in red shows areas with the highest stress are the corners of the stop
                    top sheet. Modifications will need to be focusing on the corners to increase factor of safety, while
                    not interfering with the lid and not increasing the weight by a considerable amount.
                  </p>

                    <Carousel fade className='sub-carousel'>
                      <Carousel.Item interval={5000}>
                        <p className='sub-carousel-title'>Hull Stress Test</p>
                        <img
                          className='sub-carousel-img'
                          src="./images/subs/lanturn/2021lanturnstresstest.png"
                          alt="First slide"
                        />
                        <p className="sub-p">The first adjustment done was increasing the top sheet’s thickness from 1/8th in to 3/16th
                          in. This increased the factor of safety to 1.3 which while better can still be improved. The next
                          adjustment was extending outwards the top sheet by 0.2 in. Figure 17 - Extension of the top sheet
                          shows what the extension will look like. Extending increased the factor of safety to 1.9 in both
                          increasing thickness and the extension the max stress stayed in the same area as seen in Figure 16.
                        </p>
                      </Carousel.Item>

                      <Carousel.Item interval={5000}>
                        <p className='sub-carousel-title'>Frame</p>
                        <img
                          className='sub-carousel-img'
                          src="./images/subs/lanturn/lanturnframe.png"
                          alt="First slide"
                        />
                        <p className="sub-p">
                          The frame for Lanturn is divided into two main parts as shown in Figure 23. The top section
                          is made up of 5 quarter inch bars and the bottom is composed of 15 eighth inch slots. The top and
                          bottom sections are held together by female threaded round standoffs. This design was chosen due
                          to its strength and the availability to easily attach the actuator systems and other components to it.
                          Moreover, its use of t-slots on the sides allows for 8 thrusters to be connected to the frame from
                          its four corners. Production was not completed. The bars and slots that make up the top section
                          and undercarriage of the frame have been fabricated. However, standoffs and their appropriate
                          screws are needed to fully assemble the frame. Moreover, the CAD of the t-slot was altered to an
                          extruded t-slot which gives access to mounting points for handlebars. The t-slot will serve to also
                          30
                          join the frame to the hull. An aluminum bracket is to be welded onto the lower body of the hull
                          and will attach to the frame with a latch.
                        </p>
                      </Carousel.Item>

                      <Carousel.Item interval={5000}>
                        <p className='sub-carousel-title'>Thermal Model Simulation </p>
                        <img
                          className='sub-carousel-img'
                          src="./images/subs/lanturn/2021lanturnthermals.png"
                          alt="Second slide"
                        />
                      </Carousel.Item>

                      <Carousel.Item interval={5000}>
                        <p className='sub-carousel-title'>Thermal Model Simulation: Flow Trajectories</p>
                        <img
                          className='sub-carousel-img'
                          src="./images/subs/lanturn/2021lanturnthermalflow.png"
                          alt="Third slide"
                        />
                      </Carousel.Item>

                  </Carousel>
                </Col>
              </Row>

              <Row>
                {/* Actuated Systems */}
                <Col>
                  <h1 className="sub-h1">ACTUATED SYSTEMS</h1>
                      <Carousel fade className='sub-carousel'>
                        <Carousel.Item interval={5000}>
                          <p className='sub-carousel-title'>Torpedo System</p>
                          <img
                            className='sub-carousel-img'
                            src="./images/subs/lanturn/2021lanturnTorpedo.gif"
                            alt="First slide"
                          />
                          <p className="sub-p">
                            The torpedo design was an amazingly uncomplicated design its base off a rocket and fins
                            added to prevent deviation from path after being launch. We just need to follow a few dimensions’
                            limitation given out by the competition. The torpedo has the same dimensions’ limitation as the
                            marker which was must able to fit within a 5.1 x 5.1 x 15.2 cm3
                            . We have not been able to test the
                            torpedo system due to our inability to meet in person. Lucky with the use of fluid simulation in
                            SolidWorks and we were able to use it simulate the flow as if the torpedo were going through
                            water. We ended up with drag coefficient of 0.33.
                          </p>

                          <img
                            className='sub-carousel-img'
                            src="./images/subs/lanturn/2021lanturntopedodrag.gif"
                            alt="First slide"
                          />

                          <img
                            className='sub-carousel-img'
                            src="./images/subs/lanturn/2021lanturnTorpedoTrajectoryGraph.png"
                            alt="First slide"
                          />
                          <p className="sub-p">
                            With this information using the spring force given by the compressed spring, camera
                            location relative to the launcher and Torpedo’s dimension and weight, we were able to calculate
                            the torpedo trajectory as if underwater, which would help completing the mission.
                          </p>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                          <p className='sub-carousel-title'>Dropper System</p>
                          <img
                            className='sub-carousel-img'
                            src="./images/subs/lanturn/2021lanturndropper.png"
                            alt="First slide"
                          />
                          <p className="sub-p">
                            The purpose of the torpedo launcher is to launch a projectile at a target successfully to score
                            points. Therefore, the launcher needs to be waterproof and capable of launching a relatively quick
                            projectile underwater. The torpedo launcher design is based off a spring compression system, using
                            a servo motor that is attached to a sheet metal that opens and closes to control the launch. The base
                            will be 3D printed with ABS filament provided by the school. The torpedo launcher interior will
                            use two stainless steel compression springs and will be consist of a stainless-steel rod inside the
                            spring. The previous year’s Senior Design team did not come up with designs for the actuated
                            systems. They had a problem with waterproofing the servo while this year a possible solution was
                            found, and it was the HS-5086 waterproof servo. Even though we have not able to test the servo
                            ourselves we were able to get that data from the Cal Tech pervious team where they had used this
                            servo in their RoboSub and had extensive testing.
                          </p>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                          <p className='sub-carousel-title'>Claw System</p>
                          <img
                            className='sub-carousel-img'
                            src="./images/subs/lanturn/2021lanturnclaw.png"
                            alt="First slide"
                          />
                          <p className="sub-p">
                            The purpose of the grabber system is to pick up and move objects underwater to obtain
                            points in the competition. As Robosub is a multi-year and multi-team project the team looked at
                            35
                            what was left for us in terms of the grabber design. We found that the design left was a placeholder
                            which meant a new design needed to be made from scratch. The most common actuators used for
                            the grabber system are linear actuators and servo motors. Originally a linear actuated design was
                            to be made using an electrical piston, although due to experience with the 2018 vehicle Gyrados,
                            we found waterproofing the design would be much more difficult compared to our current servo
                            motor grabber.
                            The design will operate using two waterproof servo motor, HS-646 WP, to move both the
                            claw and arm. The grabber design uses a combination of 3D printed parts and aluminum materials.
                            In Figure 29 the white components of the model represent 3D parts, while the gray components
                            are aluminum. The arm is made with two parallel aluminum sheets which are connected by
                            aluminum linkages and tightened with hex nuts. A servo horn will be connected to the gears of the
                            motor to have a larger surface area to better distribute the pressure created when moving the claw
                            and/or arm. Furthermore, the servo horn functions to connect the arm and claw to the motor at
                            multiple points providing better support and motion.
                          </p>

                          <p className="sub-p">
                            This design also allows for further improvements/modulation to be made as the blue mini
                            grippers shown in Figure 30 can be swapped to better grab objects dependent on the objects chosen
                            for the given year. The arm is also able to support multiple servo motors to allow multiple axis of
                            freedom for more precise adjustments when grabbing objects. The servo motor will be controlled
                            by an Arduino which will send PWM signals. The grabber design was made with the historical
                            criteria for the dimensions of the objects in the competition ranging in diameter from 2 inches to
                            0.5 inches and predominantly being cylindrical. At the depths of the competition which is 5 meters
                            (16.4 feet) the grabber will experience pressure of 7.11 psi. Under these specifications the grabber
                            will have no issues performing its tasks.
                          </p>

                          <img
                            className='sub-carousel-img'
                            src="./images/subs/lanturn/2021lanturnclawmotionAnalysis.png"
                            alt="First slide"
                          />

                          <p className="sub-p">
                            The factor of safety of the grabber while holding objects was found using motion analysis.
                            The objects are based on the object the grabber would need to hold from last competition, the garlic
                            (shown in Figure 5) and crucifix props. Figure 30 shows the motion analysis while holding the
                            crucifix prop and a factor of safety of 1 was found. While holding the garlic prop, the factor of
                            safety was 1.7. The highest stress was found in the holes of the mini-grabbers and that area will
                            need to be focused on to increase factor of safety.
                          </p>
                        </Carousel.Item>
                      </Carousel>

                  {/* {/* <Row className="sub-row-imgs">
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2021lanturnTorpedo.gif"
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2021lanturntopedodrag.gif"
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturndropper.png"
                    />
                  </Row>
                  <p className="sub-p">
                    Indescribable oppression, which seemed to generate in some
                    unfamiliar part of her consciousness, filled her whole being
                    with a vague anguish. It was like a shadow, like a mist
                    passing across her soul's summer day. It was strange and
                    unfamiliar; it was a mood. She did not sit there inwardly
                    upbraiding her husband, lamenting at Fate, which had
                    directed her footsteps to the path which they had taken. She
                    was just having a good cry all to herself. The mosquitoes
                    made merry over her, biting her firm, round arms and nipping
                    at her bare insteps.
                  </p>*/}
                </Col>
              </Row>
            </div>

            {/* 2019-2020 */}
            <div className="sub-container">
              <p className="sub-year">
                Year:{" "}
                <Typical
                  className="sub-year-animated"
                  steps={["2019-2020", 5000, "", 2000]}
                  loop={Infinity}
                  wrapper="b"
                />
              </p>

              <Row>
                {/* Frame and Haul */}
                <Col>
                  <h1 className="sub-h1">FRAME & HAUL</h1>
                  <Row className="sub-row-imgs">
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturninsidehaul.png"
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturnframe.jpg"
                    />
                  </Row>
                  <p className="sub-p">
                    The mechanical design for CSULA’s Lanturn submarine was
                    focused on ease of manufacture and maintenance. Key design
                    features are a box-shaped hull with a removable electronics
                    shelving unit and a frame with slotted mounting points for
                    modular mounting of subassemblies. Lanturn’s hull primary
                    structure is formed by TIG welded sheets of AL 6061-T6. The
                    lid is made of transparent acrylic, and seals to the hull
                    primary structure through a peripheral nitrile gasket
                    compressed by latches. Lanturn is outfitted with forward and
                    downward Lanturn framefacing cameras and features a rear
                    connector plate populated with a standardized set of Seacon
                    connectors. The electronics shelving unit is made of acrylic
                    sheets laser cut to shape/size with equally spaced mounting
                    holes that span each sheet. An internal connector plate and
                    connectorized electronics allow the shelving unit to be
                    unplugged and removed from the hull. 90 degree snapping
                    latches allow the shelves to be laid flat outside of the sub
                    for easy maintenance and troubleshooting.
                  </p>
                </Col>
              </Row>

              <Row>
                {/* Actuated Systems */}
                <Col>
                  <h1 className="sub-h1">ACTUATED SYSTEMS</h1>
                  <Row className="sub-row-imgs">
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturntorpedo.png"
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturnclaw.png"
                    />
                    <Image
                      className="sub-img"
                      src="./images/subs/lanturn/2019lanturndropper.png"
                    />
                  </Row>
                  <p className="sub-p">
                    One design criteria requires that components such as sensors
                    and thrusters be easily added and removed in few steps to
                    minimize time spent on maintenance, in return allocating
                    more time to underwater testing. This requirement was met by
                    creating a modular frame that acts as a hub for mounting
                    components, as shown in the frame image. The design uses a
                    combination of 6061-t6 aluminum t-slot extrusions and flat
                    bars Clawto avoid complex machining, which contributes to
                    ease of scaling if more mounting surfaces are needed.
                    Components are slid into the t-slot fixture brackets then
                    held in place by tightening one or more set screws.In
                    addition to the frame and hull, lanturn features a claw,
                    pneumatic torpedo system, and a DC motor controlled dropper.
                    The claw uses a servo motor to rotate the gears, which are
                    used to open and close the grippers. The grippers hold the
                    objects in place after picking them up. The torpedo system
                    uses a CO2 bucket changer for easy replacement of CO2
                    cartridges, an ASA regulator Dropper​to decrease the CO2
                    pressure to the desired value, a solenoid valve to release
                    the CO2 to launch the torpedo, and the 3D printed torpedoes
                    themselves. The dropper uses a DC motor to rotate the
                    platform 90 degrees at a time to release 3 markers one at a
                    time. The lid is used to replace the markers after each run.{" "}
                  </p>
                </Col>
              </Row>
            </div>
          </Jumbotron>
        </Tab>

        <Tab eventKey="EE" title="Electrical"></Tab>

        <Tab eventKey="CS" title="Software"></Tab>
      </Tabs>
    </div>
  );
};

export default Lanturn;
