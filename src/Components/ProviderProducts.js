import React, { useContext, useReducer, useEffect, useState } from "react";

const productsContext = React.createContext();
const productsContextDispatcher = React.createContext();

const initialProducts = [];

const ProviderProducts = ({ children }) => {
  const [product, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "addProduct":
        action.event.preventDefault();
        return [
          ...state,
          {
            name: action.event.target.elements.productName.value,
            id: Math.floor(Math.random() * (2001 - 1001) + 1001),
          },
        ];
      case "deleteProduct":
        const filter = state.filter((i) => {
          return i.id !== action.id;
        });
        return filter;
      default:
        return state;
    }
  }, initialProducts);

  return (
    <productsContext.Provider value={product}>
      <productsContextDispatcher.Provider value={dispatch}>
        {children}
      </productsContextDispatcher.Provider>
    </productsContext.Provider>
  );
};

export default ProviderProducts;

export const useProducts = () => {
  return useContext(productsContext);
};
export const useProductsAction = () => {
  return useContext(productsContextDispatcher);
};
