import React from "react";
import style from "./index.module.css";
import Post from "./Post";
const PostList = ({ data }) => {
  return (
    <div className={style.list}>
      {data.map((data, i) => (
        <Post key={i} {...data} />
      ))}
    </div>
  );
};

export default PostList;
