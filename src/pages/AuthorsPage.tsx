import React from "react";
import { StatusBar } from "react-native";

import { AuthorsContainer, Header, RootContainer } from "../components";
import { theme } from "../styles";

export const AuthorsPage: React.FC = () => {
  return (
    <RootContainer>
      <StatusBar backgroundColor={theme.colors.greys[0]} />
      <Header />
      <AuthorsContainer />
    </RootContainer>
  );
};
