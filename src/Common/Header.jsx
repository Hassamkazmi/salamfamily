import React from "react";
import Logo from '../assets/PdYUvU.png';
import FaBar from '../assets//Group 6.png'

const Header = () => {
  return (
    <React.Fragment>
        <div className="container-fluid text-center topheader">
            <span>
              <img src={Logo} alt='logo' />
            </span>
            <span>
              <img src={FaBar} alt='logo' />
            </span>
        </div>
    </React.Fragment>
  )
}
export default Header