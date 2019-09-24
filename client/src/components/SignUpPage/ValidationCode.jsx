import React, { useState } from "react";
import Input from "../Form/Input";
import Title from "../Page/Title";
import Button from "../Form/Button";
import client from "../../lib/client";
import handlingAxiosError from "../../lib/handlingAxiosError";

const ValidationCode = ({ setState, setCodeState }) => {
  const [code, setCode] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    client
      .get("/v1/code/" + code)
      .then(() => {
        setCodeState(code);
        setState(true);
      })
      .catch(e => {
        handlingAxiosError(e);
      });
  }
  return (
    <form onSubmit={onSubmit}>
      <Title size="h3" variant="h1">
        코드를 입력하세요.
      </Title>
      <Input type="code" inputName="코드" setState={setCode} />
      <Button filled>확인</Button>
    </form>
  );
};

export default ValidationCode;
