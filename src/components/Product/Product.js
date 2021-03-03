import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import Productinfo from "../Product_Info/Productinfo";
import Magnifier from "../Magnifier/Magnifier";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import "./Product.css";

const Product = () => {
  const [pid, setPid] = useState(284074);
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
      <div className="SimilarProducts">
        <SimilarProducts pid={pid} setPid={setPid} />
      </div>
    </div>
  );
};

export default Product;
