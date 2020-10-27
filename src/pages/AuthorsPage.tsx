import React from "react";
import { StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AuthorsContainer, Header, RootContainer } from "../components";
import { theme } from "../styles";

import { fetchAuthors, fetchPosts, RootStateType } from "../state";
import { calculatePostsForEachAuthor, findAuthorsBySearch } from "../utils";

export const AuthorsPage: React.FC = () => {
  const dispatch = useDispatch();

  const { authors, posts } = useSelector((state: RootStateType) => state);

  React.useEffect(() => {
    if (authors.length === 0) {
      dispatch(fetchAuthors());
    }

    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, []);

  const [searchInput, setSearchInput] = React.useState("");

  const authorsWithNumberOfPosts = calculatePostsForEachAuthor(
    searchInput.length !== 0
      ? findAuthorsBySearch(authors, searchInput)
      : authors,
    posts
  );

  return (
    <RootContainer>
      <StatusBar backgroundColor={theme.colors.greys[0]} />
      <Header OnSearchInput={text => setSearchInput(text)} title={"Authors"} />
      <AuthorsContainer auhtors={authorsWithNumberOfPosts} />
    </RootContainer>
  );
};
