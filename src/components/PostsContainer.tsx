import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import _ from "lodash";

import { PostItem } from "./PostItem";

const item = {
  title: "Post title",
  content:
    "        tempore vitae sequi sint nihil reprehenderit dolor beatae ea doloresneque fugiat blanditiis voluptate porro vel nihil",
};

const data = _.range(0, 10).map(index => ({
  ...item,
  id: index.toString(),
}));

export const PostsContainer: React.FC = () => {
  const route = useRoute<RouteProp<{ Posts: { id: string } }, "Posts">>();

  const [id, setId] = React.useState("");

  React.useEffect(() => {
    if (route?.params?.id) {
      setId(route.params.id);
    }
  }, [route.params?.id]);

  return (
    <FlatList
      data={data}
      renderItem={item => <PostItem id={item.item.id} />}
      keyExtractor={item => item.id}
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
