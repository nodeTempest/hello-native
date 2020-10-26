import React from "react";
import { Text } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

export const PostsContainer: React.FC = () => {
  const route = useRoute<RouteProp<{ Posts: { id: string } }, "Posts">>();

  console.log(route);

  const [id, setId] = React.useState("");

  React.useEffect(() => {
    setId(route.params.id);
  }, [route.params?.id]);

  return <Text>Posts id: {id}</Text>;
};
