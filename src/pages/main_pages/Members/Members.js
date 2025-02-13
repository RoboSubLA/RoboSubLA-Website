import React from "react";
import "./Members.css";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GroupSection from "../../../components/GroupSection";
import RowSection from "../../../components/RowSection";
import PastMembers from "./PastMembers";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "../../../components/Button/Button";

const Members = () => {
  //this will pull the first object in the data file as the default for display on members page
  let obj = require("../../../assets/members.json");
  let json = obj[Object.keys(obj)[0]];
  let updated = obj["2022-2023"];
  let lastyear = obj["2021-2022"];
  return (
    <div className="cont">
      <Container className="main-container">
        <GroupSection
          heading="Officers"
          list={updated.officers1}
          className="main-container"
        />
        <RowSection list={updated.officers2}></RowSection>
        <p> </p>
        <GroupSection
          heading="Club Team"
          list={updated.members1 && updated.members2}
          className="main-container"
        />
        {/* <RowSection list={updated.members2}/> */}

        <GroupSection
          heading="Senior Design Team - ME"
          list={updated.seniordesignME1}
          className="me1"
        />
        <RowSection list={updated.seniordesignME2} />

        <GroupSection
          heading="Senior Design Team - EE"
          list={updated.seniordesignEE}
          className="main-container"
        />

        <GroupSection
          heading="Senior Design Team - CS"
          list={updated.seniordesignCS1}
          className="main-container"
        />
        <RowSection list={updated.seniordesignCS2} />

        <GroupSection
          heading="Advisors"
          list={json.advisors}
          className="main-container"
        />
      </Container>
      <div className="card-content">
        <Card>
          <Card.Body className="21-22-senior-design">
            <PastMembers className="21-22-senior-design" />
          </Card.Body>
        </Card>
      </div>
      <br></br>
    </div>
  );
};

export default Members;
