import React from "react";
import { View, Text, StyleSheet } from "react-native";
import _ from "lodash";

import { Highlighter } from "./Highlighter";

import { theme, globalStyles } from "../styles";
import { IPost } from "../state";

type IPostItemProps = IPost & { searchValue?: string };

export const PostItem: React.FC<IPostItemProps> = ({
  title,
  body,
  searchValue = "",
}) => {
  return (
    <View style={styles.container}>
      <Highlighter
        highlightText={searchValue}
        style={[styles.postTitle, globalStyles.textNormal]}
        highlightStyle={globalStyles.highlight}
      >
        {_.capitalize(title)}
      </Highlighter>
      <Highlighter
        highlightText={searchValue}
        style={globalStyles.textSmall}
        highlightStyle={globalStyles.highlight}
      >
        {body}
      </Highlighter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: theme.colors.black,
    backgroundColor: theme.colors.white,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding: 12,
    marginBottom: 18,
  },
  postTitle: {
    marginBottom: 12,
  },
});
