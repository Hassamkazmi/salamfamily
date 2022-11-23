import React from "react";
import Logo from '../assets/PdYUvU.png';
import FaBar from '../assets//Group 6.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <React.Fragment>
        <div className="text-center topheader aboutheader">
            <span>
              <img src={Logo} alt='logo' />
            </span>
            <span>
              <Link to='/'>
              <img src={FaBar} alt='logo' />
              </Link>
            </span>
        </div>
    </React.Fragment>
  )
}
export default Header