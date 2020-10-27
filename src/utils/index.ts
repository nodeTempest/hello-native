import { IAuthor, IPost } from "../state";

export const calculatePostsForOneAuthor = (
  AuthorId: string,
  posts: IPost[]
) => {
  return posts.filter(post => post.userId === AuthorId).length;
};

export const calculatePostsForEachAuthor = (
  authors: IAuthor[],
  posts: IPost[]
) => {
  return authors.map(author => {
    const numberOfPosts = calculatePostsForOneAuthor(author.id, posts);
    return {
      ...author,
      numberOfPosts,
    };
  });
};

export const getPostsForAuthor = (posts: IPost[], author: IAuthor) => {
  return posts.filter(post => post.userId === author.id);
};
