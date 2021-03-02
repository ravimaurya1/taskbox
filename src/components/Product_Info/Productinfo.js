import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const Productinfo = (props) => {
  const pinfo = gql`
    query{
      info(${props.pid}){
        title
      }
    }
  `;

  return (
    <div className="Productinfo">
      <div className="header">
        <h1></h1>
      </div>
    </div>
  );
};

export default Productinfo;
