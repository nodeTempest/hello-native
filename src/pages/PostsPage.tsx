import React from "react";
import { View, StyleSheet } from "react-native";

import { PostsContainer, Header } from "../components";

export const PostsPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <PostsContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 18,
  },
});
