import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { SearchInput } from "./SearchInput";

import { globalStyles } from "./theme";

export const Header: React.FC = () => {
  return (
    <View>
      <Text style={[globalStyles.textNormal, styles.headerTitle]}>Authors</Text>
      <SearchInput />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    marginBottom: 8,
  },
});
