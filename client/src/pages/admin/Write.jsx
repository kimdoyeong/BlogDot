import React, { useState } from "react";
import { Redirect } from "react-router-dom";

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
  const [postID, setPostID] = useState("");
  const [redirect, setRedirect] = useState(null);
  function onSubmit(e) {
    e.preventDefault();

    (async () => {
      try {
        const req = await client.post(
          "/v1/post",
          {
            title,
            post,
            id: postID
          },
          tokenAxiosConfig()
        );

        alert("글쓰기가 완료되었습니다.");
        setRedirect(req.data.id);
      } catch (e) {
        handlingAxiosError(e);
      }
    })();
  }
  return (
    <>
      {redirect && <Redirect to={"/post/" + redirect}></Redirect>}
      <SEO title="글쓰기" />
      <Title>글쓰기</Title>
      <form onSubmit={onSubmit}>
        <Input inputName="제목" setState={setTitle}></Input>
        <Input inputName="게시글 아이디(선택)" setState={setPostID}></Input>
        <Editor state={setPost} />
        <Button filled>글쓰기</Button>
      </form>
    </>
  );
}
