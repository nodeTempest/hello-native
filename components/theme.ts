import { StyleSheet, TextStyle } from "react-native";

export const theme = {
  colors: {
    black: "#000",
    greys: ["#3E262A3D", "#382A2C"],
    green: "#6FCF97",
  },
  fontSizes: [12, 16],
  lineHeights: [16, 24],
  letterSpacing: 0.44,
  fontFamily: "Roboto",
  fontWeight: "400" as TextStyle["fontWeight"],
};

export const globalStyles = StyleSheet.create({
  textNormal: {
    color: theme.colors.black,
    letterSpacing: theme.letterSpacing,
    fontSize: theme.fontSizes[1],
    lineHeight: theme.lineHeights[1],
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeight,
  },
  textSmall: {
    color: theme.colors.greys[1],
    letterSpacing: theme.letterSpacing,
    fontSize: theme.fontSizes[0],
    lineHeight: theme.lineHeights[0],
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeight,
  },
});
