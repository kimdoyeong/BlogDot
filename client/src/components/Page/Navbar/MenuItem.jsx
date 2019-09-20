import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuItem.module.css";

const MenuItem = ({ to, children, style, setClose }) => (
  <div style={style} className={styles.wrap}>
    <Link
      to={to}
      className={styles.link}
      onClick={() => {
        setClose(true);
      }}
    >
      {children}
    </Link>
  </div>
);

export default MenuItem;
