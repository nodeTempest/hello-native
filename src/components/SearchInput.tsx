import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import Svg, { Path } from "react-native-svg";

import { theme, globalStyles } from "../styles";

interface ISearchInputProps {
  OnSearchInput: TextInputProps["onChangeText"];
}

export const SearchInput: React.FC<ISearchInputProps> = ({ OnSearchInput }) => {
  return (
    <View style={styles.container}>
      <Svg
        style={styles.icon}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <Path
          d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z"
          fill="#382A2C"
        />
      </Svg>
      <TextInput
        style={[globalStyles.textNormal, styles.input]}
        placeholder="Search"
        onChangeText={OnSearchInput}
      />
    </View>
  );
};

const iconMarginHorizontal = 8;
const iconTotalWidth = 18 + 2 * iconMarginHorizontal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    backgroundColor: theme.colors.greys[0],
    paddingLeft: iconTotalWidth,
    marginLeft: -iconTotalWidth,
    flex: 1,
    borderRadius: 4,
    paddingVertical: 4,
    color: theme.colors.greys[1],
  },
  icon: {
    marginHorizontal: iconMarginHorizontal,
  },
});
