import React, { useState } from "react";
import style from "./index.module.css";
import marked from "marked";
const Editor = ({ state }) => {
  const [mark, setMark] = useState("");
  function onChange(e) {
    const value = e.target.value;
    state(value);
    setMark(marked(value));
  }
  return (
    <div className={style.wrap}>
      <textarea
        className={style.editor}
        onChange={onChange}
        onKeyDown={e => {
          if (e.keyCode === 9) {
            e.preventDefault();
          }
        }}
      ></textarea>
      <div
        className={style.preview}
        dangerouslySetInnerHTML={{ __html: mark }}
      ></div>
    </div>
  );
};

export default Editor;
