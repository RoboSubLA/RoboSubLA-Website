import React from "react";
import VideoSection from "../../../components/VideoSection/VideoSection";
import Button from "../../../components/Button/Button";
import Image from "react-bootstrap/Image";

// import Typical from "react-typical";
import "./Home.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="top-section">
        <div className="container">
          <div className="row">
            {" "}
            <h1 className="about-header">About Us!</h1>
          </div>
          <div class="row">
            <div class="col col-6-md">
              <p className="about-p">
                Welcome to the <strong>RoboSub</strong> team at{" "}
                <strong>California State University, Los Angeles!</strong> We
                build autonomous submarines for the annual international RoboSub
                competition held in July at the TRANSDEC in San Diego. The
                competition involves navigating a series of obstacles
                autonomously. Students gain valuable teamwork and engineering
                skills while connecting with like-minded peers.
              </p>
            </div>
            <div class="col col-6-md">
              <div className="image-container">
                <Image
                  className="logo"
                  height="200"
                  alt="CSULA Logo"
                  src={process.env.PUBLIC_URL + "/images/sponsors/csula.png"}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-section">
        <div class="container">
          <div class="row">
            <div class="col col-6-md">
              <div className="image-container">
                {/* <Image
                  className="logo"
                  height="200"
                  alt="CSULA Logo"
                  src={
                    process.env.PUBLIC_URL + "/images/other/club_banner.webp"
                  }
                ></Image> */}
              </div>
            </div>
            <div class="col col-6-md">
              <p className="about-p">
                Our team is divided into two groups:{" "}
                <strong>club organization</strong> and the{" "}
                <strong>senior design</strong> team. The senior design team
                builds one autonomous vehicle, while club members build another,
                mentored by senior design members. Both vehicles compete, with
                strategies based on their capabilities. Members design advanced
                robotics systems and gain interdisciplinary teamwork experience.
                Check the progress tab for current projects and tasks available
                to new members.
              </p>
              {/* <p className="about-p">
            Our team is split up into two project teams, the student
            organization and the senior design team. The senior design team
            builds one vehicle, and the club members build a separate vehicle
            while being mentored by senior design members. Both vehicles are
            intended for use in the competition and strategies will be carefully
            considered based on the capabilities of both vehicles. Members have
            the opportunity to design advanced robotics systems and work on an
            interdisciplinary project to gain experience working with a team.
            Please see the progress tab for a better idea of what our members
            are working on and what tasks and projects are available to new
            members
          </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bottom-section">
        <div className="home-sponsor-container">
          <h1 className="about-header">Thanks to Our Sponsors!</h1>
          <div className="row first-row">
            <div className="col-sm-4 rowOneColOne">
              {" "}
              <Image
                className="CSULA"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/csula.png"}
              ></Image>
            </div>
            <div className="col-sm-4 rowOneColTwo">
              <Image
                className="ONR"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/naval.png"}
              ></Image>
            </div>
            <div className="col-sm-4 rowOneColThree">
              {" "}
              <Image
                className="VECTOR_NAV"
                width="500"
                src={process.env.PUBLIC_URL + "/images/sponsors/vectornav.png"}
              ></Image>
            </div>
          </div>

          <div className="row second-row">
            <div className="col-sm-6 rowTwoColOne">
              {" "}
              <Image
                className="BLUETRAIL"
                width="330"
                src={process.env.PUBLIC_URL + "/images/sponsors/bluetrail.png"}
              ></Image>
            </div>
            <div className="col-sm-6 rowTwoColTwo">
              {" "}
              <Image
                className="BLUE_ROBOTICS"
                width="330"
                src={
                  process.env.PUBLIC_URL + "/images/sponsors/bluerobotics.png"
                }
              ></Image>
            </div>{" "}
          </div>

          <div className=" row third-row">
            <div className="col-sm-6 rowTwoColOne">
              {" "}
              <Image
                className="MWORKS"
                width="240"
                src={process.env.PUBLIC_URL + "/images/sponsors/mworks.png"}
              ></Image>{" "}
            </div>

            <div className="col-sm-6 rowTwoColOne">
              {" "}
              <Image
                className="DSYS"
                width="225"
                src={process.env.PUBLIC_URL + "/images/sponsors/dsys.svg"}
              ></Image>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

function Home() {
  const onClick = () =>
    window.open("https://www.youtube.com/watch?v=vo6-J_rYyo4", "_blank");
  return (
    <>
      <VideoSection
        id="under-heading"
        heading="Robosub LA"
        src="https://images.unsplash.com/photo-1465634836201-1d5651b9b6d6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80"
      >
        <div className="video-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={onClick}
            path="/"
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="/sign-up"
          >
            SIGN UP
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            path="/resources"
          >
            GET STARTED
          </Button>
        </div>
      </VideoSection>
      <About />
    </>
  );
}

export default Home;
