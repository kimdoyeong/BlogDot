import React from "react";
import { StaggeredMotion, spring } from "react-motion";
import MenuItem from "./MenuItem";
import { getToken } from "../../../lib/tokenStorage";

const menus = [
  {
    to: "/",
    text: "글 목록"
  },
  getToken() && {
    to: "/admin",
    text: "관리자 페이지"
  }
].filter(d => typeof d === "object" && !!d);

const MenuItems = ({ setClose }) => {
  const defaultStyles = menus.map(() => ({ y: 0, opacity: 0 }));

  const styles = styles => {
    return styles.map((_, i) => {
      return i === 0 ? { y: spring(1) } : { y: spring(styles[i - 1].y) };
    });
  };
  const element = styles => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {styles.map(({ y }, i) => (
        <MenuItem
          to={menus[i].to}
          key={i}
          style={{
            transformOrigin: "bottom",
            transform: `scaleY(${y})`
          }}
          setClose={setClose}
        >
          {menus[i].text}
        </MenuItem>
      ))}
    </div>
  );

  return (
    <StaggeredMotion defaultStyles={defaultStyles} styles={styles}>
      {element}
    </StaggeredMotion>
  );
};

export default MenuItems;
