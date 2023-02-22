import React from "react";

const BuyNow = () => {
  return (
    <div className="buyNowMain">
      <div className="buyNowHeader">
        <h4> Customer information </h4>
      </div>
      <div className="innerbuyNow">
        <form>
          <input placeholder="First Name" />

          <input placeholder="First Name" />

          <input placeholder="First Name" />

          <input placeholder="First Name" />
          <div className="footerbottom">
            <button>Back </button> <button>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyNow;
