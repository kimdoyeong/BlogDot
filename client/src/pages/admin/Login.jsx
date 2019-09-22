import React from "react";
import Title from "../../components/Page/Title";
import SEO from "../../components/Page/SEO";
import LoginPageForm from "../../components/LoginPage/LoginPageForm";

const Admin = () => {
  return (
    <>
      <SEO title="로그인" />
      <Title>로그인</Title>
      <LoginPageForm />
    </>
  );
};

export default Admin;
