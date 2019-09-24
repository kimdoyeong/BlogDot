import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Title from "../../components/Page/Title";
import Card from "../../components/Card";
import CardList from "../../components/Card/CardList";
import Button from "../../components/Form/Button";
import SEO from "../../components/Page/SEO";
import { getToken } from "../../lib/tokenStorage";
export default function() {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (!getToken()) {
      setRedirect(true);
    }
  }, []);
  return (
    <>
      {redirect && <Redirect to="/admin/login"></Redirect>}
      <SEO title="관리자"></SEO>
      <Title>관리자 페이지</Title>
      <CardList>
        <Card>
          <Title size="h3">글쓰기</Title>
          <Button to="/admin/write">글쓰기</Button>
        </Card>
      </CardList>
    </>
  );
}
