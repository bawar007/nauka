import React from "react";

const Product = (props) => {
  return (
    <div>
      <h3>{props.id.toUpperCase()}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        aliquid dolores fugit maiores quam rem. Nisi dignissimos esse fugit
        quisquam vitae voluptas iure cumque at iusto doloribus. Magni, ipsum
        sapiente.
      </p>
    </div>
  );
};

export default Product;
