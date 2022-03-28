import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        alt="logo"
        src={require("../../assets/logo.png")}
      />
      <h2 className={styles.title}>Farmer Food Market</h2>
      <img
        className={styles.farmer}
        alt="farmer"
        src={require("../../assets/farmer.png")}
      />
    </div>
  );
};

export default Header;
