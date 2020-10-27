import React from "react";
import { FlatList, StyleSheet } from "react-native";

import _ from "lodash";

import { PostItem } from "./PostItem";
import { IPost } from "../state";

interface IPostsContainerProps {
  posts: IPost[];
  searchValue?: string;
}

export const PostsContainer: React.FC<IPostsContainerProps> = ({
  posts,
  searchValue,
}) => {
  return (
    <FlatList
      data={posts}
      renderItem={item => <PostItem {...item.item} searchValue={searchValue} />}
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
