import React from "react";
import Title from "../components/Page/Title";
import SEO from "../components/Page/SEO";
import client from "../lib/client";

const Post = ({ error, title, article }) => {
  return (
    <>
      <SEO title={title}></SEO>
      <article>
        {!error ? (
          <>
            <Title>{title}</Title>
            {article}
          </>
        ) : (
          <div>Error! {Error}</div>
        )}
      </article>
    </>
  );
};

Post.getInitialProps = async () => {
  try {
    //const req = await client.get('/v1/post/')
  } catch (e) {}
};
