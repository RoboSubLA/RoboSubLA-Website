import React from "react";
// import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";
//import Button from "react-bootstrap/Button";
//import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
//import { Link } from "react-router-dom";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="main">
      <div className="subtitle-container">
        <h3 className="subtitle">Sponsors</h3>
      </div>
      {/* <Jumbotron className = "sponsor-container"> */}
      <div className="spons-container">
        <p className="spons-desc">
          RoboSubLA extends our greatest thanks to our sponsors! Your support
          enables us to continue building autonomous underwater vehicles, and
          helps provide our members with technical skills through hands-on
          experiences with industry-standard components.
        </p>

        <h3 className="spons-subtitle">Gold Sponsors</h3>
        <div className="spons-img">
          <div className="row">
            <div className="col-sm-4">
              <Image
                className="sponsor"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/csula.png"}
              ></Image>
            </div>
          </div>

          <div className="row">
            {" "}
            <div className="col-sm-4">
              <Image
                className="sponsor"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/naval.png"}
              ></Image>
            </div>
          </div>
          <div className="row">
            {" "}
            <div className="col-sm-4">
              <Image
                className="sponsor"
                width="400"
                src={process.env.PUBLIC_URL + "/images/sponsors/vectornav.png"}
              ></Image>
            </div>
          </div>
        </div>

        <h3 className="spons-subtitle">Silver Sponsors</h3>
        <div className="spons-img">
          <div className="row">
            <div className="col-sm-4">
              <Image
                className="sponsor"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/bluetrail.png"}
              ></Image>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <Image
                className="sponsor"
                height="150"
                src={
                  process.env.PUBLIC_URL + "/images/sponsors/bluerobotics.png"
                }
              ></Image>
            </div>
          </div>
        </div>

        <h3 className="spons-subtitle">Bronze Sponsors</h3>

        <div className="spons-img">
          <div className="row">
            <div className="col-sm-4">
              <Image
                className="sponsor"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/mworks.png"}
              ></Image>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <Image
                className="sponsor"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/dsys.svg"}
              ></Image>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* SPONSOR CONTAINER */}
      {/* </Jumbotron> */}
      <div className="pdf-container">
        <h1 className="spons-heading">
          Ready to sponsor RoboSubLA? Read our benefits packet!
        </h1>
        <object
          class="pdf"
          width="500px"
          height="675px"
          data="https://drive.google.com/file/d/1PsGdtf7-BZoSfNbwImO0Ay_P16BJabqs/preview"
          type="application/pdf"
          aria-label="pdf"
        ></object>
      </div>
    </div> // MAIN DIV
  );
};

export default Sponsors;
