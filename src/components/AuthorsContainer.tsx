import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { AuhtorItem } from "./AuhtorItem";
import _ from "lodash";

import { IAuthor } from "../state";

interface IAuthorsContainerProp {
  auhtors: IAuthor[];
}

export const AuthorsContainer: React.FC<IAuthorsContainerProp> = ({
  auhtors,
}) => {
  return (
    <FlatList
      data={auhtors}
      renderItem={item => <AuhtorItem {...item.item} />}
      keyExtractor={item => item.id.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: -18,
    paddingRight: 18,
  },
});
