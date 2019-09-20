import React from "react";
import Navbar from "../Navbar";
import style from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={style.layout}>{children}</main>
    </>
  );
};

export default Layout;
