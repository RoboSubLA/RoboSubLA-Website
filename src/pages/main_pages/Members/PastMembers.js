import React from "react";
import "./Members.css";
import GroupSection from "../../../components/GroupSection";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from "react-bootstrap/Accordion";
import Button from "../../../components/Button/Button";

const PastMembers = () => {
  let obj = require("../../../assets/members.json");
  let json = obj[Object.keys(obj)[0]];
  let updated = obj["2022-2023"];
  let lastyear = obj["2021-2022"];
  return (
    <Accordion className="accordion-past">
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Past Teams
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
            <Accordion className="accordion-past">
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        2021-2022 Team
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <GroupSection heading="2021-2022 Team" list={lastyear.officers}></GroupSection>
                    <GroupSection heading="2021-2022 Members" list={lastyear.members}></GroupSection>
                    <GroupSection heading="2021-2022 Senior Design Team - CS" list={lastyear.seniordesignCS}></GroupSection>
                    <GroupSection heading="2021-2022 Senior Design Team - ME" list={lastyear.seniordesignME}></GroupSection>
                    <GroupSection heading="2021-2022 Senior Design Team - EE" list={lastyear.seniordesignEE}></GroupSection>
        <ListGroup variant="flush">
        </ListGroup>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
          </Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        2020-2021 Team
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <GroupSection heading="2020-2021 Team" list={json.officers}></GroupSection>
                    <GroupSection heading="2020-2021 Members" list={json.members}></GroupSection>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

            </Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
  );
}

export default PastMembers;
