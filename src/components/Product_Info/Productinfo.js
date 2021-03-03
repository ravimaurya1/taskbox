import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const PROD_INFO = gql`
  query info($id: ID) {
    title
    description
    price
  }
`;

const Productinfo = (props) => {
  const { loading, error, data } = useQuery(PROD_INFO, {
    variables: { id: props.pid },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  {
    console.log(data);
  }
  return (
    <div className="Productinfo">
      <div className="header">
        <h1></h1>
      </div>
    </div>
  );
};

export default Productinfo;
