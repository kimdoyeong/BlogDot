import React, { useState } from "react";
import style from "./Input.module.css";

const Input = ({ inputName, setState, message, ...props }) => {
  const [msg, setMsg] = useState(message ? [] : null);
  const inputSettings = {
    onChange: setState
      ? e => {
          setState(e.target.value);
          message && setMsg(message(e.target.value));
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
        {msg && <div style={{ color: msg[0] ? "green" : "red" }}>{msg[1]}</div>}
      </div>
    );
  }
  return inputElement;
};
export default Input;
