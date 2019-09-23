import React from "react";
import Input from "../Form/Input";
import Title from "../Page/Title";
import Button from "../Form/Button";

const ValidationCode = ({ setState }) => {
  function onSubmit() {
    //validation
    setState(true);
  }
  return (
    <form onSubmit={onSubmit}>
      <Title size="h3" variant="h1">
        코드를 입력하세요.
      </Title>
      <Input type="code" inputName="코드" />
      <Button filled>확인</Button>
    </form>
  );
};

export default ValidationCode;
