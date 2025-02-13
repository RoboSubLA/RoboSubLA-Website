import React from "react";

const MissionPlanning = () => {
  return (
    <>
      <h3 className="resource-text">Refer to the following link for a guide on Smach, which is used for state machines.</h3>
      <p className="resource-text">Note that SMACH requires ROS, which must be installed on Ubuntu. Refer to the Ros tutorial for instructions on how to use Ubuntu on your operating system.</p>
	  <div className="links-container">
        <a
          className="resource-links"
          href="http://wiki.ros.org/smach/Tutorials/Getting%20Started"
        >
          <i class="fab fa-readme"> Smach Tutorial</i>
        </a>
      </div>

      <h3 className="resource-text">Introduction to State Machines</h3>
      <p className="iframe-align">
        <iframe
          className="resource-iframe"
          src="https://www.youtube.com/embed/U_QN28T_ypU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>
      <h3 className="resource-text">Intermediate State Machines</h3>
      <p className="iframe-align">
        <iframe
          className="resource-iframe"
          src="https://www.youtube.com/embed/pP0Z-qmkWUk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>
    </>
  );
};

export default MissionPlanning;
