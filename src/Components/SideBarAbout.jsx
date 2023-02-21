import React from "react";

import img3 from "../assets/about3.png";
import img4 from "../assets/about4.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";
import about2 from "../assets/about2.png";

const SideBar = () => {
  return (
    <React.Fragment>
      <div>
        <div className="menu">
          <div className="item">
            <span className="whitebg">
              <Link to="/" className="linkstyle">
                <span className="navimg newabout">
                  <span className="text1">Home</span>
                  <img src={HomeIcon} alt="img" />
                </span>
              </Link>
            </span>
          </div>
          <div className="item">
            <span className="whitebg">
              <Link to="/about" className="linkstyle">
                
                <span className="navimg aboutactive">
                  <img src={about2} alt="img" />
                </span>
              </Link>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <span className="navimg bgColor">
                <img src={img3} alt="img" />
              </span>
            </span>
          </div>
          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg bgColor">
                <img src={img4} alt="img" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
