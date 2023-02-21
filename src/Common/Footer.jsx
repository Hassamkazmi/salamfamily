import React from "react";
import BuyNow from "../assets/Buy.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid text-center footerbottom">
        <div className="row">
          <div className="col call_btn">
            <button>
              <img src={BuyNow} alt="call" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
