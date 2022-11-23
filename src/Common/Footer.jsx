import React from "react";
import CallImg from '../assets/Phone.png'
import ChatImg from '../assets/Chat Room (1).png'
import CalculateImg from '../assets/Chat Room.png'


const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid text-center footerbottom">
        <div className="row">
          <div className="col call_btn">
            <img src={CallImg} alt="call" />
            <p>Call</p>
          </div>
          <div className="col-5 Calculate_btn">
          <img src={CalculateImg} alt="call" />
            <p>Calculate</p>
          </div>
          <div className="col Chat_btn">
          <img src={ChatImg} alt="call" />
            <p>Chat</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;