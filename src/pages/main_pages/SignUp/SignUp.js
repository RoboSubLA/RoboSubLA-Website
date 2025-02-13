import React from "react";
import "./SignUp.css";
import Sky from "react-sky";
import magikarp from "../../../assets/magikarp.png";
import gyarados from "../../../assets/gyarados.png";
import lanturn from "../../../assets/lanturn.png";

export default function SignUp() {
  return (
    <div className="signup-container">
      <Sky
        images={{
          /* FORMAT AS FOLLOWS */
          0: magikarp,
          1: lanturn,
          2: gyarados,
        }}
        how={100}
        time={10}
        size={"100px"}
        background={"#686de0"}
      />
      <div style={{ overflow: "hidden", height: "100%" }}>
        <iframe
          className="sign-up"
          scrolling="yes"
          title="signup"
          src="https://docs.google.com/forms/d/e/1FAIpQLSe1l1lPIYWP9Wpd0aA0bOTjSVitDO4iYSPvNKmwpBHbvHLo_Q/viewform?embedded=true"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
