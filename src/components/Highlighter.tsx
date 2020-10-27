import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface IHighlighterProps {
  children: string;
  highlightText?: string;
  style?: TextStyle | TextStyle[];
  highlightStyle?: TextStyle | TextStyle[];
}

export const Highlighter: React.FC<IHighlighterProps> = ({
  children,
  highlightText = "",
  style,
  highlightStyle,
}) => {
  return (
    <Text style={style}>
      {highlightText.length === 0
        ? children
        : children
            .replace(new RegExp(highlightText, "i"), `~${highlightText}~`)
            .split("~")
            .map((str, i) => (
              <Text style={i % 2 == 0 ? undefined : highlightStyle}>{str}</Text>
            ))}
    </Text>
  );
};
