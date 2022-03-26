import React, { useRef, useEffect } from "react";
import { useProducts, useProductsAction } from "../ProviderProducts";

const ManagementBar = () => {
  const clearInput = useRef();

  const data = useProducts();
  const dispatch = useProductsAction();

  const submitHandler = (e) => {
    dispatch({ type: "addProduct", event: e });
  };

  useEffect(() => {
    clearInput.current.value = "";
  }, [data]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Product Name..."
          name="productName"
          ref={clearInput}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default ManagementBar;
