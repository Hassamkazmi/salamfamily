import React from "react";
import { Fade } from "react-reveal";

const ProductFeatures = () => {
  return (
    <Fade bottom>
      <div className="section features">
        <h3>Unique Product Features</h3>
        <ul>
          <li>Supercharge your investments with 100% allocation </li>
          <li>Bonus bonanza: 15% in Year 5, 20% in Year 10 </li>
          <li> Flexible, stress-free contribution payments </li>
          <li>Limitless access to funds, no withdrawal fees </li>
          <li> Zero bid-offer charges, No Wakala </li>
        </ul>
      </div>
    </Fade>
  );
};

export default ProductFeatures;
