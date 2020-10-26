import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { SearchInput } from "./SearchInput";

export const Header: React.FC = () => {
  return (
    <View>
      <Text style={styles.headerTitle}>Authors</Text>
      <SearchInput />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
    letterSpacing: 0.44,
    lineHeight: 24,
    marginBottom: 8,
  },
});
