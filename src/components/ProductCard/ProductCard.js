import React from 'react';

const ProductCard = (props) =>{
    const 
    return (
        <div className = "Card">
            <div className = "image">
                <img src = {imageLink} alt="image"/>
            </div>
            <div className ="title">
                <h3>{name}</h3>
                <h4>{condition}</h4>
            </div>
            <hr />
            <div className="price">
                <h3>Rs.{offerPrice}</h3>
                <h4>Original Price. {price}</h4>
            </div>
        </div>
    );
}

export default ProductCard;