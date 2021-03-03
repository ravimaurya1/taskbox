import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "./Productinfo.css";

const PROD_INFO = gql`
  query prod_info($id: ID!) {
    info(id: $id) {
      title
      condition
      price
      availability
      offerPrice
      name
    }
  }
`;
const Productinfo = (props) => {
  const { loading, error, data } = useQuery(PROD_INFO, {
    variables: { id: props.pid },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  const { name, condition, offerPrice, price, title } = data.info;
  return (
    <div className="Productinfo">
      <div className="header">
        <h2>{name}</h2>
        <h3>Condition. {condition}</h3>
        <hr />
      </div>
      <div className="BuyNow">
        <h2>Rs. {offerPrice}</h2>
        <h4>Est original Rs.{price}</h4>
        <button className="BuyNowButton">BUY NOW</button>
      </div>
    </div>
  );
};

export default Productinfo;
