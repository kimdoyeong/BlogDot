import React, { useState } from "react";
import SEO from "../../components/Page/SEO";
import ValidationCode from "../../components/SignUpPage/ValidationCode";
import SignUpForm from "../../components/SignUpPage/SignUpForm";

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [code, setCode] = useState("");

  return (
    <>
      <SEO title="회원가입" />
      {validated ? (
        <SignUpForm code={code} />
      ) : (
        <ValidationCode
          setState={setValidated}
          setCodeState={setCode}
        ></ValidationCode>
      )}
    </>
  );
};

export default SignUp;
