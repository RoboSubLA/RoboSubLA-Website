import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";

import "./Lanturn22.css";

const Lanturn22 = () => {
  return (
    <div className="sub-container">
      <h1 className="sub-header">LANTURN 2022-2023</h1>

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
                <td>ME/EE Leader</td>
                <td>Aren Petrossian</td>
                <td>Mechanical Engineering</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Carlos Luna</td>
                <td>Mechanical Engineering</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Steven Magana</td>
                <td>Mechanical Engineering</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Nahom Seifu</td>
                <td>Mechanical Engineering</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Jose Iares</td>
                <td>Mechanical Engineering</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Edward Razo</td>
                <td>Mechanical Engineering</td>
              </tr>

              <tr>
                <td>Mechanical Engineering Team</td>
                <td>Tianyu Ma</td>
                <td>Mechanical Engineering</td>
              </tr>

              <tr>
                <td>Electrical Engineering Team</td>
                <td>Anthony Zelada </td>
                <td>Electrical Engineering</td>
              </tr>

              <tr>
                <td>Electrical Engineering Team</td>
                <td>Cristian Mota</td>
                <td>Electrical Engineering</td>
              </tr>


              <tr>
                <td>Computer Science Leader</td>
                <td>Victor Solis</td>
                <td>Computer Science</td>
              </tr> 

              <tr>
                <td> Computer Science Team</td>
                <td>Thomas Benson</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>Hector Mora-Silva</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>Roberto Hernandez</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>Bailey Canham</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>Brandon Vy Cao </td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>David Fernandez</td>
                <td>Computer Science</td>
              </tr>
              <tr>
                <td>Computer Science Team</td>
                <td>Andrew Marin Heusser</td>
                <td>Computer Science</td>
              </tr>

              <tr>
                <td>Computer Science Team</td>
                <td>Milca Ucelo</td>
                <td>Computer Science</td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Lanturn22;
