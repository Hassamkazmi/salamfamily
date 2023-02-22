import React, { useState } from "react";

import img3 from "../assets/about3.png";
import img4 from "../assets/about4.png";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeicon.png";
import about2 from "../assets/about2.png";
import AboutSection from "./AboutSection";
import AboutArrange from "./AboutArrange";
import AboutEsg from "./AboutEsg";

const SideBar = () => {
  const [Tabvalue, setTabvalue] = useState("");
  const myfun = (data) => {
    console.log(data, "data");
    setTabvalue(data);
  };

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
                <span
                  className="navimg aboutactive"
                  onClick={() => myfun("about")}
                >
                  <img src={about2} alt="img" />
                </span>
              </Link>
            </span>
          </div>
          <div className="item ">
            <span className="whitebg">
              <span className="navimg bgColor" onClick={() => myfun("arrange")}>
                <img src={img4} alt="img" />
              </span>
            </span>
          </div>
          <div className="item iteminner">
            <span className="whitebg ">
              <span className="navimg bgColor" onClick={() => myfun("esg")}>
                <img src={img3} alt="img" />
              </span>
            </span>
          </div>
        </div>
      </div>

      <Tab value={Tabvalue} />
    </React.Fragment>
  );
};

function Tab({ value }) {
  if (value === "about") {
    return <AboutSection />;
  } else if (value === "arrange") {
    return <AboutArrange />;
  } else if (value === "esg") {
    return <AboutEsg />;
  } else {
    return <AboutSection />;
  }
}
export default SideBar;
