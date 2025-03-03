import React from "react";
import "./VideoSection.css";
import Typical from "react-typical";

const VideoSection = ({ src, heading, children }) => {
  return (
    <div className="main-video-container">
      {/* <video muted playsInline loop autoPlay>
        <source src="public\videos\bubbles.mp4" type="video/mp4"></source>
      </video> */}
      {/* <img alt="decoration" className="splashpage-img" src={src} /> */}

      <div className="bg" align="center"></div>
      <div className="bg bg2" align="center"></div>
      <div className="bg bg3" align="center"></div>

      <h1 className="title">
        {heading} <i className="gi gi-submarine"></i>
      </h1>
      <p id="under-p">
        {" "}
        <Typical
          steps={["Design | Code | Build | Test | Compete", 5000, "", 2000]}
          loop={Infinity}
          wrapper="b"
          id="under-p"
        />
      </p>
      {children}
    </div>
  );
};
export default VideoSection;
