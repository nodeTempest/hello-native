import React from "react";

import { AuthorsContainer, Header, RootContainer } from "../components";

export const AuthorsPage: React.FC = () => {
  return (
    <RootContainer>
      <Header />
      <AuthorsContainer />
    </RootContainer>
  );
};
