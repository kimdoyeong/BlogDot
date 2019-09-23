import React, { useState } from "react";
import SEO from "../../components/Page/SEO";
import ValidationCode from "../../components/SignUpPage/ValidationCode";
import SignUpForm from "../../components/SignUpPage/SignUpForm";

const SignUp = () => {
  const [validated, setValidated] = useState(false);

  return (
    <>
      <SEO title="회원가입" />
      {validated ? (
        <SignUpForm />
      ) : (
        <ValidationCode setState={setValidated}></ValidationCode>
      )}
    </>
  );
};

export default SignUp;
