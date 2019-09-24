import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import client from "../../lib/client";

import Input from "../Form/Input";
import Button from "../Form/Button";
import handlingAxiosError from "../../lib/handlingAxiosError";

const SignUpForm = ({ code }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwacc, setPwacc] = useState("");
  const [username, setUsername] = useState("");
  const [redirect, setRedirect] = useState(false);

  function pwCompare(v) {
    if (v !== pw) {
      return [false, "비밀번호와 같지 않습니다."];
    }
    return null;
  }
  function onSubmit(e) {
    e.preventDefault();
    if (!id || !pw || !pwacc || !username) {
      alert("빈 필드가 있습니다.");
      return;
    }

    (async () => {
      try {
        await client.post("/v1/user", {
          id,
          pw,
          username,
          code
        });
        setRedirect(true);
      } catch (e) {
        handlingAxiosError(e);
      }
    })();
  }
  return (
    <form onSubmit={onSubmit}>
      {redirect && <Redirect to="/admin/login" />}
      <Input type="text" inputName="아이디" setState={setId} />
      <Input type="password" inputName="비밀번호" setState={setPw} />
      <Input
        type="password"
        inputName="비밀번호 확인"
        setState={setPwacc}
        message={pwCompare}
      />
      <Input type="text" inputName="유저 이름" setState={setUsername} />
      <Button filled>회원가입</Button>
    </form>
  );
};

export default SignUpForm;
