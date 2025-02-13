import React from "react";
import Nav from "react-bootstrap/Nav";
// import { Link } from "react-bootstrap";
import {
  Card,
  CardDeck,
  Image,
  Row,
  Col,
  Container,
  Jumbotron,
  Accordion,
  Button,
} from "react-bootstrap";
import "../GitHub/GitHub.css";

const ROS = () => {
  return (
    <>
      <Image className="ros-logo" src="/images/other/ROSLogo.png" />

      <p className="resources-section-p">
        **FROM THE WEBSITE: NEED TO ADD HOW WE USE ROS(I THINK)** <br></br>"ROS
        (Robot Operating System) is an open source software development kit for
        robotics applications. ROS offers a standard software platform to
        developers across industries that will carry them from research and
        prototyping all the way through to deployment and production. Don’t
        reinvent the wheel. Create something new and do it faster and better by
        building on ROS!"
      </p>

      <Container>
        <h1>ROS Ubuntu Installation:</h1>
        <p> Run these commands (View the boxes for thorough explanation): </p>
<code className = "git-code">
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
<br></br>
<br></br>

sudo apt install curl # if you haven't already installed curl curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc
<br></br>
<br></br>
sudo apt-key add -
<br></br>
<br></br>
sudo apt update
<br></br>
<br></br>
sudo apt install ros-melodic-desktop-full

<br></br>
<br></br>
echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc source ~/.bashrc
<br></br>
<br></br>
printenv
</code>

        <CardDeck className="git-carddeck">
          <Card className="git-card" border="dark">
            <Card.Body className="git-card-body">
              <Card.Title className="git-card-title">SETUP ROS</Card.Title>

              <Row className="git-links-row">
                <h2> ROS Installation:</h2>
                <a
                  className="git-links"
                  href="http://wiki.ros.org/Installation/Windows"
                >
                  <i class="fab fa-windows fa-2x"> Windows</i>
                </a>

                <a
                  className="git-links"
                  href="http://wiki.ros.org/melodic/Installation/Ubuntu"
                >
                  <i class="fab fa-linux fa-2x"></i> Ubuntu (Recommended)
                </a>
              </Row>
              <Card.Text className="git-card-text">
                <b>
                  <u>ROS must be installed on a running Ubuntu installation.</u>
                </b>{" "}
                <br></br> * Before installing, make sure to configure the Ubuntu
                respositories, setup the sources.list to accept software from
                packages.ros.org, and setup the keys:
              </Card.Text>

              <code className="git-code">
                <p className="git-cheat-p"> Setup sources.list: </p>
                sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu
                $(lsb_release -sc) main" >
                /etc/apt/sources.list.d/ros-latest.list'
                <br></br>
                <br></br>
                <p className="git-cheat-p"> Setup keys: </p>
                sudo apt install curl # if you haven't already installed curl
                curl -s
                https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc
                <br></br>
                    <br></br>
                sudo apt-key add -
              </code>

              <p className="git-cheat-p">
                * To begin installation, make sure your Debian package index is
                up-to-date:
              </p>
              <code className="git-code">sudo apt update</code>

              <p className="git-cheat-p">
                There are four default configurations - we will opt for the
                Desktop-Full Install:
              </p>
              <code className="git-code">
                sudo apt install ros-melodic-desktop-full <br></br>
                <br></br>
                <p className="git-cheat-p"> To find available packages: </p>
                apt search ros-melodic
              </code>

              <p className="git-cheat-p">
                * Now setup the environment: (it is best practice to have ROS
                environment variables automatically added to the session.)
              </p>
              <code className="git-code">
                echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc source
                ~/.bashrc <br></br>
                <br></br>
                <p className="git-cheat-p">
                  {" "}
                  To change the current shell's environment:{" "}
                </p>
                source /opt/ros/melodic/setup.bash
              </code>

              <p className="git-cheat-p">
                You should now have what is required to run ROS core packages
                installed! <br></br>
              </p>

              <p className="git-cheat-p">
               * To check that you have installed ROS correctly, use this command:
              </p>
              <code className="git-code">
               printenv <br></br>
                <br></br>
                <p className="git-cheat-p">or: </p>
                grep ROS       <br></br>
              </code>



              <p className = "git-cheat-p">      <br></br>* There are lots of ROS tools that require you to initialize
                  rosde which allows for easy installation of system
                  dependencies and is required to run some core components in
                  ROS.*</p>

              <code className="git-code">
                <p className="git-cheat-p">

            rosdep Installation:
                </p>
                sudo apt install python-rosdep
                <p className="git-cheat-p">    <br></br>rosdep Initialization: </p>
                sudo rosdep init rosdep update
                <p className="git-cheat-p">    <br></br>    <br></br>
                  To install additional tools and dependencies(i.e. rosinstall):
                </p>
                sudo apt install python-rosdep python-rosinstall
                python-rosinstall-generator python-wstool build-essential{" "}
                <br></br>
                <br></br>
                <p className="git-cheat-p"> To find available packages: </p>
                apt search ros-melodic
              </code>



            </Card.Body>
          </Card>
        </CardDeck>
        <p>NEEDS REVISIONS (BASED ON WEBSITE)</p>
        <h1>Catkin Workspace</h1>
        <CardDeck className="git-carddeck">
          <Card className="git-card" border="dark">
            <Card.Body className="git-card-body">
              <Card.Title className="git-card-title">
               SETUP Catkin
               ***INSERT: https://wiki.ros.org/catkin#Installing_catkin ***
              </Card.Title>
              <Card.Text className="git-card-text">
               * Installing Catkin - you can install Catkin directly from the source or simply use a prebuilt package (ROS Groovy+ distributions supported):
              </Card.Text>
              <code className="git-code">sudo apt-get install ros-noetic-catkin</code>
              <p className="git-cheat-p">
                Add a file as it looks now to your next commit (stage)
              </p>

              <code className="git-code">
              * Set up a Catkin Workspace:
              </code>
              <p className="git-cheat-p">
                Commit your staged content as a new commit snapshot
              </p>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>

      
    </>
  );
};
export default ROS;
