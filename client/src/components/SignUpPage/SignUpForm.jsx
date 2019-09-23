import React from "react";
import Input from "../Form/Input";

const SignUpForm = () => {
  return (
    <form>
      <Input type="text" inputName="아이디" />
      <Input type="password" inputName="비밀번호" />
      <Input type="password" inputName="비밀번호 확인" />
      <Input type="text" inputName="유저 이름" />
    </form>
  );
};

export default SignUpForm;
