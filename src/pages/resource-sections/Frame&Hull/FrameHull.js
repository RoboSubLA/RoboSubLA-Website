import React from "react";
import '../Linux/Linux.css'
import { Jumbotron, Col, Row, Container, Card, Button, Image, ListGroup } from "react-bootstrap";
function FrameHull() {
    return (
        <Jumbotron className='linux-jumbo'>
            <Container className='linux-container'>
                <p className='linux-p'> The Frame and Hull subteam primarily utilizes SolidWorks for building our 3D model of the robotic submarine. To ensure everyone can contribute to building the model,
                we host introductory SolidWorks workshops - where we go over the basics of the 3D-modeling software.
Linked below are some videos to watch if you are unable to come to our workshops.
</p>

                <p className='linux-h1'>Introductory SolidWorks Tutorials</p>
                <p className='linux-h3' style={{ textAlign: 'left', paddingLeft: '25px' }}></p>
                <Col>
                    <Jumbotron className='linux-methods-jumbo'>
                        <p className='linux-h1'> SolidWorks Beginner Tutorials</p>
                        <p>

                        </p>
                         <p className='linux-h3'>SolidWorks for Beginners!</p>
                        <p className="iframe-align">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/qtgmGkEPXs8?start=110" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </p>

                        <p className="iframe-align">


                        <p className='linux-h3'>SolidWorks Basics and Parts</p>
                        <p className = "iframe-align">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/CII_iPwVLUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </p>


                        <p className='linux-h3'>SolidWorks Engine Assembly and Animation</p>
                        <p className = "iframe-align">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5KVSuNt1UX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </p>
                          </p>

                    </Jumbotron>
                </Col>
            </Container>

        </Jumbotron>
    );
}
export default FrameHull;
