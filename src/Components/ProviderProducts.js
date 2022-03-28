import React, { useContext, useReducer, useEffect } from "react";

const productsContext = React.createContext();
const productsContextDispatcher = React.createContext();

// initialProduct & Get localStorage
const initialProduct = [];
const getLocalStorage = JSON.parse(localStorage.getItem("products"));

//initial select Group
export const selectOptions = [
  { value: "aaaaa", label: "Dairy" },
  { value: "aaaa", label: "Vegetables" },
];

const ProviderProducts = ({ children }) => {
  const [product, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        //-------------- addProduct -------------
        case "addProduct": {
          action.event.preventDefault();
          const stringToColour = (str) => {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
              hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            var colour = "#";
            for (var i = 0; i < 3; i++) {
              var value = (hash >> (i * 8)) & 0xff;
              colour += ("00" + value.toString(16)).substr(-2);
            }
            return colour;
          };
          return [
            ...state,
            {
              name: action.event.target.elements.productName.value,
              id: Math.floor(Math.random() * (2001 - 1001) + 1001),
              group: action.selectorEvent.value,
              color: stringToColour(action.selectorEvent.value),
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
