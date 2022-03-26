import React from "react";
import { useProductsAction } from "./ProviderProducts";
const Test = () => {
  const dipatch = useProductsAction();
  return (
    <div>
      <button onClick={() => dipatch({ type: "ok" })}>OKKKK</button>
    </div>
  );
};

export default Test;
