import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import client from "../../lib/client";
import Input from "../Form/Input";
import Button from "../Form/Button";
import handlingAxiosError from "../../lib/handlingAxiosError";
import { setToken, getToken } from "../../lib/tokenStorage";

const LoginPageForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (getToken()) {
      setRedirect(true);
      return;
    }
  }, []);
  function onSubmit(e) {
    e.preventDefault();
    (async () => {
      try {
        const req = await client.post("/v1/token", { id, pw });
        setToken(req.data.token);
        setRedirect(true);
      } catch (e) {
        handlingAxiosError(e);
      }
    })();
  }
  return (
    <form onSubmit={onSubmit}>
      {redirect && <Redirect to="/admin"></Redirect>}
      <Input inputName="아이디" setState={setId} />
      <Input inputName="비밀번호" type="password" setState={setPw} />
      <Button filled>로그인</Button>
    </form>
  );
};

export default LoginPageForm;
