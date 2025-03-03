import React from "react";
import "./Members.css";
import Container from "react-bootstrap/Container";
import GroupSection from "../../../components/GroupSection";
import RowSection from "../../../components/RowSection";
import PastMembers from "./PastMembers";
import Card from "react-bootstrap/Card";

const Members = () => {
  // Load the JSON data
  let obj = require("../../../assets/members.json");
  let json = obj[Object.keys(obj)[0]];
  let updated = obj["2022-2023"];

  return (
    <div className="main">
      <Container className="main-container">
        {/* Officers Section */}
        <GroupSection
          heading="Officers"
          list={updated.officers1}
          className="main-container"
        />
        <RowSection list={updated.officers2}></RowSection>

        {/* Club Team Section */}
        <GroupSection
          heading="Club Team"
          list={updated.members1 && updated.members2}
          className="main-container"
        />

        {/* Senior Design Team - ME Section */}
        <GroupSection
          heading="Senior Design Team - ME"
          list={updated.seniordesignME1}
          className="me1"
        />
        <RowSection list={updated.seniordesignME2} />

        {/* Senior Design Team - EE Section */}
        <GroupSection
          heading="Senior Design Team - EE"
          list={updated.seniordesignEE}
          className="main-container"
        />

        {/* Senior Design Team - CS Section */}
        <GroupSection
          heading="Senior Design Team - CS"
          list={updated.seniordesignCS1}
          className="main-container"
        />
        <RowSection list={updated.seniordesignCS2} />

        {/* Advisors Section */}
        <GroupSection
          heading="Advisors"
          list={json.advisors}
          className="main-container"
        />
      </Container>

      {/* Past Members Section */}
      <div className="card-content">
        <Card className="members-card">
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
