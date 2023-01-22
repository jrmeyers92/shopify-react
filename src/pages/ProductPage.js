import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const ProductPage = () => {
  const { handle } = useParams();
  const { fetchProdcutWithHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProdcutWithHandle(handle);
  }, [fetchProdcutWithHandle, handle]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductPage;
