import React from "react";
import GroupSection from "./GroupSection";
import "../pages/main_pages/Members/Members.css";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "./Button/Button";

const PastMembers = (props) => {
  return (
    <div>
        <Accordion className="accordion-past">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Past Members
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body><GroupSection heading={props.heading} list={props.list}></GroupSection></Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
  );
}

export default PastMembers;
