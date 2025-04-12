import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ComputerVision.css";

import {
  faWindows,
  faApple,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";

const ComputerVision = () => {
  return (
    <>
      <div className="top-opencv-container">
        <h1 className="resource-header">OpenCV</h1>
        <p className="resource-text">
          OpenCV (Open Source Computer Vision Library) is an open-source library
          designed for computer vision and machine learning tasks. It provides a
          wide range of tools and algorithms to process and analyze images and
          videos in real-time.
        </p>
      </div>

      <div className="installation-container">
        <p className="ocv-resource-header">Instructions to install:</p>
        <div className="links-container">
          <a
            className="resource-links"
            href="https://learnopencv.com/install-opencv-on-windows/"
          >
            <FontAwesomeIcon
              icon={faWindows}
              size="6px"
              className="windows-icon"
            >
              Windows
            </FontAwesomeIcon>
            Windows
          </a>
          <a
            className="resource-links"
            href="https://www.pyimagesearch.com/2018/08/17/install-opencv-4-on-macos/"
          >
            <FontAwesomeIcon
              icon={faApple}
              size="6px"
              className="macos-icon"
            ></FontAwesomeIcon>
            Mac Os
          </a>
          <a
            className="resource-links"
            href="https://docs.opencv.org/master/d2/de6/tutorial_py_setup_in_ubuntu.html"
          >
            <FontAwesomeIcon
              icon={faLinux}
              size="6px"
              className="linux-icon"
            ></FontAwesomeIcon>
            Linux
          </a>
        </div>
      </div>

      <h1 className="ocv-resource-header">Introduction to OpenCv</h1>
      <div className="ocv-iframe-align">
        <iframe
          width="100%"
          height="500"
          className="responsive-iframe"
          src="https://www.youtube.com/embed/F0lfMvtajns"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h1 className="ocv-resource-header">Object Detection using OpenCv</h1>
      <div className="ocv-iframe-align">
        <iframe
          width="100%"
          height="500"
          className="responsive-iframe"
          src="https://www.youtube.com/embed/avX8Xn0eP4k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h1 className="ocv-resource-header">Lane Detection using OpenCv</h1>
      <div className="ocv-iframe-align">
        {" "}
        <iframe
          width="100%"
          height="500"
          className="responsive-iframe"
          src="https://www.youtube.com/embed/UFLsZ_Wddrs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
      </div>
    </>
  );
};

export default ComputerVision;
