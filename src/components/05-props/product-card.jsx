import React from "react";
import "./products-card.scss";

const ProductCard = (props) => {

  /*
  Buradaki props.children ifadesi componentin icindeki bilgiyi verir.

  */


  return (
    <div>
      <div className="product-card">
        <h3>{props.title}</h3>
        <p>{props.children}</p>
        <h5>${props.price}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
