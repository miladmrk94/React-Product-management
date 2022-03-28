import React, { useContext, useReducer, useEffect } from "react";

const productsContext = React.createContext();
const productsContextDispatcher = React.createContext();

// initialProduct & Get localStorage
const initialProduct = [];
const getLocalStorage = JSON.parse(localStorage.getItem("products"));

//initial select Group
export const selectOptions = [
  { value: "", label: "one" },
  { value: "two", label: "two" },
];

const ProviderProducts = ({ children }) => {
  const [product, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        //-------------- addProduct -------------
        case "addProduct": {
          action.event.preventDefault();
          return [
            ...state,
            {
              name: action.event.target.elements.productName.value,
              id: Math.floor(Math.random() * (2001 - 1001) + 1001),
              group: action.selectorEvent.value,
            },
          ];
        }
        //-------------- deleteProduct -------------
        case "deleteProduct": {
          const filter = state.filter((i) => {
            return i.id !== action.id;
          });
          return filter;
        }

        default:
          return state;
      }
    },
    getLocalStorage === null ? initialProduct : getLocalStorage
  );

  //SET localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(product));
  }, [product]);

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
