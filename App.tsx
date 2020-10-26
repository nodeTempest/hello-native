import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./src/components/Header";
import { AuthorsContainer } from "./src/components/AuthorsContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AuthorsContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 18,
  },
});
