import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

import "./ThisYear1.css";

const ThisYear1 = () => {
  return (
  <div className="decoration">
	<div className="sub-container">
      <h1 className="sub-header">BLASTOISE 2021-2022</h1>

      <Tabs
        className="sub-tabs"
        defaultActiveKey="team"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="team" title="Team">
          <Table responsive striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Major</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>President</td>
                <td>Aren Petrossian</td>
                <td>Mechanical Engineer</td>
              </tr>
              <tr>
                <td>Vice-President</td>
                <td>Katherine Bonomo</td>
                <td>Civil Engineering</td>
              </tr>
              <tr>
                <td>Computer Vision Co-Lead</td>
                <td>Jennifer Serrano</td>
                <td>Computer Science</td>
              </tr>
              <tr>
                <td>Computer Vision Co-Lead</td>
                <td>Adrian Salgado</td>
                <td>Computer Science</td>
              </tr>
              <tr>
                <td>Mission Planning Lead</td>
                <td>Victor Solis</td>
                <td>Computer Science</td>
              </tr>
              <tr>
                <td>Frame & Hull</td>
                <td>Jazmin Reyes</td>
                <td>Mechanical Engineering</td>
              </tr>
              <tr>
                <td>Frame & Hull</td>
                <td>Chayuth Mandtanavonsin</td>
                <td>Mechanical Engineering</td>
              </tr>
              <tr>
                <td>Frame & Hull</td>
                <td>Paola Reyes</td>
                <td>Mechanical Engineering</td>
              </tr>
              <tr>
                <td>Frame & Hull</td>
                <td>Jose Rangel</td>
                <td>Mechanical Engineering</td>
              </tr>
              <tr>
                <td>Computer Vision</td>
                <td>Ashley Tran</td>
                <td>Computer Science</td>
              </tr>
              <tr>
                <td>Computer Vision </td>
                <td>Perla Ramirez</td>
                <td>Computer Science</td>
              </tr>
              <tr>
                <td>Power Distribution</td>
                <td>Jordan Doose</td>
                <td>Computer Science</td>
              </tr>
              <tr>
                <td>Power Distribution</td>
                <td>Andrew Ye</td>
                <td>Mechanical Engineering</td>
              </tr>



            </tbody>
          </Table>
        </Tab>


      </Tabs>
    </div>
  </div>
  );
};

export default ThisYear1;
