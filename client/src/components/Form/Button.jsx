import React from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.css";

const Button = ({ children, filled, to, ...props }) => {
  const Tag = to ? Link : "button";
  if (to) {
    props.to = to;
  }
  return (
    <Tag
      className={[style.button, filled && style.filled]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
