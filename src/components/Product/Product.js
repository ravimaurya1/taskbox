import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import Productinfo from "../Product_Info/Productinfo";
import Magnifier from "../Magnifier/Magnifier";

const Product = () => {
  const [pid, setPid] = useState(401949);
  return (
    <div className="Product">
      <div className="Product Info">
        <div className="Product Image">
          <Magnifier pid={pid} />
        </div>
        <div className="Info">
          <Productinfo pid={pid} />
        </div>
      </div>
    </div>
  );
};

export default Product;
