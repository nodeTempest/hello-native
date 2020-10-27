import React from "react";
import { StatusBar } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { PostsContainer, Header, RootContainer } from "../components";
import { theme } from "../styles";
import { IPost, RootStateType } from "../state";
import { getPostsByAuthorId, findPostsBySearch } from "../utils";

export const PostsPage: React.FC = () => {
  const { posts } = useSelector((state: RootStateType) => state);
  const route = useRoute<RouteProp<{ Posts: { id: number } }, "Posts">>();

  const [matchPosts, setMatchPosts] = React.useState<IPost[]>([]);

  const [searchInput, setSearchInput] = React.useState("");

  React.useEffect(() => {
    if (route?.params?.id) {
      const result = getPostsByAuthorId(posts, route.params.id);
      setMatchPosts(
        searchInput.length !== 0
          ? findPostsBySearch(result, searchInput)
          : result
      );
    }
  }, [route.params?.id, searchInput]);

  return (
    <RootContainer>
      <StatusBar backgroundColor={theme.colors.greys[0]} />
      <Header OnSearchInput={text => setSearchInput(text)} />
      <PostsContainer posts={matchPosts} />
    </RootContainer>
  );
};
