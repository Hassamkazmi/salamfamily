import React from "react";
import Logo from "../assets/PdYUvU.png";
import FaBar from "../assets//Group 6.png";
const Header = ({ show, setshow }) => {
  return (
    <React.Fragment>
      <div className="text-center topheader aboutheader">
        <span>
          <img src={Logo} alt="logo" />
        </span>
        <span onClick={() => setshow(true)}>
          <img src={FaBar} alt="logo" />
        </span>
      </div>
    </React.Fragment>
  );
};
export default Header;
