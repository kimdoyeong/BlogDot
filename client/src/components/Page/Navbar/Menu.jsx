import React, { useState } from "react";
import NavbarShape from "./Shape";
import { Motion, spring } from "react-motion";

import style from "./Menu.module.css";
import Title from "../Title";
import MenuItems from "./MenuItems";
const NavbarMenu = ({ close }) => {
  const [toClose, setToClose] = useState(false);
  const element = ({ opacity, y }) => (
    <div className={style.menu} style={{ opacity }}>
      <div className={style.content}>
        <div className={style.close} role="button">
          <div
            className={style.closeIcon}
            onClick={() => {
              setToClose(true);
            }}
          >
            &times;
          </div>
        </div>
        <header
          className={style.header}
          style={{
            transformOrigin: "bottom",
            transform: `scaleY(${y})`
          }}
        >
          <NavbarShape width={100} />
          <Title
            size="h3"
            variant="h1"
            style={{ marginLeft: 20 }}
            ligther
            noMargin
          >
            메뉴
          </Title>
        </header>
        <section
          style={{
            marginTop: 20,
            width: "100%"
          }}
        >
          <MenuItems setClose={setToClose} />
        </section>
      </div>
    </div>
  );
  return (
    <Motion
      defaultStyle={{ opacity: 0, y: 0 }}
      style={{
        opacity: spring(!toClose ? 1 : 0, {
          stiffness: 240
        }),
        y: spring(!toClose ? 1 : 0, { damping: 27, stiffness: 240 })
      }}
      onRest={() => {
        if (toClose) {
          close();
        }
      }}
    >
      {element}
    </Motion>
  );
};

export default NavbarMenu;
