import React from "react";
import { StatusBar } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { PostsContainer, Header, RootContainer } from "../components";
import { theme } from "../styles";
import { IPost, RootStateType } from "../state";
import { getPostsByAuthorId } from "../utils";

export const PostsPage: React.FC = () => {
  const { posts } = useSelector((state: RootStateType) => state);
  const route = useRoute<RouteProp<{ Posts: { id: number } }, "Posts">>();

  const [matchPosts, setMatchPosts] = React.useState<IPost[]>([]);

  React.useEffect(() => {
    if (route?.params?.id) {
      setMatchPosts(getPostsByAuthorId(posts, route.params.id));
    }
  }, [route.params?.id]);

  return (
    <RootContainer>
      <StatusBar backgroundColor={theme.colors.greys[0]} />
      <Header />
      <PostsContainer posts={matchPosts} />
    </RootContainer>
  );
};
