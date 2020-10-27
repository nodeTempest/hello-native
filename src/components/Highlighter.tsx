import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface IHighlighterProps {
  children: string;
  highlightText: string;
  style?: TextStyle;
  highlightStyle?: TextStyle;
}

export const Highlighter: React.FC<IHighlighterProps> = ({
  highlightText,
  children,
  style,
  highlightStyle,
}) => {
  return (
    <Text style={style}>
      {children
        .replace(new RegExp(highlightText, "i"), `~${highlightText}~`)
        .split("~")
        .map((str, i) => (
          <Text style={i % 2 == 0 ? undefined : highlightStyle}>{str}</Text>
        ))}
    </Text>
  );
};
