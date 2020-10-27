import React from "react";
import { FlatList, StyleSheet } from "react-native";

import _ from "lodash";

import { PostItem } from "./PostItem";
import { IPost } from "../state";

interface IPostsContainerProps {
  posts: IPost[];
}

export const PostsContainer: React.FC<IPostsContainerProps> = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      renderItem={item => <PostItem {...item.item} />}
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
