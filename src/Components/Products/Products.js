import React from "react";
import styles from "../Products/Products.module.scss";
const Products = ({ name, onClick }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.name_product}>{name}</h3>
      <h4 className={styles.delete_product} onClick={onClick}>
        X
      </h4>
    </div>
  );
};

export default Products;
