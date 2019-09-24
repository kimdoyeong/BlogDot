import React, { useState } from "react";

import client from "../../lib/client";
import SEO from "../../components/Page/SEO";
import Editor from "../../components/Editor";
import Title from "../../components/Page/Title";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import { tokenAxiosConfig } from "../../lib/tokenStorage";
import handlingAxiosError from "../../lib/handlingAxiosError";

export default function() {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  function onSubmit(e) {
    e.preventDefault();

    (async () => {
      try {
        const req = await client.post(
          "/v1/post",
          {
            title,
            post
          },
          tokenAxiosConfig()
        );

        console.log(req.data.id);
        alert("글쓰기가 완료되었습니다.");
      } catch (e) {
        handlingAxiosError(e);
      }
    })();
  }
  return (
    <>
      <SEO title="글쓰기" />
      <Title>글쓰기</Title>
      <form onSubmit={onSubmit}>
        <Input inputName="제목" setState={setTitle}></Input>
        <Editor state={setPost} />
        <Button filled>글쓰기</Button>
      </form>
    </>
  );
}
