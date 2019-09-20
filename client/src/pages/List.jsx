import React from "react";
import Title from "../components/Page/Title";
import PostList from "../components/PostList";
import SEO from "../components/Page/SEO";

const ListPage = () => {
  return (
    <>
      <SEO title="글 목록" />
      <Title>글 목록</Title>
      <PostList
        data={[
          {
            title: "hi",
            contents:
              "Eveniet accusamus et sit quae eum. Sed ab accusamus sunt quaerat amet. Voluptatibus culpa nobis necessitatibus consequatur iusto dicta. Neque perferendis nobis corrupti similique iste et enim dignissimos. Quo voluptas delectus voluptas qui neque sunt. Sed assumenda velit delectus et exercitationem. Quo repellendus odit. Soluta dolor est quia ut. Quibusdam et veritatis quae blanditiis sit minima. Sit nam voluptate quia quia ab."
          }
        ]}
      />
    </>
  );
};
export default ListPage;
