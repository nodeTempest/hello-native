import React from "react";
import { FlatList } from "react-native";
import { AuhtorItem } from "./AuhtorItem";
import _ from "lodash";

import { IAuthor } from "../state";

const item = {
  name: "James Smith",
  email: "johndoe@mail.com",
  posts: 5,
};

const data = _.range(0, 10).map(id => ({
  ...item,
  id: id.toString(),
}));

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
      keyExtractor={item => item.id}
      style={{ marginRight: -18, paddingRight: 18 }}
    />
  );
};
