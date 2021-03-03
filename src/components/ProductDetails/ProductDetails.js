import React from "react";
import "./ProductDetails.css";
import { useQuery, gql } from "@apollo/client";

const QUEST = gql`
  query quest($id: ID!) {
    info(id: $id) {
      question_ans {
        heading
        description
      }
    }
  }
`;

const ProductDetails = (props) => {
  const { loading, error, data } = useQuery(QUEST, {
    variables: { id: props.pid },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  const question = data.info.question_ans;
  return (
    <div className="Details">
      <div className="question">
        <h2>QUESTIONS ABOUT THIS PRODUCT</h2>
        <div className="question1">
          <h3>{question[0].heading}</h3>
          <p>{question[0].description}</p>
        </div>
        <div className="question2">
          <h3>{question[1].heading}</h3>
          <p>{question[1].description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
