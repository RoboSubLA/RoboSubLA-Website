import "./Members.css";
import GroupSection from "../../../components/GroupSection";
import RowSection from "../../../components/RowSection";
import PastMembers from "./PastMembers";
import Card from "react-bootstrap/Card";
import { Modal, Button, Container } from "react-bootstrap";
import React, { useState } from "react";

const Members = () => {
  // Load the JSON data
  let obj = require("../../../assets/members.json");
  let json = obj[Object.keys(obj)[0]];
  let updated = obj["2022-2023"];

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
        <Container className="main-container">
          <section className="senior-design-cs-section">
            <h2 className="section-heading">Senior Design Team - CS</h2>
            <img
              src="/images/members/RoboSub_team_photo_2025-03.png"
              alt="RoboSub Team 2025"
              className="team-photo"
            />
            <p className="team-description">
              The Senior Design Team - Computer Science focuses on developing
              advanced software systems for the RoboSub competition. This
              includes computer vision, autonomy, and control systems. The team
              collaborates closely with other subteams to ensure seamless
              integration of software and hardware components.
            </p>

            <p className="team-description">
              Left to Right: <br />
              <strong>Sunheng: Autonomy (Lead)</strong> <br />
              <strong>Christian: Controls</strong> <br />
              <strong>Paulux: Controls</strong> <br />
              <strong>Erick: Autonomy</strong> <br />
              <strong>Leopoldo: Vision</strong> <br />
              <strong>Will: Vision (Lead)</strong> <br />
              <strong>Abraham: Autonomy</strong> <br />
              <strong>Jose: Project Manager (CEO)</strong> <br />
              <strong>Alvaro: Controls (Lead)</strong> <br />
              <strong>Tan: Vision</strong> <br />
              <strong>Cesar: Web Developement (Lead) </strong>
            </p>
          </section>
        </Container>

        {/* Modal for Enlarged Image */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body>
            <img
              src="/images/members/RoboSub_team_photo_2025-03.png"
              alt="RoboSub CS Team 2025"
              className="enlarged-photo"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

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
