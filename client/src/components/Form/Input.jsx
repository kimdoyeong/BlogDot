import React from "react";
import style from "./Input.module.css";

const Input = ({ inputName, setState, ...props }) => {
  const inputSettings = {
    onChange: setState
      ? e => {
          setState(e.target.value);
        }
      : null
  };
  const inputElement = (
    <input className={style.input} {...inputSettings} {...props}></input>
  );
  if (inputName) {
    return (
      <div className={style.wrap}>
        <label>
          <div>{inputName}</div>
          {inputElement}
        </label>
      </div>
    );
  }
  return inputElement;
};
export default Input;
