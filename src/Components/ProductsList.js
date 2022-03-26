import React, { useEffect } from "react";
import Products from "./Products/Products";
import { useProducts, useProductsAction } from "./ProviderProducts";

const ProductsList = () => {
  const data = useProducts(); // get data with Custom hook
  const dispatch = useProductsAction();

  //GET localStorage
  useEffect(() => {
    console.log("get local");
    const items = JSON.parse(localStorage.getItem("products"));
    if (items) {
      console.log(items);
      return items;
    }
  }, []);

  //SET localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(data));
  }, [data]);

  return (
    <div>
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
