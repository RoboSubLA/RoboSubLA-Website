import React from "react";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../pages/main_pages/Members/Members.css";

const Person = (props) => {
  return (
    <Col className="figure-container" sm>
      <div className="flip-figure">
        <div className="flip-figure-inner">
          <div className="flip-figure-front">
            <Figure className="members-container">
              <Figure.Image
                className="members-img"
                alt="171x180"
                src={props.data.img}
              />
              <Figure.Caption>{props.data.name}</Figure.Caption>
                <Figure.Caption>{props.data.sign}</Figure.Caption>
              <Figure.Caption>{props.data.title}</Figure.Caption>
            </Figure>
          </div>

          <div className="flip-figure-back">
            <div className="flip-figure-back-content">
              <p className="flip-figure-back-text">More Info</p>
              <a className="fig-back-icon" href="/files/MemberInformation.pdf">
                <i className="fas fa-info-circle"></i>
              </a>
              <a className="fig-back-icon" href={props.data.link}>
                <i className="fas fa-user-circle"></i>
              </a>
              <div id = "email">{props.data.email}</div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

const RowSection = (props) => {
  return (
    <>
      <Row className="members-row">
        {props.list.map((item) => {
          return <Person data={item} />;
        })}
      </Row>
    </>
  );
};

export default RowSection;
