import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { AuhtorItem } from "./AuhtorItem";

import _ from "lodash";

const item = {
  name: "James Smith",
  email: "johndoe@mail.com",
  posts: 5,
};

const data = _.range(0, 10).map(id => ({
  ...item,
  id: id.toString(),
}));

export const AuthorsContainer: React.FC = () => {
  return (
    <FlatList
      data={data}
      renderItem={item => <AuhtorItem id={item.item.id} />}
      keyExtractor={item => item.id}
      style={{ marginRight: -18, paddingRight: 18 }}
    />
  );
};
