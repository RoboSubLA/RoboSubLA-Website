import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

import "./Wailord.css";

const Wailord = () => {
  return (

	<div className="sub-container">
      <h1 className="sub-header">WAILORD 2022-2023</h1>

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
                <td>Club President</td>
                <td>Aren Petrossian</td>
                <td>Mechanical Engineering</td>
              </tr>

              <tr>
                <td>Club Vice-President</td>
                <td>Katherine Bonomo</td>
                <td>Mechanical Engineering</td>
              </tr>

      

			  <tr>
                <td>Autonomy Leader</td>
                <td>Victor Solis</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Frame & Hull Leader</td>
                <td>Paolo Reyes</td>
                <td>Electrical Engineering</td>
              </tr>

              <tr>
                <td>Frame & Hull Leader</td>
                <td>Jose Rangel</td>
                <td>Electrical Engineering</td>
              </tr>

              <tr>
                <td>Computer Vision Leader</td>
                <td>Ashley Tran</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Electronics Leader</td>
                <td>Andrew Ye</td>
                <td>Electrical Engineering</td>
              </tr>

              <tr>
                <td>Frame & Hull</td>
                <td>Gian Owen Asayas</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Frame & Hull/Electronics</td>
                <td>Kevin Hong</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Frame & Hull</td>
                <td>Anthony Arias</td>
                <td>-</td>
              </tr>

              <tr>
                <td>Controls/Electronics</td>
                <td>Arun N. Radhakrishnan</td>
                <td>-</td>
              </tr>

            </tbody>
          </Table>
        </Tab>

      </Tabs>
    </div>

  );
};

export default Wailord;
