import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = () => {
  let params = useParams();

  return (
    <>
      <div>
        Strona produktu
        <Product id={params.id} />
        <Link to="/products">Powrót do listy produktów</Link>
      </div>
    </>
  );
};

export default ProductPage;
