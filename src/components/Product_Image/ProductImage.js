import React from "react";
import ReactImageMagnify from "react-image-magnify";

const ProductImage = (props) => {
  return (
    <div className="Imagemagnifier">
      <ReactImageMagnify
        {...{
          smallImage: {
            src:
              "https://img8.gozefo.com/p/1/5/7/3/0/3/5/2/9/5/1/5/0/5/4/7/6/4/1/0.jpg",
            width: 300,
            height: 400,
          },
          largeImage: {
            src:
              "https://img8.gozefo.com/p/1/5/7/3/0/3/5/2/9/5/1/5/0/5/4/7/6/4/1/0.jpg",
            widht: 500,
            height: 700,
          },
          lensStyle: {
            background: "hsla(0, 0%, 100%, .3)",
            border: "1px solid #ccc",
          },
        }}
      />
    </div>
  );
};

export default ProductImage;
