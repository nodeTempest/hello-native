import React from "react";
import { View, StyleSheet } from "react-native";

export const RootContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 18,
  },
});
