import React from "react";
import { View } from "react-native";
import { AuhtorItem } from "./AuhtorItem";

export const AuthorsContainer: React.FC = () => {
  return (
    <View>
      <AuhtorItem />
      <AuhtorItem />
      <AuhtorItem />
    </View>
  );
};
