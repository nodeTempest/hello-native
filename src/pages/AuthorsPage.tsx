import React from "react";
import { StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AuthorsContainer, Header, RootContainer } from "../components";
import { theme } from "../styles";

import { fetchAuthors, fetchPosts, RootStateType } from "../state";
import { calculatePostsForEachAuthor } from "../utils";

export const AuthorsPage: React.FC = () => {
  const dispatch = useDispatch();

  const { authors, posts } = useSelector((state: RootStateType) => state);

  const authorsWithNumberOfPosts = calculatePostsForEachAuthor(authors, posts);

  React.useEffect(() => {
    if (authors.length === 0) {
      dispatch(fetchAuthors());
    }

    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, []);

  return (
    <RootContainer>
      <StatusBar backgroundColor={theme.colors.greys[0]} />
      <Header />
      <AuthorsContainer auhtors={authorsWithNumberOfPosts} />
    </RootContainer>
  );
};
