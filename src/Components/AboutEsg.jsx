import React from "react";
import { Fade } from "react-reveal";
import CeoImg from "../assets/Ceo.jpg";

const AboutEsg = () => {
  return (
    <Fade bottom>
      <div className="AboutEsg">
        <div>
          <img src={CeoImg} alt="" />
        </div>
        <div className="AboutEsgContent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <div className="AboutEsgContent">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        </div>
      </div>
    </Fade>
  );
};

export default AboutEsg;
