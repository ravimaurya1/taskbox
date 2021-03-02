import React from "react";
import ReactImageMagnify from "react-image-magnify";
import "./Magnifier.css";

const Magnifier = () => {
  return (
    <div className="perimeter">
      <div className="image">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: `https://img8.gozefo.com/p/1/5/7/3/0/3/5/2/9/5/1/5/0/5/4/7/6/4/1/0.jpg`,
              sizes:
                "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw",
            },
            largeImage: {
              alt: "",
              src: `https://img8.gozefo.com/p/1/5/7/3/0/3/5/2/9/5/1/5/0/5/4/7/6/4/1/0.jpg`,
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
