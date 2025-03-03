import React from "react";
import Image from "react-bootstrap/Image";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="main">
      <div className="subtitle-container">
        <h3 className="subtitle">Sponsors</h3>
      </div>
      <div className="desc-container">
        <p className="spons-desc">
          RoboSubLA extends our greatest thanks to our sponsors! Your support
          enables us to continue building autonomous underwater vehicles, and
          helps provide our members with technical skills through hands-on
          experiences with industry-standard components.
        </p>
      </div>
      <section className="spons-container">
        <section className="gold-sponsors">
          <h3 className="spons-subtitle">Gold Sponsors</h3>
          <div className="row">
            <div className="col-sm-4">
              <Image
                className="sponsor"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/csula.png"}
              ></Image>
            </div>
            <div className="col-sm-4">
              <Image
                className="sponsor"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/naval.png"}
              ></Image>
            </div>
            <div className="col-sm-4">
              <Image
                className="sponsor"
                width="400"
                src={process.env.PUBLIC_URL + "/images/sponsors/vectornav.png"}
              ></Image>
            </div>
          </div>
        </section>

        <section className="sliver-sponsors">
          <h3 className="spons-subtitle">Silver Sponsors</h3>
          <div className="row">
            <div className="col-sm-4">
              <Image
                className="sponsor"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/bluetrail.png"}
              ></Image>
            </div>
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
        </section>
        <section className="bronze-sponsors">
          <h3 className="spons-subtitle">Bronze Sponsors</h3>
          <div className="row">
            <div className="col-sm-4">
              <Image
                className="sponsor"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/mworks.png"}
              ></Image>
            </div>
            <div className="col-sm-4">
              <Image
                className="sponsor"
                height="150"
                src={process.env.PUBLIC_URL + "/images/sponsors/dsys.svg"}
              ></Image>
            </div>
          </div>
        </section>
      </section>

      <div className="pdf-container">
        <h1 className="spons-heading">
          Ready to sponsor RoboSubLA? Read our benefits packet!
        </h1>
        <iframe
          className="pdf"
          width="500px"
          height="675px"
          src="https://drive.google.com/file/d/1PsGdtf7-BZoSfNbwImO0Ay_P16BJabqs/preview?pli=1"
          type="application/pdf"
          aria-label="pdf"
          title="RoboSubLA Sponsorship Benefits Packet"
        ></iframe>
      </div>
    </div>
  );
};

export default Sponsors;
