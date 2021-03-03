import React from "react";
import { useQuery, gql } from "@apollo/client";

const SIMILAR_PROD = gql`
  query similar_prod($id: ID!) {
    similarProduct(id: $id)
  }
`;

const SimilarProducts = (props) => {
  const { loading, error, data } = useQuery(SIMILAR_PROD, {
    variables: { id: props.pid },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  console.log(data.similarProduct);
  return <div className="ProductsList"></div>;
};

export default SimilarProducts;
