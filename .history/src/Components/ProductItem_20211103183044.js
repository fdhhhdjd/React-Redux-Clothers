import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = () => {
  const dispatch = useDispatch();
  const { currentItem } = useSelector((state) => state.data);
  console.log(currentItem);
  return (
    <>
      <h1>oke tai </h1>
    </>
  );
};

export default ProductItem;
