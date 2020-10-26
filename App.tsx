import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 18,
  },
});
