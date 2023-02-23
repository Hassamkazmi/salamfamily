import React, { Fragment, useState } from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

const BuyNow = () => {
  const navigate = useNavigate();

  const [show, setshow] = useState(false);

  return (
    <Fragment>
      <div className="buyNowMain">
        {!show ? (
          <>
            {" "}
            <Fade left>
              <div className="buyNowHeader">
                <h4> Customer information </h4>
              </div>
              <div className="innerbuyNow">
                <div className="form">
                  <input placeholder="First Name" />

                  <input placeholder="Last Name" />

                  <input placeholder="Gender" />

                  <input placeholder="Date of Birth" />
                  <div className=" formSubmit">
                    <button onClick={() => navigate("/")}>Back </button>

                    <button onClick={() => setshow(true)}>Next</button>
                  </div>
                </div>
              </div>
            </Fade>
          </>
        ) : (
          <Fade right>
            <div className="buyNowHeader">
              <h4> Plan Information </h4>
            </div>

            <div className="innerbuyNow">
              <div className="form">
                <input placeholder="Contribution" />

                <input placeholder="Contribution Frequency" />

                <input placeholder="Cover Multiple" />

                <input placeholder="Contribution Term" />
                <input placeholder="Benefit Term" />
                <input placeholder="Face Value" />

                <div className=" formSubmit">
                  <button onClick={() => setshow(false)}> back</button>
                  <button onClick={() => setshow(true)}>Submit</button>
                </div>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </Fragment>
  );
};

export default BuyNow;
