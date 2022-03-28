import React from "react";
import Products from "./Products/Products";
import {
  useProducts,
  useProductsAction,
  selectOptions,
} from "./ProviderProducts";
import styles from "./ProductsList.module.scss";

const ProductsList = () => {
  const data = useProducts(); // get data with Custom hook
  const dispatch = useProductsAction();

  return (
    <div className={styles.container}>
      <div className={styles.containerTwo}>
        {data.length > 0 ? (
          data.map((i) => {
            return (
              <Products
                //   className={styles.box}
                setColorClassName={{
                  backgroundColor: `${i.color}`,
                  minWidth: "160px",
                  borderRadius: "0.6rem",
                  margin: "0.3rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
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
    </div>
  );
};

export default ProductsList;
