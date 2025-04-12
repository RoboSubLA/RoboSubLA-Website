import React from "react";
import Nav from "react-bootstrap/Nav";
import "./ROS.css";
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
      <div className="ros-banner-container">
        <Image className="ros-logo" src="/images/other/ROSLogo.png" />

        <p className="resources-section-p">
          ROS (Robot Operating System) is an open-source toolkit for robotics,
          providing a standard platform for development from prototyping to
          production. Build faster and better by leveraging ROS instead of
          starting from scratch!
        </p>
      </div>

      <div className="ros-content-section">
        <h1 className="ros-ubuntu">ROS Ubuntu Installation:</h1>
        <p className="ros-commands">
          Run these commands (View the boxes for thorough explanation):
        </p>
        <p className="ros-code">
          sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release
          -sc) main" &gt; /etc/apt/sources.list.d/ros-latest.list'
          <br />
          <br />
          sudo apt install curl # if you haven't already installed curl curl -s
          https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc
          <br />
          <br />
          sudo apt-key add -
          <br />
          <br />
          sudo apt update
          <br />
          <br />
          sudo apt install ros-melodic-desktop-full
          <br />
          <br />
          echo "source /opt/ros/melodic/setup.bash" &gt;&gt; ~/.bashrc source
          ~/.bashrc
          <br />
          <br />
          printenv
        </p>
      </div>

      <div className="ros-card-container">
        <CardDeck className="ros-carddeck">
          <Card className="ros-card" border="dark">
            <Card.Body className="ros-card-body">
              <Card.Title className="ros-card-title">
                SETUP ROS
                <p className="ros-install"> ROS Installation:</p>
              </Card.Title>

              <Row className="ros-links-row installation-top">
                <a
                  className="ros-links"
                  href="http://wiki.ros.org/Installation/Windows"
                >
                  <i className="fab fa-windows fa-2x"> Windows</i>
                </a>
              </Row>
              <Row className="ros-links-row">
                <a
                  className="ros-links"
                  href="http://wiki.ros.org/melodic/Installation/Ubuntu"
                >
                  <i className="fab fa-linux fa-2x"></i> Ubuntu (Recommended)
                </a>
              </Row>
              <p className="ros-card-text">
                <b>
                  <u className="ros-text-description">
                    ROS must be installed on a running Ubuntu installation.
                  </u>
                </b>
                <br /> * Before installing, make sure to configure the Ubuntu
                respositories, setup the sources.list to accept software from
                packages.ros.org, and setup the keys:
              </p>

              <p className="ros-code">
                <p className="ros-cheat-p"> Setup sources.list: </p>
                sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu
                $(lsb_release -sc) main" &gt;
                /etc/apt/sources.list.d/ros-latest.list'
                <br />
                <br />
                <p className="ros-cheat-p"> Setup keys: </p>
                sudo apt install curl # if you haven't already installed curl
                curl -s
                https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc
                <br />
                <br />
                sudo apt-key add -
              </p>

              <p className="ros-cheat-p">
                * To begin installation, make sure your Debian package index is
                up-to-date:
              </p>
              <p className="ros-code">sudo apt update</p>

              <p className="ros-cheat-p">
                There are four default configurations - we will opt for the
                Desktop-Full Install:
              </p>
              <p className="ros-code">
                sudo apt install ros-melodic-desktop-full <br />
                <br />
                <p className="ros-cheat-p"> To find available packages: </p>
                apt search ros-melodic
              </p>

              <p className="ros-cheat-p">
                * Now setup the environment: (it is best practice to have ROS
                environment variables automatically added to the session.)
              </p>
              <p className="ros-code">
                echo "source /opt/ros/melodic/setup.bash" &gt;&gt; ~/.bashrc
                source ~/.bashrc <br />
                <br />
                <p className="ros-cheat-p">
                  To change the current shell's environment:
                </p>
                source /opt/ros/melodic/setup.bash
              </p>

              <p className="ros-cheat-p">
                You should now have what is required to run ROS core packages
                installed! <br />
              </p>

              <p className="ros-cheat-p">
                * To check that you have installed ROS correctly, use this
                command:
              </p>
              <p className="ros-code">
                printenv <br />
                <br />
                <p className="ros-cheat-p">or: </p>
                grep ROS <br />
              </p>

              <p className="ros-cheat-p">
                <br />* There are lots of ROS tools that require you to
                initialize rosde which allows for easy installation of system
                dependencies and is required to run some core components in
                ROS.*
              </p>

              <p className="ros-code">
                <p className="ros-cheat-p">rosdep Installation:</p>
                sudo apt install python-rosdep
                <p className="ros-cheat-p">
                  <br />
                  rosdep Initialization:
                </p>
                sudo rosdep init rosdep update
                <p className="ros-cheat-p">
                  <br />
                  <br />
                  To install additional tools and dependencies(i.e. rosinstall):
                </p>
                sudo apt install python-rosdep python-rosinstall
                python-rosinstall-generator python-wstool build-essential <br />
                <br />
                <p className="ros-cheat-p"> To find available packages: </p>
                apt search ros-melodic
              </p>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>

      <div className="ros-content-section">
        <CardDeck className="ros-carddeck">
          <Card className="ros-card" border="dark">
            <Card.Body className="ros-card-body">
              <Card.Title className="ros-card-title">
                SETUP Catkin
                <br />
                <a href="https://wiki.ros.org/catkin#Installing_catkin">
                  Catkin
                </a>
              </Card.Title>
              <p className="ros-card-text">
                * Installing Catkin - you can install Catkin directly from the
                source or simply use a prebuilt package (ROS Groovy+
                distributions supported):
              </p>
              <p className="ros-code">sudo apt-get install ros-noetic-catkin</p>
              <p className="ros-cheat-p">
                Add a file as it looks now to your next commit (stage)
              </p>

              <p className="ros-code">* Set up a Catkin Workspace:</p>
              <p className="ros-cheat-p">
                Commit your staged content as a new commit snapshot
              </p>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </>
  );
};
export default ROS;
