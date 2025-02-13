import React from "react";
import "../Linux/Linux.css";
import {
  Jumbotron,
  Col,
  Row,
  Container,
  Card,
  Button,
  Image,
  ListGroup,
} from "react-bootstrap";

const Electronics = () => {
  return (
    <Jumbotron className="linux-jumbo">
      <Container className="linux-container">
        <p className="linux-h3">
          {" "}
          The Electronics/Power team is in charge of converting the internal
          currents from the battery to all the other electronic parts in the
          robot!{" "}
        </p>

        <p className="linux-p">
          As the electrical team, we are in charge of{" "}
          <u>creating the schematic that allows buck converters to function.</u>{" "}
          Our main programs include KiCAD and EagleCAD. This year we switched
          over to <b>KiCAD</b>, which functions as a simpler program for our
          members to design and create schematics for our club.
        </p>

        <ListGroup className="linux-listgroup">
          <ListGroup.Item className="linux-list-item">
            <span className="accent-color-linux">Buck Converter</span> – usually
            labeled as DC/DC Buck Converters, are converters that are able to
            efficiently let high voltage convert into low voltages in order to
            extend battery life and reduce heat. In turn, this has allowed many
            smaller appliances to spring into everyday use.
          </ListGroup.Item>
          <ListGroup.Item className="linux-list-item">
            <span className="accent-color-linux">
              Buck Converter Schematic Example
            </span>{" "}
            – <Image className="buck" src="/images/other/buck_converter.png" />
          </ListGroup.Item>
        </ListGroup>

        <p className="linux-h1"> </p>

        <Col>
          <Jumbotron className="linux-methods-jumbo">
            <p className="linux-h3"> Buck Converter Tutorial </p>
            <p className="iframe-align">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ecRQcEWoXvM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>
            <p className="linux-p">
            We chose this tutorial to follow as it provided a thorough and easy explanation between what to choose and pin for a buck converter schematic. The tutorial goes over basic requirements that all schematics must have and then dives into the specifics for this example buck converter schematic. By following this video, members are able to learn the difference between voltage outputs when making a buck converter and the performance output that the different voltages give.
            </p>
          </Jumbotron>
        </Col>
      </Container>
    </Jumbotron>
  );
};

export default Electronics;
