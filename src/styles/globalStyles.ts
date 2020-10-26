import { StyleSheet, TextStyle } from "react-native";

import { theme } from "./theme";

export const globalStyles = StyleSheet.create({
  textNormal: {
    color: theme.colors.black,
    letterSpacing: theme.letterSpacing,
    fontSize: theme.fontSizes[1],
    lineHeight: theme.lineHeights[1],
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeights[0],
  },
  textSmall: {
    color: theme.colors.greys[1],
    letterSpacing: theme.letterSpacing,
    fontSize: theme.fontSizes[0],
    lineHeight: theme.lineHeights[0],
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeights[0],
  },
});
