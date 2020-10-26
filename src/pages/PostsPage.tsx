import React from "react";
import { StatusBar } from "react-native";

import { PostsContainer, Header, RootContainer } from "../components";
import { theme } from "../styles";

export const PostsPage: React.FC = () => {
  return (
    <RootContainer>
      <StatusBar backgroundColor={theme.colors.greys[0]} />
      <Header />
      <PostsContainer />
    </RootContainer>
  );
};
