import React from "react";
import Product from "./Product";

export default function Products() {
  const products = [
    //array of objects
    { id: 1, title: "product one", desc: "this is product one", price: 1000},
    { id: 2, title: "product two", desc: "this is product two", price: 2000},
    { id: 3, title: "product three", desc: "this is product three", price: 3000},
  ];

  return (
    <>
      <div className="row">
        {products.map((product) => {
          //map to return everything using arrow function, when map we should send uniqe  key for each element in array
          return <Product {...product} key={product.id} />;
          //above using spreed  operator to pass all the properties of each object insted of below code
          //title={product.title} desc={product.desc} key={product.id}
        })}
      </div>
    </>
  );
}
