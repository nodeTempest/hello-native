import React from "react";
import { StyleSheet, Text, View, TextInputProps } from "react-native";

import { SearchInput } from "./SearchInput";

import { globalStyles } from "../styles";

interface IHeaderProps {
  OnSearchInput: TextInputProps["onChangeText"];
  title: string;
}

export const Header: React.FC<IHeaderProps> = ({ OnSearchInput, title }) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.textNormal, styles.headerTitle]}>{title}</Text>
      <SearchInput OnSearchInput={OnSearchInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  headerTitle: {
    marginBottom: 8,
  },
});
