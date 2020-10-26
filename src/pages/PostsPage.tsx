import React from "react";

import { PostsContainer, Header, RootContainer } from "../components";

export const PostsPage: React.FC = () => {
  return (
    <RootContainer>
      <Header />
      <PostsContainer />
    </RootContainer>
  );
};
