import React from "react";
import ReactImageMagnify from "react-image-magnify";

const ProductImage = (props) => {
  return (
    <div className="Imagemagnifier">
      <ReactImageMagnify
        {...{
          smallImage: {
            isFluidWidth: true,
            src:
              "https://img8.gozefo.com/p/1/5/7/3/0/3/5/2/9/5/1/5/0/5/4/7/6/4/1/0.jpg",
          },
          largeImage: {
            src:
              "https://img8.gozefo.com/p/1/5/7/3/0/3/5/2/9/5/1/5/0/5/4/7/6/4/1/0.jpg",
            widht: 600,
            height: 800,
          },
        }}
      />
    </div>
  );
};

export default ProductImage;
