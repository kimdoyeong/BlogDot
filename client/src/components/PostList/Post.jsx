import React from "react";
import Title from "../Page/Title";
import style from "./Post.module.css";

const Post = ({ title, contents }) => {
  const MAX = 140;
  const contents_text =
    contents.length > MAX ? contents.slice(0, MAX) + "..." : contents;
  return (
    <div className={style.wrap}>
      <Title size="h4" variant="h3" noMargin>
        {title}
      </Title>
      <p>{contents_text}</p>
    </div>
  );
};

export default Post;
