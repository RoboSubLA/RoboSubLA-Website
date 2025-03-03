import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Electronics.css";

const Electronics = () => {
  return (
    <Container className="electronics-container">
      <section className="electronics-section">
        <h1 className="resources-section-h1">Electronics/Power Team</h1>
        <p className="resources-section-p">
          The <span className="inner-top">Electronics/Power</span> team is in
          charge of converting the internal currents from the battery to all the
          other electronic parts in the robot!
        </p>
      </section>

      <section className="card-content-section">
        <Row>
          <Col md={6} className="electronics-card-col">
            <Card className="electronics-card">
              <Card.Body className="electronics-card-body">
                <Card.Title className="card-title">Buck Converter</Card.Title>
                <Card.Text>
                  Buck Converters, usually labeled as DC/DC Buck Converters, are
                  converters that efficiently convert high voltage into low
                  voltages to extend battery life and reduce heat. This allows
                  many smaller appliances to be used in everyday applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="electronics-card-col">
            <Card className="electronics-card">
              <Card.Body>
                <Card.Title className="card-title">
                  Buck Converter Schematic Example
                </Card.Title>
                <Card.Text>
                  <img
                    className="buck-converter-image"
                    src="/images/other/buck_converter.png"
                    alt="Buck Converter Schematic"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="tutorial-section">
        <h2 className="resources-section-h2">Buck Converter Tutorial</h2>
        <div className="electronics-video-container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ecRQcEWoXvM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* <section className="resource-section">
        <h2 className="resources-section-h2">Why?</h2>
        <p className="resources-section-p">
          We chose this tutorial for its clear explanation of buck converter
          schematics. It covers basic requirements and specifics, helping
          members learn about voltage outputs and performance differences.
        </p>
      </section> */}
    </Container>
  );
};

export default Electronics;
