import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { theme, globalStyles } from "../styles";

export const PostItem: React.FC<{ id: string }> = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.postTitle, globalStyles.textNormal]}>
        Post title
      </Text>
      <Text style={[globalStyles.textSmall]}>
        tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores
        neque fugiat blanditiis voluptate porro vel nihil
      </Text>
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
