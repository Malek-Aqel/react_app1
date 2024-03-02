import React from "react";

export default function Product(props) {//probs is object that caries data came from the father and give it to the child
  return (
    <>
      <div className="col-md-4">
        <div className="product">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </>
  );
}
