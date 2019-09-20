import React, { useState } from "react";
import style from "./index.module.css";
import NavbarMenu from "./Menu";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <div className={style.wrap}>
        <div
          className={style.menuIcon}
          role="button"
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {openMenu && (
        <NavbarMenu
          close={() => {
            setOpenMenu(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
