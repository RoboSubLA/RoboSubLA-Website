import React from "react";

const ComputerVision = () => {
  return (
    <>
      <h3 className="resource-text">Install OpenCV</h3>
      <p className="resource-text">Instructions to install:</p>
      <div className="links-container">
        <a
          className="resource-links"
          href="https://learnopencv.com/install-opencv-on-windows/"
        >
          <i class="fab fa-windows"> Windows</i>
        </a>
        <a
          className="resource-links"
          href="https://www.pyimagesearch.com/2018/08/17/install-opencv-4-on-macos/"
        >
          <i class="fab fa-apple"> Mac OS</i>
        </a>
        <a
          className="resource-links"
          href="https://docs.opencv.org/master/d2/de6/tutorial_py_setup_in_ubuntu.html"
        >
          <i class="fab fa-linux"></i> Linux
        </a>
      </div>

      <h3 className="resource-text">Introduction to OpenCv</h3>
      <p className="iframe-align">
        <iframe
          className="resource-iframe"
          src="https://www.youtube.com/embed/F0lfMvtajns"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>
      <h3 className="resource-text">Object Detection using OpenCv</h3>
      <p className="iframe-align">
        <iframe
          className="resource-iframe"
          src="https://www.youtube.com/embed/avX8Xn0eP4k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>
      <h3 className="resource-text">Lane Detection using OpenCv</h3>
      <p className="iframe-align">
        {" "}
        <iframe
          className="resource-iframe"
          src="https://www.youtube.com/embed/UFLsZ_Wddrs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
      </p>
    </>
  );
};

export default ComputerVision;
