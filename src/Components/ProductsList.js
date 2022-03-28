import React, { useEffect, useState } from "react";
import Products from "./Products/Products";
import { useProducts, useProductsAction } from "./ProviderProducts";

const ProductsList = () => {
  const data = useProducts(); // get data with Custom hook
  const dispatch = useProductsAction();

  return (
    <div>
      {console.log(data)}
      {data.length > 0 ? (
        data.map((i) => {
          return (
            <Products
              key={i.id}
              name={i.name}
              onClick={() => dispatch({ type: "deleteProduct", id: i.id })}
            />
          );
        })
      ) : (
        <h3>Empty</h3>
      )}
    </div>
  );
};

export default ProductsList;
