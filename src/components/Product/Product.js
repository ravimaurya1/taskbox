import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import Productinfo from "../Product_Info/Productinfo";
import Magnifier from "../Magnifier/Magnifier";
import "./Product.css";

const Product = () => {
  const [pid, setPid] = useState(401949);
  return (
    <div className="Product">
      <div className="ProductInfo">
        <div className="ProductImage">
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
