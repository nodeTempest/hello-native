import { fromPairs } from "lodash";
import React from "react";
import { View, StyleSheet } from "react-native";

import { AuthorsContainer, Header } from "../components";

export const AuthorsPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <AuthorsContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 18,
  },
});
