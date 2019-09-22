import React, { useState } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";

const LoginPageForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(id, pw);
  }
  return (
    <form onSubmit={onSubmit}>
      <Input inputName="아이디" setState={setId} />
      <Input inputName="비밀번호" type="password" setState={setPw} />
      <Button filled>로그인</Button>
    </form>
  );
};

export default LoginPageForm;
