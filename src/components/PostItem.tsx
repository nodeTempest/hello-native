import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { theme, globalStyles } from "../styles";

import { IPost } from "../state";
import { capitalize } from "../utils";

export const PostItem: React.FC<IPost> = ({ title, body }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.postTitle, globalStyles.textNormal]}>
        {capitalize(title)}
      </Text>
      <Text style={[globalStyles.textSmall]}>{body}</Text>
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
