import React from "react";
import ReactImageMagnify from "react-image-magnify";
import { useQuery, gql } from "@apollo/client";
import "./Magnifier.css";

const PROD_INFO = gql`
  query prod_info($id: ID!) {
    info(id: $id) {
      imageLinks
      name
    }
  }
`;

const Magnifier = (props) => {
  const { loading, error, data } = useQuery(PROD_INFO, {
    variables: { id: props.pid },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  console.log(data);
  let imagelink = data.info.imageLinks[0];
  return (
    <div className="perimeter">
      <div className="image">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: data.info.name,
              isFluidWidth: true,
              src: imagelink,
              sizes:
                "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw",
            },
            largeImage: {
              alt: data.info.name,
              src: imagelink,
              width: 1200,
              height: 1800,
            },
            isHintEnabled: true,
          }}
        />
      </div>
    </div>
  );
};

export default Magnifier;
